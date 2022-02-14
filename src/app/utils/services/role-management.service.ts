import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class RoleManagementService {
	apiUrl = environment.apiUrl;

	constructor(private https: HttpClient) {}

	///role management///
	addRole(data) {
		return this.https.post(this.apiUrl + 'role/add', data);
	}

	addMultipleRole(data) {
		return this.https.put(this.apiUrl + 'role/updateAll', { arrObj: data });
	}
	// addMultipleRisk(data) {
	//   return this.https.post(this.apiUrl + 'risk/add/multiple', data);
	// }
	updateRole(id, data) {
		return this.https.put(this.apiUrl + 'role/update/' + id, data);
	}
	deleteRole(id) {
		return this.https.delete(this.apiUrl + 'role/delete/' + id);
	}
	getAllRole() {
		return this.https.get(this.apiUrl + 'role/getAll');
	}
	// getRiskById(id) {
	//   return this.https.get(this.apiUrl + 'risk/get/' + id)
	// }
}
