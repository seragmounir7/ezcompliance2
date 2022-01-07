import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class CompanyRegistrationService {
  apiUrl = environment.apiUrl;
  constructor(private https: HttpClient) { }

  upload(files) {
    return this.https.post(this.apiUrl + 'upload', files).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  addCompanyInfo(data) {
    return this.https.post(this.apiUrl + 'company/add', data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
}
