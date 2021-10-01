import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl

  constructor(private https: HttpClient) {}
  
login(data){
  return this.https.post(this.apiUrl + "authentication/login",data).pipe(map((res :any) => {
    console.log("res.data.accessToken",res.data.accessToken)
    if(res.data.accessToken){
      sessionStorage.setItem('accessToken', res.data.accessToken);
    }
    return res
  }));
}

}
