"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class AxiosClient {
    constructor(props = {}) {
        const interceptorRefMap = {
            request: {},
            response: {}
        };
        const { config, interceptors } = props;
        const instance = axios_1.default.create(config || {});
        if (interceptors && interceptors.length) {
            this.registerInterceptors(instance, interceptors, interceptorRefMap);
        }
        this.instance = instance;
        this.interceptorRefMap = interceptorRefMap;
    }
    registerInterceptors(instance, interceptors, interceptorRefMap) {
        interceptors.forEach((interceptor) => {
            const { type, name, onFulfilled, onRejected } = interceptor;
            if (!interceptorRefMap[type]) {
                interceptorRefMap[type] = {};
            }
            interceptorRefMap[type][name] = instance.interceptors[type].use(onFulfilled, onRejected);
        });
    }
}
exports.default = AxiosClient;
//# sourceMappingURL=AxiosClient.js.map