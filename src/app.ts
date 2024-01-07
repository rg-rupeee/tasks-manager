import 'reflect-metadata';
import hpp from 'hpp';
import cors from 'cors';
import http from 'http';
import YAML from 'yamljs';
import helmet from 'helmet';
import morgan from 'morgan';
import xss from 'xss-clean';
import { resolve } from 'path';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';
import contextService from 'request-context';
import { rateLimit } from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import express, { Request, Response } from 'express';

import config from '@core/config';
import routes from '@modules/index';
import logger, { stream } from '@utils/logger';
import errorHandler from '@middlewares/error.middleware';

class App {
  public app: express.Application;
  public port: string | number;
  public server: http.Server;

  constructor() {
    this.app = express();
    this.port = config.PORT;

    this.initializeMiddlewares();
    this.registerRoutes();
    this.registerProcessEventHandlers();
  }

  private registerProcessEventHandlers() {
    process.on('SIGTERM', () => {
      logger.error('SIGTERM RECEIVED. Shutting down gracefully');
      this.server.close(() => {
        logger.info('Process terminated!');
      });
    });

    process.on('SIGINT', () => {
      logger.error('SIGTERM RECEIVED. Shutting down gracefully');
      this.server.close(() => {
        logger.info('Process terminated!');
      });
    });
  }

  private initializeMiddlewares() {
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(xss());
    this.app.use(hpp());
    this.app.use(mongoSanitize());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ limit: '50mb', extended: true }));
    this.app.use(morgan(config.MORGAN_LOG_LEVEL, { stream }));
    this.app.use(contextService.middleware('request'));
    this.app.use(
      rateLimit({
        windowMs: 5 * 60 * 1000,
        limit: 100,
        legacyHeaders: false,
      }),
    );
  }

  private registerRoutes() {
    const swaggerDocument = YAML.load(resolve(`${__dirname}/docs/index.yaml`));
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    this.app.use('/api', routes);

    this.app.all('*', (req: Request, res: Response) => {
      return res.status(404).json({
        success: false,
        status: 'fail',
        message: `Cannot find ${req.originalUrl} on this server!`,
      });
    });

    this.app.use(errorHandler);
  }

  public listen() {
    this.server = this.app.listen(this.port, () => {
      logger.info(`Server listening on port :: ${this.port}`);
    });
    return this.server;
  }
}

export default App;
