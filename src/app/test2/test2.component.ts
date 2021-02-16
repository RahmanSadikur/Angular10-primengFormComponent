import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor(private router: Router) { }
  User={
    email:"example@example.com",
    password:"example"
  }
  ngOnInit(): void {
  }
  OnSubmit(data){
    console.warn(data);
  }

  nextPage() {
   
        this.router.navigate(['/Admission/newapplicant']);
    
}

prevPage() {
    this.router.navigate(['test1']);
}

}
