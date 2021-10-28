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
const types_http_method_1 = __importDefault(require("../../constants/types.http.method"));
const baseUrl = 'http://api.edisen.com';
describe('Action.Request', () => {
    let actionRequest;
    describe('ActionRequest.url - No Query', () => {
        describe('List Request', () => {
            describe('POST', () => {
                beforeEach(() => {
                    const actionProps = Action_Object_1.default.toActionObject('ASSET_TYPE_LIST_POST');
                    const action = new Action_Object_1.default(actionProps);
                    actionRequest = new Action_Request_1.default({
                        action,
                        data: {
                            type: 'collection',
                            teamId: 'team-123',
                        },
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
                it('should use the POST Method', () => {
                    // Test
                    const method = actionRequest.method;
                    // Validate
                    chai_1.expect(method).to.equal(types_http_method_1.default.POST);
                });
            });
            describe('GET', () => {
                beforeEach(() => {
                    const actionProps = Action_Object_1.default.toActionObject('ASSET_TYPE_LIST_GET');
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
                it('should use the GET Method', () => {
                    // Test
                    const method = actionRequest.method;
                    // Validate
                    chai_1.expect(method).to.equal(types_http_method_1.default.GET);
                });
            });
            describe('PUT', () => {
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
                it('should use the PUT Method', () => {
                    // Test
                    const method = actionRequest.method;
                    // Validate
                    chai_1.expect(method).to.equal(types_http_method_1.default.PUT);
                });
            });
            describe('DELETE', () => {
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
                it('should use the DELETE Method', () => {
                    // Test
                    const method = actionRequest.method;
                    // Validate
                    chai_1.expect(method).to.equal(types_http_method_1.default.DELETE);
                });
            });
        });
        describe('Resource Request', () => {
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
                it('should use the POST Method', () => {
                    // Test
                    const method = actionRequest.method;
                    // Validate
                    chai_1.expect(method).to.equal(types_http_method_1.default.POST);
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
                it('should use the GET Method', () => {
                    // Test
                    const method = actionRequest.method;
                    // Validate
                    chai_1.expect(method).to.equal(types_http_method_1.default.GET);
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
                it('should use the PUT Method', () => {
                    // Test
                    const method = actionRequest.method;
                    // Validate
                    chai_1.expect(method).to.equal(types_http_method_1.default.PUT);
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
                it('should use the DELETE Method', () => {
                    // Test
                    const method = actionRequest.method;
                    // Validate
                    chai_1.expect(method).to.equal(types_http_method_1.default.DELETE);
                });
            });
        });
        describe('Sub-Resource Request', () => {
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
                it('should use the POST Method', () => {
                    // Test
                    const method = actionRequest.method;
                    // Validate
                    chai_1.expect(method).to.equal(types_http_method_1.default.POST);
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
                it('should use the GET Method', () => {
                    // Test
                    const method = actionRequest.method;
                    // Validate
                    chai_1.expect(method).to.equal(types_http_method_1.default.GET);
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
                it('should use the PUT Method', () => {
                    // Test
                    const method = actionRequest.method;
                    // Validate
                    chai_1.expect(method).to.equal(types_http_method_1.default.PUT);
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
                it('should use the DELETE Method', () => {
                    // Test
                    const method = actionRequest.method;
                    // Validate
                    chai_1.expect(method).to.equal(types_http_method_1.default.DELETE);
                });
            });
        });
        describe('Action Request', () => {
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
    describe('ActionRequest.url - With Query', () => {
        const id = 'asset-id-123';
        const query = {
            teamId: 'team-id-123',
            fields: ['metadata', 'metadataFields', 'metadataRequirements']
        };
        const expectedQuery = `?teamId=${query.teamId}&fields[0]=metadata&fields[1]=metadataFields&fields[2]=metadataRequirements`;
        describe('List Request', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_LIST_GET');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    data: {
                        type: 'collection',
                        teamId: 'team-123',
                    },
                    baseUrl,
                    query
                });
            });
            it('should generate List URL from Action Name', () => {
                // Test
                const url = actionRequest.url;
                // Validate
                const expected = `${baseUrl}/assets${expectedQuery}`;
                chai_1.expect(url).to.equal(expected);
            });
        });
        describe('Resource Request', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_RESOURCE_GET');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    baseUrl,
                    query,
                    params: {
                        id
                    }
                });
            });
            it('should generate Resource URL from Action Name', () => {
                // Test
                const url = actionRequest.url;
                // Validate
                const expected = `${baseUrl}/assets/${id}${expectedQuery}`;
                chai_1.expect(url).to.equal(expected);
            });
        });
        describe('Sub-Resource Request', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_SUB_RESOURCE_METADATA_FIELDS_GET');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    data: {},
                    baseUrl,
                    query,
                    params: {
                        id
                    }
                });
            });
            it('should generate Resource URL from Action Name', () => {
                // Test
                const url = actionRequest.url;
                // Validate
                const expected = `${baseUrl}/assets/${id}/metadata_fields${expectedQuery}`;
                chai_1.expect(url).to.equal(expected);
            });
        });
        describe('Action Request', () => {
            const assetId = 'asset-id-123';
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_ACTION_COPY');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    data: {},
                    baseUrl,
                    params: {
                        id: assetId
                    },
                    query
                });
            });
            it('should generate Resource URL from Action Name', () => {
                // Test
                const url = actionRequest.url;
                // Validate
                const expected = `${baseUrl}/assets/actions/copy${expectedQuery}`;
                chai_1.expect(url).to.equal(expected);
            });
        });
    });
    describe('ActionRequest.url - urlOverride', () => {
        describe('urlOverride', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_TYPE_LIST_POST');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    baseUrl,
                    version: 'v2',
                    urlOverride: '/assets/:id/assets',
                    params: {
                        id: 'asset-id-abc'
                    }
                });
            });
            it('should generate a URL based on the urlOverride property', () => {
                // Test
                const urlPath = actionRequest.url;
                // Validate
                const expected = `${baseUrl}/v2/assets/asset-id-abc/assets`;
                chai_1.expect(urlPath).to.equal(expected);
            });
        });
    });
    describe('ActionRequest.urlPath', () => {
        describe('List Path', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_TYPE_LIST_POST');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    data: {
                        type: 'collection',
                        teamId: 'team-123',
                    },
                    baseUrl
                });
            });
            it('should generate List URL Path from Action Name', () => {
                // Test
                const urlPath = actionRequest.urlPath;
                // Validate
                const expected = `/asset_types`;
                chai_1.expect(urlPath).to.equal(expected);
            });
        });
        describe('Resource path', () => {
            const id = 'asset-type-id-123';
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
            it('should generate Resource URL Path from Action Name', () => {
                // Test
                const urlPath = actionRequest.urlPath;
                // Validate
                const expected = `/asset_types/${id}`;
                chai_1.expect(urlPath).to.equal(expected);
            });
        });
        describe('Sub-Resource Request', () => {
            const id = 'team-id-123';
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
            it('should generate Resource URL Path from Action Name', () => {
                // Test
                const urlPath = actionRequest.urlPath;
                // Validate
                const expected = `/teams/${id}/user_teams`;
                chai_1.expect(urlPath).to.equal(expected);
            });
        });
        describe('Action Request', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_ACTION_COPY');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    data: {},
                    baseUrl,
                });
            });
            it('should generate Resource URL Path from Action Name', () => {
                // Test
                const url = actionRequest.urlPath;
                // Validate
                const expected = `/assets/actions/copy`;
                chai_1.expect(url).to.equal(expected);
            });
        });
    });
    describe('ActionRequest.populateUrlPattern', () => {
        let urlPattern;
        let params;
        let urlPath;
        describe('No Params', () => {
            beforeEach(() => {
                urlPath = Action_Request_1.default.populateUrlPattern('/v3/assets', {});
            });
            it('should populate a urlPattern with a single value', () => {
                chai_1.expect(urlPath).to.equal('/v3/assets');
            });
        });
        describe('One Param', () => {
            beforeEach(() => {
                urlPath = Action_Request_1.default.populateUrlPattern('/node_a/:a', {
                    a: 'value_a'
                });
            });
            it('should populate a urlPattern with a single value', () => {
                const expected = '/node_a/value_a';
                chai_1.expect(urlPath).to.equal(expected);
            });
        });
        describe('Many Params', () => {
            beforeEach(() => {
                urlPath = Action_Request_1.default.populateUrlPattern('/node_a/:a/node_b/:b/node_c/:c', {
                    a: 'value_a',
                    b: 'value_b',
                    c: 'value_c'
                });
            });
            it('should populate a urlPattern with many values', () => {
                const expected = '/node_a/value_a/node_b/value_b/node_c/value_c';
                chai_1.expect(urlPath).to.equal(expected);
            });
        });
    });
    describe('ActionRequest.urlQuery', () => {
        const query = {
            teamId: 'team-id-123',
            creatorId: 'user-id-123',
            fields: ['metadata', 'metadataFields', 'metadataRequirements'],
        };
        const paging = {
            page: 0,
            pageSize: 10,
        };
        const sort = {
            sortBy: 'createdAt',
            sortOrder: 'ASC'
        };
        describe('One Primitive Query Arg', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_LIST_GET');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    baseUrl,
                    query: {
                        teamId: query.teamId
                    }
                });
            });
            it('should generate urlQuery with one single value arg', () => {
                // Test
                const urlQuery = actionRequest.urlQuery;
                // Validate
                const expected = `?teamId=${query.teamId}`;
                chai_1.expect(urlQuery).to.equal(expected);
            });
        });
        describe('One Array Query Arg', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_LIST_GET');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    baseUrl,
                    query: {
                        fields: query.fields
                    }
                });
            });
            it('should generate urlQuery with array value arg', () => {
                // Test
                const urlQuery = actionRequest.urlQuery;
                // Validate
                const expected = `?fields[0]=metadata&fields[1]=metadataFields&fields[2]=metadataRequirements`;
                chai_1.expect(urlQuery).to.equal(expected);
            });
        });
        describe('One Array of Objects Query Arg', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_LIST_GET');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    baseUrl,
                    query: {
                        sort: [
                            { sex: -1 },
                            { age: 1 }
                        ]
                    }
                });
            });
            it('should generate urlQuery with array value arg', () => {
                // Test
                const urlQuery = actionRequest.urlQuery;
                // Validate
                const expected = `?sort[0][sex]=-1&sort[1][age]=1`;
                chai_1.expect(urlQuery).to.equal(expected);
            });
        });
        describe('Many Mixed Query Args', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_LIST_GET');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    baseUrl,
                    query
                });
            });
            it('should generate urlQuery with array value arg', () => {
                // Test
                const urlQuery = actionRequest.urlQuery;
                // Validate
                const expected = `?teamId=${query.teamId}&creatorId=${query.creatorId}&fields[0]=metadata&fields[1]=metadataFields&fields[2]=metadataRequirements`;
                chai_1.expect(urlQuery).to.equal(expected);
            });
        });
        describe('Paging Args', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_LIST_GET');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    baseUrl,
                    paging
                });
            });
            it('should generate urlQuery for paging', () => {
                // Test
                const urlQuery = actionRequest.urlQuery;
                // Validate
                const expected = `?page=${paging.page}&pageSize=${paging.pageSize}`;
                chai_1.expect(urlQuery).to.equal(expected);
            });
        });
        describe('Sort Args', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_LIST_GET');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    baseUrl,
                    sort
                });
            });
            it('should generate urlQuery for paging', () => {
                // Test
                const urlQuery = actionRequest.urlQuery;
                // Validate
                const expected = `?sortBy=${sort.sortBy}&sortOrder=${sort.sortOrder}`;
                chai_1.expect(urlQuery).to.equal(expected);
            });
        });
    });
    describe('ActionRequest.requestMethod', () => {
        describe('POST', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_LIST_POST');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    baseUrl,
                });
            });
            it('should generate Camel Case requestMethod name \'post\'', () => {
                // Test
                const requestMethod = actionRequest.requestMethod;
                // Validate
                const expected = `post`;
                chai_1.expect(requestMethod).to.equal(expected);
            });
        });
        describe('GET', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_LIST_GET');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    baseUrl,
                });
            });
            it('should generate Camel Case requestMethod name \'get\'', () => {
                // Test
                const requestMethod = actionRequest.requestMethod;
                // Validate
                const expected = `get`;
                chai_1.expect(requestMethod).to.equal(expected);
            });
        });
        describe('PUT', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_LIST_PUT');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    baseUrl,
                });
            });
            it('should generate Camel Case requestMethod name \'put\'', () => {
                // Test
                const requestMethod = actionRequest.requestMethod;
                // Validate
                const expected = `put`;
                chai_1.expect(requestMethod).to.equal(expected);
            });
        });
        describe('DELETE', () => {
            beforeEach(() => {
                const actionProps = Action_Object_1.default.toActionObject('ASSET_LIST_DELETE');
                const action = new Action_Object_1.default(actionProps);
                actionRequest = new Action_Request_1.default({
                    action,
                    baseUrl,
                });
            });
            it('should generate Camel Case requestMethod name \'delete\'', () => {
                // Test
                const requestMethod = actionRequest.requestMethod;
                // Validate
                const expected = `delete`;
                chai_1.expect(requestMethod).to.equal(expected);
            });
        });
    });
});
//# sourceMappingURL=Action.Request.spec.js.map