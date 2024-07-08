import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TLoginUser, TUser } from './user.interface';
import { User } from './user.model';

const signUpUserIntoDB = async (payload: TUser) => {
  const result = await User.create(payload);
  const { _id, name, email, role } = result;
  const finalResult = { _id, name, email, role };
  return finalResult;
};

const loginUser = async (payload: TLoginUser) => {
    const isUserExists = await User.findOne({ email: payload?.email });
    if (!isUserExists) {
      throw new AppError(httpStatus.NOT_FOUND, 'Thsis user is not found !');
    }
    const {_id, email, password, role} = isUserExists;
    const userData = {_id, email, password, role};
    return userData;
};

export const UserServices = {
  signUpUserIntoDB,
  loginUser
};
