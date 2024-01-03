import { NextFunction, Request, Response } from 'express';

import catchAsync from '@middlewares/catchAsync.middleware';

class HealthCheck {
  public checkHeath = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_req: Request, res: Response, _next: NextFunction) => {
      return res.status(201).json({ success: true });
    },
  );
}

export default HealthCheck;
