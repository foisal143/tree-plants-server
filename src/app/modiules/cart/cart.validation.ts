import { z } from 'zod';

const createCartValidation = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    price: z.number().positive({ message: 'Price must be a positive number' }),
    quantity: z
      .number()
      .int()
      .nonnegative({ message: 'Quantity must be a non-negative integer' }),
    stock: z
      .number()
      .int()
      .nonnegative({ message: 'Stock must be a non-negative integer' }),
    category: z.string().min(1, { message: 'Category is required' }),
    image: z.string({ message: 'Category is required' }),
    email: z.string().email({ message: 'Email must be a valid email address' }),
    isDeleted: z.boolean().default(false),
    productId: z.string(),
  }),
});

export const cartValidation = { createCartValidation };
