"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const Action_Object_1 = __importDefault(require("../../services/Action.Object"));
// Test
const Action_Request_1 = __importDefault(require("../../services/Action.Request"));
// Constants
const baseUrl = 'https://v3-api.dev.edisen.com';
const version = 'v3';
describe.skip('Action.Request', () => {
    let actionRequest;
    describe('ActionRequest.url - No Query', () => {
        describe('List Request', () => {
            describe.skip('POST', () => {
                let actionName = 'TEAM_LIST_POST';
                beforeEach(() => {
                    const actionProps = Action_Object_1.default.toActionObject(actionName);
                    const action = new Action_Object_1.default(actionProps);
                    const name = `Edisen V3 Team ${new Date()}`;
                    actionRequest = new Action_Request_1.default({
                        action,
                        data: {
                            name
                        },
                        baseUrl,
                        version
                    });
                });
                it('should execute a POST request', async () => {
                    // Test
                    try {
                        const result = await actionRequest.perform();
                        console.log('result', result);
                        const { data } = result;
                        // Validate
                        const expected = { name: 'Edisen V3 Team' };
                        chai_1.expect(data.name).to.equal(expected.name);
                        chai_1.expect(data.id).to.exist;
                    }
                    catch (err) {
                        console.log(`Failed to run POST Request for '${actionName}'`, err);
                        chai_1.expect(true).to.equal(false);
                    }
                });
            });
            describe('GET', () => {
                let actionName = 'TEAM_LIST_GET';
                beforeEach(() => {
                    const actionProps = Action_Object_1.default.toActionObject(actionName);
                    const action = new Action_Object_1.default(actionProps);
                    actionRequest = new Action_Request_1.default({
                        action,
                        baseUrl,
                        version
                    });
                });
                it('should execute a GET request', async () => {
                    // Test
                    try {
                        const result = await actionRequest.perform();
                        // Validate
                        chai_1.expect(result.status).to.equal(200);
                    }
                    catch (err) {
                        console.log(`Failed to run GET Request for '${actionName}'`, err);
                        chai_1.expect(true).to.equal(false);
                    }
                });
            });
            describe.skip('PUT', () => {
                beforeEach(() => {
                    const actionProps = Action_Object_1.default.toActionObject('ASSET_TYPE_LIST_PUT');
                    const action = new Action_Object_1.default(actionProps);
                    actionRequest = new Action_Request_1.default({
                        action,
                        baseUrl
                    });
                });
                it('should generate List URL from Action Name', () => {
                    // Test
                    const url = actionRequest.url;
                    // Validate
                    const expected = `${baseUrl}/asset_types`;
                    chai_1.expect(url).to.equal(expected);
                });
            });
            describe.skip('DELETE', () => {
                beforeEach(() => {
                    const actionProps = Action_Object_1.default.toActionObject('ASSET_TYPE_LIST_DELETE');
                    const action = new Action_Object_1.default(actionProps);
                    actionRequest = new Action_Request_1.default({
                        action,
                        baseUrl
                    });
                });
                it('should generate List URL from Action Name', () => {
                    // Test
                    const url = actionRequest.url;
                    // Validate
                    const expected = `${baseUrl}/asset_types`;
                    chai_1.expect(url).to.equal(expected);
                });
            });
        });
        describe.skip('Resource Request', () => {
            const teamId = 'team-id-123';
            const id = 'asset-type-id-123';
            describe('POST', () => {
                beforeEach(() => {
                    const actionProps = Action_Object_1.default.toActionObject('ASSET_TYPE_RESOURCE_POST');
                    const action = new Action_Object_1.default(actionProps);
                    actionRequest = new Action_Request_1.default({
                        action,
                        data: {
                            type: 'collection',
                            teamId
                        },
                        baseUrl,
                        params: {
                            id
                        }
                    });
                });
                it('should generate List URL from ActionObject', () => {
                    // Test
                    const url = actionRequest.url;
                    // Validate
                    const expected = `${baseUrl}/asset_types/${id}`;
                    chai_1.expect(url).to.equal(expected);
                });
            });
            describe('GET', () => {
                beforeEach(() => {
                    const actionProps = Action_Object_1.default.toActionObject('ASSET_TYPE_RESOURCE_GET');
                    const action = new Action_Object_1.default(actionProps);
                    actionRequest = new Action_Request_1.default({
                        action,
                        baseUrl,
                        params: {
                            id
                        }
                    });
                });
                it('should generate Resource URL from Action Name', () => {
                    // Test
                    const url = actionRequest.url;
                    // Validate
                    const expected = `${baseUrl}/asset_types/${id}`;
                    chai_1.expect(url).to.equal(expected);
                });
            });
            describe('PUT', () => {
                beforeEach(() => {
                    const actionProps = Action_Object_1.default.toActionObject('ASSET_TYPE_RESOURCE_PUT');
                    const action = new Action_Object_1.default(actionProps);
                    actionRequest = new Action_Request_1.default({
                        action,
                        baseUrl,
                        params: {
                            id
                        }
                    });
                });
                it('should generate Resource URL from Action Name', () => {
                    // Test
                    const url = actionRequest.url;
                    // Validate
                    const expected = `${baseUrl}/asset_types/${id}`;
                    chai_1.expect(url).to.equal(expected);
                });
            });
            describe('DELETE', () => {
                beforeEach(() => {
                    const actionProps = Action_Object_1.default.toActionObject('ASSET_TYPE_RESOURCE_DELETE');
                    const action = new Action_Object_1.default(actionProps);
                    actionRequest = new Action_Request_1.default({
                        action,
                        baseUrl,
                        params: {
                            id
                        }
                    });
                });
                it('should generate List URL from Action Name', () => {
                    // Test
                    const url = actionRequest.url;
                    // Validate
                    const expected = `${baseUrl}/asset_types/${id}`;
                    chai_1.expect(url).to.equal(expected);
                });
            });
        });
        describe.skip('Sub-Resource Request', () => {
            const id = 'team-id-123';
            const teamId = 'team-id-123';
            const userId = 'user-id-123';
            describe('POST', () => {
                beforeEach(() => {
                    const actionProps = Action_Object_1.default.toActionObject('TEAM_SUB_RESOURCE_USER_TEAMS_POST');
                    const action = new Action_Object_1.default(actionProps);
                    actionRequest = new Action_Request_1.default({
                        action,
                        data: {
                            teamId,
                            userId
                        },
                        baseUrl,
                        params: {
                            id
                        }
                    });
                });
                it('should generate List URL from Action Name', () => {
                    // Test
                    const url = actionRequest.url;
                    // Validate
                    const expected = `${baseUrl}/teams/${id}/user_teams`;
                    chai_1.expect(url).to.equal(expected);
                });
            });
            describe('GET', () => {
                beforeEach(() => {
                    const actionProps = Action_Object_1.default.toActionObject('TEAM_SUB_RESOURCE_USER_TEAMS_GET');
                    const action = new Action_Object_1.default(actionProps);
                    actionRequest = new Action_Request_1.default({
                        action,
                        baseUrl,
                        params: {
                            id
                        }
                    });
                });
                it('should generate Resource URL from Action Name', () => {
                    // Test
                    const url = actionRequest.url;
                    // Validate
                    const expected = `${baseUrl}/teams/${id}/user_teams`;
                    chai_1.expect(url).to.equal(expected);
                });
            });
            describe('PUT', () => {
                beforeEach(() => {
                    const actionProps = Action_Object_1.default.toActionObject('TEAM_SUB_RESOURCE_USER_TEAMS_PUT');
                    const action = new Action_Object_1.default(actionProps);
                    actionRequest = new Action_Request_1.default({
                        action,
                        baseUrl,
                        params: {
                            id
                        }
                    });
                });
                it('should generate Resource URL from Action Name', () => {
                    // Test
                    const url = actionRequest.url;
                    // Validate
                    const expected = `${baseUrl}/teams/${id}/user_teams`;
                    chai_1.expect(url).to.equal(expected);
                });
            });
            describe('DELETE', () => {
                beforeEach(() => {
                    const actionProps = Action_Object_1.default.toActionObject('TEAM_SUB_RESOURCE_USER_TEAMS_DELETE');
                    const action = new Action_Object_1.default(actionProps);
                    actionRequest = new Action_Request_1.default({
                        action,
                        baseUrl,
                        params: {
                            id
                        }
                    });
                });
                it('should generate List URL from Action Name', () => {
                    // Test
                    const url = actionRequest.url;
                    // Validate
                    const expected = `${baseUrl}/teams/${id}/user_teams`;
                    chai_1.expect(url).to.equal(expected);
                });
            });
        });
        describe.skip('Action Request', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_ACTION_COPY');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    data: {},
                    baseUrl,
                });
            });
            it('should generate Resource URL from Action Name', () => {
                // Test
                const url = actionRequest.url;
                // Validate
                const expected = `${baseUrl}/assets/actions/copy`;
                chai_1.expect(url).to.equal(expected);
            });
        });
    });
});
//# sourceMappingURL=Action.Request.spec.js.map