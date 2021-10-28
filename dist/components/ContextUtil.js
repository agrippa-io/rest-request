"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const edisen_rest_request_1 = require("@onevigor/edisen-rest-request");
class ContextUtil {
    static determineContext(config) {
        switch (config.type) {
            case edisen_rest_request_1.TYPE_ACTION.SUB_RESOURCE:
                return config.subResource;
            case edisen_rest_request_1.TYPE_ACTION.LIST:
            case edisen_rest_request_1.TYPE_ACTION.RESOURCE:
            case edisen_rest_request_1.TYPE_ACTION.ACTION:
            default:
                return config.model;
        }
    }
    static getProvider(config) {
        const context = ContextUtil.determineContext(config);
        return require(`../../contexts/${context}/provider`).default;
    }
    static getContext(config) {
        const context = ContextUtil.determineContext(config);
        return require(`../../contexts/${context}/context`).default;
    }
}
exports.default = ContextUtil;
//# sourceMappingURL=ContextUtil.js.map