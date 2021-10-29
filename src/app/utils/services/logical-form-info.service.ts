import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LogicalFormInfoService {

  apiUrl = environment.apiUrl;
  constructor(private https: HttpClient) {}
  getJobTaskListById(id: any) {
    return this.https.get(this.apiUrl + 'component/get/data/' + id).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  addFormData(data:any){
    return this.https.post(this.apiUrl + 'component/multiple', data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }

getFormDataById(id: any) {
  return this.https.get(this.apiUrl + 'component/get/data/' + id).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
deleteSubComponent(id:any){
  return this.https.delete(this.apiUrl + 'subComponent/delete/' + id).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
editSubComponent(data, id) {
  return this.https.put(this.apiUrl + 'subComponent/update/' + id, data).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
uploadMultiple(data, id) {
  return this.https.put(this.apiUrl + 'component/upload/multiple/' + id, data).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}

addSubComponent(data:any) {
  return this.https.post(this.apiUrl + 'subComponent/add', data).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
}
