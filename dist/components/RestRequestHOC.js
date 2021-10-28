"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const prop_types_1 = __importDefault(require("prop-types"));
const isEqual_1 = __importDefault(require("lodash/isEqual"));
const EdisenRequest_1 = __importDefault(require("../EdisenRequest/EdisenRequest"));
const ContextUtil_1 = __importDefault(require("./ContextUtil"));
const type_actions_1 = __importDefault(require("../../contexts/Asset/type.actions"));
function RestRequestHOC(props, Component) {
    class RestRequestHOCController extends react_1.PureComponent {
        componentDidMount() {
            this.fetchData();
        }
        componentDidUpdate(prevProps) {
            if (!isEqual_1.default(this.props, prevProps)) {
                this.fetchData();
            }
        }
        async fetchData() {
            const [contextData, dispatch] = this.context;
            try {
                const response = await EdisenRequest_1.default.perform(this.props);
                const { paging: { page }, } = this.props;
                dispatch({
                    type: type_actions_1.default.ADD,
                    data: response,
                    page,
                });
            }
            catch (err) {
                console.error('ERR - Failed to fetch data', err);
            }
        }
        render() {
            const [contextData] = this.context;
            return react_1.default.createElement(Component, { contextData: contextData });
        }
    }
    RestRequestHOCController.contextType = ContextUtil_1.default.getContext(props);
    RestRequestHOCController.propTypes = {
        paging: prop_types_1.default.any,
    };
    RestRequestHOCController.defaultProps = {
        paging: {
            page: 0,
            pageSize: 100,
        },
    };
    return RestRequestHOCController;
}
exports.default = RestRequestHOC;
//# sourceMappingURL=RestRequestHOC.js.map