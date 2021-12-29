import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SavedformsService {
apiUrl=environment.apiUrl
  constructor(private https:HttpClient) { }

  getAllSavedForms() {
    return this.https.get(this.apiUrl + 'savedForms/getAll');
  }

}

