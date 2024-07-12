/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (payload: TProduct) => {
  console.log(payload);
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

// const updateProductFromDB = async (id: string, payload: TProduct) => {
//   console.log('update data=>', payload);
//   const result = await Product.findByIdAndUpdate({ _id: id }, payload, {
//     new: true,
//     runValidators: true,
//   });

//   const { name, image, title, price, quantity, category }: any = result;
//   const finalResult = { name, image, title, price, quantity, category };

//   return finalResult;
// };
const updateProductFromDB = async (id: string, payload: TProduct) => {
  console.log('update data=>', payload);

  // Filter out null or empty string values
  const filteredPayload = Object.fromEntries(
    Object.entries(payload).filter(([key, value]) => value !== null && value !== "")
  );

  const result = await Product.findByIdAndUpdate({ _id: id }, filteredPayload, {
    new: true,
    runValidators: true,
  });

  if (!result) {
    throw new Error('Product not found or could not be updated');
  }

  const { name, image, title, price, quantity, category } = result;
  const finalResult = { name, image, title, price, quantity, category };

  return finalResult;
};

const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
  updateProductFromDB,
};
