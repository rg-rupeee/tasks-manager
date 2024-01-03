import mongodbDataSource from './mongoDB/data-source';
import logger from '@utils/logger';

const connections: { mongoDB?: any } = {};

const connectDatabases = async () => {
  connections.mongoDB = await mongodbDataSource.initialize();
  logger.info('Successfully connected to mongoDB Database');
};

export { connections, connectDatabases, mongodbDataSource as dataSource };
