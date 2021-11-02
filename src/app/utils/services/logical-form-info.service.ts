import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
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
  addFormData(data: any) {
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
  deleteSubComponent(id: any) {
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
    return this.https
      .put(this.apiUrl + 'component/upload/multiple/' + id, data)
      .pipe(
        map((res: any) => {
          console.log('res.data=>', res.data);
          return res;
        })
      );
  }

  addSubComponent(data: any) {
    return this.https.post(this.apiUrl + 'subComponent/add', data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  //licence api///
  getAllLicence(){
    return this.https.get(this.apiUrl + 'licence/getAll').pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  getLicenceById(id) {
    return this.https.get(this.apiUrl + 'licence/get/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  addLicence(data) {
    return this.https.post(this.apiUrl + 'licence/add', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  addMultipleLicence(data) {
    return this.https.post(this.apiUrl + 'licence/add/multiple', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  updateLicence(data, id) {
    return this.https.put(this.apiUrl + 'licence/update/' + id, data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  deleteLicence(id){
    return this.https.delete(this.apiUrl + 'licence/delete/' + id).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  ///licence category crud///
addLicenceCat(data){
  return this.https.post(this.apiUrl + 'licenceCategory/add', data).pipe(
    map((res: any) => {
      return res;
    })
  );
}
getAllLicenceCat(){
  return this.https.get(this.apiUrl + 'licenceCategory/getAll').pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
updateLicenceCat(data,id){
  return this.https.put(this.apiUrl + 'licenceCategory/update/' + id, data).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );

}
deleteLicenceCat(id){
  return this.https.delete(this.apiUrl + 'licenceCategory/delete/' + id).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
  ///licence category end crud///

  //job task crud///
  addJobTask(data){
    return this.https.post(this.apiUrl + 'jobTask/add', data);
  }
  updateJobTask(data,id){
    return this.https.put(this.apiUrl + 'jobTask/update/' + id, data);      
  }
  deleteJobTask(id){
    return this.https.delete(this.apiUrl + 'jobTask/delete/' + id)
  }
  getAllJobtask(){
    return this.https.get(this.apiUrl + 'jobTask/getAll')
  }
  getJobtaskById(id){
    return this.https.get(this.apiUrl + 'jobTask/get/' + id)

  }
}
