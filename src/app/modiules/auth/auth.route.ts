import express from 'express';
import { authControlar } from './auth.controlar';
import validateRequest from '../../middlewares/validateRequest';
import { authValidations } from './auth.validation';
const authRouter = express.Router();
authRouter.post(
  '/login',
  validateRequest(authValidations.loginValidation),
  authControlar.login
);
export default authRouter;
