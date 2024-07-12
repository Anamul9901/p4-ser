/* eslint-disable @typescript-eslint/no-explicit-any */
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-06-20',
});

const createPaymentIntent = async (amount: number) => {
  amount = amount * 100;
  console.log(amount);
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

export const PaymentService = {
  createPaymentIntent,
};
