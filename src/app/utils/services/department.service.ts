import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Department } from '../types/DepartmentTypes';
import { ResponceBody } from '../types/ResponceBody';

@Injectable({
	providedIn: 'root'
})
export class DepartmentService {
	constructor(private http: HttpClient) {}

	//////////////////start of Departemnt //////////////////
	addDepartment(data: { departmentName: string }) {
		return this.http.post(`${environment.apiUrl}department/add`, data);
	}
	updateDepartment(id, data: { departmentName: string }) {
		return this.http.put(
			`${environment.apiUrl}department/update/${id}`,
			data
		);
	}
	deleteDepartment(id: string) {
		return this.http.delete(`${environment.apiUrl}department/delete/${id}`);
	}
	delete() {}
	getAllDepartment() {
		return this.http.get<ResponceBody<Department[]>>(
			`${environment.apiUrl}department/getAll`
		);
	}

	getDepartmentNameAutocomplete(
		formGroupName: FormGroup,
		controlName: string,
		departmentArray: Department[]
	) {
		return formGroupName.controls[controlName].valueChanges.pipe(
			startWith(''),
			map((value) =>
				typeof value === 'string' ? value : value?.departmentName
			),
			map((departmentName) =>
				departmentName
					? this._filterDepartmentName(
							departmentName,
							departmentArray
					  )
					: departmentArray.slice()
			)
		);
	}

	private _filterDepartmentName(
		name: string,
		departmentArray: Department[]
	): any[] {
		const filterValue = name.toLowerCase();
		return departmentArray.filter((option) =>
			option.departmentName.toLowerCase().includes(filterValue)
		);
	}

	displayFnDepartmentName(user: any): string {
		return user && user.departmentName ? user.departmentName : '';
	}

	//////////////////End of Departemnt //////////////////
}
