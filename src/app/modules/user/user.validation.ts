import { z } from 'zod';

const signInValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z
      .string({
        invalid_type_error: 'Password must be a string',
      })
      .max(20, { message: 'Password can not be more than 20 characters' }),
  }),
});

const loginValidationSchema = z.object({
  body: z.object({
    email: z.string({ required_error: 'Email is required!' }),
    password: z.string({ required_error: 'Password is required!' }),
  }),
});

export const UserValidation = {
  signInValidationSchema,
  loginValidationSchema,
};
