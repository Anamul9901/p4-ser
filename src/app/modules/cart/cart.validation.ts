import { z } from 'zod';

const createCartValidationSchema = z.object({
  body: z.object({
    productInfo: z.string(),
    userEmail: z.string(),
  }),
});


export const CartValidation = {
    createCartValidationSchema
}