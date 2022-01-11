import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = environment.apiUrl;
  private loginDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public loginData$ = this.loginDataSubject.asObservable()
  nextLoginData(data) {
    this.loginDataSubject.next(data);
  }

  constructor(private https: HttpClient) {
    if (sessionStorage.getItem('accessToken')) {
      this.nextLoginData({
        accessToken: sessionStorage.getItem('accessToken'),
        userName: sessionStorage.getItem('userName'),
        phoneNo: sessionStorage.getItem('phoneNo')
      });
    }
  }

  login(data) {
    return this.https.post(this.apiUrl + 'authentication/login', data).pipe(
      map((res: any) => {
        console.log('res.data.accessToken', res.data.accessToken);
        if (res.data.accessToken) {
          this.nextLoginData(res.data);
          sessionStorage.setItem('accessToken', res.data.accessToken);
        }
        return res;
      })
    );
  }
  logout() {
      this.pergeData()
  }
  pergeData() {
    sessionStorage.clear();
    return true
  }
}
