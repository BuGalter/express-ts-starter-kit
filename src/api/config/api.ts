import { config } from 'dotenv';
import { IAppConfig } from '../interfaces';

config();

export const apiConfig: IAppConfig = {
  host: process.env.HOST || 'localhost',
  port: parseInt(process.env.PORT) || 3500,
  apiPrefix: process.env.API_PREFIX || '/api',
};
