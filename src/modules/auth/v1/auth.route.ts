import { Router } from 'express';

import validationMiddleware from '@middlewares/validation.middleware';
import authController from './auth.controller';
import { signupDTO, loginDTO } from './auth.schema';

const router = Router();
const controller = new authController();

router.post(
  '/signup',
  validationMiddleware(signupDTO, 'body'),
  controller.signup,
);

router.post('/login', validationMiddleware(loginDTO, 'body'), controller.login);

export default router;
