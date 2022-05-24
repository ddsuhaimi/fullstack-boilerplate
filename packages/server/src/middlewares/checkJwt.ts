import { Request, Response, NextFunction } from 'express';
import jwt, { TokenExpiredError } from 'jsonwebtoken';

import { JwtPayload } from '../types/JwtPayload';
import { createJwtToken } from '../utils/createJwtToken';
import  ApiError  from '@/utils/response/customError/CustomError';

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    const customError = new ApiError(400, 'General', 'Authorization header not provided');
    return next(customError);
  }

  const token = authHeader.split(' ')[1];
  let jwtPayload: { [key: string]: any };
  try {
    jwtPayload = jwt.verify(token, process.env.JWT_SECRET as string) as { [key: string]: any };
    ['iat', 'exp'].forEach((keyToRemove) => delete jwtPayload[keyToRemove]);
    console.log('jwtPayload', jwtPayload);
    // req.jwtPayload = jwtPayload as JwtPayload;
    req.user = jwtPayload as JwtPayload;
    next();
  } catch (err) {
    const customError = new ApiError(401, 'Raw', 'JWT error', null, err);
    return next(customError);
  }

  // try {
  //   // Refresh and send a new token on every request
  //   const newToken = createJwtToken(jwtPayload as JwtPayload);
  //   res.setHeader('token', `Bearer ${newToken}`);
  //   return next();
  // } catch (err) {
  //   const customError = new CustomError(400, 'Raw', "Token can't be created", null, err);
  //   return next(customError);
  // }
};
