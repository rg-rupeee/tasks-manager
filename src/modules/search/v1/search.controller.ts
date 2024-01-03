import { NextFunction, Request, Response } from 'express';

import catchAsync from '@middlewares/catchAsync.middleware';
import SearchService from './search.service';
import { OK } from '@utils/responses';

class SearchController {
  private service = new SearchService();

  public search = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (_req: Request, res: Response, _next: NextFunction) => {
      const data = await this.service.search();

      return OK(res)(data);
    },
  );
}

export default SearchController;
