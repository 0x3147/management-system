import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface JXRequestConfig extends AxiosRequestConfig {
  interceptors?: RequestInterceptors
}
