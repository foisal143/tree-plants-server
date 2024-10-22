import { model, Schema } from 'mongoose';
import { TCart } from './cart.interface';

const cartSchema = new Schema<TCart>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    productId: { type: Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt fields

// Create and export the Cart model
export const Cart = model<TCart>('Cart', cartSchema);
