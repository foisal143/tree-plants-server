import { config } from '../../config';

const stripe = require('stripe')(config.stripe_key);

const createPayment = async (price: number) => {
  const amount = price * 100;
  if (amount > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
      payment_method_types: ['card'],
    });
    return { clientSecret: paymentIntent.client_secret };
  }
};

export const paymentServices = { createPayment };
