import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Companies } from 'src/app/model/companies';
import { Company } from 'src/app/model/company';
import { CompanyserviceService } from 'src/app/service/companyservice.service';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-viewcompanies',
  templateUrl: './viewcompanies.component.html',
  styleUrls: ['./viewcompanies.component.css']
})
export class ViewcompaniesComponent implements OnInit {

  dataSource : MatTableDataSource<Company> = new MatTableDataSource<Company>([]);
  displayedColumns: string[] = ['id','ENTITY_TYPE_NAME','COMPANY_NAME','DOWNSTREAM_ALIAS','DOWNSTREAM_APP','update','delete'];
  tooltipForConfigureButton:string='Helps you configure the fields you want to view';
  hideColumn:string = "none";
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private route:ActivatedRoute , private companyService:CompanyserviceService,private router:Router) { }

  ngOnInit(): void {
      this.companyService.getAllCompanies()
      .subscribe((data: Companies)=>{
        console.log(data);
        this.dataSource = new MatTableDataSource(data.companyAliasList);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
      })
      this.getdisplayedColumns();
  }
  applyFilter(event: Event) {
    console.log("apply filter");
    let filterValue=(event.target as HTMLInputElement).value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  onConfigure(){
    console.log("apply filter");
    this.router.navigate(['/configurecolumns']);
  }
  onDelete(company:Company){
    console.log("Calling rest call to update.."+company);
    this.router.navigate(['/deletecompany',company.id]);
  }
  onUpdate(company:Company){
    console.log("Calling rest call to update.."+company);
    this.router.navigate(['/updatecompany',company.id]);
  }
  getdisplayedColumns(){
    let tasks = this.route.snapshot.params['tasks'];
    
    if(tasks == undefined){
      console.log("Not selected yet : ");
    }else{
      console.log("Got the selected : "+tasks);
    }
    
  }

}
