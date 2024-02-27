import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger/swagger.json';
import { apiConfig } from './config';
import { logger } from './logger';
import { MainRouter } from './routes';

const SWAGGER_PREFIX = '/docs';

const init = () => {
  const PORT = apiConfig.port;
  const API_PREFIX = apiConfig.apiPrefix;
  const HOST = apiConfig.host;
  const swaggerPrefix = `${API_PREFIX}${SWAGGER_PREFIX}`;

  const app: Application = express();

  app.use(swaggerPrefix, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use(API_PREFIX, MainRouter);

  app.listen(PORT, () =>
    logger.debug(` REST API server ready at: ${HOST}:${PORT}${API_PREFIX}`)
  );
};

export { init };
