import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CompanyserviceService } from 'src/app/service/companyservice.service';

@Component({
  selector: 'app-insertcompany',
  templateUrl: './insertcompany.component.html',
  styleUrls: ['./insertcompany.component.css']
})
export class InsertcompanyComponent implements OnInit {
  companyForm:  FormGroup;
  longText:string ="Insert into Company_Alias Table"
  constructor(private formBuilder: FormBuilder,private companyService:CompanyserviceService,private router:Router) { }

  ngOnInit(): void {
    this.companyForm= this.formBuilder.group({
      id:[''],
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
  onSubmit(companyData:FormGroup){
    console.log("received details for form : "+companyData.value);
    console.log('Valid?', companyData.valid); // true or false
    console.log('Value', companyData.value);
    this.companyService.saveUser(companyData.value)
    .subscribe((data: Company)=>{
      console.log(data);
      this.router.navigate(['/success', data.id]);
    }) 
  }

}
