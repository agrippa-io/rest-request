import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
export type TypeAxiosInterceptor = 'request' | 'response';
export interface InterfaceAxiosInterceptorConfig {
    type: TypeAxiosInterceptor;
    name: string;
    onFulfilled: ((value: any) => any | AxiosResponse);
    onRejected?: ((error: any) => any);
}
export interface InterfaceAxiosClientOptions {
    config?: AxiosRequestConfig;
    interceptors?: InterfaceAxiosInterceptorConfig[];
}
export default class AxiosClient {
    instance: AxiosInstance;
    interceptorRefMap: any;
    constructor(props?: InterfaceAxiosClientOptions);
    registerInterceptors(instance: AxiosInstance, interceptors: InterfaceAxiosInterceptorConfig[], interceptorRefMap: any): void;
}
