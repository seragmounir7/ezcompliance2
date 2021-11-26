import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  addContact(data) {
    return this.https.post(this.apiUrl + 'contactUs/add', data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  editContactUs(id, data){
    return this.https.put(this.apiUrl + 'contactUs/update/' + id, data).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
  getContactById(id) {
    return this.https.get(this.apiUrl + 'contactUs/get/' + id).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }

  getContact() {
    return this.https.get(this.apiUrl + 'contactUs/getAll' ).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }

  deleteContactUs(id) {
    return this.https.delete(this.apiUrl + 'contactUs/delete/' + id).pipe(
      map((res: any) => {
        console.log('res.data=>', res.data);
        return res;
      })
    );
  }
 getAllPortal(){
  return this.https.get(this.apiUrl + 'portal/getAll').pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
  
 }
 addPortal(data){
  return this.https.post(this.apiUrl + 'portal/add', data).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
 }
 editportal(data,id){
  return this.https.put(this.apiUrl + 'portal/update/' + id, data).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
 }
deletePortal(id){
  return this.https.delete(this.apiUrl + 'portal/delete/' + id).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
getAllFaq(){
  return this.https.get(this.apiUrl + 'faq/getAll').pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
addFAQ(data){
  return this.https.post(this.apiUrl + 'faq/add', data).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
 }
 editFAQ(data,id){
  return this.https.put(this.apiUrl + 'faq/update/' + id, data).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
 }
deleteFaq(id){
  return this.https.delete(this.apiUrl + 'faq/delete/' + id).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
getAllFaqbasedOnPortal(id){
  return this.https.get(this.apiUrl + 'portal/getAll/' + id).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
addWork(data) {
  return this.https.post(this.apiUrl + 'ourWork/add', data).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
editWorK(id, data){
  return this.https.put(this.apiUrl + 'ourWork/update/' + id, data).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}


getWorkById(id) {
  return this.https.get(this.apiUrl + 'ourWork/get/' + id).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
addSubWork(data) {
  return this.https.post(this.apiUrl + 'subWork/add', data).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
editSubWorK(id, data){
  return this.https.put(this.apiUrl + 'subWork/update/' + id, data).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
deleteSubWorK(id){
  return this.https.delete(this.apiUrl + 'subWork/delete/' + id).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}
getSubWorkById(id) {
  return this.https.get(this.apiUrl + 'subWork/get/data/' + id).pipe(
    map((res: any) => {
      console.log('res.data=>', res.data);
      return res;
    })
  );
}

}