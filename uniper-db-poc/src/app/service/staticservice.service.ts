import { Injectable } from '@angular/core';
import { Tablepojo } from '../model/tablepojo';

@Injectable({
  providedIn: 'root'
})
export class StaticserviceService {
  
  getAllTableasInfo() {
    let TABLES: Tablepojo[] =[{'tableName':'Users', 'description':'Users Details'},
                    {'tableName':'Person', 'description':'Person Details'},
                    {'tableName':'Broker​', 'description':'Broker​ Details'},
                    {'tableName':'Company_Alias', 'description':'Company'},
                    {'tableName':'Location​', 'description':'Location​ Details'},
                    {'tableName':'Trayport_Product', 'description':'Trayport_Product Details'},
                    {'tableName':'Prisma_Product', 'description':'Prisma_Product Details'},
                    {'tableName':'Holiday_Calendar', 'description':'Holiday_Calendar Details'},
                    {'tableName':'Prisma_Product', 'description':'Prisma_Product Details'},];
    return <Tablepojo[]>TABLES;
  }

  constructor() { }
}
