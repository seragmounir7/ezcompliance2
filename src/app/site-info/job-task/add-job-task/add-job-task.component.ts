import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-add-job-task',
	templateUrl: './add-job-task.component.html',
	styleUrls: ['./add-job-task.component.scss']
})
export class AddJobTaskComponent implements OnInit {
	jobTaskDetails!: FormGroup;
	formData: any;
	numberOfLineBreaks: any;
	licenceCatAll = [];
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private logicalFormInfo: LogicalFormInfoService,
		public dialogRef: MatDialogRef<AddJobTaskComponent>
	) {
		this.jobTaskDetails = this.fb.group({
			// mode:"JobTask",
			arrObj: this.fb.array([])
		});
	}

	ngOnInit(): void {
		this.addAction();
		this.getAllCategories();
	}
	getAllCategories() {
		this.logicalFormInfo.getAllLicenceCat().subscribe((res) => {
			console.log('getAllLicenceCat=>', res);
			this.licenceCatAll = res.data;
		});
	}
	addAction() {
		{
			this.add().push(this.newAction());
		}
	}
	add(): FormArray {
		return this.jobTaskDetails.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			title: ['', Validators.required],
			tradeCategoryId: ['', Validators.required]
		});
	}

	removeSafetyModule(i) {
		const item = <FormArray>this.jobTaskDetails.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		console.log(this.jobTaskDetails.get('arrObj').value);
		const data = {
			arrObj: this.jobTaskDetails.get('arrObj').value
		};
		this.logicalFormInfo.addMultipleJobTask(data).subscribe(
			(data) => {
				console.log('JOBTask=>', data);
				Swal.fire({
					title: 'Parameter Added successfully',
					showConfirmButton: false,
					timer: 1200
				});
				if (this.dialogRef) {
					this.dialogRef.close('ok');
					return;
				}
				this.router.navigate(['/admin/setting/jobTask']);
			},
			(err) => {
				if (this.dialogRef) {
					this.dialogRef.close('error');
				}
				console.error(err);
			}
		);
	}
	calcHeight(target) {
		let value = target.value;
		this.numberOfLineBreaks = (value.match(/\n/g) || []).length + 1;
		console.log('numberOfLineBreaks', this.numberOfLineBreaks);
	}
}
