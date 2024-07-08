import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    title: z.string(),
    price: z.number().nonnegative(),
    quantity: z.number().nonnegative(),
  }),
});

export const ProductValidation = {
  createProductValidationSchema,
};
