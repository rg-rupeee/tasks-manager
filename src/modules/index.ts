import { Router } from 'express';
import logger from '@utils/logger';

import v1HealthCheckRoute from './health-check/v1/health-check.route';
import v1AuthRoute from './auth/v1/auth.route';
import v1NotesRoute from './notes/v1/notes.route';

const modules = [
  {
    basePath: 'health-check',
    versionPath: 'v1',
    router: v1HealthCheckRoute,
  },
  {
    basePath: 'auth',
    router: v1AuthRoute,
  },
  {
    basePath: 'notes',
    router: v1NotesRoute,
  },
];

const router = Router();
modules.forEach(route => {
  const path = `${route.versionPath ? `/${route.versionPath}` : ''}/${
    route.basePath
  }`;
  logger.debug(`Loaded APIs: ${path}`);
  router.use(`${path}`, route.router);
});

export default router;
