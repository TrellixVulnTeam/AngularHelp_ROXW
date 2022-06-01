import { NgModule } from '@angular/core';

import {MatButtonModule}  from '@angular/material/button';
import {MatCheckboxModule}  from '@angular/material/checkbox';
import {MatToolbarModule}  from '@angular/material/toolbar';
import {MatInputModule}  from '@angular/material/input';
import {MatProgressSpinnerModule}  from '@angular/material/progress-spinner';
import {MatCardModule}  from '@angular/material/card';
import {MatMenuModule}  from '@angular/material/menu';
import {MatIconModule}  from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table'
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [MatTableModule,MatButtonModule,MatSelectModule, MatTabsModule , MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule,MatIconModule],
  exports: [MatTableModule,MatButtonModule,MatSelectModule, MatTabsModule , MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule]
})


export class MaterialModule{}