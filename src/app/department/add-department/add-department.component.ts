import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DepartmentService } from 'src/app/utils/services/department.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

@Component({
	selector: 'app-add-department',
	templateUrl: './add-department.component.html',
	styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
	departmentName: FormControl = new FormControl('');
	closeDialog: (dialogResult?: any) => void;

	constructor(
		private matDialogRef: MatDialogRef<AddDepartmentComponent>,
		private departmentService: DepartmentService
	) {}

	ngOnInit(): void {
		this.closeDialog = (dialogResult?: any) => {
			this.matDialogRef.close(dialogResult);
		};
	}

	addDepartment() {
		const departmentName = this.departmentName.value;
		this.departmentService
			.addDepartment({ departmentName })
			.subscribe((res) => {
				this.closeDialog(true);
			});
	}
}
