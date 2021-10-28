import { expect } from 'chai'
import ActionObject, { InterfaceActionObject } from '../../services/Action.Object'
// Test
import ActionRequest from '../../services/Action.Request'
// Constants
const baseUrl = 'https://v3-api.dev.edisen.com'
const version = 'v3'

describe.skip('Action.Request', () => {
  let actionRequest
  describe('ActionRequest.url - No Query', () => {

    describe('List Request', () => {

      describe.skip('POST', () => {
        
        let actionName = 'TEAM_LIST_POST'
        beforeEach(() => {
          const actionProps : InterfaceActionObject = ActionObject.toActionObject(actionName)
          const action : ActionObject = new ActionObject(actionProps)
          const name = `Edisen V3 Team ${new Date()}`
          actionRequest = new ActionRequest({
            action,
            data: {
              name
            },
            baseUrl,
            version
          })
        })

        it('should execute a POST request', async () => {
          // Test
          try {
            const result = await actionRequest.perform()
            console.log('result', result)
            const { data } = result
            // Validate
            const expected = { name: 'Edisen V3 Team' }
            expect(data.name).to.equal(expected.name)
            expect(data.id).to.exist
          } catch (err) {
            console.log(`Failed to run POST Request for '${actionName}'`, err)
            expect(true).to.equal(false)
          }
        })
      })

      describe('GET', () => {
        
        let actionName = 'TEAM_LIST_GET'
        beforeEach(() => {
          const actionProps : InterfaceActionObject = ActionObject.toActionObject(actionName)
          const action : ActionObject = new ActionObject(actionProps)
          actionRequest = new ActionRequest({
            action,
            baseUrl,
            version
          })
        })

        it('should execute a GET request', async () => {
          // Test
          try {
            const result = await actionRequest.perform()
            // Validate
            expect(result.status).to.equal(200)
          } catch (err) {
            console.log(`Failed to run GET Request for '${actionName}'`, err)
            expect(true).to.equal(false)
          }
        })
      })

      describe.skip('PUT', () => {
        
        beforeEach(() => {
          const actionProps : InterfaceActionObject = ActionObject.toActionObject('ASSET_TYPE_LIST_PUT')
          const action : ActionObject = new ActionObject(actionProps)
          actionRequest = new ActionRequest({
            action,
            baseUrl
          })
        })

        it('should generate List URL from Action Name', () => {
          // Test
          const url = actionRequest.url
          // Validate
          const expected = `${baseUrl}/asset_types`
          expect(url).to.equal(expected)
        })
      })

      describe.skip('DELETE', () => {
        
        beforeEach(() => {
          const actionProps : InterfaceActionObject = ActionObject.toActionObject('ASSET_TYPE_LIST_DELETE')
          const action : ActionObject = new ActionObject(actionProps)
          actionRequest = new ActionRequest({
            action,
            baseUrl
          })
        })

        it('should generate List URL from Action Name', () => {
          // Test
          const url = actionRequest.url
          // Validate
          const expected = `${baseUrl}/asset_types`
          expect(url).to.equal(expected)
        })
      })

    })

    describe.skip('Resource Request', () => {
      const teamId = 'team-id-123'
      const id = 'asset-type-id-123'
      describe('POST', () => {
        
        beforeEach(() => {
          const actionProps : InterfaceActionObject = ActionObject.toActionObject('ASSET_TYPE_RESOURCE_POST')
          const action : ActionObject = new ActionObject(actionProps)
          actionRequest = new ActionRequest({
            action,
            data: {
              type: 'collection',
              teamId
            },
            baseUrl,
            params: {
              id
            }
          })
        })

        it('should generate List URL from ActionObject', () => {
          // Test
          const url = actionRequest.url
          // Validate
          const expected = `${baseUrl}/asset_types/${id}`
          expect(url).to.equal(expected)
        })
      })

      describe('GET', () => {
        
        beforeEach(() => {
          const actionProps : InterfaceActionObject = ActionObject.toActionObject('ASSET_TYPE_RESOURCE_GET')
          const action : ActionObject = new ActionObject(actionProps)
          actionRequest = new ActionRequest({
            action,
            baseUrl,
            params: {
              id
            }
          })
        })

        it('should generate Resource URL from Action Name', () => {
          // Test
          const url = actionRequest.url
          // Validate
          const expected = `${baseUrl}/asset_types/${id}`
          expect(url).to.equal(expected)
        })
      })

      describe('PUT', () => {
        
        beforeEach(() => {
          const actionProps : InterfaceActionObject = ActionObject.toActionObject('ASSET_TYPE_RESOURCE_PUT')
          const action : ActionObject = new ActionObject(actionProps)
          actionRequest = new ActionRequest({
            action,
            baseUrl,
            params: {
              id
            }
          })
        })

        it('should generate Resource URL from Action Name', () => {
          // Test
          const url = actionRequest.url
          // Validate
          const expected = `${baseUrl}/asset_types/${id}`
          expect(url).to.equal(expected)
        })

      })

      describe('DELETE', () => {
        
        beforeEach(() => {
          const actionProps : InterfaceActionObject = ActionObject.toActionObject('ASSET_TYPE_RESOURCE_DELETE')
          const action : ActionObject = new ActionObject(actionProps)
          actionRequest = new ActionRequest({
            action,
            baseUrl,
            params: {
              id
            }
          })
        })

        it('should generate List URL from Action Name', () => {
          // Test
          const url = actionRequest.url
          // Validate
          const expected = `${baseUrl}/asset_types/${id}`
          expect(url).to.equal(expected)
        })
      })

    })

    describe.skip('Sub-Resource Request', () => {
      
      const id = 'team-id-123'
      const teamId = 'team-id-123'
      const userId = 'user-id-123'
      describe('POST', () => {
        
        beforeEach(() => {
          const actionProps : InterfaceActionObject = ActionObject.toActionObject('TEAM_SUB_RESOURCE_USER_TEAMS_POST')
          const action : ActionObject = new ActionObject(actionProps)
          actionRequest = new ActionRequest({
            action,
            data: {
              teamId,
              userId
            },
            baseUrl,
            params: {
              id
            }
          })
        })

        it('should generate List URL from Action Name', () => {
          // Test
          const url = actionRequest.url
          // Validate
          const expected = `${baseUrl}/teams/${id}/user_teams`
          expect(url).to.equal(expected)
        })
      })

      describe('GET', () => {
        
        beforeEach(() => {
          const actionProps : InterfaceActionObject = ActionObject.toActionObject('TEAM_SUB_RESOURCE_USER_TEAMS_GET')
          const action : ActionObject = new ActionObject(actionProps)
          actionRequest = new ActionRequest({
            action,
            baseUrl,
            params: {
              id
            }
          })
        })

        it('should generate Resource URL from Action Name', () => {
          // Test
          const url = actionRequest.url
          // Validate
          const expected = `${baseUrl}/teams/${id}/user_teams`
          expect(url).to.equal(expected)
        })
      })

      describe('PUT', () => {
        
        beforeEach(() => {
          const actionProps : InterfaceActionObject = ActionObject.toActionObject('TEAM_SUB_RESOURCE_USER_TEAMS_PUT')
          const action : ActionObject = new ActionObject(actionProps)
          actionRequest = new ActionRequest({
            action,
            baseUrl,
            params: {
              id
            }
          })
        })

        it('should generate Resource URL from Action Name', () => {
          // Test
          const url = actionRequest.url
          // Validate
          const expected = `${baseUrl}/teams/${id}/user_teams`
          expect(url).to.equal(expected)
        })
      })

      describe('DELETE', () => {
        
        beforeEach(() => {
          const actionProps : InterfaceActionObject = ActionObject.toActionObject('TEAM_SUB_RESOURCE_USER_TEAMS_DELETE')
          const action : ActionObject = new ActionObject(actionProps)
          actionRequest = new ActionRequest({
            action,
            baseUrl,
            params: {
              id
            }
          })
        })

        it('should generate List URL from Action Name', () => {
          // Test
          const url = actionRequest.url
          // Validate
          const expected = `${baseUrl}/teams/${id}/user_teams`
          expect(url).to.equal(expected)
        })
      })
    })

    describe.skip('Action Request', () => {
      

      beforeEach(() => {
        const actionProps : InterfaceActionObject = ActionObject.toActionObject('ASSET_ACTION_COPY')
        const action : ActionObject = new ActionObject(actionProps)
        actionRequest = new ActionRequest({
          action,
          data: {},
          baseUrl,
        })
      })

      it('should generate Resource URL from Action Name', () => {
        // Test
        const url = actionRequest.url
        // Validate
        const expected = `${baseUrl}/assets/actions/copy`
        expect(url).to.equal(expected)
      })
    })

  })

})