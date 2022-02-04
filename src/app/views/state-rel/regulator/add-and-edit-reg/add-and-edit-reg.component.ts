import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-add-and-edit-reg',
	templateUrl: './add-and-edit-reg.component.html',
	styleUrls: ['./add-and-edit-reg.component.scss']
})
export class AddAndEditRegComponent implements OnInit {
	editTitle: FormGroup;
	dataRec: any;

	constructor(
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		public dialogRef: MatDialogRef<AddAndEditRegComponent>,
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
			.updateRegulator(data, this.dataRec._id)
			.subscribe((resData) => {
				console.log('updateRegulator', resData);

				this.dialogRef.close('true');
				Swal.fire({
					title: 'Regulator Edited successfully',
					showConfirmButton: false,
					timer: 1200
				});
			});
	}
	addForm() {
		const data = {
			title: this.editTitle.get('title').value
		};
		this.logicalFormInfo.addRegulator(data).subscribe((resData) => {
			console.log('addRegulator', resData);

			this.dialogRef.close('true');
			if (this.dataRec) {
				Swal.fire({
					title: 'Regulator Edited successfully',
					showConfirmButton: false,
					timer: 1200
				});
			} else {
				Swal.fire({
					title: 'Regulator Added successfully',
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
