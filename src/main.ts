import { app } from './api';
import { logger } from './api/logger';
import { apiConfig } from './api/config';

const PORT = apiConfig.port;
const HOST = apiConfig.host;
const API_PREFIX = apiConfig.apiPrefix;

app
  .listen(PORT, () => {
    logger.debug(`REST API server ready at: ${HOST}:${PORT}${API_PREFIX}`);
  })
  .on('error', (error) => {
    logger.error(`API crash: ${error}`);
  });
