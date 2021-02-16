import { Component, OnInit } from '@angular/core';
import{employee} from './employee'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
employye:employee;
  constructor() { }

  // employee={
  //   name:"",
  //   userName:"",
  //   password:"",
  //   address:"",
  //   salary:0.0,
  //   gender:"",
  //   dob:new Date(),
  //   visitedCountry:[],
  //   phone:"",
  //   isMareid:false,
  //   skills:[],
  //   hobbies:[],
  //   bloodgroup:1,
  //   fcolor:"",
  //   bio:"",
  //   ff:false,

  // }

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
    console.warn(data);
    alert(data.skills);
  }

  ngOnInit(): void {
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

}
