import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyserviceService } from 'src/app/service/companyservice.service';
import { UserserviceService } from 'src/app/service/userservice.service';

@Component({
  selector: 'app-deletecompany',
  templateUrl: './deletecompany.component.html',
  styleUrls: ['./deletecompany.component.css']
})
export class DeletecompanyComponent implements OnInit {
  constructor(private route:ActivatedRoute,private companyService:CompanyserviceService, private router:Router) { }
  longText:string;
  ngOnInit(): void {
    let mobileNumber = parseInt(this.route.snapshot.params['id']);
    this.longText ="Do you really want to delete this Company "+mobileNumber;
  }
  deleteModel(){
    let mobileNumber = parseInt(this.route.snapshot.params['id']);
    console.log("inside delete"+mobileNumber);
    this.companyService.deleteModel(mobileNumber)
    .subscribe((data: any) => { 
      console.log(data);
      this.router.navigate(['viewtable/Company_Alias']);
    });
  }
  cancle(){
    this.router.navigate(['viewtable/Company_Alias']);
  }

}
