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
    return this.https.get(this.apiUrl + 'module/get/data/' + id).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }

  addAppService(data) {
    return this.https.post(this.apiUrl + 'module/multiple', data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  editModule(data, id) {
    return this.https.put(this.apiUrl + 'module/update/' + id, data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  deleteModule(id) {
    return this.https.delete(this.apiUrl + 'module/delete/' + id).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }

  editHeader(id, data) {
    return this.https.put(this.apiUrl + 'mainPage/update/' + id, data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  AddHeader(data) {
    return this.https.post(this.apiUrl + 'mainPage/add', data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  getHeaderBYId() {
    return this.https.get(this.apiUrl + 'mainPage/get').pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  editsubModule(data, id) {
    return this.https.put(this.apiUrl + 'subModule/update/' + id, data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  deletesubModule(id) {
    return this.https.delete(this.apiUrl + 'subModule/delete/' + id).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  addFAQ(data) {
    return this.https.post(this.apiUrl + 'question/add', data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  addSubModule(data) {
    return this.https.post(this.apiUrl + 'subModule/add', data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  getAboutUsById(id: any) {
    return this.https.get(this.apiUrl + 'aboutUs/getAll/' + id).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  addAboutUs(data) {
    return this.https.post(this.apiUrl + 'aboutUs/multiple', data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  editAboutUs(data, id) {
    return this.https.put(this.apiUrl + 'aboutUs/update/' + id, data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  addTeam(data) {
    return this.https.post(this.apiUrl + 'team/add', data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  editTeam(data, id) {
    return this.https.put(this.apiUrl + 'team/update/' + id, data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  deleteTeam(id) {
    return this.https.delete(this.apiUrl + 'team/delete/' + id).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
}
