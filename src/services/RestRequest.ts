import ActionObject from 'src/services/Action.Object'
import ActionRequest, { InterfaceActionRequestPaging, InterfaceActionRequestSort } from 'src/services/Action.Request'
import PROPS_DEFAULT from 'src/config/config.defaults'

export interface InterfaceRestRequest {
  baseUrl: string
  version?: string
  paging?: InterfaceActionRequestPaging
  sort?: InterfaceActionRequestSort
  requestConfig?: any
}

export default class RestRequest {
  // Class Properties
  defaults: InterfaceRestRequest

  constructor(props : InterfaceRestRequest) {
    this.defaults = {
      ...PROPS_DEFAULT,
      ...(props || {})
    }
  }

  async perform(config) {
    const action = new ActionObject(config)

    const actionRequest = new ActionRequest({
      action,
      ...this.defaults,
      ...config
    })
    return actionRequest.perform()
  }
}