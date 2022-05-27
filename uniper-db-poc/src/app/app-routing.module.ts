import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ViewdatadynaamicallyComponent } from './viewdatadynaamically/viewdatadynaamically.component';
import { ViewusersComponent } from './viewusers/viewusers.component';

const routes: Routes = [
  { path: 'register-component', component: RegisterComponent },
  { path: 'viewuser-component', component: ViewusersComponent },
  { path: 'viewdatadynamically-component', component: ViewdatadynaamicallyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
