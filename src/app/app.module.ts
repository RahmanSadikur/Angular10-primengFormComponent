import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { MatInputModule} from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { Test2Component } from './test2/test2.component';
import {HttpClientModule} from '@angular/common/http'
import{FormsModule}from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { AdmissionModule} from './admission/admission.module';
import{HRModule}from './hr/hr.module';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {StepsModule} from 'primeng/steps';


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    //MatTabsModule,
    MatInputModule,
    NgbModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule,
     ReactiveFormsModule,
     InputTextModule,
     ButtonModule,
     AdmissionModule,
     HRModule,
     CardModule,
     MenubarModule,
     StepsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
