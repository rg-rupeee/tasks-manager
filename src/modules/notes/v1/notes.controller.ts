import { NextFunction, Request, Response } from 'express';
import contextService from 'request-context';

import catchAsync from '@middlewares/catchAsync.middleware';
import AuthService from './notes.service';
import { OK, CREATED } from '@utils/responses';

class AuthController {
  private service = new AuthService();

  public getNotes = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_req: Request, res: Response, _next: NextFunction) => {
      const user = contextService.get('request:user');

      const data = await this.service.getNotes({ user });

      return OK(res)(data);
    },
  );

  public getNote = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (req: Request, res: Response, _next: NextFunction) => {
      const user = contextService.get('request:user');
      const { id } = req.params;

      const data = await this.service.getNote({ id, user });

      return OK(res)(data);
    },
  );

  public createNote = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (req: Request, res: Response, _next: NextFunction) => {
      const user = contextService.get('request:user');
      const { text } = req.body;

      const data = await this.service.createNote({ text, user });

      return CREATED(res)(data);
    },
  );

  public updateNote = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (req: Request, res: Response, _next: NextFunction) => {
      const user = contextService.get('request:user');
      const { id } = req.params;
      const { text } = req.body;

      const data = await this.service.updateNote({ id, text, user });

      return OK(res)(data);
    },
  );

  public deleteNote = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (req: Request, res: Response, _next: NextFunction) => {
      const user = contextService.get('request:user');
      const { id } = req.params;

      const data = await this.service.deleteNote({ id, user });

      return OK(res)(data);
    },
  );

  public shareNote = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (req: Request, res: Response, _next: NextFunction) => {
      const user = contextService.get('request:user');
      const { id } = req.params;
      const { user_id } = req.body;

      const data = await this.service.shareNote({ id, user_id, user });

      return OK(res)(data);
    },
  );
}

export default AuthController;
