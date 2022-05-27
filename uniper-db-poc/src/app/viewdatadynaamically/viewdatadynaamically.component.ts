import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-viewdatadynaamically',
  templateUrl: './viewdatadynaamically.component.html',
  styleUrls: ['./viewdatadynaamically.component.css']
})
export class ViewdatadynaamicallyComponent implements OnInit {
  users:User[];
  tabKey:any=[];
  tabValue:any=[];
  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
    this.userService.getConfig()
    .subscribe((data: User[])=>{
      console.log(data);
      this.getData(data);
    })
    
  }
  getData(data:any){
    
    data.forEach((user:any)=>{
      this.tabKey = Object.keys(user);
      this.tabValue.push(Object.values(user));
      console.log(user);   
    })
    console.log("All keys are : "+this.tabKey);
  }

}
