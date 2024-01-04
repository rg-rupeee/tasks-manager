import { NextFunction, Request, Response } from 'express';

import catchAsync from '@middlewares/catchAsync.middleware';
import AuthService from './auth.service';
import { OK } from '@utils/responses';

class AuthController {
  private service = new AuthService();

  public signup = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (req: Request, res: Response, _next: NextFunction) => {
      const { name, email, password } = req.body;

      const data = await this.service.signup({ name, email, password });

      return OK(res)(data);
    },
  );

  public login = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_req: Request, res: Response, _next: NextFunction) => {
      const data = await this.service.login();

      return OK(res)(data);
    },
  );
}

export default AuthController;
