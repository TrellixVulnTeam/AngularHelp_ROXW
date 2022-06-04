import { Injectable } from '@angular/core';
import { Tablepojo } from '../model/tablepojo';

@Injectable({
  providedIn: 'root'
})
export class StaticserviceService {
  
  getAllTableasInfo() {
    let TABLES: Tablepojo[] =[{'tableName':'Company_Alias', 'description':'Company'},
                    {'tableName':'Users', 'description':'User Details'}];
    return <Tablepojo[]>TABLES;
  }

  constructor() { }
}
