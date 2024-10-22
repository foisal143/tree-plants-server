import { model, Schema } from 'mongoose';
import { TBooking } from './booking.interface';

const ProdInfoSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'Product', // Assuming there's a Product model
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

// Define the Mongoose schema for Booking
const BookingSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    orderNotes: {
      type: String,
      default: '',
    },
    productInfo: {
      type: [ProdInfoSchema], // Array of product info
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'pending',
    },
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically create `createdAt` and `updatedAt`
  }
);
export const Booking = model<TBooking>('Booking', BookingSchema);
