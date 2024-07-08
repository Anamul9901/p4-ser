import mongoose, { Schema } from 'mongoose';
import { TCart } from './cart.interface';

const cartSchema = new mongoose.Schema<TCart>({
  productInfo: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  userEmail: {
    type: String,
    required: true,
  },
});

export const Carts = mongoose.model<TCart>('Cart', cartSchema);
