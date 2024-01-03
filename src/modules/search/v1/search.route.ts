import { Router } from 'express';

import validationMiddleware from '@middlewares/validation.middleware';
import searchController from './search.controller';
import { searchDTO } from './search.schema';

const router = Router();
const controller = new searchController();

router.get('/', validationMiddleware(searchDTO, 'body'), controller.search);

export default router;
