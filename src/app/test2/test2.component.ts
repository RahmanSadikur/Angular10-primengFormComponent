import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  constructor() { }
  User={
    email:"example@example.com",
    password:"example"
  }
  ngOnInit(): void {
  }
  OnSubmit(data){
    console.warn(data);
  }

}