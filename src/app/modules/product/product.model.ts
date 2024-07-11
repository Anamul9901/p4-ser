import mongoose from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new mongoose.Schema<TProduct>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
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
  
  category: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
  },
});

export const Product = mongoose.model<TProduct>('Product', productSchema);
