import express from 'express';
import { paymentControlar } from './payment.controlar';
const paymentRouter = express.Router();

paymentRouter.post('/', paymentControlar.createPayment);

export default paymentRouter;
