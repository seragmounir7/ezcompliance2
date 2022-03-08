import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-edit-licence',
	templateUrl: './edit-licence.component.html',
	styleUrls: ['./edit-licence.component.scss']
})
export class EditLicenceComponent implements OnInit {
	editTitle: FormGroup;
	dataRec: any;
	categories = [];
	constructor(
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		public dialogRef: MatDialogRef<EditLicenceComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.dataRec = data;
	}

	ngOnInit(): void {
		this.editTitle = this.fb.group({
			title: [this.dataRec.title, Validators.required],
			tradeCategoryId: [
				this.dataRec.tradeCategoryId._id,
				Validators.required
			]
		});

		this.getAllLicenceCat();
	}
	getAllLicenceCat() {
		this.logicalFormInfo.getAllLicenceCat().subscribe((res) => {
			this.categories = res.data;
		});
	}
	onFormSubmit() {
		const data = {
			title: this.editTitle.get('title').value,
			tradeCategoryId: this.editTitle.get('tradeCategoryId').value
		};

		this.logicalFormInfo
			.updateLicence(this.dataRec._id, data)
			.subscribe((resData) => {
				this.dialogRef.close('true');
				Swal.fire('Parameter Edited successfully');
			});
	}
	closeDialog() {
		this.dialogRef.close('false');
	}
}
