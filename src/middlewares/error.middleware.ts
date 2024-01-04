import { NextFunction, Request, Response } from 'express';

import AppError from '@core/Error';
import logger from '@utils/logger';

const errorMiddleware = (
  error: AppError | any,
  _req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _next: NextFunction,
) => {
  logger.error(error);

  error.statusCode = error.statusCode || 500;
  error.status = error.status || 'error';

  if (error.isOperational) {
    return res.status(error.statusCode).json({
      success: false,
      status: error.status,
      message: error.message,
    });
  }

  return res.status(500).json({
    success: false,
    status: 'error',
    message: 'Something went wrong!',
  });
};

export default errorMiddleware;
