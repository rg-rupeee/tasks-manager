import logger from '@utils/logger';
import { IsString } from 'class-validator';

import { validationPipe } from '@utils/validation';

class Environment {
  @IsString()
  NODE_ENV: string;

  @IsString()
  PORT: string;

  @IsString()
  MYSQL_HOST: string;

  @IsString()
  MYSQL_PORT: string;

  @IsString()
  MYSQL_USERNAME: string;

  @IsString()
  MYSQL_PASSWORD: string;

  @IsString()
  MYSQL_DATABASE: string;

  @IsString()
  LOG_LEVEL: string;

  @IsString()
  MORGAN_LOG_LEVEL: string;
}

export const validateEnvironment = async () => {
  const result = await validationPipe(Environment, process.env);
  if (result !== true) {
    logger.error(result);
    throw new Error('Error While configuring environment variables');
  }
};
