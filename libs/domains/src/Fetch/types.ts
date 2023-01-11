import { AxiosRequestConfig } from 'axios';

export interface IFetchOptions extends Pick<AxiosRequestConfig,
  'baseURL' |
  'validateStatus' |
  'withCredentials'
> {
  headers?: {
    [P: string]: string;
  };
}
