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
  }),
});

const updateProductValidationSchema = z.object({
  body: z
    .object({
      name: z.string().optional(),
      image: z.string().optional(),
      title: z.string().optional(),
      price: z.number().nonnegative().optional(),
      quantity: z.number().nonnegative().optional(),
      category: z.string().optional(),
    })
    .optional(),
});

export const ProductValidation = {
  createProductValidationSchema,
  updateProductValidationSchema
};
