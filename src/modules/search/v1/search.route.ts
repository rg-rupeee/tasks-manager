import { Router } from 'express';

import validationMiddleware from '@middlewares/validation.middleware';
import protect from '@middlewares/auth.middleware';
import searchController from './search.controller';
import { searchDTO } from './search.schema';

const router = Router();
const controller = new searchController();

router.get(
  '/',
  protect,
  validationMiddleware(searchDTO, 'query'),
  controller.search,
);

export default router;
