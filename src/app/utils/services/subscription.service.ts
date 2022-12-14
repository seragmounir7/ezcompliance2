import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class SubscriptionService {
	apiUrl = environment.apiUrl;
	constructor(private https: HttpClient) {}

	getPlan(id: any) {
		return this.https.get(this.apiUrl + 'plan/get/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	getAllPlan() {
		return this.https.get(this.apiUrl + 'plan/getAll').pipe(
			map((res: any) => {
				return res;
			})
		);
	}

	editPlan(id, data) {
		return this.https.put(this.apiUrl + 'plan/update/' + id, data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}

	addPlan(data) {
		return this.https.post(this.apiUrl + 'plan/add', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	getCoupon(id: any) {
		return this.https.get(this.apiUrl + 'coupon/get/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	getAllCoupon(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https
			.get(this.apiUrl + `coupon/getAll?field=${field}&value=${value}`)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}

	editCoupon(id, data) {
		return this.https.put(this.apiUrl + 'coupon/update/' + id, data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}

	addCoupon(data) {
		return this.https.post(this.apiUrl + 'coupon/add', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	deleteCoupon(id) {
		return this.https.delete(this.apiUrl + 'coupon/delete/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}

	//subscription start-----///////
	getCompanyDeatils() {
		return this.https.get(`${this.apiUrl}companyDetail/get/`);
	}
	updateCompanyDetails(data) {
		return this.https.put(`${this.apiUrl}companyDetail/update`, data);
	}
	getsubscription(id: any) {
		return this.https.get(this.apiUrl + 'subscription/get/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	getAllsubscription() {
		return this.https.get(this.apiUrl + 'subscription/getAll').pipe(
			map((res: any) => {
				return res;
			})
		);
	}

	editsubscription(id, data) {
		return this.https
			.put(this.apiUrl + 'subscription/update/' + id, data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}

	addsubscription(data) {
		return this.https.post(this.apiUrl + 'subscription/add', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	deletesubscription(id) {
		return this.https
			.delete(this.apiUrl + 'subscription/delete/' + id)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	//subscription End-----///////
}
