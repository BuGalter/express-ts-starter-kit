import { config } from 'dotenv';
import { IAppConfig } from '../interfaces';

config();

export const apiConfig: IAppConfig = {
  port: parseInt(process.env.PORT) || 3500,
};
