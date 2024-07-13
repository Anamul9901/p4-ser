/* eslint-disable @typescript-eslint/no-explicit-any */
import Stripe from 'stripe';
import { PaymentModel } from './pay.model';
import { Payment } from './pay.interface';
import { Carts } from '../cart/cart.model';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-06-20',
});

const createPaymentIntent = async (amount: number) => {
  console.log('amount', amount);
  amount = amount * 100;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    return paymentIntent.client_secret;
  } catch (error) {
    throw new Error((error as any).message);
  }
};

const createPayment = async (paymentData: Payment) => {
  const payment = await PaymentModel.create(paymentData);

  // delete each item from the cart
  // console.log(paymentData);
  const query = {_id: {
    $in:  payment.cartId.map(id=>new Object(id))
  }}
  const deleteCart = await Carts.deleteMany(query);
  return ({payment, deleteCart})
};

const getPaymentById = async () => {
  const result = await PaymentModel.find();
  return result
};

export const PaymentService = {
  createPaymentIntent,
  createPayment,
  getPaymentById,
};
