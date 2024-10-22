import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { cartValidation } from './cart.validation';
import { cartControlar } from './cart.controlar';

const cartRouter = express.Router();

cartRouter.post(
  '/',
  validateRequest(cartValidation.createCartValidation),
  cartControlar.createCart
);

cartRouter.get('/:email', cartControlar.getCartsByEmail);
cartRouter.delete('/:id', cartControlar.deleteCart);
cartRouter.delete('/all-products/:email', cartControlar.deleteAllCartProd);
cartRouter.patch('/:id', cartControlar.updateQuantity);
export default cartRouter;
