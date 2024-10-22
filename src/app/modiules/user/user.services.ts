import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TUser } from './user.interface';
import User from './user.model';

const createUser = async (payload: TUser) => {
  const result = await User.create(payload);
  return result;
};

const getAllUser = async () => {
  const result = await User.find({ isDeleted: false });
  return result;
};

const getSingleUserByEmail = async (email: string) => {
  const result = await User.findOne({ email }).select({ password: 0 });
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found');
  }
  return result;
};

const updateUser = async (id: string, payload: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, payload);
  return result;
};

const deleteUser = async (id: string) => {
  const result = await User.findByIdAndUpdate(id, { isDeleted: true });
  return result;
};

export const userServices = {
  createUser,
  getAllUser,
  getSingleUserByEmail,
  updateUser,
  deleteUser,
};
