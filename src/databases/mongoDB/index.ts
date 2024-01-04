import mongoose from 'mongoose';

import config from '@core/config';
import logger from '@utils/logger';

mongoose.set('strictQuery', true);

mongoose.connection.on('disconnected', () => {
  logger.info('MongoDB: Disconnected');
});

mongoose.connection.on('error', () => {
  logger.error('MongoDB: Error connecting to DB');
});

mongoose.connection.on('reconnected', () => {
  logger.info('MongoDB: Reconnected');
});

mongoose.connection.on('reconnectFailed', () => {
  logger.error('MongoDB: Error Reconnecting');
});

const mongoOptions = {};

export const connect = async () => {
  try {
    await mongoose.connect(config.MONGODB.URI, mongoOptions);
    logger.info('MongoDB: successfully connected to Database');
  } catch (err) {
    logger.error(err);
    throw err;
  }
};

export const disconnect = async () => {
  await mongoose.connection.close();
  logger.info('MongoDB: disconnected from Database');
};
