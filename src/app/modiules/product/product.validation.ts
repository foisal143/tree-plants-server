import { z } from 'zod';

const createProductValidation = z.object({
  body: z.object({
    category: z.string().min(1, { message: 'Category is required' }),
    title: z.string().min(1, { message: 'Title is required' }),
    price: z.number().positive({ message: 'Price must be a positive number' }),
    quantity: z
      .number()
      .int()
      .nonnegative({ message: 'Quantity must be a non-negative integer' }),
    description: z.string().min(1, { message: 'Description is required' }),
    rating: z
      .number()
      .min(0)
      .max(5, { message: 'Rating must be between 0 and 5' }),
    image: z.string().url({ message: 'Image must be a valid URL' }),
  }),
});

const updateProductValidation = z.object({
  body: z.object({
    category: z.string().min(1, { message: 'Category is required' }).optional(),
    title: z.string().min(1, { message: 'Title is required' }).optional(),
    price: z
      .number()
      .positive({ message: 'Price must be a positive number' })
      .optional(),
    quantity: z
      .number()
      .int()
      .nonnegative({ message: 'Quantity must be a non-negative integer' })
      .optional(),
    description: z
      .string()
      .min(1, { message: 'Description is required' })
      .optional(),
    rating: z
      .number()
      .min(0)
      .max(5, { message: 'Rating must be between 0 and 5' })
      .optional(),
    image: z.string().url({ message: 'Image must be a valid URL' }).optional(),
  }),
});

export const productValidations = {
  createProductValidation,
  updateProductValidation,
};
