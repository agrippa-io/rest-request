import axios, { AxiosRequestConfig, Method } from 'axios'
import stringify from 'qs-stringify'
import { camelCase } from 'change-case'
import AxiosClient from './axios/AxiosClient'
// Types
import TYPE_ACTION from '../constants/types.action'
// Modules
import ActionObject from './Action.Object'

export interface InterfaceActionRequest {
  action: ActionObject
  data?: any
  baseUrl?: string
  version?: string
  urlOverride?: string
  params?: any
  query?: any
  paging?: InterfaceActionRequestPaging
  sort?: InterfaceActionRequestSort
  requestConfig?: any
}

export interface InterfaceActionRequestPaging {
  page?: number
  pageSize?: number
}

export interface InterfaceActionRequestSort {
  sortBy: string
  sortOrder: string
}

export default class ActionRequest {
  // Class Properties
  requestConfig?: any
  action?: ActionObject
  data?: any
  baseUrl?: string
  version?: string
  urlOverride?: string
  params?: any
  query?: any
  sort?: InterfaceActionRequestSort
  paging?: InterfaceActionRequestPaging

  constructor(props : InterfaceActionRequest) {
    const {action, data, baseUrl, version, params, query, paging, sort, urlOverride, requestConfig} = props
    this.urlOverride = urlOverride
    this.action = action
    this.data = data
    this.baseUrl = baseUrl
    this.version = version
    this.params = params
    this.query = query
    this.paging = paging
    this.sort = sort
    this.requestConfig = requestConfig
  }

  get url() {
    return `${this.baseUrl}${this.urlPath}${this.urlQuery}`
  }

  get urlPath() {
    const { urlPattern } = this.action
    const { urlOverride, version } = this
    const _version : string = version && version !== '' ? `/${version}` : ''
    return `${_version}${ActionRequest.populateUrlPattern(urlOverride || urlPattern, this.params)}`
  }

  get urlQuery() {
    const { query, paging, sort } = this
    if (!query && !paging && !sort) {
      return ''
    }
    const queryStr : string = stringify({
      ...query,
      ...paging,
      ...sort
    })
    return `?${queryStr}`
  }

  static populateUrlPattern(urlPattern : string, params : any = {}) {
    const urlNodes : string[] = urlPattern.split('/')
    return urlNodes.reduce((path : string, urlNode : string) => {
      if (!urlNode || urlNode === '') {
        return path
      }
      if (urlNode.match(/^:/)) {
        const key = urlNode.replace(':', '')
        const paramValue = params[key]
        if (!paramValue) {
          throw new Error(`Missing parameter for key['${key}']`)
        }
        path += `/${params[key]}`
      } else {
        path += `/${urlNode}`
      }
      return path
    }, '')
  }

  get model() {
    return this.action.model
  }

  get type() {
    const definedActionTypes : string[] = Object.keys(TYPE_ACTION)
    // @ts-ignore
    return definedActionTypes.includes(this.actionObject.type)
        ? this.action.type
        : 'UNKNOWN'
  }

  get method() {
    return this.action.method
  }

  get requestMethod() : Method {
    return <Method>camelCase(this.method)
  }

  async perform() {
    const { requestMethod, requestConfig, url, data } = this
    const axiosClient = new AxiosClient(requestConfig)
    switch(requestMethod) {
      case 'get':
      case 'delete':
      case 'head':
      case 'options':
        return axiosClient.instance[requestMethod](url, requestConfig)
      case 'post':
      case 'put':
      case 'patch':
        return axiosClient.instance[requestMethod](url, data, requestConfig)
      default:
        return axiosClient.instance.request({
          url,
          data,
          ...requestConfig
        })
    }
  }
}
