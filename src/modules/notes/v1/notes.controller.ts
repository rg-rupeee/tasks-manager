import { NextFunction, Request, Response } from 'express';

import catchAsync from '@middlewares/catchAsync.middleware';
import AuthService from './notes.service';
import { OK, CREATED } from '@utils/responses';

class AuthController {
  private service = new AuthService();

  public getNotes = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_req: Request, res: Response, _next: NextFunction) => {
      const data = await this.service.getNotes();

      return OK(res)(data);
    },
  );

  public getNote = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_req: Request, res: Response, _next: NextFunction) => {
      const data = await this.service.getNote();

      return OK(res)(data);
    },
  );

  public createNote = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_req: Request, res: Response, _next: NextFunction) => {
      const data = await this.service.createNote();

      return CREATED(res)(data);
    },
  );

  public updateNote = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_req: Request, res: Response, _next: NextFunction) => {
      const data = await this.service.updateNote();

      return OK(res)(data);
    },
  );

  public deleteNote = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_req: Request, res: Response, _next: NextFunction) => {
      const data = await this.service.deleteNote();

      return OK(res)(data);
    },
  );

  public shareNote = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_req: Request, res: Response, _next: NextFunction) => {
      const data = await this.service.shareNote();

      return OK(res)(data);
    },
  );
}

export default AuthController;
