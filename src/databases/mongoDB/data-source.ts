import { DataSource } from 'typeorm';

import Entities from '@entities/index';
import config from '@core/config';

const mongodbDataSource = new DataSource({
  type: 'mongodb',
  host: config.MONGODB.HOST,
  port: Number(config.MONGODB.PORT),
  database: config.MONGODB.DATABASE,
  synchronize: false,
  logging: true,
  entities: Entities,
});

export default mongodbDataSource;
