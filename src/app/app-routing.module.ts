import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{Test1Component} from './test1/test1.component'
import{Test2Component} from './test2/test2.component'

const routes: Routes = [
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: 'Admission', loadChildren: () => import('./admission/admission.module').then(m => m.AdmissionModule) },
  { path: 'hr', loadChildren: () => import('./hr/hr.module').then(m => m.HRModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
