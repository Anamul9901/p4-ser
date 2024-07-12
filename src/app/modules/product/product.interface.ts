import { Types } from "mongoose";

export type TProduct = {
  name: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  category: string;
  user: Types.ObjectId;
};
