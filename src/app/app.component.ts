import { Component } from '@angular/core';
import {TestService} from './test.service';
import {MenuItem} from 'primeng/api';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'TestV1';
  data={};
  items: MenuItem[];
constructor(private testService:TestService){
this.testService.getData().subscribe(data =>{
this.data=data;

})
}

ngOnInit() {
  this.items = [
      {
          label:'File',
          icon:'pi pi-fw pi-file',
          routerLink: 'test1', 
         
      },
      {
          label:'Edit',
          icon:'pi pi-fw pi-pencil',
          routerLink: 'test2', 
         
      },
      {
          label:'New Applicant',
          icon:'pi pi-fw pi-user',
          routerLink: '/Admission/newapplicant', 
         
      },
      {
          label:'Employee',
          icon:'pi pi-fw pi-user',
          routerLink: '/hr/employee', 
         
              
         
      },
      
  ];
}

}
