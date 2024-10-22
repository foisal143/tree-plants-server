import express from 'express';
import { userValidation } from './user.validation';
import { userControlar } from './user.controlar';
import validateRequest from '../../middlewares/validateRequest';

const userRouter = express.Router();

userRouter.post(
  '/',
  validateRequest(userValidation.createUserValidation),
  userControlar.createUser
);

userRouter.get('/', userControlar.getAllUser);
userRouter.get('/:email', userControlar.getSingleUserByEmail);
userRouter.patch(
  '/:id',
  validateRequest(userValidation.updateUserSchema),
  userControlar.updateUser
);
userRouter.delete('/:id', userControlar.deleteUser);
export default userRouter;
