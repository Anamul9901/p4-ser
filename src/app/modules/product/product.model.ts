import mongoose, { Schema } from 'mongoose';
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
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  }
});

export const Product = mongoose.model<TProduct>('Product', productSchema);
