import mongoose, { Schema } from 'mongoose';
import { TCart } from './cart.interface';

const cartSchema = new mongoose.Schema<TCart>({
  productId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Product',
  },
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
});

export const Carts = mongoose.model<TCart>('Cart', cartSchema);
