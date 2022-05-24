import jwt from 'jsonwebtoken';

import { JwtPayload } from '../types/JwtPayload';

interface JwtPayloadToken {
  token: string;
  expiresIn: number;
}

export const createJwtToken = (payload: JwtPayload): JwtPayloadToken => {
  if (!process.env.JWT_EXPIRATION) {
    return {
      token: "",
      expiresIn: 0
    }
  }
  const expiresIn = parseInt(process.env.JWT_EXPIRATION);
  return {
    token: jwt.sign(payload, process.env.JWT_SECRET!, {
      expiresIn: expiresIn,
    }),
    expiresIn: expiresIn,
  };
};
export const createJwtRefreshToken = (payload: JwtPayload): JwtPayloadToken => {
  if (!process.env.JWT_REFRESH_EXPIRATION) return {
    token: "",
    expiresIn: 0
  }
  const expiresIn = parseInt(process.env.JWT_REFRESH_EXPIRATION);
  return {
    token: jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
      expiresIn: expiresIn,
    }),
    expiresIn: expiresIn,
  };
};
