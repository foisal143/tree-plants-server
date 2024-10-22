import { Types } from 'mongoose';
export type TProdInfo = {
  productId: Types.ObjectId;
  quantity: number;
};
export type TBooking = {
  name: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  orderNotes: string;
  productInfo: TProdInfo[];
  status: string;
  price: number;
};
