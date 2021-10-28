import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'


export type TypeAxiosInterceptor = 'request' | 'response'
export interface InterfaceAxiosInterceptorConfig {
  type: TypeAxiosInterceptor
  name: string
  onFulfilled: ((value: any) => any | AxiosResponse),
  onRejected?: ((error: any) => any),
}
export interface InterfaceAxiosClientOptions {
  config?: AxiosRequestConfig,
  interceptors?: InterfaceAxiosInterceptorConfig[]
}

export default class AxiosClient {

  instance : AxiosInstance
  interceptorRefMap : any

  constructor(props: InterfaceAxiosClientOptions = {}) {
    const interceptorRefMap = {
      request: {},
      response: {}
    }
    const { config, interceptors } = props
    const instance : AxiosInstance = axios.create(config || {})

    if (interceptors && interceptors.length) {
      this.registerInterceptors(instance, interceptors, interceptorRefMap)
    }

    this.instance = instance
    this.interceptorRefMap = interceptorRefMap
  }

  registerInterceptors(instance: AxiosInstance, interceptors : InterfaceAxiosInterceptorConfig[], interceptorRefMap: any) {
    interceptors.forEach((interceptor: InterfaceAxiosInterceptorConfig) => {
      const { type, name, onFulfilled, onRejected } = interceptor
      if (!interceptorRefMap[type]) {
        interceptorRefMap[type] = {}
      }
      interceptorRefMap[type][name] = instance.interceptors[type].use(onFulfilled, onRejected)
    })
  }
}
