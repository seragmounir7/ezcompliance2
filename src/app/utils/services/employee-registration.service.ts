import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { UserValue, UserResponce } from '../types/UserResponceTypes';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class EmployeeRegistrationService {
	apiUrl = environment.apiUrl;
	constructor(private https: HttpClient) {}

	addEmployeeInfo(data) {
		return this.https
			.post(this.apiUrl + 'authentication/register', data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	getAllEmployeeInfo(): Observable<UserValue[]> {
		return this.https
			.get<UserResponce>(
				this.apiUrl + 'authentication/get/all/created/employees'
			)
			.pipe(
				map((res) => {
					return res.data.map((item) => {
						item.fullName = `${item.firstName} ${item.lastName}`;
						return item;
					});
				})
			);
	}
	getEmployeeInfoById(id) {
		return this.https
			.get(
				this.apiUrl + 'authentication/clientAdmin/getUserProfile/' + id
			)
			.pipe(
				map((res: any) => {
					res.data = res.data[0];
					return res;
				})
			);
	}

	updateEmployeeInfo(id, data) {
		return this.https
			.put(this.apiUrl + 'authentication/update/user/by/' + id, data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	deleteEmployeeInfo(id) {
		return this.https.delete(this.apiUrl + 'employee/delete/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
}
