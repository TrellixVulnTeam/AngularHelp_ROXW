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

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewusersComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    ViewtablesComponent
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
