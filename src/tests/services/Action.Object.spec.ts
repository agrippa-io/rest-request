import { expect } from 'chai'
import TYPE_ACTION from '../../constants/types.action'
import TYPE_HTTP_METHOD from '../../constants/types.http.method'
// Test
import ActionObject, {InterfaceActionObject} from '../../services/Action.Object'

describe('ActionObject', () => {
  let actionObject
  let actionProps : InterfaceActionObject
  describe('Constructor', () => {

    describe('Association', () => {

      describe('Missing Action Props', () => {
        
        beforeEach(() => {
          actionProps = {
            model: 'Asset',
            type: TYPE_ACTION.SUB_RESOURCE,
            method: TYPE_HTTP_METHOD.GET
          }
        })

        it('should throw Error if no \'action.subResource\'', () => {
          // Test
          expect(() => { new ActionObject(actionProps) }).to.throw('Associations requires \'action.subResource\'')
        })
      })

    })
  })

  describe('ActionObject.toActionObject(_action)', () => {

    describe('Collection Action', () => {

      describe('POST', () => {
        
        const action : string = 'ASSET_LIST_POST'
        const expected : InterfaceActionObject = {
          model: 'Asset',
          type: 'LIST',
          method: 'POST',
        }
        beforeEach(() => {
          actionObject = ActionObject.toActionObject(action)
        })

        it('should create an POST ActionObject', () => {
          expect(actionObject).to.deep.equal(expected)
        })
      })

      describe('GET', () => {
        
        const action : string = 'ASSET_LIST_GET'
        const expected : InterfaceActionObject = {
          model: 'Asset',
          type: 'LIST',
          method: 'GET',
        }
        beforeEach(() => {
          actionObject = ActionObject.toActionObject(action)
        })

        it('should create an GET ActionObject', () => {
          expect(actionObject).to.deep.equal(expected)
        })
      })

      describe('PUT', () => {
        
        const action : string = 'ASSET_LIST_PUT'
        const expected : InterfaceActionObject = {
          model: 'Asset',
          type: 'LIST',
          method: 'PUT',
        }
        beforeEach(() => {
          actionObject = ActionObject.toActionObject(action)
        })

        it('should create an PUT ActionObject', () => {
          expect(actionObject).to.deep.equal(expected)
        })
      })

      describe('DELETE', () => {
        
        const action : string = 'ASSET_LIST_DELETE'
        const expected : InterfaceActionObject = {
          model: 'Asset',
          type: 'LIST',
          method: 'DELETE',
        }
        beforeEach(() => {
          actionObject = ActionObject.toActionObject(action)
        })

        it('should create an DELETE ActionObject', () => {
          expect(actionObject).to.deep.equal(expected)
        })
      })

    })

    describe('Resource Action', () => {
      describe('POST', () => {
        
        const action : string = 'ASSET_RESOURCE_POST'
        const expected : InterfaceActionObject = {
          model: 'Asset',
          type: 'RESOURCE',
          method: 'POST',
        }
        beforeEach(() => {
          actionObject = ActionObject.toActionObject(action)
        })

        it('should create an POST ActionObject', () => {
          expect(actionObject).to.deep.equal(expected)
        })
      })

      describe('GET', () => {
        
        const action : string = 'ASSET_RESOURCE_GET'
        const expected : InterfaceActionObject = {
          model: 'Asset',
          type: 'RESOURCE',
          method: 'GET',
        }
        beforeEach(() => {
          actionObject = ActionObject.toActionObject(action)
        })

        it('should create an GET ActionObject', () => {
          expect(actionObject).to.deep.equal(expected)
        })
      })

      describe('PUT', () => {
        
        const action : string = 'ASSET_RESOURCE_PUT'
        const expected : InterfaceActionObject = {
          model: 'Asset',
          type: 'RESOURCE',
          method: 'PUT',
        }
        beforeEach(() => {
          actionObject = ActionObject.toActionObject(action)
        })

        it('should create an PUT ActionObject', () => {
          expect(actionObject).to.deep.equal(expected)
        })
      })

      describe('DELETE', () => {
        
        const action : string = 'ASSET_RESOURCE_DELETE'
        const expected : InterfaceActionObject = {
          model: 'Asset',
          type: 'RESOURCE',
          method: 'DELETE',
        }
        beforeEach(() => {
          actionObject = ActionObject.toActionObject(action)
        })

        it('should create an DELETE ActionObject', () => {
          expect(actionObject).to.deep.equal(expected)
        })
      })

    })

    describe('Association Action', () => {
      describe('POST', () => {
        
        const action : string = 'ASSET_SUB_RESOURCE_METADATA_POST'
        const expected : InterfaceActionObject = {
          model: 'Asset',
          type: 'SUB_RESOURCE',
          method: 'POST',
          subResource: 'Metadata'
        }
        beforeEach(() => {
          actionObject = ActionObject.toActionObject(action)
        })

        it('should create an POST ActionObject', () => {
          expect(actionObject).to.deep.equal(expected)
        })
      })

      describe('GET', () => {
        
        const action : string = 'ASSET_SUB_RESOURCE_METADATA_GET'
        const expected : InterfaceActionObject = {
          model: 'Asset',
          type: 'SUB_RESOURCE',
          method: 'GET',
          subResource: 'Metadata'
        }
        beforeEach(() => {
          actionObject = ActionObject.toActionObject(action)
        })

        it('should create an GET ActionObject', () => {
          expect(actionObject).to.deep.equal(expected)
        })
      })

      describe('PUT', () => {
        
        const action : string = 'ASSET_SUB_RESOURCE_METADATA_PUT'
        const expected : InterfaceActionObject = {
          model: 'Asset',
          type: 'SUB_RESOURCE',
          method: 'PUT',
          subResource: 'Metadata'
        }
        beforeEach(() => {
          actionObject = ActionObject.toActionObject(action)
        })

        it('should create an PUT ActionObject', () => {
          expect(actionObject).to.deep.equal(expected)
        })
      })

      describe('DELETE', () => {
        
        const action : string = 'ASSET_SUB_RESOURCE_METADATA_DELETE'
        const expected : InterfaceActionObject = {
          model: 'Asset',
          type: 'SUB_RESOURCE',
          method: 'DELETE',
          subResource: 'Metadata'
        }
        beforeEach(() => {
          actionObject = ActionObject.toActionObject(action)
        })

        it('should create an DELETE ActionObject', () => {
          expect(actionObject).to.deep.equal(expected)
        })
      })
    })

    describe('Remote Procedure Call - Action', () => {
      describe('ACTION', () => {
        
        const action : string = 'ASSET_ACTION_COPY'
        const expected : InterfaceActionObject = {
          model: 'Asset',
          type: 'ACTION',
          method: 'POST',
          rpcAction: 'Copy'
        }
        beforeEach(() => {
          actionObject = ActionObject.toActionObject(action)
        })

        it('should create an DELETE ActionObject', () => {
          expect(actionObject).to.deep.equal(expected)
        })
      })
    })
  })

  describe('ActionObject.action', () => {

    describe('Collection', () => {

      describe('POST', () => {
        
        beforeEach(() => {
          actionObject = new ActionObject({
            type: TYPE_ACTION.LIST,
            model: 'Asset',
            method: TYPE_HTTP_METHOD.POST
          })
        })

        it('should create a Collection Action Name', () => {
          // Test
          const actionName = actionObject.actionName
          // Validate
          expect(actionName).to.equal('ASSET_LIST_POST')
        })

      })

      describe('GET', () => {
        
        beforeEach(() => {
          actionObject = new ActionObject({
            type: TYPE_ACTION.LIST,
            model: 'Asset',
            method: TYPE_HTTP_METHOD.GET
          })
        })

        it('should create a Collection Action Name', () => {
          // Test
          const actionName = actionObject.actionName
          // Validate
          expect(actionName).to.equal('ASSET_LIST_GET')
        })
      })

      describe('PUT', () => {
        
        beforeEach(() => {
          actionObject = new ActionObject({
            type: TYPE_ACTION.LIST,
            model: 'Asset',
            method: TYPE_HTTP_METHOD.PUT
          })
        })

        it('should create a Collection Action Name', () => {
          // Test
          const actionName = actionObject.actionName
          // Validate
          expect(actionName).to.equal('ASSET_LIST_PUT')
        })
      })

      describe('DELETE', () => {
        
        beforeEach(() => {
          actionObject = new ActionObject({
            type: TYPE_ACTION.LIST,
            model: 'Asset',
            method: TYPE_HTTP_METHOD.DELETE
          })
        })

        it('should create a Collection Action Name', () => {
          // Test
          const actionName = actionObject.actionName
          // Validate
          expect(actionName).to.equal('ASSET_LIST_DELETE')
        })
      })

    })

    describe('Resource', () => {
      describe('POST', () => {
        
        beforeEach(() => {
          actionObject = new ActionObject({
            type: TYPE_ACTION.RESOURCE,
            model: 'Asset',
            method: TYPE_HTTP_METHOD.POST
          })
        })

        it('should create a Resource Action Name', () => {
          // Test
          const actionName = actionObject.actionName
          // Validate
          expect(actionName).to.equal('ASSET_RESOURCE_POST')
        })

      })

      describe('GET', () => {
        
        beforeEach(() => {
          actionObject = new ActionObject({
            type: TYPE_ACTION.RESOURCE,
            model: 'Asset',
            method: TYPE_HTTP_METHOD.GET
          })
        })

        it('should create a Resource Action Name', () => {
          // Test
          const actionName = actionObject.actionName
          // Validate
          expect(actionName).to.equal('ASSET_RESOURCE_GET')
        })
      })

      describe('PUT', () => {
        
        beforeEach(() => {
          actionObject = new ActionObject({
            type: TYPE_ACTION.RESOURCE,
            model: 'Asset',
            method: TYPE_HTTP_METHOD.PUT
          })
        })

        it('should create a Resource Action Name', () => {
          // Test
          const actionName = actionObject.actionName
          // Validate
          expect(actionName).to.equal('ASSET_RESOURCE_PUT')
        })
      })

      describe('DELETE', () => {
        
        beforeEach(() => {
          actionObject = new ActionObject({
            type: TYPE_ACTION.RESOURCE,
            model: 'Asset',
            method: TYPE_HTTP_METHOD.DELETE
          })
        })

        it('should create a Resource Action Name', () => {
          // Test
          const actionName = actionObject.actionName
          // Validate
          expect(actionName).to.equal('ASSET_RESOURCE_DELETE')
        })
      })

    })

    describe('Association', () => {
      describe('POST', () => {
        
        beforeEach(() => {
          actionObject = new ActionObject({
            type: TYPE_ACTION.SUB_RESOURCE,
            model: 'Asset',
            method: TYPE_HTTP_METHOD.POST,
            subResource: 'Metadata'
          })
        })

        it('should create a Association Action Name', () => {
          // Test
          const actionName = actionObject.actionName
          // Validate
          expect(actionName).to.equal('ASSET_SUB_RESOURCE_METADATA_POST')
        })

      })

      describe('GET', () => {
        
        beforeEach(() => {
          actionObject = new ActionObject({
            type: TYPE_ACTION.SUB_RESOURCE,
            model: 'Asset',
            method: TYPE_HTTP_METHOD.GET,
            subResource: 'Metadata'
          })
        })

        it('should create a Association Action Name', () => {
          // Test
          const actionName = actionObject.actionName
          // Validate
          expect(actionName).to.equal('ASSET_SUB_RESOURCE_METADATA_GET')
        })
      })

      describe('PUT', () => {
        
        beforeEach(() => {
          actionObject = new ActionObject({
            type: TYPE_ACTION.SUB_RESOURCE,
            model: 'Asset',
            method: TYPE_HTTP_METHOD.PUT,
            subResource: 'Metadata'
          })
        })

        it('should create a Association Action Name', () => {
          // Test
          const actionName = actionObject.actionName
          // Validate
          expect(actionName).to.equal('ASSET_SUB_RESOURCE_METADATA_PUT')
        })
      })

      describe('DELETE', () => {
        
        beforeEach(() => {
          actionObject = new ActionObject({
            type: TYPE_ACTION.SUB_RESOURCE,
            model: 'Asset',
            method: TYPE_HTTP_METHOD.DELETE,
            subResource: 'Metadata'
          })
        })

        it('should create a Association Action Name', () => {
          // Test
          const actionName = actionObject.actionName
          // Validate
          expect(actionName).to.equal('ASSET_SUB_RESOURCE_METADATA_DELETE')
        })
      })

    })

  })
})