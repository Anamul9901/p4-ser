import { model, Schema } from 'mongoose';
import { TBuyInfo } from './buy.interface';

const buyInfoSchema = new Schema<TBuyInfo>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  transactionId: {
    type: String,
    required: false,
  },
});

export const BuyInfo = model<TBuyInfo>('BuyInfo', buyInfoSchema);
