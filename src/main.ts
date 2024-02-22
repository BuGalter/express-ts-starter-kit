import * as main from './api';
import { logger } from './api/logger';

try {
  //throw new Error('test error');
  main.init();
} catch (error) {
  logger.error(`REST API crash: ${error}`);
}
