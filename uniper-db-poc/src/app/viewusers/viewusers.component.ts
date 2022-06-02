import { Component, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Models } from '../Models.component';
import { ModelPojo } from '../user.model';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
  dataSource : MatTableDataSource<ModelPojo> = new MatTableDataSource<ModelPojo>([]);
  displayedColumns: string[] = ['firstName', 'lastName', 'mobileNumber','email','delete'];
  firstName : string = "";
  value1 : any ;
  value2 : any ;
  constructor(private userService:UserserviceService , private router:Router) { }
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit(): void {
    this.showUsers();
    this.dataSource.sort=this.sort;
  }
  showUsers() {
    console.log("Calling rest call to get all users..");
    
    this.userService.getConfig()
    .subscribe((data: Models)=>{
      console.log(data);
      this.dataSource = new MatTableDataSource(data.modelPojoList);
    })  
      
  }
  onDelete(user:ModelPojo){
    console.log("Calling rest call to get all users.."+user);
    this.router.navigate(['/deletemodel',user.mobileNumber]);
  }
  applyFilter(event: Event) {
    let filterValue=(event.target as HTMLInputElement).value;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
