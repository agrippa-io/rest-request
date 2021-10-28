# edisen-rest-request
Used to make requests to REST Express applications following `edisen-api-express`
REST conventions defined by the San Diego Edisen Development Team.

## Components
`edisen-rest-request` contains the following components:
 - `ActionObject` - A class responsible for validating `ActionRequest` configuration
 - `ActionRequest` - A class responsible for building and firing RESTful API Requests

### ActionObject
ActionObject is constructed using a single argument object named `props`. `props`
has a limited set of valid properties
 
#### `resource` [optional]
The API Resource for which to perform the request

#### `method` [optional]
HTTP Method used for the `ActionRequest`. The provided value match the `HTTP Methods` 
available in the `axios` library.

##### `method` options
The provided value must be in `CONSTANT_CASE`:
 - `POST` - Sends data for the API
 - `GET` - Retrieves data from the API
 - `PUT` - Sends data to update a resource in the API
 - `DELETE` - Removes data from the API

#### `type` [optional]
A single Action Type from the `/constants/types.action` enumeration used to determine
which type of `URL Pattern` to contstruct.

##### type options
The provided value must be in `CONSTANT_CASE`:
   - `LIST` - Used for data interaction with multiple records
   - `RESOURCE` - Used for data interaction with a single record
   - `SUB_RESOURCE` - Used for data interaction with a `RESOURCE`'s `SUB_RESOURCE`
   (Association)
   - `ACTION` - Used to perform a `Remote Procedural Call`

#### `subResource` [optional]
The name of the `SUB_RESOURCE` used for data interaction. This is `required` for
when `type: TYPES_ACTION.SUB_RESOURCE`

#### `data` [optional]
The `HTTP Request Body`. Required for `POST` and `PUT` requests.

#### `params` [optional]
An object with values `keyed` by `URL Param` variable names.

For example, `/resouce/:id/subResource` accepts a `URL Param` variable named `id`.

The params object would be:
```
{
  id: 'resource-id-123'
}
```

#### `query`
Accepts an object of parameters to append to the `URL Query`

For example, the following query:
```
{
  minAge: 21,
  maxAge: 65,
  sex: 'female',
  deparment: ['Development', 'DevOps', 'Hardware'] 
}
```
would construct a `URL Query` create:
`?minAge=21&maxAge=65&sex=female&department[]=Development&department[]=DevOps&department[]=Hardware`
 
#### `sort`
Accepts an object of sort parameters appended to the `URL Query`
```
{
  sortOrder: 'ASC' || 'DESC',   // Accending or Descending
  sortBy: 'createdAt'           // Property to sort by
}
```

#### `paging`
Accepts an object of paging parameters appended to the `URL Query`
```
{
  page: 3,      // Page number to return (Zero-based)
  pageSize: 20  // Number of records returned per page
}
```

#### `urlPattern` [optional]
Used to override the default URL Pattern construction that applies the conventions
set forth by `ExpressREST`

## Usage - Standard
Using the standard usage of the `edisen-rest-request` library requires a minimum
of the following configuration:
```
import request, {
  TYPES_ACTION,
  TYPES_HTTP_METHOD
} from '@onevigor/edisen-rest-request'

async function getAssets() {
  // Constructs the Standard Request with minimal props
  const getAssetsConfig = {
    resource: 'Asset',
    type: TYPE_ACTION.LIST,
    method: TYPE_HTTP_METHODS.GET
  }

  // Construct the Request
  // Generates Request: `GET /assets`
  const getAssetsRequest = request(getAssetsConfig)

  // Execute the Request by awaiting request.perform()
  return await getAssetsRequest.perform()
}
```

To create the URL:

`GET /assets/asset-id-123/metadata_requirements&sortOrder=ASC&sortBy=createdAt&pageSize=5&page=0`

The 
```
// Create the ActionRequest object
const getAssetMetadata = new ActionRequest({
    urlPattern: '/resource/:id/subResource',
    resource: 'Asset',
    type: 'subResource', // LIST, ITEM, ACTION, SUB_RESOURCE
    subResource: 'MetadataRequirements',
    method: 'GET', // GET, PUT, POST, DELETE
    params: {
        id: 'asset-id-123'
    },
    sort: {
        sortOrder: 'ASC',
        sortBy: 'createdAt'
    },
    paging: {
        pageSize: 5,
        page: 0
    }
})

    getAssetMetadata.action
    return await getAssetMetadata.perform()
```

## Usage - URL Override
