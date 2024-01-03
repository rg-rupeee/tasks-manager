import { Router } from 'express';
import logger from '@utils/logger';

import v1HealthCheckRoute from './health-check/v1/health-check.route';

const modules = [
  {
    basePath: 'health-check',
    versionPath: 'v1',
    router: v1HealthCheckRoute,
  },
];

const router = Router();
modules.forEach(route => {
  logger.debug(`Loaded APIs: /${route.versionPath}/${route.basePath}`);
  router.use(`/${route.versionPath}/${route.basePath}`, route.router);
});

export default router;
