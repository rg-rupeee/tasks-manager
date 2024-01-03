import { NextFunction, Request, Response } from 'express';

import catchAsync from '@middlewares/catchAsync.middleware';
import { OK } from '@utils/responses';

class HealthCheck {
  public checkHeath = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_req: Request, res: Response, _next: NextFunction) => {
      return OK(res)({ message: 'server is live!' });
    },
  );
}

export default HealthCheck;
