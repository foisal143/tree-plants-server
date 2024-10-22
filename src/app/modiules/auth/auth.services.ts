import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import User from '../user/user.model';
import jwt from 'jsonwebtoken';
import { config } from '../../config';
import { TLogin } from './auth.interface';
const login = async (payload: TLogin) => {
  const isUserExist = await User.findOne({ email: payload.email });
  if (!isUserExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
  }
  if (isUserExist.status === 'blocked') {
    throw new AppError(httpStatus.BAD_REQUEST, 'User already blocked');
  }
  if (isUserExist.isDeleted) {
    throw new AppError(httpStatus.BAD_REQUEST, 'User already deleted!');
  }
  if (isUserExist.password !== payload.password) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Password not match');
  }
  const jwtPayload = { email: isUserExist.email, role: isUserExist.role };
  const token = jwt.sign(jwtPayload, config.jwt_sc_key as string, {
    expiresIn: '12d',
  });
  return { token, user: jwtPayload };
};

export const authServices = { login };
