import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import Swal from 'sweetalert2';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-edit-changes-made',
	templateUrl: './edit-changes-made.component.html',
	styleUrls: ['./edit-changes-made.component.scss']
})
export class EditChangesMadeComponent implements OnInit {
	editTitle!: FormGroup;
	dataRec: any;
	constructor(
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		public dialogRef: MatDialogRef<EditChangesMadeComponent>,
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
			title: this.editTitle.get('title').value
		};
		this.logicalFormInfo
			.updateChangesMade(data, this.dataRec._id)
			.subscribe((resData) => {
				this.dialogRef.close('true');
				Swal.fire({
					title: 'Parameter Updated successfully',
					showConfirmButton: false,
					timer: 1200
				});
			});
	}
	closeDialog() {
		this.dialogRef.close('false');
	}
}
