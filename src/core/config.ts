const config = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  LOG_LEVEL: process.env.LOG_LEVEL,
  MORGAN_LOG_LEVEL: process.env.MORGAN_LOG_LEVEL,
  MONGODB: {
    URI: process.env.MONGODB_URI,
    HOST: process.env.MONGODB_HOST,
    PORT: process.env.MONGODB_PORT,
    DATABASE: process.env.MONGODB_DATABASE,
  },
  JWT: {
    SECRET: process.env.JWT_SECRET,
    EXPIRY: process.env.JWT_EXPIRY,
  },
};

export default config;
