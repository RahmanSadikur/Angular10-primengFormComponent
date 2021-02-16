import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmissionComponent } from './admission.component';
import{NewApplicantComponent} from './new-applicant/new-applicant.component'

const routes: Routes = [
  { path: '', component: AdmissionComponent },
  { path: 'newapplicant', component: NewApplicantComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmissionRoutingModule { }
