import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { ViewdatadynaamicallyComponent } from './viewdatadynaamically/viewdatadynaamically.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewusersComponent,
    ViewdatadynaamicallyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
