import app from '@/app';
import logger from '@utils/logger';
import { connectDatabases } from './databases';
import { validateEnvironment } from '@core/Environment';

process.on('uncaughtException', err => {
  logger.error('UNCAUGHT EXCEPTION! Shutting down...');
  logger.debug(err);
  process.exit(1);
});

process.on('unhandledRejection', err => {
  logger.error('UNHANDLED REJECTION!');
  logger.debug(err);
});

const bootstrap = async () => {
  await connectDatabases();

  await validateEnvironment();

  await connectDatabases();

  app.listen();
};

bootstrap();
