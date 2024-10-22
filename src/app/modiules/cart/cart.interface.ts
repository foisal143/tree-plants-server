import { Types } from 'mongoose';

export type TCart = {
  title: string;
  price: number;
  category: string;
  stock: number;
  productId: Types.ObjectId;
  quantity: number;
  email: string;
  isDeleted: boolean;
  image: string;
};
