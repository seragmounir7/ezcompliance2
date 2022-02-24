import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
	providedIn: 'root'
})
export class SavedformsService {
	apiUrl = environment.apiUrl;
	constructor(private https: HttpClient) {}

	getAllSavedForms(
		page = 1,
		limit = 10,
		field = '',
		value = '',
		sField = '',
		searchSting = ''
	) {
		// if()

		return this.https
			.get(
				this.apiUrl +
					`savedForms/getAll?page=${page}&limit=${limit}${
						field ? `&field=${field}&value=${value}` : ''
					}${sField ? '&' + sField + '=' + searchSting : ''}`
			)
			.pipe(
				map((data: any) => {
					if (data.data) {
						data.data = (data.data as Array<any>).map((obj) => {
							if (obj?.isDynamic === 'Dynamic Form') {
								obj.formName = obj.formIndex;
							} else {
								obj.formName = obj.formId;
							}
							return obj;
						});
					}
					return data;
				})
			);
	}
}
