import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurecardComponent } from './component/company/configurecard/configurecard.component';
import { DeletecompanyComponent } from './component/company/deletecompany/deletecompany.component';
import { InsertcompanyComponent } from './component/company/insertcompany/insertcompany.component';
import { InsertsuccesscardComponent } from './component/company/insertsuccesscard/insertsuccesscard.component';
import { UpdatecompanyComponent } from './component/company/updatecompany/updatecompany.component';
import { ViewcompaniesComponent } from './component/company/viewcompanies/viewcompanies.component';
import { DeleteuserComponent } from './component/deleteuser/deleteuser.component';
import { RegisterComponent } from './component/register/register.component';
import { BrokercomponentComponent } from './component/tables/brokercomponent/brokercomponent.component';
import { PersoncomponentComponent } from './component/tables/personcomponent/personcomponent.component';
import { UpdateuserComponent } from './component/updateuser/updateuser.component';
import { ViewtablesComponent } from './component/viewtables/viewtables.component';
import { ViewusersComponent } from './component/viewusers/viewusers.component';

const routes: Routes = [
  { path: 'register-component', component: RegisterComponent },
  { path: 'viewuser-component', component: ViewusersComponent },
  {path: "deletemodel/:id", component: DeleteuserComponent},
  {path: "updatemodel/:id", component: UpdateuserComponent},
  { path: 'viewtables-component', component: ViewtablesComponent },

  {path: "viewtable/Users", component: ViewusersComponent},
  {path: "viewtable/Company_Alias", component: ViewcompaniesComponent},
  {path: "viewtable/Person", component: PersoncomponentComponent},
  {path: "viewtable/Broker​", component: BrokercomponentComponent},

  {path: "inserttable/Users", component: RegisterComponent},
  {path: "inserttable/Company_Alias", component: InsertcompanyComponent},

  {path: "configurecolumns", component: ConfigurecardComponent},
  {path: "deletecompany/:id", component: DeletecompanyComponent},
  {path: "updatecompany/:id", component: UpdatecompanyComponent},
  {path: "success/:id", component: InsertsuccesscardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
