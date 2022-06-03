import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelPojo } from '../user.model';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  longText:string;
  userForm: FormGroup ;
  showUpdateCard:boolean=true;
  dbModel:ModelPojo;
  constructor(private formBuilder: FormBuilder,private route:ActivatedRoute,private userService:UserserviceService, private router:Router) { }

  ngOnInit(): void {
    let mobileNumber = parseInt(this.route.snapshot.params['id']);
    this.longText ="Do you really want to update this contact "+mobileNumber;
    this.userForm = this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      mobileNumber: new FormControl('')
    });
  }
  
  updateModel(){
    this.showUpdateCard=false;
    let mobileNumber = parseInt(this.route.snapshot.params['id']);
    //rest call to get details of this user
    this.userService.getModelBasedOnId(mobileNumber)
    .subscribe((data: ModelPojo)=>{
      console.log(data);
      //update the user form with model details
      this.userForm.controls['firstName'].setValue(data.firstName);
      this.userForm.controls['lastName'].setValue(data.lastName);
      this.userForm.controls['email'].setValue(data.email);
      this.userForm.controls['mobileNumber'].setValue(data.mobileNumber);
    })  
    
  }
  onSubmit(userData :FormGroup) {
    console.log('Valid?', userData.valid); // true or false
    console.log('Value', userData.value);
    this.userService.saveUser(userData.value)
    .subscribe((data: ModelPojo)=>{
      console.log(data);
    }) 
 }
 email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
