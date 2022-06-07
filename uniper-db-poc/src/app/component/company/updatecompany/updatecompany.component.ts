import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CompanyserviceService } from 'src/app/service/companyservice.service';

@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent implements OnInit {
  companyForm:  FormGroup;
  longText:string;
  showUpdateCard:boolean=true;
  constructor(private formBuilder: FormBuilder,private route:ActivatedRoute,private companyService:CompanyserviceService,private router:Router) { }

  ngOnInit(): void {
    let mobileNumber = parseInt(this.route.snapshot.params['id']);
    this.longText ="Do you really want to update this contact "+mobileNumber;
    this.companyForm= this.formBuilder.group({
      entity_TYPE_NAME: [''],
      company_NAME: [''],
      upstream_APP: [''],
      upstream_ALIAS: [''],
      downstream_APP: [''],
      downstream_ALIAS: [''],
      instrument_NAME: [''],
      instrument_ID: [''],
      updated_BY: [''],
    });
  }
  onUpdate(companyData:FormGroup){
    let mobileNumber = parseInt(this.route.snapshot.params['id']);
    console.log("call backend to update : "+companyData.value);
    this.companyService.updateUser(companyData.value,mobileNumber)
    .subscribe((data: Company)=>{
      console.log(data);
      this.router.navigate(['viewtable/Company_Alias']);
    })
  }
  updateModel(){
    this.showUpdateCard=false;
    let mobileNumber = parseInt(this.route.snapshot.params['id']);
    //rest call to get details of this user
    this.companyService.getModelBasedOnId(mobileNumber)
    .subscribe((data: Company)=>{
      console.log("received this entry : "+data);
      this.companyForm.controls['entity_TYPE_NAME'].setValue(data.entity_TYPE_NAME);
      this.companyForm.controls['company_NAME'].setValue(data.company_NAME);
      this.companyForm.controls['upstream_APP'].setValue(data.upstream_APP);
      this.companyForm.controls['upstream_ALIAS'].setValue(data.upstream_ALIAS);
      this.companyForm.controls['downstream_APP'].setValue(data.downstream_APP);
      this.companyForm.controls['downstream_ALIAS'].setValue(data.downstream_ALIAS);
      this.companyForm.controls['instrument_NAME'].setValue(data.instrument_NAME);
      this.companyForm.controls['instrument_ID'].setValue(data.instrument_ID);
      this.companyForm.controls['updated_BY'].setValue(data.updated_BY);
    }) 
  }

}
