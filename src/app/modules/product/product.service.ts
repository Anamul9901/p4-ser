/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProductFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProductFromDB = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};

const updateProductFromDB = async (id: string, payload: TProduct) => {
  const result = await Product.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });

  const { name, image, title, price, quantity, category }: any = result;
  const finalResult = { name, image, title, price, quantity, category };

  return finalResult;
};

const deleteProductFromDB = async (id: string) => {
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
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductFromDB
};
