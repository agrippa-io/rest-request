import { TYPE_ACTION } from '@onevigor/edisen-rest-request'

export default class ContextUtil {
  static determineContext(config) {
    switch (config.type) {
      case TYPE_ACTION.SUB_RESOURCE:
        return config.subResource
      case TYPE_ACTION.LIST:
      case TYPE_ACTION.RESOURCE:
      case TYPE_ACTION.ACTION:
      default:
        return config.model
    }
  }

  static getProvider(config) {
    const context = ContextUtil.determineContext(config)
    return require(`../../contexts/${context}/provider`).default
  }

  static getContext(config) {
    const context = ContextUtil.determineContext(config)
    return require(`../../contexts/${context}/context`).default
  }
}
