import { z } from 'zod';

const buyUserInfoValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    location: z.string(),
    number: z.string(),
    paymentType: z.string(),
    totalPrice: z.number(),
    transactionId: z.string(),
  }),
});

export const buyUserValidation = {
  buyUserInfoValidationSchema,
};
