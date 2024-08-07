import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { buyUserValidation } from './buy.validation';
import { BuyUserInfoCollection } from './buy.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(buyUserValidation.buyUserInfoValidationSchema),
  BuyUserInfoCollection.createBuInfo
);

router.get('/', BuyUserInfoCollection.getAllBuyInfo);

export const BuyInfoRouter = router;
