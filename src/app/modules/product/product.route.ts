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

router.put('/:id', ProductControllers.updateProduct);

router.patch('/quantity', ProductControllers.updateMultipleProductQuantity);

router.delete(
  '/:id',
  validateRequest(ProductValidation.updateProductValidationSchema),
  ProductControllers.deleteProduct
);

export const ProductRoutes = router;
