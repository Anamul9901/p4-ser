import express from 'express';
import validateRequest from '../../middlwares/validateRequest';
import { UserValidation } from './user.validation';
import { UserControllers } from './user.controller';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(UserValidation.signInValidationSchema),
  UserControllers.signUpUser
);

router.post(
  '/login',
  validateRequest(UserValidation.loginValidationSchema),
  UserControllers.loginUser
);

export const UserRoutes = router;
