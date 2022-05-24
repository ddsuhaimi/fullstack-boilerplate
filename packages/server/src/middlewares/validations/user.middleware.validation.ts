import { User } from '@/orm/entity/user.entity';
import ApiError from '@/utils/response/customError/CustomError';
import { ErrorValidation } from '@/utils/response/customError/types';
import { Request, Response, NextFunction } from 'express';
import * as userDao from '@/daos/user.dao'



export const validatorEditUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const errorsValidation: ErrorValidation[] = [];

  const user = await userDao.findOne({id: id});
  if (req.user.id ! === id) {
    errorsValidation.push({ id: `You dont have permission to change user with id ${id}` });
  }

  if (!user) {
    const customError = new ApiError(400, 'Validation', 'Edit user validation error', null, null, errorsValidation);
    return next(customError);
  }

    if (errorsValidation.length !== 0) {
    const customError = new ApiError(400, 'Validation', 'Edit user validation error', null, null, errorsValidation);
    return next(customError);
  }
  return next();
};
