import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeRegistrationService {
  apiUrl = environment.apiUrl
  constructor(private https: HttpClient) {}

  addEmployeeInfo(data){
    return this.https.post(this.apiUrl + "employee/add",data).pipe(map((res :any) => {
      console.log("res.data=>",res.data);  
      return res;
    }));
  }
}
