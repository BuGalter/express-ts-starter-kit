export enum WinstonLevels {
  errorLevel = 'error',
  warnLevel = 'warn',
  infoLevel = 'info',
  httpLevel = 'http',
  verboseLevel = 'verbose',
  debugLevel = 'debug',
  sillyLevel = 'silly',
}

export enum HttpStatusCodes {
  OK = 200,
  CREATED = 201,
  NOT_FOUND = 400,
  UNAUTHORIZED = 401,
  FORBIDEN = 403,
  INTERNAL_SERVER_ERROR = 500,
}
