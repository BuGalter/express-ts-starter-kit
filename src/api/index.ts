import express, { Application } from 'express';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from './swagger/swagger.json';
import { apiConfig } from './config';
import { MainRouter } from './routes';

const SWAGGER_PREFIX = '/docs';
const API_PREFIX = apiConfig.apiPrefix;
const swaggerPrefix = `${API_PREFIX}${SWAGGER_PREFIX}`;

const app: Application = express();

app.use(swaggerPrefix, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(API_PREFIX, MainRouter);
app.use(helmet());

export { app };
