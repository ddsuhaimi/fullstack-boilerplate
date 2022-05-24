import { Role } from '@/orm/types/user.types';
import ApiError from '@/utils/response/customError/CustomError';
import { Request, Response, NextFunction } from 'express';

export const checkRole = (roles: Role[], isSelfAllowed = false) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const { id, role } = req.user;
    const { id: requestId } = req.params;

    let errorSelfAllowed: string | null = null;
    if (isSelfAllowed) {
      if (id === requestId) {
        return next();
      }
      errorSelfAllowed = 'Self allowed action.';
    }

    if (roles.indexOf(role) === -1) {
      const errors = [
        'Unauthorized - Insufficient user rights',
        `Current role: ${role}. Required role: ${roles.toString()}`,
      ];
      if (errorSelfAllowed) {
        errors.push(errorSelfAllowed);
      }
      const customError = new ApiError(403, 'Unauthorized', 'Unauthorized - Insufficient user rights', errors);
      return next(customError);
    }
    return next();
  };
};
