import { z } from 'zod';

const createCartValidationSchema = z.object({
  body: z.object({
    productId: z.string(),
    userId: z.string(),
  }),
});


export const CartValidation = {
    createCartValidationSchema
}