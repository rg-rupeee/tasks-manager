import contextService from 'request-context';
import { NextFunction, Request, Response } from 'express';

import catchAsync from '@middlewares/catchAsync.middleware';
import SearchService from './search.service';
import { OK } from '@utils/responses';

class SearchController {
  private service = new SearchService();

  public search = catchAsync(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async (req: Request, res: Response, _next: NextFunction) => {
      const query = req.query.q as string;
      const user = contextService.get('request:user');

      const data = await this.service.search({ query, user });

      return OK(res)(data);
    },
  );
}

export default SearchController;
