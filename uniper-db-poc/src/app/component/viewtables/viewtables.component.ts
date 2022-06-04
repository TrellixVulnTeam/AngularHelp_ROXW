import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Tablepojo } from 'src/app/model/tablepojo';
import { StaticserviceService } from 'src/app/service/staticservice.service';

@Component({
  selector: 'app-viewtables',
  templateUrl: './viewtables.component.html',
  styleUrls: ['./viewtables.component.css']
})
export class ViewtablesComponent implements OnInit {
  dataSource : MatTableDataSource<Tablepojo> = new MatTableDataSource<Tablepojo>([]);
  displayedColumns: string[] = ['tableName', 'description', 'insertIntoTable','showTable'];
  
  constructor(private service:StaticserviceService, private router:Router) { }

  ngOnInit(): void {
    var result = this.service.getAllTableasInfo();  
    this.dataSource = new MatTableDataSource(result);
  }
  onInsertData(table:Tablepojo){
    console.log("show table name"+table.tableName);
    this.router.navigate(['/inserttable/',table.tableName]);
  }
  onViewTableData(table:Tablepojo){
    console.log("show table name"+table.tableName);
    this.router.navigate(['/viewtable/',table.tableName]);
  }

}
