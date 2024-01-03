import { NextFunction, Request, Response } from 'express';

import catchAsync from '@middlewares/catchAsync.middleware';
import AuthService from './auth.service';

class AuthController {
  private service = new AuthService();

  public signup = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_req: Request, res: Response, _next: NextFunction) => {
      const data = await this.service.signup();

      return res.status(200).json({ success: true, data });
    },
  );

  public login = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_req: Request, res: Response, _next: NextFunction) => {
      const data = await this.service.login();

      return res.status(200).json({ success: true, data });
    },
  );
}

export default AuthController;
