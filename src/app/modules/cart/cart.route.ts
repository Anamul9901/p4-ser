import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { CartValidation } from './cart.validation';
import { CartCollection } from './cart.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(CartValidation.createCartValidationSchema),
  CartCollection.createCart
);

router.get('/', CartCollection.getAllCarts);

router.get('/:id', CartCollection.getSingleCart);

router.delete('/:id', CartCollection.deleteProduct);

export const CartRoutes = router;
