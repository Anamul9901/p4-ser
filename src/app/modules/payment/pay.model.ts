import mongoose, { Schema } from 'mongoose';
import { Payment } from './pay.interface';

const paymentSchema: Schema = new Schema({
  email: { type: String, required: true },
  price: { type: Number, required: true },
  transactionId: { type: String, required: true },
  date: { type: Date, default: Date.now },
  cartId: { type: [String], required: true },
  status: { type: String, default: 'pending' },
});


export const PaymentModel = mongoose.model<Payment>(
  'Payment',
  paymentSchema
);
