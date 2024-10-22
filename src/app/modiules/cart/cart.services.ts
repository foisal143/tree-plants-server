import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TCart } from './cart.interface';
import { Cart } from './cart.model';
import { Product } from '../product/product.model';

const createCart = async (payload: TCart) => {
  const isProductExist = await Product.findById(payload.productId);
  if (!isProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
  }

  const isAlreadyExist = await Cart.findOne({ productId: payload.productId });
  if (isAlreadyExist) {
    const result = await Cart.findByIdAndUpdate(isAlreadyExist._id, {
      quantity: isAlreadyExist.quantity + 1,
    });
    return result;
  } else {
    const result = await Cart.create(payload);
    return result;
  }
};

const getCartsByEmail = async (email: string) => {
  const result = await Cart.find({ email });
  return result;
};

const deleteCart = async (id: string) => {
  const isProductExist = await Cart.findById(id);
  if (!isProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Cart product not found');
  }

  const result = await Cart.findByIdAndDelete(id);
  return result;
};

const deleteAllCartProd = async (email: string) => {
  const result = await Cart.deleteMany({ email });
  return result;
};

const updateQuantity = async (id: string, payload: number) => {
  const isProductExist = await Cart.findById(id);
  if (!isProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Cart product not found');
  }

  const result = await Cart.findByIdAndUpdate(id, { quantity: payload });
  return result;
};

export const cartServices = {
  createCart,
  getCartsByEmail,
  deleteCart,
  updateQuantity,
  deleteAllCartProd,
};
