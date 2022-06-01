import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
  users: User[] | undefined;
  dataSource :any;
  displayedColumns: string[] = ['position', 'firstName', 'lastName', 'mobileNumber','email','na'];
  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
    this.showUsers();
  }
  showUsers() {
    console.log("Calling rest call to get all users..");
    
    this.userService.getConfig()
    .subscribe((data: User[])=>{
      console.log(data);
      this.users = data;
      this.dataSource = data;
    })  
      
  }

}
