import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-deleteuser',
  templateUrl: './deleteuser.component.html',
  styleUrls: ['./deleteuser.component.css']
})
export class DeleteuserComponent implements OnInit {

  constructor(private route:ActivatedRoute,private userService:UserserviceService) { }

  ngOnInit(): void {
    this.deleteProduct();
  }
  deleteProduct(){
    let mobileNumber = parseInt(this.route.snapshot.params['id']);
    console.log("inside delete"+mobileNumber);
    this.userService.deleteUser(mobileNumber)
    .subscribe((data: any) => { 
      console.log(data);
    });
  }

}
