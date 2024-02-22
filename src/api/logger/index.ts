import winston from 'winston';
import { loggerConfig } from '../config';

const logger = winston.createLogger({
  /* 
  This code snippet is creating a logger instance using the Winston 
  logging library in TypeScript. Here's a breakdown of what each part
  of the configuration is doing:
  */
  level: loggerConfig.mainLevel,
  format: winston.format.combine(
    winston.format.timestamp({ format: loggerConfig.format }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: loggerConfig.filename,
      level: loggerConfig.errorLevel,
    }),
  ],
});

export { logger };
