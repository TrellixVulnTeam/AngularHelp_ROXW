import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { User } from '../user.model';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: FormGroup ;

  constructor(private formBuilder: FormBuilder,private userService:UserserviceService) {
   }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobileNumber: [''],
      password: [''],
    });
  }
  onSubmit(userData :FormGroup) {
    console.log('Valid?', userData.valid); // true or false
    console.log('Value', userData.value);
    this.userService.saveUser(userData.value)
    .subscribe((data: User)=>{
      console.log(data);
    }) 
 }

}
