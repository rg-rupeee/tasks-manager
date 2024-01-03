import { Router } from 'express';

import healthCheckController from './health-check.controller';

const router = Router();
const controller = new healthCheckController();

router.get('/', controller.checkHeath);

export default router;
