import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{employee}from './employee/employee'
import{Observable}from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployyeService {

  constructor(private http:HttpClient) { }

  getEmployee() {
    return this.http.get<any>('assets/Employee.json')
    .toPromise()
     //.then(res => res.data as employee[])
    .then(res => <employee[]> res.data)
    .then(data => { return data; });
}
getApplicant():Observable<employee[]> {
  let url="assets/Employee.json";
     return this.http.get<employee[]>(url);
 }
}
