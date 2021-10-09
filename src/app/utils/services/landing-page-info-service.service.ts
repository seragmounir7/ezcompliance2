import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LandingPageInfoServiceService {
  apiUrl = environment.apiUrl;
  constructor(private https: HttpClient) {}

  getAppServiceById(id: any) {
    return this.https.get(this.apiUrl + '' + id).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  // editAppService(data,id){
  //   return this.https.put(this.apiUrl + "" +id,data).pipe(map((res :any) => {
  //     console.log("res.data=>",res.data)
  //     return res
  //   }));
  // }

  addAppService(data) {
    return this.https.post(this.apiUrl + 'module/multiple', data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  // deleteAppService(id){
  //   return this.https.delete(this.apiUrl + "" +id).pipe(map((res :any) => {
  //     console.log("res.data=>",res.data)
  //     return res
  //   }));
  // }
}
