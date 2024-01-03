const config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  LOG_LEVEL: process.env.LOG_LEVEL,
  MORGAN_LOG_LEVEL: process.env.MORGAN_LOG_LEVEL,
  MYSQL: {
    HOST: process.env.MYSQL_HOST,
    PORT: process.env.MYSQL_PORT,
    USERNAME: process.env.MYSQL_USERNAME,
    PASSWORD: process.env.MYSQL_PASSWORD,
    DATABASE: process.env.MYSQL_DATABASE,
  },
};

export default config;
