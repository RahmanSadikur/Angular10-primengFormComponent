import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Product}from '../admission/new-applicant/products';

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
}
