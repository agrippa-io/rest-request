import { InterfaceActionRequestPaging, InterfaceActionRequestSort } from '../services/Action.Request';
export interface InterfaceRestRequest {
    baseUrl: string;
    version?: string;
    paging?: InterfaceActionRequestPaging;
    sort?: InterfaceActionRequestSort;
    requestConfig?: any;
}
export default class RestRequest {
    defaults: InterfaceRestRequest;
    constructor(props: InterfaceRestRequest);
    perform(config: any): Promise<import("axios").AxiosResponse<any>>;
}
