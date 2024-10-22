import catchAsinc from '../../utils/catchAshyinc';
import { paymentServices } from './payment.services';

const createPayment = catchAsinc(async (req, res) => {
  const { price } = req.body;
  const amount = parseFloat(price);
  const data = await paymentServices.createPayment(amount);
  res.send({
    success: true,
    message: 'Payment secret key genarated successfull',
    data,
  });
});

export const paymentControlar = { createPayment };
