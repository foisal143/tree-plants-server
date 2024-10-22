import httpStatus from 'http-status';
import QueryBuilder from '../../builder/queryBuilder';
import AppError from '../../errors/AppError';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload);
  return result;
};

const getAllProducts = async (query: Record<string, unknown>) => {
  const productQueryBuilder = new QueryBuilder(Product.find(), query)
    .search(['title', 'category'])
    .paginateQuery()
    .sort()
    .fieldsFilter()
    .filter();
  const result = await productQueryBuilder.modelQuery;

  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const deleteProduct = async (id: string) => {
  const isProductExist = await Product.findById(id);
  if (!isProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
  }

  const result = await Product.findByIdAndDelete(id);
  return result;
};

const updateProduct = async (id: string, payload: Partial<TProduct>) => {
  const isProductExist = await Product.findById(id);
  if (!isProductExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
  }

  console.log(payload);
  const result = await Product.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const productServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
