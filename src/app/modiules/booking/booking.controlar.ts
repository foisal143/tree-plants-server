import catchAsinc from '../../utils/catchAshyinc';
import { bookingServices } from './booking.services';

const createBooking = catchAsinc(async (req, res) => {
  const data = await bookingServices.createBooking(req.body);
  res.send({
    success: true,
    message: 'Booking is created successfull',
    data,
  });
});
const getBookingsByEmail = catchAsinc(async (req, res) => {
  const data = await bookingServices.getBookingsByEmail(req.params.email);
  res.send({
    success: true,
    message: 'User are retrived successfull',
    data,
  });
});
const deleteBooking = catchAsinc(async (req, res) => {
  const data = await bookingServices.deleteBooking(req.params.id);
  res.send({
    success: true,
    message: 'Booking is deleted  successfull',
    data,
  });
});
const updateStatus = catchAsinc(async (req, res) => {
  const { status } = req.body;
  const data = await bookingServices.updateStatus(req.params.id, status);
  res.send({
    success: true,
    message: 'Booking status is updated  successfull',
    data,
  });
});
const getAllBookings = catchAsinc(async (req, res) => {
  const data = await bookingServices.getAllBookings();
  res.send({
    success: true,
    message: 'Bookings are retrived  successfull',
    data,
  });
});

export const bookingControlar = {
  createBooking,
  getBookingsByEmail,
  deleteBooking,
  updateStatus,
  getAllBookings,
};
