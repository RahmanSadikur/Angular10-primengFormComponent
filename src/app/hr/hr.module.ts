import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRRoutingModule } from './hr-routing.module';
import { EmployeeComponent } from './employee/employee.component';
import{FormsModule}from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {HttpClientModule} from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ChipsModule} from 'primeng/chips';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ColorPickerModule} from 'primeng/colorpicker';
import {EditorModule} from 'primeng/editor';



@NgModule({
  declarations: [EmployeeComponent],
  imports: [
    CommonModule,
    HRRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,

    CardModule,
    AutoCompleteModule,
    HttpClientModule,
    DropdownModule,
    CalendarModule,
    RadioButtonModule,
    TableModule,
    CheckboxModule,
    MultiSelectModule,
    InputMaskModule,
    InputTextareaModule,
    ChipsModule,
    InputNumberModule,
    InputSwitchModule,
    ColorPickerModule,
    EditorModule
  




  ]
})
export class HRModule { }
