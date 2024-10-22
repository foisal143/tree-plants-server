import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Product } from '../product/product.model';
import { TBooking } from './booking.interface';
import { Booking } from './booking.model';

const createBooking = async (payload: TBooking) => {
  const productInfo = payload.productInfo;

  for (const { productId, quantity } of productInfo) {
    const product = await Product.findById(productId);

    if (!product) {
      throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
    }
    const updatedQuantity = product.quantity - quantity;
    if (product.quantity === 0 || updatedQuantity < 0) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Product unavailable');
    } else {
      product.quantity = updatedQuantity;
    }
    product.save();
  }

  const result = await Booking.create(payload);
  return result;
};

const deleteBooking = async (id: string) => {
  const result = await Booking.findByIdAndDelete(id);
  return result;
};

const getBookingsByEmail = async (email: string) => {
  const result = await Booking.find({ email }).populate({
    path: 'productInfo.productId',
    model: 'Product',
  });
  return result;
};

const updateStatus = async (id: string, status: string) => {
  const result = await Booking.findByIdAndUpdate(id, { status });
  return result;
};

const getAllBookings = async () => {
  const result = await Booking.find().populate({
    path: 'productInfo.productId',
    model: 'Product',
  });
  return result;
};

export const bookingServices = {
  createBooking,
  deleteBooking,
  getBookingsByEmail,
  updateStatus,
  getAllBookings,
};
