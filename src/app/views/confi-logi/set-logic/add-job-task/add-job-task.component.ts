import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
	dataRec: any;
	jobTaskDetails!: FormGroup;
	addjob!: FormGroup;
	formData: any;
	Edit = false;
	Add = true;
	licenceCatAll = [];
	Id: any;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private logicalFormInfo: LogicalFormInfoService,
		private dialogRef: MatDialogRef<AddJobTaskComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.dataRec = data;

		console.log('datarec', this.dataRec);
		this.addjob = this.fb.group({
			title: ['', Validators.required],
			tradeCategory: ['', Validators.required]
		});
	}

	ngOnInit(): void {
		this.getAllCategories();
		if (this.Id != '') {
			this.Eddit();
		} else {
			this.Added();
		}
	}

	Added() {
		if (this.Edit == true) {
			this.Edit = false;
			this.Add = true;
			this.addjob = this.fb.group({
				title: ['', Validators.required],
				tradeCategory: ['', Validators.required]
			});
		} else {
			this.Add = true;
		}
	}

	Eddit() {
		if (this.Add == true) {
			this.Add = false;
			this.Edit = true;
			this.jobTaskDetails = this.fb.group({
				title: [this.dataRec.title, Validators.required],
				tradeCategoryId: [
					this.dataRec.tradeCategoryId._id,
					Validators.required
				]
			});
		} else {
			this.Edit = true;
		}
	}
	getAllCategories() {
		this.logicalFormInfo.getAllLicenceCat().subscribe((res) => {
			console.log('getAllLicenceCat=>', res);
			this.licenceCatAll = res.data;
		});
	}
	onFormSubmit() {
		console.log(this.jobTaskDetails.get('title').value);
		const data = {
			title: this.jobTaskDetails.get('title').value,
			tradeCategoryId: this.jobTaskDetails.get('tradeCategoryId').value
		};
		console.log('edit', data);
		this.logicalFormInfo.updateJobTask(data, this.dataRec._id).subscribe(
			(data) => {
				console.log('JOBTask=>', data);
				this.dialogRef.close('true');
				Swal.fire({
					title: 'JobTask Updated successfully',
					showConfirmButton: false,
					timer: 1200
				});
			},
			(err) => {
				console.error(err);
			}
		);
	}
	addForm() {
		console.log('addForm', this.addjob.value);
		this.logicalFormInfo.addJobTask(this.addjob.value).subscribe(
			(data) => {
				console.log('JOBTask=>', data);
				this.dialogRef.close('true');
				Swal.fire({
					title: 'Parameter Added successfully',
					showConfirmButton: false,
					timer: 1200
				});
			},
			(err) => {
				console.error(err);
			}
		);
	}
	close() {
		this.dialogRef.close();
	}
}
