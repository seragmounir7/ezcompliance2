import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class DynamicFormsService {
	apiUrl = environment.apiUrl;
	constructor(private https: HttpClient) {}

	homebarTitle = new BehaviorSubject('');
	formIdEdit = '';
	formType = '';
	formTitle = '';
	login(data) {
		return this.https.post(this.apiUrl + 'authentication/login', data).pipe(
			map((res: any) => {
				if (res.data.accessToken) {
					sessionStorage.setItem('accessToken', res.data.accessToken);
				}
				return res;
			})
		);
	}
	addCategory(data) {
		return this.https.post(this.apiUrl + 'category/add', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	deleteCategory(id) {
		return this.https.delete(this.apiUrl + 'category/delete/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	editCategory(data, id) {
		return this.https.put(this.apiUrl + 'category/update/' + id, data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	getAllCategory() {
		return this.https.get(this.apiUrl + 'category/getAll').pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	getCategoryById(id) {
		return this.https.get(this.apiUrl + 'category/get/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	addForm(data) {
		return this.https.post(this.apiUrl + 'form/add', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	deleteForm(id) {
		return this.https.delete(this.apiUrl + 'form/delete/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	editForm(data, id) {
		return this.https.put(this.apiUrl + 'form/update/' + id, data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	getAllForm(field = '', value = '') {
		return this.https
			.get(
				this.apiUrl + 'form/getAll',
				field && value ? { params: { field, value } } : {}
			)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}
	getFormById(id) {
		return this.https.get(this.apiUrl + 'form/get/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	addFormBuilder(data) {
		return this.https.post(this.apiUrl + 'formBuilder/add', data).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	deleteFormBuilder(id) {
		return this.https.delete(this.apiUrl + 'formBuilder/delete/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	editFormBuilder(data, id) {
		return this.https
			.put(this.apiUrl + 'formBuilder/update/' + id, data)
			.pipe(
				map((res: any) => {
					return res;
				})
			);
	}

	getFormBuilderById(id) {
		return this.https.get(this.apiUrl + 'formBuilder/get/' + id).pipe(
			map((res: any) => {
				return res;
			})
		);
	}
	savedFormGetAll(field = '', value = '') {
		if (value == '') {
			field = '';
		}
		return this.https.get(
			this.apiUrl +
				`savedDynamicForm/getAll?field=${field}&value=${value}`
		);
	}
	savedFormGetById(id) {
		return this.https.get(this.apiUrl + 'savedDynamicForm/get/' + id);
	}
	getsavedFormByFormId(id) {
		return this.https.get(this.apiUrl + 'savedDynamicForm/getBy/' + id);
	}
	getSavedFormHistory(id: string) {
		return this.https
			.get(this.apiUrl + `savedDynamicForm/getRelatedOldData/${id}`)
			.pipe(map((res: any) => res.data[0].result));
	}

	savedFormPost(data) {
		return this.https.post(this.apiUrl + 'savedDynamicForm/add', data);
	}
	savedFormPut(id, data) {
		return this.https.put(
			this.apiUrl + 'savedDynamicForm/update/' + id,
			data
		);
	}
	savedFormDelete(id) {
		return this.https.delete(this.apiUrl + 'savedDynamicForm/delete/' + id);
	}
	formNameRecieved = '';
	categoryNameRecieved = '';

	addMyForm(formNameRecieved, categoryNameRecieved) {
		this.formNameRecieved = formNameRecieved;
		this.categoryNameRecieved = categoryNameRecieved;
	}
	getFormIdType() {}

	formCategoriesGetAll() {
		return this.https.get(this.apiUrl + 'formCategory/getAll');
	}
	formCategoriesGetId(id) {
		return this.https.get(this.apiUrl + 'formCategory/get/' + id);
	}

	formCategoriesPost(data) {
		return this.https.post(this.apiUrl + 'formCategory/add', data);
	}
	formCategoriesPut(id, data) {
		return this.https.put(this.apiUrl + 'formCategory/update/' + id, data);
	}
	formCategoriesDelete(id) {
		return this.https.delete(this.apiUrl + 'formCategory/delete/' + id);
	}
}
