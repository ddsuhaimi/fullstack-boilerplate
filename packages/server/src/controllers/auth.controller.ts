import { Request, Response, NextFunction } from 'express';
import { AppDataSource } from '@/orm/data-source';
import { UserToken } from '@/orm/entity/userToken.entity';
import * as userDao from '@/daos/user.dao'
import * as userTokenDao from '@/daos/userToken.dao'


// import { Role } from '../../typeorm/entities/users/types';
import { User } from '../orm/entity/user.entity';
// import { User } from '../typeorm/entity/User'
// import { UserToken } from '../../typeorm/entities/userTokens/usertoken.entities';
import { JwtPayload } from '@/types/JwtPayload';
import { createJwtRefreshToken, createJwtToken } from '@/utils/createJwtToken';
import ApiError from '@/utils/response/customError/CustomError';
import { Role } from '@/orm/types/user.types';


const {getRepository} = AppDataSource
export const register = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  // const userRepository = getRepository(User);
  try {
    const user = await userDao.findOne( { email } );

    if (user) {
      const customError = new ApiError(400, 'General', 'User already exists', [
        `Email '${user.email}' already exists`,
      ]);
      return next(customError);
    }

    try {
      const newUser = new User();
      newUser.email = email;
      newUser.password = password;
      newUser.hashPassword();
      console.log(user)
      await userDao.save(newUser);

      res.customSuccess(200, 'User successfully created.');
      // res.json({})
    } catch (err) {
      const customError = new ApiError(400, 'Raw', `User '${email}' can't be created`, null, err);
      return next(customError);
    }
  } catch (err) {
    const customError = new ApiError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};

export const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  const { password, passwordNew } = req.body;
  const { id } = req.user;
  try {
    const user = await userDao.findOne({ id } );

    if (!user) {
      const customError = new ApiError(404, 'General', 'Not Found', [`User ${id} not found.`]);
      return next(customError);
    }

    if (!user.checkIfPasswordMatch(password)) {
      const customError = new ApiError(400, 'General', 'Not Found', ['Incorrect password']);
      return next(customError);
    }

    user.password = passwordNew;
    user.hashPassword();
    await userDao.save(user);

    res.customSuccess(200, 'Password successfully changed.');

  } catch (err) {
    const customError = new ApiError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    const user = await userDao.findOne({email});
    if (!user) {
      const customError = new ApiError(404, 'General', 'Not Found', ['Incorrect email or password']);
      return next(customError);
    }

    if (!user.checkIfPasswordMatch(password)) {
      const customError = new ApiError(404, 'General', 'Not Found', ['Incorrect email or password']);
      return next(customError);
    }

    const jwtPayload: JwtPayload = {
      id: user.id,
      email: user.email,
      role: user.role as Role,
      created_at: user.createdAt,
    };

    try {
      const { token: accessToken, expiresIn: accessTokenExpiration } = createJwtToken(jwtPayload);
      const { token: refreshToken, expiresIn: refreshTokenExpiration } = createJwtRefreshToken(jwtPayload);

      const {password, ...rest} = user.toJSON()


      const data = {
        ...rest,
        accessToken: `Bearer ${accessToken}`,
        expiresIn: accessTokenExpiration,
        refreshToken: refreshToken,
      };
      const oldUserToken = await userTokenDao.findOne({ userId: user.id  });
      if (oldUserToken) {
        // have signed in before
        oldUserToken.refreshToken = refreshToken;
        await userTokenDao.save(oldUserToken);
      } else {
        // first time user sign in
        const newUserToken = new UserToken();
        newUserToken.user = user;
        newUserToken.refreshToken = refreshToken;
        await userTokenDao.save(newUserToken);
      }
      res.customSuccess(200, 'Token successfully created.', data);

    } catch (err) {
      const customError = new ApiError(400, 'Raw', "Token can't be created", null, err);
      return next(customError);
    }
  } catch (err) {
    const customError = new ApiError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};

export const getUserBasedOnToken = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.user;

  try {
    const user = await userDao.findOne( { id } );

    if (!user) {
      const customError = new ApiError(404, 'General', 'Not Found', [`User ${id} not found.`]);
      return next(customError);
    }

    res.customSuccess(200, 'Password successfully changed.', user);

  } catch (err) {
    const customError = new ApiError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};

export const refreshAccessToken = async (req: Request, res: Response, next: NextFunction) => {
  const { refreshToken } = req.body;

  try {
    const userToken = await userTokenDao.findOne({ refreshToken: refreshToken });
    if (!userToken) {
      const customError = new ApiError(404, 'General', 'Not Found', [`User Refresh Token not found.`]);
      return next(customError);
    }
    console.log("here", userToken)

    const user = await userDao.findOne({ id: userToken.userId });

    if (!user) {
      const customError = new ApiError(404, 'General', 'Not Found', [`User not found.`]);
      return next(customError);
    }

    const jwtPayload: JwtPayload = {
      id: user.id,
      email: user.email,
      role: user.role as Role,
      created_at: user.createdAt,
    };
    const { token: newAccessToken, expiresIn: accessTokenExpiration } = createJwtToken(jwtPayload);
    const { token: newRefreshToken, expiresIn: refreshTokenExpiration } = createJwtRefreshToken(jwtPayload);
    userToken.refreshToken = newRefreshToken;
    await userTokenDao.save(userToken);

    const data = {
      accessToken: `Bearer ${newAccessToken}`,
      expiresIn: accessTokenExpiration,
      refreshToken: newRefreshToken,
    };

    res.customSuccess(200, 'Update access and refresh token.', data);

  } catch (err) {
    const customError = new ApiError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
