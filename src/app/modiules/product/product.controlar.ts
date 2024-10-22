import catchAsinc from '../../utils/catchAshyinc';
import { productServices } from './product.services';

const createProdcuct = catchAsinc(async (req, res) => {
  const data = await productServices.createProduct(req.body);
  res.send({
    success: true,
    message: 'product is created successfull',
    data,
  });
});
const getAllProducts = catchAsinc(async (req, res) => {
  const data = await productServices.getAllProducts(req.query);
  res.send({
    success: true,
    message: 'Products are retrived successfull',
    data,
  });
});
const getSingleProduct = catchAsinc(async (req, res) => {
  const data = await productServices.getSingleProduct(req.params.id);
  res.send({
    success: true,
    message: 'Product is retrived  successfull',
    data,
  });
});
const updateProduct = catchAsinc(async (req, res) => {
  const data = await productServices.updateProduct(req.params.id, req.body);
  res.send({
    success: true,
    message: 'Product is updated  successfull',
    data,
  });
});
const deleteProduct = catchAsinc(async (req, res) => {
  const data = await productServices.deleteProduct(req.params.id);
  res.send({
    success: true,
    message: 'Product is deleted  successfull',
    data,
  });
});

export const productControlar = {
  createProdcuct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
