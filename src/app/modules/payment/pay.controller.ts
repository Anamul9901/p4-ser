/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { PaymentService } from './pay.service';

const createPaymentIntent = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await PaymentService.createPaymentIntent(
      amount
    );
    res.status(200).json(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: (error as any).message });
  }
};

export const PaymentController = {
  createPaymentIntent,
};
