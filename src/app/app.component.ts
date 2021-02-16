import { Component } from '@angular/core';
import {TestService} from './test.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'TestV1';
  data={};

constructor(private testService:TestService){
this.testService.getData().subscribe(data =>{
this.data=data;

})
}

}
