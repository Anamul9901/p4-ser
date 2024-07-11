import { TCart } from './cart.interface';
import { Carts } from './cart.model';

const createCartIntoDB = async (payload: TCart) => {
  const result = await Carts.create(payload);
  return result;
};

const getAllCartFromDB = async () => {
  const result = await Carts.find().populate('productId');
  return result;
};

const getSingleCartFromDB = async (_id: string) => {
  const result = await Carts.findOne({ _id }).populate('productId');
  return result;
};

const deleteCartFromDB = async (id: string) => {
  const result = await Carts.findByIdAndDelete(id);
  return result;
};

export const CartService = {
  createCartIntoDB,
  getAllCartFromDB,
  getSingleCartFromDB,
  deleteCartFromDB
};
