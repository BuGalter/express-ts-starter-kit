import winston from 'winston';
import { loggerConfig } from '../config';

const logger = winston.createLogger({
  /* 
  This code snippet is creating a logger instance using the Winston 
  logging library in TypeScript. Here's a breakdown of what each part
  of the configuration is doing:
  */
  level: loggerConfig.debugLevel,
  format: winston.format.combine(
    winston.format.timestamp({ format: loggerConfig.timeFormat }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: loggerConfig.verboseFilename,
      level: loggerConfig.verboseLevel,
    }),
    new winston.transports.File({
      filename: loggerConfig.errorFilename,
      level: loggerConfig.errorLevel,
    }),
  ],
});

export { logger };
