"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qs_stringify_1 = __importDefault(require("qs-stringify"));
const change_case_1 = require("change-case");
const AxiosClient_1 = __importDefault(require("./axios/AxiosClient"));
// Types
const types_action_1 = __importDefault(require("../constants/types.action"));
class ActionRequest {
    constructor(props) {
        const { action, data, baseUrl, version, params, query, paging, sort, urlOverride, requestConfig } = props;
        this.urlOverride = urlOverride;
        this.action = action;
        this.data = data;
        this.baseUrl = baseUrl;
        this.version = version;
        this.params = params;
        this.query = query;
        this.paging = paging;
        this.sort = sort;
        this.requestConfig = requestConfig;
    }
    get url() {
        return `${this.baseUrl}${this.urlPath}${this.urlQuery}`;
    }
    get urlPath() {
        const { urlPattern } = this.action;
        const { urlOverride, version } = this;
        const _version = version && version !== '' ? `/${version}` : '';
        return `${_version}${ActionRequest.populateUrlPattern(urlOverride || urlPattern, this.params)}`;
    }
    get urlQuery() {
        const { query, paging, sort } = this;
        if (!query && !paging && !sort) {
            return '';
        }
        const queryStr = qs_stringify_1.default({
            ...query,
            ...paging,
            ...sort
        });
        return `?${queryStr}`;
    }
    static populateUrlPattern(urlPattern, params = {}) {
        const urlNodes = urlPattern.split('/');
        return urlNodes.reduce((path, urlNode) => {
            if (!urlNode || urlNode === '') {
                return path;
            }
            if (urlNode.match(/^:/)) {
                const key = urlNode.replace(':', '');
                const paramValue = params[key];
                if (!paramValue) {
                    throw new Error(`Missing parameter for key['${key}']`);
                }
                path += `/${params[key]}`;
            }
            else {
                path += `/${urlNode}`;
            }
            return path;
        }, '');
    }
    get model() {
        return this.action.model;
    }
    get type() {
        const definedActionTypes = Object.keys(types_action_1.default);
        // @ts-ignore
        return definedActionTypes.includes(this.actionObject.type)
            ? this.action.type
            : 'UNKNOWN';
    }
    get method() {
        return this.action.method;
    }
    get requestMethod() {
        return change_case_1.camelCase(this.method);
    }
    async perform() {
        const { requestMethod, requestConfig, url, data } = this;
        const axiosClient = new AxiosClient_1.default(requestConfig);
        switch (requestMethod) {
            case 'get':
            case 'delete':
            case 'head':
            case 'options':
                return axiosClient.instance[requestMethod](url, requestConfig);
            case 'post':
            case 'put':
            case 'patch':
                return axiosClient.instance[requestMethod](url, data, requestConfig);
            default:
                return axiosClient.instance.request({
                    url,
                    data,
                    ...requestConfig
                });
        }
    }
}
exports.default = ActionRequest;
//# sourceMappingURL=Action.Request.js.map