import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  apiUrl = environment.apiUrl;
  constructor(private https: HttpClient) {}

  getPlan() {
    return this.https.get(this.apiUrl + 'plan/add' ).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }

  editPlan(id, data){
    return this.https.put(this.apiUrl + 'plan/update/' + id, data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }

  addPlan(data) {
    return this.https.post(this.apiUrl + 'plan/add', data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
}
