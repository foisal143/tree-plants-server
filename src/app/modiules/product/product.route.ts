import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { productValidations } from './product.validation';
import { productControlar } from './product.controlar';

const productRouter = express.Router();

productRouter.post(
  '/',
  validateRequest(productValidations.createProductValidation),
  productControlar.createProdcuct
);

productRouter.get('/', productControlar.getAllProducts);
productRouter.get('/:id', productControlar.getSingleProduct);
productRouter.delete('/:id', productControlar.deleteProduct);
productRouter.patch(
  '/:id',
  validateRequest(productValidations.updateProductValidation),
  productControlar.updateProduct
);
export default productRouter;
