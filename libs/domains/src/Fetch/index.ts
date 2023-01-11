import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { DEFAULT_OPTIONS } from './shared';
import { IFetchOptions } from './types';

class Fetch {
  fetch: AxiosInstance;

  constructor(
    public options: IFetchOptions = DEFAULT_OPTIONS,
  ) {
    axios.defaults.withCredentials = true;
    this.fetch = axios.create(this.options);
  }

  get = <TData extends object>(
    url: string,
    config?: AxiosRequestConfig,
  ) => this.fetch.get<TData>(
    url,
    config,
  )

  post = <TData extends object>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ) => this.fetch.post<TData>(
    url,
    data,
    config,
  )

  put = <TData extends object>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig,
  ) => this.fetch.put<TData>(
    url,
    data,
    config,
  )

  delete = <TData extends object>(
    url: string,
    config?: AxiosRequestConfig,
  ) => this.fetch.delete<TData>(
    url,
    config,
  )
}

export default Fetch;
