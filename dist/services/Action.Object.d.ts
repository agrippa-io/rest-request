export interface InterfaceActionObject {
    model: string;
    type: string;
    method: string;
    subResource?: string;
    rpcAction?: string;
    urlOverride?: string;
}
export default class ActionObject {
    model: string;
    type: string;
    method: string;
    subResource?: string;
    rpcAction?: string;
    urlOverride?: string;
    constructor(props: InterfaceActionObject);
    static toActionObject(action: any): InterfaceActionObject;
    get actionName(): string;
    actionNameRPC(prefix?: string): string;
    actionNameMethod(prefix?: string): string;
    actionNameAssociation(prefix?: string): string;
    get urlPattern(): string;
    actionToRPCActionUrlPattern(): string;
    actionToCollectionUrlPattern(): string;
    actionToResourceUrlPattern(): string;
    actionToAssociationUrlPattern(): string;
}
