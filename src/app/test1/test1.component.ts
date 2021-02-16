import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor(private router: Router) { }
@Input() Employee;
  ngOnInit(): void {
  }
  nextPage() {
  
        this.router.navigate(['/test2']);

        return;
    

}
}