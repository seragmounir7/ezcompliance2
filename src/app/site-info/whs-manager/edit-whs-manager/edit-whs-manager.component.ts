import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-edit-whs-manager',
	templateUrl: './edit-whs-manager.component.html',
	styleUrls: ['./edit-whs-manager.component.scss']
})
export class EditWhsManagerComponent implements OnInit {
	editTitle: FormGroup;
	dataRec: any;
	constructor(
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		public dialogRef: MatDialogRef<EditWhsManagerComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.dataRec = data;
	}
	ngOnInit(): void {
		this.editTitle = this.fb.group({
			name: [this.dataRec.name, Validators.required],
			email: [this.dataRec.email, Validators.required]
		});
	}
	onFormSubmit() {
		const data = {
			name: this.editTitle.get('name').value,
			email: this.editTitle.get('email').value
		};
		this.logicalFormInfo
			.editWHSManager(this.dataRec._id, data)
			.subscribe((resData) => {
				this.dialogRef.close('true');
				Swal.fire({
					title: 'Parameter Edited successfully',
					showConfirmButton: false,
					timer: 1200
				});
			});
	}
	closeDialog() {
		this.dialogRef.close('false');
	}
}
