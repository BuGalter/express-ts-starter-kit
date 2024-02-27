import { WinstonLevels } from '../enums';
import { ILoggerConfig } from '../interfaces/logger';

export const loggerConfig: ILoggerConfig = {
  debugLevel: WinstonLevels.debugLevel,
  timeFormat: 'YYYY-MM-DD HH:mm:ss',
  errorFilename: 'logs/error.log',
  errorLevel: WinstonLevels.errorLevel,
  verboseFilename: 'logs/verbose.log',
  verboseLevel: WinstonLevels.verboseLevel,
};
