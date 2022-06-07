import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DeleteuserComponent } from './component/deleteuser/deleteuser.component';
import { RegisterComponent } from './component/register/register.component';
import { UpdateuserComponent } from './component/updateuser/updateuser.component';
import { ViewtablesComponent } from './component/viewtables/viewtables.component';
import { ViewusersComponent } from './component/viewusers/viewusers.component';
import { PersoncomponentComponent } from './component/tables/personcomponent/personcomponent.component';
import { BrokercomponentComponent } from './component/tables/brokercomponent/brokercomponent.component';
import { LocationcomponentComponent } from './component/tables/locationcomponent/locationcomponent.component';
import { ViewcompaniesComponent } from './component/company/viewcompanies/viewcompanies.component';
import { UpdatecompanyComponent } from './component/company/updatecompany/updatecompany.component';
import { DeletecompanyComponent } from './component/company/deletecompany/deletecompany.component';
import { InsertcompanyComponent } from './component/company/insertcompany/insertcompany.component';
import { ConfigurecardComponent } from './component/company/configurecard/configurecard.component';
import { InsertsuccesscardComponent } from './component/company/insertsuccesscard/insertsuccesscard.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewusersComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    ViewtablesComponent,
    PersoncomponentComponent,
    BrokercomponentComponent,
    LocationcomponentComponent,
    ViewcompaniesComponent,
    UpdatecompanyComponent,
    DeletecompanyComponent,
    InsertcompanyComponent,
    ConfigurecardComponent,
    InsertsuccesscardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatSliderModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
