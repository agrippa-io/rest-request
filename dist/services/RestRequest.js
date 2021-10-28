"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Action_Object_1 = __importDefault(require("./Action.Object"));
const Action_Request_1 = __importDefault(require("./Action.Request"));
const config_defaults_1 = __importDefault(require("../config/config.defaults"));
class RestRequest {
    constructor(props) {
        this.defaults = {
            ...config_defaults_1.default,
            ...(props || {})
        };
    }
    async perform(config) {
        const action = new Action_Object_1.default(config);
        const actionRequest = new Action_Request_1.default({
            action,
            ...this.defaults,
            ...config
        });
        return actionRequest.perform();
    }
}
exports.default = RestRequest;
//# sourceMappingURL=RestRequest.js.map