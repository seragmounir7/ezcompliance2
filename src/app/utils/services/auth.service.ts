import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl

  constructor(private https: HttpClient) {

   }
   

login(){
  return this.https.get(this.apiUrl + "")
}

}
