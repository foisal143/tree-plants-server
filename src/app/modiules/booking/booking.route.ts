import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { bookingValidation } from './booking.validation';
import { bookingControlar } from './booking.controlar';

const bookingRouter = express.Router();

bookingRouter.post(
  '/',
  validateRequest(bookingValidation.createBooking),
  bookingControlar.createBooking
);
bookingRouter.get('/', bookingControlar.getAllBookings);
bookingRouter.get('/:email', bookingControlar.getBookingsByEmail);
bookingRouter.delete('/:id', bookingControlar.deleteBooking);
bookingRouter.patch(
  '/:id',
  validateRequest(bookingValidation.updateStatusValidation),
  bookingControlar.updateStatus
);
export default bookingRouter;
