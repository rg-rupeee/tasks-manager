import logger from '@utils/logger';
import { IsString } from 'class-validator';

import { validationPipe } from '@utils/validation';

class Environment {
  @IsString()
  NODE_ENV: string;

  @IsString()
  PORT: string;

  @IsString()
  MONGODB_URI: string;

  @IsString()
  JWT_SECRET: string;

  @IsString()
  JWT_EXPIRY: string;

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
