import catchAsinc from '../../utils/catchAshyinc';

import { userServices } from './user.services';

const createUser = catchAsinc(async (req, res) => {
  const data = await userServices.createUser(req.body);
  res.send({
    success: true,
    message: 'User created successfull',
    data,
  });
});
const getAllUser = catchAsinc(async (req, res) => {
  const data = await userServices.getAllUser();
  res.send({
    success: true,
    message: 'User are retrived successfull',
    data,
  });
});
const getSingleUserByEmail = catchAsinc(async (req, res) => {
  const data = await userServices.getSingleUserByEmail(req.params.email);
  res.send({
    success: true,
    message: 'User is retrived  successfull',
    data,
  });
});
const updateUser = catchAsinc(async (req, res) => {
  const id = req.params.id;
  const data = await userServices.updateUser(id, req.body);
  res.send({
    success: true,
    message: 'User is updated  successfull',
    data,
  });
});
const deleteUser = catchAsinc(async (req, res) => {
  const id = req.params.id;
  const data = await userServices.deleteUser(id);
  res.send({
    success: true,
    message: 'User is Deleted  successfull',
    data,
  });
});

export const userControlar = {
  createUser,
  getAllUser,
  getSingleUserByEmail,
  updateUser,
  deleteUser,
};
