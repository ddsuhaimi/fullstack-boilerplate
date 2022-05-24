import { Request, Response, NextFunction } from 'express';
import validator from 'validator';

// import { ConstsUser } from '@/consts/users.consts';
import ApiError  from '@/utils/response/customError/CustomError';
import { ErrorValidation } from '@/utils/response/customError/types';

export const validatorChangePassword = (req: Request, res: Response, next: NextFunction) => {
  let { password, passwordNew, passwordConfirm } = req.body;
  const errorsValidation: ErrorValidation[] = [];

  password = !password ? '' : password;
  passwordNew = !passwordNew ? '' : passwordNew;
  passwordConfirm = !passwordConfirm ? '' : passwordConfirm;

  if (validator.isEmpty(password)) {
    errorsValidation.push({ password: 'Password is required' });
  }

  if (validator.isEmpty(passwordNew)) {
    errorsValidation.push({ passwordNew: 'New password is required' });
  }

  if (validator.isEmpty(passwordConfirm)) {
    errorsValidation.push({ passwordConfirm: 'Password confirm is required' });
  }

  if (!validator.isLength(passwordNew, { min: 6 })) {
    errorsValidation.push({
      passwordNew: `Password must be at least 6 characters`,
    });
  }

  if (!validator.equals(passwordNew, passwordConfirm)) {
    errorsValidation.push({ passwordConfirm: 'Passwords must match' });
  }

  if (errorsValidation.length !== 0) {
    const customError = new ApiError(
      400,
      'Validation',
      'Change password validation error',
      null,
      null,
      errorsValidation,
    );
    return next(customError);
  }
  return next();
};

export const validatorLogin = (req: Request, res: Response, next: NextFunction) => {
  let { email, password } = req.body;
  const errorsValidation: ErrorValidation[] = [];

  email = !email ? '' : email;
  password = !password ? '' : password;

  if (!validator.isEmail(email)) {
    errorsValidation.push({ email: 'Email is invalid' });
  }

  if (validator.isEmpty(email)) {
    errorsValidation.push({ email: 'Email field is required' });
  }

  if (validator.isEmpty(password)) {
    errorsValidation.push({ password: 'Password field is required' });
  }

  if (errorsValidation.length !== 0) {
    const customError = new ApiError(400, 'Validation', 'Login validation error', null, null, errorsValidation);
    return next(customError);
  }
  return next();
};

export const validatorRegister = (req: Request, res: Response, next: NextFunction) => {
  let { email, password, passwordConfirm } = req.body;
  const errorsValidation: ErrorValidation[] = [];

  email = !email ? '' : email;
  password = !password ? '' : password;
  passwordConfirm = !passwordConfirm ? '' : passwordConfirm;

  if (!validator.isEmail(email)) {
    errorsValidation.push({ email: 'Email is invalid' });
  }

  if (validator.isEmpty(email)) {
    errorsValidation.push({ email: 'Email is required' });
  }

  if (validator.isEmpty(password)) {
    errorsValidation.push({ password: 'Password is required' });
  }

  if (!validator.isLength(password, { min: 6 })) {
    errorsValidation.push({
      password: `Password must be at least 6 characters`,
    });
  }

  if (validator.isEmpty(passwordConfirm)) {
    errorsValidation.push({ passwordConfirm: 'Confirm password is required' });
  }

  if (!validator.equals(password, passwordConfirm)) {
    errorsValidation.push({ passwordConfirm: 'Passwords must match' });
  }

  if (errorsValidation.length !== 0) {
    const customError = new ApiError(400, 'Validation', 'Register validation error', null, null, errorsValidation);
    return next(customError);
  }
  return next();
};
