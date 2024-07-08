import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { ProductValidation } from './product.validation';
import { ProductControllers } from './product.controller';

const router = express.Router();

router.post(
  '/',
  validateRequest(ProductValidation.createProductValidationSchema),
  ProductControllers.createProduct
);

router.get('/', ProductControllers.getAllProduct);

router.get('/:id', ProductControllers.getSingleProduct);

export const ProductRoutes = router;
