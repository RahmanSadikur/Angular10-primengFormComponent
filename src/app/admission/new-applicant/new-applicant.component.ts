import { Component, OnInit } from '@angular/core';
import{NewApplicantService}from '../new-applicant.service';
import {Product} from './products';


@Component({
  selector: 'app-new-applicant',
  templateUrl: './new-applicant.component.html',
  styleUrls: ['./new-applicant.component.css']
  
})
export class NewApplicantComponent implements OnInit {
  products: Product[];
  selectedProducts={};
 i:number;
 

  constructor(private NewApplicantService:NewApplicantService ) { }

  ngOnInit(): void {
    this.NewApplicantService.getApplicant().subscribe(data=>{
      this.newApplicant.push(data);
      this.NewApplicantName=data;

                  });
   this.NewApplicantService.getProduct().then(data => {
     this.products = data;
    
  });
    
  }
  OnSubmit(data){
    console.warn(data);
  }
  newApplicant=[];
  filterednewApplicant=[];
  NewApplicantName={};

  Applicant={
    Name:"",
    Uid:-1,
    id:[],
    isvalid:false,
    date: new Date(),
    selectedValues: [],
    phone:""
  };
  cols = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'year', header: 'Year' },
    { field: 'color', header: 'Color' },
    { field: ' pantone_value', header: ' Pantone Value' },
];
  
  onRowSelect(event) {
    this.selectedProducts = event.data;
    this.Applicant.Uid=event.data.id;
    console.warn(this.selectedProducts);
    }
         
 filterApplicant(event) {
               
    let filtered : any[] = [];
    let query = event.query;
                
    for(let i = 0; i < this.newApplicant[0].length; i++) {
          let applicant = this.newApplicant[0][i];
                    
                   
          if (applicant.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                     
                filtered.push(applicant.name);
                       
            }
      }
                
     this.filterednewApplicant = filtered;
            


   }

  
}
