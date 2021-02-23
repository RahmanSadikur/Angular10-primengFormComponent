import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Product}from '../admission/new-applicant/products';
import{Applicant}from '../admission/new-applicant/applicant';
import{Observable}from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NewApplicantService {

  constructor(private http:HttpClient) { }
  getApplicant() {
 let url="https://jsonplaceholder.typicode.com/users";
    return this.http.get(url);
}
getProduct() {
  return this.http.get('https://reqres.in/api/products')
              .toPromise()
              .then(res => <Product[]> res['data'])
              .then(data => { return data; });
}
getAllApplicant():Observable<Applicant[]> {
  let url="assets/applicant.json";
     return this.http.get<Applicant[]>(url);
 }
}
