import catchAsinc from '../../utils/catchAshyinc';
import { cartServices } from './cart.services';

const createCart = catchAsinc(async (req, res) => {
  const data = await cartServices.createCart(req.body);
  res.send({
    success: true,
    message: 'Product added  successfull',
    data,
  });
});
const getCartsByEmail = catchAsinc(async (req, res) => {
  const data = await cartServices.getCartsByEmail(req.params.email);
  res.send({
    success: true,
    message: 'Cart product are retrived successfull',
    data,
  });
});
const deleteCart = catchAsinc(async (req, res) => {
  const data = await cartServices.deleteCart(req.params.id);
  res.send({
    success: true,
    message: 'cart product is deleted  successfull',
    data,
  });
});
const deleteAllCartProd = catchAsinc(async (req, res) => {
  const email = req.params.email;
  const data = await cartServices.deleteAllCartProd(email);
  res.send({
    success: true,
    message: 'cart product are deleted  successfull',
    data,
  });
});
const updateQuantity = catchAsinc(async (req, res) => {
  const { quantity } = req.body;
  const data = await cartServices.updateQuantity(req.params.id, quantity);
  res.send({
    success: true,
    message: 'Quantity updated  successfull',
    data,
  });
});

export const cartControlar = {
  createCart,
  getCartsByEmail,
  deleteCart,
  updateQuantity,
  deleteAllCartProd,
};
