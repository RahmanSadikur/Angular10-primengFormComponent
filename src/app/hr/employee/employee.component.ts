import { Component, OnInit } from '@angular/core';
import{employee} from './employee';
import {Message,MessageService} from 'primeng/api';
import { Router } from '@angular/router';
import{EmployyeService}from '../employye.service'
import { from } from 'rxjs';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [MessageService]
})

export class EmployeeComponent implements OnInit {
//employee:employee;
  constructor(private messageService: MessageService,private router: Router,private employeeService:EmployyeService) { }

   employee={
     name:"",
      userName:"",
      password:"",
      address:"",
      salary:0.0,
     gender:"",
      dob:new Date(),
     visitedCountry:[],
      phone:"",
      isMareid:false,
     skills:[],
      hobbies:[],
     bloodgroup:1,
      fcolor:"",
      bio:"",
     ff:false,

   }

  BloodList=[
    {id:1,name:"Apos(+)"},
    {id:2,name:"Aneg(-)"},
    {id:3,name:"Bpos(+)"},
    {id:4,name:"Bneg(-)"},
    {id:5,name:"Opos(+)"},
    {id:6,name:"Oneg(-)"},
    {id:7,name:"ABpos(+)"},
    {id:8,name:"ABneg(-)"},
  ]
  Country=[
    {id:1,name:"Bangladesh"},
    {id:2,name:"India"},
    {id:3,name:"Wakanda"},
    {id:4,name:"Gana"},
    {id:5,name:"Uganda"},
    {id:6,name:"Monti-Nigro"},
    {id:7,name:"Republic of Wadia"},
  ]
  Sugestedskill=[
    {id:1,name:"C#"},
    {id:2,name:"MVC"},
    {id:3,name:"Angular"},
    {id:4,name:"Bootstrap"},
    {id:5,name:"Razor"},
   
  ]
  filteredCountries=[];

  OnSubmit(data){
    console.warn(this.simpleStringify(data));
  
    this.messageService.addAll([{severity:'success', summary: 'Success', detail:this.simpleStringify(data)},{severity:'success', summary: 'Success', detail:data.dob},{severity:'success', summary: 'Success', detail:data.skills}]);


  }
  simpleStringify(object){
    var simpleObject = {};
    for (var prop in object ){
        if (!object.hasOwnProperty(prop)){
            continue;
        }
        if (typeof(object[prop]) == 'object'){
             continue;
         }
        if (typeof(object[prop]) == 'function'){
            continue;
        }
        simpleObject[prop] = object[prop];
    }
    return JSON.stringify(simpleObject); // returns cleaned up JSON
};

  ngOnInit(): void {
    // this.employeeService.getEmployee().then(data=>{
    //   this.employee=data['data'];
    //   console.warn(this.employee);
      

    //               });
      this.employeeService.getApplicant().subscribe(data=>{
                   
         this.employee=data['data'];
         this.employee.dob=new Date(this.employee.dob);
         console.warn(this.employee.dob);
              
        });
   
   
  }

  filterApplicant(event) {
               
    let filtered : any[] = [];
    let query = event.query;
                
    for(let i = 0; i < this.Sugestedskill.length; i++) {
          let skills = this.Sugestedskill[i];
                    
                   
          if (skills.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                     
                filtered.push(skills.name);
                       
            }
      }
                
     this.filteredCountries = filtered;
            


   }
   prevPage() {
    this.router.navigate(['/Admission/newapplicant']);
    }
}
