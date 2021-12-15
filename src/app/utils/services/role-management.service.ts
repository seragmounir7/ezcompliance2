import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleManagementService {
  apiUrl = environment.apiUrl;

  constructor(private https: HttpClient) { }


  ///role management///
  addRole(data) {
    return this.https.post(this.apiUrl + 'role/add', data);
  }
  // addMultipleRisk(data) {
  //   return this.https.post(this.apiUrl + 'risk/add/multiple', data);
  // }
  // updateRisk(data, id) {
  //   return this.https.put(this.apiUrl + 'risk/update/' + id, data);
  // }
  // deleteRisk(id) {
  //   return this.https.delete(this.apiUrl + 'risk/delete/' + id)
  // }
  getAllRole() {
    return this.https.get(this.apiUrl + 'role/getAll')
  }
  // getRiskById(id) {
  //   return this.https.get(this.apiUrl + 'risk/get/' + id)
  // }
}
