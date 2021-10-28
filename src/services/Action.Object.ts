import isEmpty from 'lodash/isEmpty'
import TYPE_ACTION from '../constants/types.action'
import TYPE_HTTP_METHOD from '../constants/types.http.method'
import { pascalCase, snakeCase, constantCase } from 'change-case'


export interface InterfaceActionObject {
  model: string
  type: string
  method: string
  subResource?: string
  rpcAction?: string
  urlOverride?: string
}

export default class ActionObject {
  // Class Properties
  model: string
  type: string
  method: string
  subResource?: string
  rpcAction?: string
  urlOverride?: string

  constructor(props: InterfaceActionObject) {
    const { model, type, method, subResource, rpcAction, urlOverride } = props
    if (type === TYPE_ACTION.SUB_RESOURCE) {
      if (!subResource) {
        throw new Error('Associations requires \'action.subResource\'')
      }
    }
    this.type = type
    this.model = model
    this.method = method
    this.subResource = subResource
    this.rpcAction = rpcAction
    this.urlOverride = urlOverride
  }

  static toActionObject(action) : InterfaceActionObject {
    const ActionTypes : string[] = Object.keys(TYPE_ACTION)
    const MethodTypes : string[] = Object.keys(TYPE_HTTP_METHOD)
    const actionNodes : string[] = action.split('_')
    const actionObj : any = actionNodes.reduce((
      actionObject: InterfaceActionObject,
      node: string,
      index : number) => {
      if (!actionObject.type) {
        // @ts-ignore
        if([...ActionTypes, 'SUB'].includes(node)) {
          actionObject.type = node === 'SUB' ? TYPE_ACTION.SUB_RESOURCE : node
          if (node === TYPE_ACTION.ACTION) {
            actionObject.method = TYPE_HTTP_METHOD.POST
          }
        } else {
          actionObject.model += pascalCase(node)
        }
      } else {
        if (node === 'RESOURCE') {
          return actionObject
        }
        // @ts-ignore
        if (MethodTypes.includes(node)) {
          actionObject.method = node
        } else {
          const property : string = actionObject.type === TYPE_ACTION.SUB_RESOURCE ? 'subResource' : 'rpcAction'
          const casedNode : string = pascalCase(node)
          actionObject[property] = actionObject[property]
            ? `${actionObject[property]}${casedNode}`
            : casedNode
        }
      }
      return actionObject
    }, {
      model: '',
      type: null,
      method: ''
    })
    return actionObj
  }

  get actionName() {
    if (!isEmpty(this.urlOverride)) {
      return null
    }
    const actionNamePrefix = `${constantCase(this.model)}_${constantCase(this.type)}`
    switch (this.type) {
      case TYPE_ACTION.ACTION:
        return this.actionNameRPC(actionNamePrefix)
      case TYPE_ACTION.SUB_RESOURCE:
        return this.actionNameAssociation(actionNamePrefix)
      case TYPE_ACTION.LIST:
      case TYPE_ACTION.RESOURCE:
        return this.actionNameMethod(actionNamePrefix)
      default:
        throw new Error(`Invalid ACTION_TYPE['${this.type}']`)
    }
  }

  actionNameRPC(prefix : string = '') {
    const { rpcAction } = this
    const _rpcAction : string = rpcAction ? `_${constantCase(rpcAction)}` : ''
    return `${prefix}${_rpcAction}`
  }

  actionNameMethod(prefix : string = '') : string {
    const { method } = this
    const _method : string = method ? `_${constantCase(method)}` : ''
    return `${prefix}${_method}`
  }

  actionNameAssociation(prefix : string = '') : string {
    const { subResource } = this
    const _subResource : string = subResource ? `_${constantCase(subResource)}` : ''
    return this.actionNameMethod(`${prefix}${_subResource}`)
  }


  get urlPattern() {
    if (this.urlOverride) {
      return this.urlOverride
    }
    switch (this.type) {
      case TYPE_ACTION.ACTION:
        return this.actionToRPCActionUrlPattern()
      case TYPE_ACTION.SUB_RESOURCE:
        return this.actionToAssociationUrlPattern()
      case TYPE_ACTION.LIST:
        return this.actionToCollectionUrlPattern()
      case TYPE_ACTION.RESOURCE:
        return this.actionToResourceUrlPattern()
      default:
        throw new Error(`Invalid ACTION_TYPE['${this.type}']`)
    }
  }

  actionToRPCActionUrlPattern() {
    const { model, rpcAction } = this
    const _model : string = model ? snakeCase(model) : ''
    const _rpcAction : string = rpcAction ? snakeCase(rpcAction) : ''
    return `/${_model}s/actions/${_rpcAction}`
  }

  actionToCollectionUrlPattern() : string {
    const { model } = this
    const _model : string = model ? snakeCase(model) : ''
    return `/${_model}s`
  }

  actionToResourceUrlPattern() : string {
    const { model } = this
    const _model : string = model ? snakeCase(model) : ''
    return `/${_model}s/:id`
  }

  actionToAssociationUrlPattern() : string {
    const { model, subResource } = this
    const _model : string = model ? snakeCase(model) : ''
    const _subResource : string = subResource ? snakeCase(subResource) : ''
    return `/${_model}s/:id/${_subResource}`
  }
}