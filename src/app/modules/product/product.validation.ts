import { z } from 'zod';

const createProductValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    image: z.string(),
    title: z.string(),
    price: z.number().nonnegative(),
    quantity: z.number().nonnegative(),
    category: z.string(),
    user: z.string().optional(),
    isDeleted: z.boolean(),
  }),
});

export const ProductValidation = {
  createProductValidationSchema,
};
