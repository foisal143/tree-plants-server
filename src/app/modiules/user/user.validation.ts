import { z } from 'zod';

const createUserValidation = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string({ message: 'Invalid email address' }),
    role: z.string().min(1, { message: 'Role is required' }),
    status: z.string().min(1, { message: 'Status is required' }),
    isDeleted: z.boolean(),
    image: z.string(),
    address: z.string(),
  }),
});
const updateUserSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }).optional(),
    email: z.string().email({ message: 'Invalid email address' }).optional(),
    password: z.string().optional(),
    role: z.string().min(1, { message: 'Role is required' }).optional(),
    status: z.string().min(1, { message: 'Status is required' }).optional(),
    isDeleted: z.boolean().optional(),
    image: z.string().optional(),
    address: z.string().optional(),
  }),
});

export const userValidation = { createUserValidation, updateUserSchema };
