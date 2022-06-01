import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ViewusersComponent } from './viewusers/viewusers.component';

const routes: Routes = [
  { path: 'register-component', component: RegisterComponent },
  { path: 'viewuser-component', component: ViewusersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
