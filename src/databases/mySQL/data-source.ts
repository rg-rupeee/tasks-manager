import { DataSource } from 'typeorm';

import config from '@core/config';
import Entities from '@entities/index';

const sqlDataSource = new DataSource({
  type: 'mysql',
  host: config.MYSQL.HOST,
  port: Number(config.MYSQL.PORT),
  username: config.MYSQL.USERNAME,
  password: config.MYSQL.PASSWORD,
  database: config.MYSQL.DATABASE,
  entities: Entities,
  logging: false,
  synchronize: false,
});

export default sqlDataSource;
