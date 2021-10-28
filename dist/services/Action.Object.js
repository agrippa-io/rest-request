"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const types_action_1 = __importDefault(require("../constants/types.action"));
const types_http_method_1 = __importDefault(require("../constants/types.http.method"));
const change_case_1 = require("change-case");
class ActionObject {
    constructor(props) {
        const { model, type, method, subResource, rpcAction, urlOverride } = props;
        if (type === types_action_1.default.SUB_RESOURCE) {
            if (!subResource) {
                throw new Error('Associations requires \'action.subResource\'');
            }
        }
        this.type = type;
        this.model = model;
        this.method = method;
        this.subResource = subResource;
        this.rpcAction = rpcAction;
        this.urlOverride = urlOverride;
    }
    static toActionObject(action) {
        const ActionTypes = Object.keys(types_action_1.default);
        const MethodTypes = Object.keys(types_http_method_1.default);
        const actionNodes = action.split('_');
        const actionObj = actionNodes.reduce((actionObject, node, index) => {
            if (!actionObject.type) {
                // @ts-ignore
                if ([...ActionTypes, 'SUB'].includes(node)) {
                    actionObject.type = node === 'SUB' ? types_action_1.default.SUB_RESOURCE : node;
                    if (node === types_action_1.default.ACTION) {
                        actionObject.method = types_http_method_1.default.POST;
                    }
                }
                else {
                    actionObject.model += change_case_1.pascalCase(node);
                }
            }
            else {
                if (node === 'RESOURCE') {
                    return actionObject;
                }
                // @ts-ignore
                if (MethodTypes.includes(node)) {
                    actionObject.method = node;
                }
                else {
                    const property = actionObject.type === types_action_1.default.SUB_RESOURCE ? 'subResource' : 'rpcAction';
                    const casedNode = change_case_1.pascalCase(node);
                    actionObject[property] = actionObject[property]
                        ? `${actionObject[property]}${casedNode}`
                        : casedNode;
                }
            }
            return actionObject;
        }, {
            model: '',
            type: null,
            method: ''
        });
        return actionObj;
    }
    get actionName() {
        if (!isEmpty_1.default(this.urlOverride)) {
            return null;
        }
        const actionNamePrefix = `${change_case_1.constantCase(this.model)}_${change_case_1.constantCase(this.type)}`;
        switch (this.type) {
            case types_action_1.default.ACTION:
                return this.actionNameRPC(actionNamePrefix);
            case types_action_1.default.SUB_RESOURCE:
                return this.actionNameAssociation(actionNamePrefix);
            case types_action_1.default.LIST:
            case types_action_1.default.RESOURCE:
                return this.actionNameMethod(actionNamePrefix);
            default:
                throw new Error(`Invalid ACTION_TYPE['${this.type}']`);
        }
    }
    actionNameRPC(prefix = '') {
        const { rpcAction } = this;
        const _rpcAction = rpcAction ? `_${change_case_1.constantCase(rpcAction)}` : '';
        return `${prefix}${_rpcAction}`;
    }
    actionNameMethod(prefix = '') {
        const { method } = this;
        const _method = method ? `_${change_case_1.constantCase(method)}` : '';
        return `${prefix}${_method}`;
    }
    actionNameAssociation(prefix = '') {
        const { subResource } = this;
        const _subResource = subResource ? `_${change_case_1.constantCase(subResource)}` : '';
        return this.actionNameMethod(`${prefix}${_subResource}`);
    }
    get urlPattern() {
        if (this.urlOverride) {
            return this.urlOverride;
        }
        switch (this.type) {
            case types_action_1.default.ACTION:
                return this.actionToRPCActionUrlPattern();
            case types_action_1.default.SUB_RESOURCE:
                return this.actionToAssociationUrlPattern();
            case types_action_1.default.LIST:
                return this.actionToCollectionUrlPattern();
            case types_action_1.default.RESOURCE:
                return this.actionToResourceUrlPattern();
            default:
                throw new Error(`Invalid ACTION_TYPE['${this.type}']`);
        }
    }
    actionToRPCActionUrlPattern() {
        const { model, rpcAction } = this;
        const _model = model ? change_case_1.snakeCase(model) : '';
        const _rpcAction = rpcAction ? change_case_1.snakeCase(rpcAction) : '';
        return `/${_model}s/actions/${_rpcAction}`;
    }
    actionToCollectionUrlPattern() {
        const { model } = this;
        const _model = model ? change_case_1.snakeCase(model) : '';
        return `/${_model}s`;
    }
    actionToResourceUrlPattern() {
        const { model } = this;
        const _model = model ? change_case_1.snakeCase(model) : '';
        return `/${_model}s/:id`;
    }
    actionToAssociationUrlPattern() {
        const { model, subResource } = this;
        const _model = model ? change_case_1.snakeCase(model) : '';
        const _subResource = subResource ? change_case_1.snakeCase(subResource) : '';
        return `/${_model}s/:id/${_subResource}`;
    }
}
exports.default = ActionObject;
//# sourceMappingURL=Action.Object.js.map