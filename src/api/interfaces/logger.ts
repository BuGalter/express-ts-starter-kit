import { WinstonLevels } from '../enums';

export interface ILoggerConfig {
  debugLevel: WinstonLevels;
  timeFormat: string;
  errorFilename: string;
  errorLevel: WinstonLevels;
  verboseFilename: string;
  verboseLevel: WinstonLevels;
}
