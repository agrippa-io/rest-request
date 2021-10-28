"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const types_action_1 = __importDefault(require("../../constants/types.action"));
const types_http_method_1 = __importDefault(require("../../constants/types.http.method"));
// Test
const Action_Object_1 = __importDefault(require("../../services/Action.Object"));
describe('ActionObject', () => {
    let actionObject;
    let actionProps;
    describe('Constructor', () => {
        describe('Association', () => {
            describe('Missing Action Props', () => {
                beforeEach(() => {
                    actionProps = {
                        model: 'Asset',
                        type: types_action_1.default.SUB_RESOURCE,
                        method: types_http_method_1.default.GET
                    };
                });
                it('should throw Error if no \'action.subResource\'', () => {
                    // Test
                    chai_1.expect(() => { new Action_Object_1.default(actionProps); }).to.throw('Associations requires \'action.subResource\'');
                });
            });
        });
    });
    describe('ActionObject.toActionObject(_action)', () => {
        describe('Collection Action', () => {
            describe('POST', () => {
                const action = 'ASSET_LIST_POST';
                const expected = {
                    model: 'Asset',
                    type: 'LIST',
                    method: 'POST',
                };
                beforeEach(() => {
                    actionObject = Action_Object_1.default.toActionObject(action);
                });
                it('should create an POST ActionObject', () => {
                    chai_1.expect(actionObject).to.deep.equal(expected);
                });
            });
            describe('GET', () => {
                const action = 'ASSET_LIST_GET';
                const expected = {
                    model: 'Asset',
                    type: 'LIST',
                    method: 'GET',
                };
                beforeEach(() => {
                    actionObject = Action_Object_1.default.toActionObject(action);
                });
                it('should create an GET ActionObject', () => {
                    chai_1.expect(actionObject).to.deep.equal(expected);
                });
            });
            describe('PUT', () => {
                const action = 'ASSET_LIST_PUT';
                const expected = {
                    model: 'Asset',
                    type: 'LIST',
                    method: 'PUT',
                };
                beforeEach(() => {
                    actionObject = Action_Object_1.default.toActionObject(action);
                });
                it('should create an PUT ActionObject', () => {
                    chai_1.expect(actionObject).to.deep.equal(expected);
                });
            });
            describe('DELETE', () => {
                const action = 'ASSET_LIST_DELETE';
                const expected = {
                    model: 'Asset',
                    type: 'LIST',
                    method: 'DELETE',
                };
                beforeEach(() => {
                    actionObject = Action_Object_1.default.toActionObject(action);
                });
                it('should create an DELETE ActionObject', () => {
                    chai_1.expect(actionObject).to.deep.equal(expected);
                });
            });
        });
        describe('Resource Action', () => {
            describe('POST', () => {
                const action = 'ASSET_RESOURCE_POST';
                const expected = {
                    model: 'Asset',
                    type: 'RESOURCE',
                    method: 'POST',
                };
                beforeEach(() => {
                    actionObject = Action_Object_1.default.toActionObject(action);
                });
                it('should create an POST ActionObject', () => {
                    chai_1.expect(actionObject).to.deep.equal(expected);
                });
            });
            describe('GET', () => {
                const action = 'ASSET_RESOURCE_GET';
                const expected = {
                    model: 'Asset',
                    type: 'RESOURCE',
                    method: 'GET',
                };
                beforeEach(() => {
                    actionObject = Action_Object_1.default.toActionObject(action);
                });
                it('should create an GET ActionObject', () => {
                    chai_1.expect(actionObject).to.deep.equal(expected);
                });
            });
            describe('PUT', () => {
                const action = 'ASSET_RESOURCE_PUT';
                const expected = {
                    model: 'Asset',
                    type: 'RESOURCE',
                    method: 'PUT',
                };
                beforeEach(() => {
                    actionObject = Action_Object_1.default.toActionObject(action);
                });
                it('should create an PUT ActionObject', () => {
                    chai_1.expect(actionObject).to.deep.equal(expected);
                });
            });
            describe('DELETE', () => {
                const action = 'ASSET_RESOURCE_DELETE';
                const expected = {
                    model: 'Asset',
                    type: 'RESOURCE',
                    method: 'DELETE',
                };
                beforeEach(() => {
                    actionObject = Action_Object_1.default.toActionObject(action);
                });
                it('should create an DELETE ActionObject', () => {
                    chai_1.expect(actionObject).to.deep.equal(expected);
                });
            });
        });
        describe('Association Action', () => {
            describe('POST', () => {
                const action = 'ASSET_SUB_RESOURCE_METADATA_POST';
                const expected = {
                    model: 'Asset',
                    type: 'SUB_RESOURCE',
                    method: 'POST',
                    subResource: 'Metadata'
                };
                beforeEach(() => {
                    actionObject = Action_Object_1.default.toActionObject(action);
                });
                it('should create an POST ActionObject', () => {
                    chai_1.expect(actionObject).to.deep.equal(expected);
                });
            });
            describe('GET', () => {
                const action = 'ASSET_SUB_RESOURCE_METADATA_GET';
                const expected = {
                    model: 'Asset',
                    type: 'SUB_RESOURCE',
                    method: 'GET',
                    subResource: 'Metadata'
                };
                beforeEach(() => {
                    actionObject = Action_Object_1.default.toActionObject(action);
                });
                it('should create an GET ActionObject', () => {
                    chai_1.expect(actionObject).to.deep.equal(expected);
                });
            });
            describe('PUT', () => {
                const action = 'ASSET_SUB_RESOURCE_METADATA_PUT';
                const expected = {
                    model: 'Asset',
                    type: 'SUB_RESOURCE',
                    method: 'PUT',
                    subResource: 'Metadata'
                };
                beforeEach(() => {
                    actionObject = Action_Object_1.default.toActionObject(action);
                });
                it('should create an PUT ActionObject', () => {
                    chai_1.expect(actionObject).to.deep.equal(expected);
                });
            });
            describe('DELETE', () => {
                const action = 'ASSET_SUB_RESOURCE_METADATA_DELETE';
                const expected = {
                    model: 'Asset',
                    type: 'SUB_RESOURCE',
                    method: 'DELETE',
                    subResource: 'Metadata'
                };
                beforeEach(() => {
                    actionObject = Action_Object_1.default.toActionObject(action);
                });
                it('should create an DELETE ActionObject', () => {
                    chai_1.expect(actionObject).to.deep.equal(expected);
                });
            });
        });
        describe('Remote Procedure Call - Action', () => {
            describe('ACTION', () => {
                const action = 'ASSET_ACTION_COPY';
                const expected = {
                    model: 'Asset',
                    type: 'ACTION',
                    method: 'POST',
                    rpcAction: 'Copy'
                };
                beforeEach(() => {
                    actionObject = Action_Object_1.default.toActionObject(action);
                });
                it('should create an DELETE ActionObject', () => {
                    chai_1.expect(actionObject).to.deep.equal(expected);
                });
            });
        });
    });
    describe('ActionObject.action', () => {
        describe('Collection', () => {
            describe('POST', () => {
                beforeEach(() => {
                    actionObject = new Action_Object_1.default({
                        type: types_action_1.default.LIST,
                        model: 'Asset',
                        method: types_http_method_1.default.POST
                    });
                });
                it('should create a Collection Action Name', () => {
                    // Test
                    const actionName = actionObject.actionName;
                    // Validate
                    chai_1.expect(actionName).to.equal('ASSET_LIST_POST');
                });
            });
            describe('GET', () => {
                beforeEach(() => {
                    actionObject = new Action_Object_1.default({
                        type: types_action_1.default.LIST,
                        model: 'Asset',
                        method: types_http_method_1.default.GET
                    });
                });
                it('should create a Collection Action Name', () => {
                    // Test
                    const actionName = actionObject.actionName;
                    // Validate
                    chai_1.expect(actionName).to.equal('ASSET_LIST_GET');
                });
            });
            describe('PUT', () => {
                beforeEach(() => {
                    actionObject = new Action_Object_1.default({
                        type: types_action_1.default.LIST,
                        model: 'Asset',
                        method: types_http_method_1.default.PUT
                    });
                });
                it('should create a Collection Action Name', () => {
                    // Test
                    const actionName = actionObject.actionName;
                    // Validate
                    chai_1.expect(actionName).to.equal('ASSET_LIST_PUT');
                });
            });
            describe('DELETE', () => {
                beforeEach(() => {
                    actionObject = new Action_Object_1.default({
                        type: types_action_1.default.LIST,
                        model: 'Asset',
                        method: types_http_method_1.default.DELETE
                    });
                });
                it('should create a Collection Action Name', () => {
                    // Test
                    const actionName = actionObject.actionName;
                    // Validate
                    chai_1.expect(actionName).to.equal('ASSET_LIST_DELETE');
                });
            });
        });
        describe('Resource', () => {
            describe('POST', () => {
                beforeEach(() => {
                    actionObject = new Action_Object_1.default({
                        type: types_action_1.default.RESOURCE,
                        model: 'Asset',
                        method: types_http_method_1.default.POST
                    });
                });
                it('should create a Resource Action Name', () => {
                    // Test
                    const actionName = actionObject.actionName;
                    // Validate
                    chai_1.expect(actionName).to.equal('ASSET_RESOURCE_POST');
                });
            });
            describe('GET', () => {
                beforeEach(() => {
                    actionObject = new Action_Object_1.default({
                        type: types_action_1.default.RESOURCE,
                        model: 'Asset',
                        method: types_http_method_1.default.GET
                    });
                });
                it('should create a Resource Action Name', () => {
                    // Test
                    const actionName = actionObject.actionName;
                    // Validate
                    chai_1.expect(actionName).to.equal('ASSET_RESOURCE_GET');
                });
            });
            describe('PUT', () => {
                beforeEach(() => {
                    actionObject = new Action_Object_1.default({
                        type: types_action_1.default.RESOURCE,
                        model: 'Asset',
                        method: types_http_method_1.default.PUT
                    });
                });
                it('should create a Resource Action Name', () => {
                    // Test
                    const actionName = actionObject.actionName;
                    // Validate
                    chai_1.expect(actionName).to.equal('ASSET_RESOURCE_PUT');
                });
            });
            describe('DELETE', () => {
                beforeEach(() => {
                    actionObject = new Action_Object_1.default({
                        type: types_action_1.default.RESOURCE,
                        model: 'Asset',
                        method: types_http_method_1.default.DELETE
                    });
                });
                it('should create a Resource Action Name', () => {
                    // Test
                    const actionName = actionObject.actionName;
                    // Validate
                    chai_1.expect(actionName).to.equal('ASSET_RESOURCE_DELETE');
                });
            });
        });
        describe('Association', () => {
            describe('POST', () => {
                beforeEach(() => {
                    actionObject = new Action_Object_1.default({
                        type: types_action_1.default.SUB_RESOURCE,
                        model: 'Asset',
                        method: types_http_method_1.default.POST,
                        subResource: 'Metadata'
                    });
                });
                it('should create a Association Action Name', () => {
                    // Test
                    const actionName = actionObject.actionName;
                    // Validate
                    chai_1.expect(actionName).to.equal('ASSET_SUB_RESOURCE_METADATA_POST');
                });
            });
            describe('GET', () => {
                beforeEach(() => {
                    actionObject = new Action_Object_1.default({
                        type: types_action_1.default.SUB_RESOURCE,
                        model: 'Asset',
                        method: types_http_method_1.default.GET,
                        subResource: 'Metadata'
                    });
                });
                it('should create a Association Action Name', () => {
                    // Test
                    const actionName = actionObject.actionName;
                    // Validate
                    chai_1.expect(actionName).to.equal('ASSET_SUB_RESOURCE_METADATA_GET');
                });
            });
            describe('PUT', () => {
                beforeEach(() => {
                    actionObject = new Action_Object_1.default({
                        type: types_action_1.default.SUB_RESOURCE,
                        model: 'Asset',
                        method: types_http_method_1.default.PUT,
                        subResource: 'Metadata'
                    });
                });
                it('should create a Association Action Name', () => {
                    // Test
                    const actionName = actionObject.actionName;
                    // Validate
                    chai_1.expect(actionName).to.equal('ASSET_SUB_RESOURCE_METADATA_PUT');
                });
            });
            describe('DELETE', () => {
                beforeEach(() => {
                    actionObject = new Action_Object_1.default({
                        type: types_action_1.default.SUB_RESOURCE,
                        model: 'Asset',
                        method: types_http_method_1.default.DELETE,
                        subResource: 'Metadata'
                    });
                });
                it('should create a Association Action Name', () => {
                    // Test
                    const actionName = actionObject.actionName;
                    // Validate
                    chai_1.expect(actionName).to.equal('ASSET_SUB_RESOURCE_METADATA_DELETE');
                });
            });
        });
    });
});
//# sourceMappingURL=Action.Object.spec.js.map