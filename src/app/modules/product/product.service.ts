import httpStatus from 'http-status';
import { User } from '../user/user.model';
import { TProduct } from './product.interface';
import { Product } from './product.model';
import AppError from '../../errors/AppError';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleFacilityFromDB = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  // const userData = await Product.findOne({ _id: id });
  // const onjectId = userData?.userId;
  // const stringId = onjectId?.toString();
  // if (userId !== stringId) {
  //   throw new AppError(httpStatus.UNAUTHORIZED, 'This is not your product!');
  // }
  const result = await Product.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleFacilityFromDB,
  deleteProductFromDB
};
