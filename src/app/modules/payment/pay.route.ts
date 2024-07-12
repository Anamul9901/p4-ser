import { Router } from 'express';
import { PaymentController } from './pay.controller';

const router = Router();

router.post('/create-payment-intent', PaymentController.createPaymentIntent);

export const PaymentRouter = router;
