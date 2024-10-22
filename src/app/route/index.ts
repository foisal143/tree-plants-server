import express from 'express';
import userRouter from '../modiules/user/user.routes';
import productRouter from '../modiules/product/product.route';
import cartRouter from '../modiules/cart/cart.route';
import bookingRouter from '../modiules/booking/booking.route';
import paymentRouter from '../modiules/payment/payment.route';
import authRouter from '../modiules/auth/auth.route';

const router = express.Router();

const routes = [
  {
    path: '/users',
    router: userRouter,
  },
  {
    path: '/products',
    router: productRouter,
  },
  {
    path: '/carts',
    router: cartRouter,
  },
  {
    path: '/bookings',
    router: bookingRouter,
  },
  {
    path: '/payment',
    router: paymentRouter,
  },
  {
    path: '/auth',
    router: authRouter,
  },
];

routes.forEach(route => {
  router.use(route.path, route.router);
});

export default router;
