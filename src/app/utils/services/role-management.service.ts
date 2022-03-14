import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {
	filter,
	map,
	share,
	shareReplay,
	startWith,
	tap
} from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import {
	AccessArr,
	AccessObj,
	AccessValue,
	RoleID,
	RoleValue
} from '../types/AccessResponceTypes';
import { accessType, FormName } from 'src/app/side-nav-access.enum';
import { ResponceBody } from '../types/ResponceBody';
import { FormGroup } from '@angular/forms';

@Injectable({
	providedIn: 'root'
})
export class RoleManagementService {
	apiUrl = environment.apiUrl;

	private accessSubject: BehaviorSubject<AccessArr[]> = new BehaviorSubject<
		AccessArr[]
	>([]);
	public accessArrObs$ = this.accessSubject.asObservable();

	constructor(private https: HttpClient) {}

	accessArrNext(data: AccessArr[]) {
		this.accessSubject.next(data);
	}

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
	getAllRole(): Observable<ResponceBody<RoleValue>> {
		return this.https.get<ResponceBody<RoleValue>>(
			this.apiUrl + 'role/getAll'
		);
	}

	getRoleAutocomplete(
		formGroupName: FormGroup,
		controlName: string,
		roleArray: RoleValue[]
	) {
		return formGroupName.controls[controlName].valueChanges.pipe(
			startWith(''),
			map((value) => (typeof value === 'string' ? value : value?.role)),
			map((role) =>
				role ? this._filterRole(role, roleArray) : roleArray.slice()
			)
		);
	}
	private _filterRole(name: string, roleArray: RoleValue[]): any[] {
		const filterValue = name.toLowerCase();
		return roleArray.filter((option) =>
			option.role.toLowerCase().includes(filterValue)
		);
	}
	displayFnRole(user: any): string {
		return user && user.role ? user.role : '';
	}

	getAllAcess(): Observable<ResponceBody<AccessValue>> {
		return this.https
			.get<ResponceBody<AccessValue>>(this.apiUrl + 'access/getAll')
			.pipe(
				map((res) => {
					res.data = res.data.map((item) => {
						item.access = item.accessArr.map((item2) => {
							item2.form = item2.formName;
							return item2;
						});
						item.role = (item.roleId as RoleID)?.role;
						return item;
					});
					return res;
				}),
				shareReplay()
			);
	}
	updateAllAccess(data: AccessValue[]) {
		return this.https
			.put(this.apiUrl + 'access/update/multiple', {
				arrObj: data
			})
			.pipe(shareReplay());
	}

	getAccessByUserId(): Observable<AccessArr[]> {
		return this.https
			.get<ResponceBody<AccessValue>>(
				this.apiUrl +
					'authentication/get/user/access/by/' +
					sessionStorage.getItem('id')
			)
			.pipe(
				map((res) => res.data[0].accessArr),
				shareReplay()
			);
	}
	getAccessObj(formName): AccessObj {
		let accessObj: AccessObj = {
			View: {
				formName: FormName[formName],
				accessType: accessType.View
			},
			Add: {
				formName: FormName[formName],
				accessType: accessType.Add
			},

			Edit: {
				formName: FormName[formName],
				accessType: accessType.Edit
			},

			Delete: {
				formName: FormName[formName],
				accessType: accessType.Delete
			}
		};
		return accessObj;
	}
}
