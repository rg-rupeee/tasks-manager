const config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  LOG_LEVEL: process.env.LOG_LEVEL,
  MORGAN_LOG_LEVEL: process.env.MORGAN_LOG_LEVEL,
  MONGODB: {
    HOST: process.env.MONGODB_HOST,
    PORT: process.env.MONGODB_PORT,
    DATABASE: process.env.MONGODB_DATABASE,
  },
};

export default config;
