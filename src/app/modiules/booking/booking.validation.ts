import { z } from 'zod';
const prodInfoSchema = z.object({
  productId: z.string({ message: 'Invalid ObjectId' }), // Validate as MongoDB ObjectId
  quantity: z.number().min(1, { message: 'Quantity must be at least 1' }), // Quantity should be at least 1
});

const createBooking = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }), // Name cannot be empty
    country: z.string().min(1, { message: 'Country is required' }), // Country cannot be empty
    address: z.string().min(1, { message: 'Address is required' }), // Address cannot be empty
    phone: z.string().min(1, { message: 'Phone number is required' }), // Phone cannot be empty
    email: z.string().email({ message: 'Invalid email format' }), // Must be a valid email
    orderNotes: z.string().optional(), // Order notes are optional
    productInfo: z
      .array(prodInfoSchema)
      .min(1, { message: 'At least one product is required' }), // Must have at least one product
    status: z.string(),
    price: z.number(),
  }),
});

const updateStatusValidation = z.object({
  body: z.object({
    status: z.string(),
  }),
});

export const bookingValidation = { createBooking, updateStatusValidation };
