import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{NewApplicantService}from '../new-applicant.service';
import {Product} from './products';
import { MessageService } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';
import { LazyLoadEvent } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

import { Validators, FormBuilder, FormGroup, FormControl ,AbstractControl} from '@angular/forms';
import{Applicant}from './applicant'



@Component({
  selector: 'app-new-applicant',
  templateUrl: './new-applicant.component.html',
  styleUrls: ['./new-applicant.component.css'],
  providers: [MessageService, ConfirmationService]
  
})
export class NewApplicantComponent implements OnInit {
  products: Product[];
  selectedProducts={};
  Applicants:Applicant[];
  //myForm: FormGroup;
 i:number;
 

  constructor(private primengConfig: PrimeNGConfig,private NewApplicantService:NewApplicantService ,private router: Router,private  messageService: MessageService, private fb: FormBuilder, private confirmationService: ConfirmationService) { }
 
  ngOnInit(): void {
    // this.myForm = this.fb.group({
    //   phone: ['', [ValidatePhone]] // added the function in validators array of form-control
    // });
    this.NewApplicantService.getAllApplicant().subscribe(data=>{
      this.Applicants=data['data'];
      for(var i=0;i<this.Applicants.length;i++)
      {
        this.Applicants[i].date=new Date(this.Applicants[i].date)
      }
      console.warn(this.Applicants)
 
                  });
    this.NewApplicantService.getApplicant().subscribe(data=>{
     
      this.NewApplicantName=data;
       });

   this.NewApplicantService.getProduct().then(data => {
     this.products = data;
    
  });
    
  }
  OnSubmit(data){
    console.warn(data.Uid);
     if(data.Uid===-1)
     {
       data.Uid=this.Applicants.length+1;
       this.Applicants.push(data);
       this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Saved Succedded', life: 3000});
     }
  
     else {
      this.Applicants[this.findIndexByUid(data.Uid)] = data;
       this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Update succeed', life: 3000});
     }
    
   this.Applicants=[...this.Applicants];
   

  }
  findIndexByUid(Uid: number): number {
    let index = -1;
    for (let i = 0; i < this.Applicants.length; i++) {
      if (this.Applicants[i].Uid === Uid) {
        index = i;
        break;
      }
    }
    return index;
  }

  delete(data) {
   // this.messageService.add({severity: 'success', summary: 'Successful', detail: data.Uid, life: 3000});
  // this.Applicants = this.Applicants.filter(val => val.Uid !== data.Uid);
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + data.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.Applicants = this.Applicants.filter(val => val.Uid !== data.Uid);
      
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Applicant Deleted', life: 3000});
      }
    });
  }

  filterednewApplicant=[];
  NewApplicantName={};

  Applicant={
    Name:"grt",
    Uid:-1,
    id:[],
    isvalid:false,
    date: new Date(),
    selectedValues: [],
    phone:""
  };
  cols = [
    { field:'Uid', header: 'Uid' },
    { field:'Name', header: 'Name' },
    { field:'date', header: 'Date' },
    { field:'phone', header: 'Phone' },
    { field:'isvalid', header: 'IsValid' },
];
  
  onRowSelect(event) {
    this.selectedProducts = event.data;
    this.Applicant=event.data;
    console.warn(this.selectedProducts);
    }
         
 filterApplicant(event) {
               
    let filtered : any[] = [];
    let query = event.query;
                
    for(let i = 0; i < this.Applicants.length; i++) {
          let applicant = this.Applicants[i];
                    
                   
          if (applicant.Name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                     
                filtered.push(applicant.Name);
                       
            }
      }
                
     this.filterednewApplicant = filtered;

   }



   nextPage() {
   
    this.router.navigate(['/hr/employee']);

}

prevPage() {
this.router.navigate(['test2']);
}
  
}
function ValidatePhone(control: AbstractControl): {[key: string]: any} | null  {
  if (control.value && control.value.length != 10) {
    return { 'phoneNumberInvalid': true };
  }
  return null;}