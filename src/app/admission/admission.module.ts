import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionRoutingModule } from './admission-routing.module';
import { AdmissionComponent } from './admission.component';
import { NewApplicantComponent } from './new-applicant/new-applicant.component';
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
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {RatingModule} from 'primeng/rating';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [AdmissionComponent, NewApplicantComponent],
  imports: [
    CommonModule,
    AdmissionRoutingModule,
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
    ConfirmDialogModule,
    ToastModule,
    RatingModule,
    DialogModule,
    
  ]
})
export class AdmissionModule { }
