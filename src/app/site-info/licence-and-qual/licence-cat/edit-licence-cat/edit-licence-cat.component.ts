import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-edit-licence-cat',
	templateUrl: './edit-licence-cat.component.html',
	styleUrls: ['./edit-licence-cat.component.scss']
})
export class EditLicenceCatComponent implements OnInit {
	editTitle: FormGroup;
	dataRec: any;

	constructor(
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		public dialogRef: MatDialogRef<EditLicenceCatComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.dataRec = data;
	}

	ngOnInit(): void {
		this.editTitle = this.fb.group({
			title: [this.dataRec.title, Validators.required]
		});
	}
	onFormSubmit() {
		const data = {
			title: this.editTitle.get('title').value,
			componentId: this.dataRec.componentId
		};
		this.logicalFormInfo
			.updateLicenceCat(data, this.dataRec._id)
			.subscribe((resData) => {
				this.dialogRef.close('true');
				Swal.fire({
					title: 'Category Edited successfully',
					showConfirmButton: false,
					timer: 1200
				});
			});
	}
	addForm() {
		const data = {
			title: this.editTitle.get('title').value
		};
		this.logicalFormInfo.addLicenceCat(data).subscribe((resData) => {
			this.dialogRef.close('true');
			if (this.dataRec) {
				Swal.fire({
					title: 'Category Edited successfully',
					showConfirmButton: false,
					timer: 1200
				});
			} else {
				Swal.fire({
					title: 'Category Added successfully',
					showConfirmButton: false,
					timer: 1200
				});
			}
		});
	}
	closeDialog() {
		this.dialogRef.close('false');
	}
}
