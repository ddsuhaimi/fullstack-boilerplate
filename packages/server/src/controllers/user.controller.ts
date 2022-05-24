import { User } from '@/orm/entity/user.entity';
import ApiError from '@/utils/response/customError/CustomError';
import { Request, Response, NextFunction } from 'express';
import * as userDao from '@/daos/user.dao'

export const getOne = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  if (id !== req.user.id) {
    const customError = new ApiError(403, 'General', `Access denied`);
    return next(customError);
  }

  try {
    const user = await userDao.findOne(
      { id: id },
      {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true,
      }
    );

    if (!user) {
      const customError = new ApiError(404, 'General', `User with id:${id} not found.`, ['User not found.']);
      return next(customError);
    }
    res.customSuccess(200, 'User found', user.toJSON());

  } catch (err) {
    const customError = new ApiError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await userDao.find(undefined, {
        id: true,
        email: true,
        createdAt: true,
        updatedAt: true
    });
    res.customSuccess(200, 'List of users.', users);

  } catch (err) {
    const customError = new ApiError(400, 'Raw', `Can't retrieve list of users.`, null, err);
    return next(customError);
  }
};

export const editOne = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const { name } = req.body;

//   const userRepository = getRepository(User);
  try {
    const user = await userDao.findOne({ id: id });

    if (!user) {
      const customError = new ApiError(404, 'General', `User with id:${id} not found.`, ['User not found.']);
      return next(customError);
    }

    // user.name = name;

    try {
      await userDao.save(user);
      res.customSuccess(200, 'User successfully saved.');

    } catch (err) {
      const customError = new ApiError(409, 'Raw', `User '${user.email}' can't be saved.`, null, err);
      return next(customError);
    }
  } catch (err) {
    const customError = new ApiError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};

export const deleteOne = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

//   const userRepository = getRepository(User);
  try {
    const user = await userDao.findOne({ id: id } );

    if (!user) {
      const customError = new ApiError(404, 'General', 'Not Found', [`User with id:${id} doesn't exists.`]);
      return next(customError);
    }
    userDao.remove(id);

    res.customSuccess(200, 'User successfully deleted.', { id: user.id, email: user.email });
    // res.json({})

  } catch (err) {
    const customError = new ApiError(400, 'Raw', 'Error', null, err);
    return next(customError);
  }
};
