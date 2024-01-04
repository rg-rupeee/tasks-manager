import { NextFunction, Request, Response } from 'express';
import contextService from 'request-context';

import catchAsync from '@middlewares/catchAsync.middleware';
import AppError from '@core/Error';
import { decode } from '@utils/token';

const protect = catchAsync(
  async (req: Request, _res: Response, next: NextFunction) => {
    let token: string;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      [, token] = req.headers.authorization.split(' ');
    }

    if (!token) {
      return next(new AppError('Unauthorized', 401));
    }

    const data = await decode(token);

    contextService.set('request:user', data);

    return next();
  },
);

export default protect;
