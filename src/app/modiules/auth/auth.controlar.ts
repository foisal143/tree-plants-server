import catchAsinc from '../../utils/catchAshyinc';
import { authServices } from './auth.services';

const login = catchAsinc(async (req, res) => {
  const data = await authServices.login(req.body);
  res.send({
    success: true,
    message: 'User login successfull',
    data,
  });
});

export const authControlar = { login };
