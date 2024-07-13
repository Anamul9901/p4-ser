/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { PaymentService } from './pay.service';
import { Payment } from './pay.interface';

const createPaymentIntent = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await PaymentService.createPaymentIntent(amount);
    res.status(200).json(paymentIntent);
  } catch (error) {
    res.status(500).json({ error: (error as any).message });
  }
};

export const createPaymentController = async (req: Request, res: Response) => {
  try {
    const paymentData: Payment = req.body;
    const payment = await PaymentService.createPayment(paymentData);
    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getPaymentController = async (req: Request, res: Response) => {
  try {
    const payment = await PaymentService.getPaymentById();
    if (payment as any) {
      res.status(200).json(payment);
    } else {
      res.status(404).json({ message: 'Payment not found' });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const PaymentController = {
  createPaymentIntent,
  createPaymentController,
  getPaymentController,
};
