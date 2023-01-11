/* eslint-disable @typescript-eslint/naming-convention */
import { IFetchOptions } from '../types';

export const DEFAULT_OPTIONS: IFetchOptions = {
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
  validateStatus: status => status < 500,
};
