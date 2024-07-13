import { Router } from 'express';
import { PaymentController } from './pay.controller';

const router = Router();

router.post('/create-payment-intent', PaymentController.createPaymentIntent);

router.post('/', PaymentController.createPaymentController);

router.get('/', PaymentController.getPaymentController);

export const PaymentRouter = router;
