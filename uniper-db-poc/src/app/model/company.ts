export interface Company {
    id:number;
    entity_TYPE_NAME:string;
    upstream_APP:string;
    company_NAME:string;
    upstream_ALIAS:string;
    downstream_APP:string;
    downstream_ALIAS:string;
    instrument_NAME:string;
    instrument_ID:string;
    updated_BY:string;
    updated_DATE:Date;
    is_ACTIVE:Boolean;
}
