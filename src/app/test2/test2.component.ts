import { Component, OnInit } from '@angular/core';
//import { FormControl, FormGroup,Validators,AbstractControl } from '@angular/forms';
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

//   userForm = new FormGroup({
//     'user.email': new FormControl('', [
//         Validators.required,
//         Validators.minLength(2),
//         Validators.maxLength(30)
//     ]),
//     'user.password': new FormControl('', [
//         Validators.required,
//         Validators.minLength(4),
        
       
//     ]),
// })

  nextPage() {
   
        this.router.navigate(['/Admission/newapplicant']);
    
}

prevPage() {
    this.router.navigate(['test1']);
}

}
