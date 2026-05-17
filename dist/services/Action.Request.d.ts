import { Method } from 'axios';
import ActionObject from '../services/Action.Object';
export interface InterfaceActionRequest {
    action: ActionObject;
    data?: any;
    baseUrl?: string;
    version?: string;
    urlOverride?: string;
    params?: any;
    query?: any;
    paging?: InterfaceActionRequestPaging;
    sort?: InterfaceActionRequestSort;
    requestConfig?: any;
}
export interface InterfaceActionRequestPaging {
    page?: number;
    pageSize?: number;
}
export interface InterfaceActionRequestSort {
    sortBy: string;
    sortOrder: string;
}
export default class ActionRequest {
    requestConfig?: any;
    action?: ActionObject;
    data?: any;
    baseUrl?: string;
    version?: string;
    urlOverride?: string;
    params?: any;
    query?: any;
    sort?: InterfaceActionRequestSort;
    paging?: InterfaceActionRequestPaging;
    constructor(props: InterfaceActionRequest);
    get url(): string;
    get urlPath(): string;
    get urlQuery(): string;
    static populateUrlPattern(urlPattern: string, params?: any): string;
    get model(): string;
    get type(): string;
    get method(): string;
    get requestMethod(): Method;
    perform(): Promise<import("axios").AxiosResponse<any>>;
}
