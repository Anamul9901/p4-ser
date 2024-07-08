import mongoose from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new mongoose.Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const Product = mongoose.model<TProduct>('Product', productSchema);
