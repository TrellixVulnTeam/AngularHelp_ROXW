export interface Company {
    id:number;
    ENTITY_TYPE_NAME:string;
    UPSTREAM_APP:string;
    COMPANY_NAME:string;
    UPSTREAM_ALIAS:string;
    DOWNSTREAM_APP:string;
    DOWNSTREAM_ALIAS:string;
    INSTRUMENT_NAME:string;
    INSTRUMENT_ID:string;
    UPDATED_BY:string;
    UPDATED_DATE:Date;
    IS_ACTIVE:Boolean;
}
