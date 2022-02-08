import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map, tap } from 'rxjs/operators';
@Injectable({
	providedIn: 'root'
})
export class EmployeeRegistrationService {
	apiUrl = environment.apiUrl;
	constructor(private https: HttpClient) {}

	addEmployeeInfo(data) {
		return this.https.post(this.apiUrl + 'employee/add', data).pipe(
			map((res: any) => {
				console.log('res.data=>', res.data);
				return res;
			})
		);
	}
	getAllEmployeeInfo() {
		return this.https.get(this.apiUrl + 'employee/getAll').pipe(
			map((res: any) => {
				return res.data.map((item) => {
					item.fullName = `${item.firstName} ${item.lastName}`;
					return item;
				});
			}),
			tap((res) => console.log('employee/getAll', res))
		);
	}
	getEmployeeInfoById(id) {
		return this.https.get(this.apiUrl + 'employee/get/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}

	updateEmployeeInfo(id, data) {
		return this.https.put(this.apiUrl + 'employee/update/' + id, data).pipe(
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
