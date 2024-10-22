import { z } from 'zod';

const loginValidation = z.object({
  body: z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string({ message: 'Invalid email address' }),
  }),
});

export const authValidations = { loginValidation };
