import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-add-and-edit-safety',
	templateUrl: './add-and-edit-safety.component.html',
	styleUrls: ['./add-and-edit-safety.component.scss']
})
export class AddAndEditSafetyComponent implements OnInit {
	editTitle: FormGroup;
	dataRec: any;

	constructor(
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		public dialogRef: MatDialogRef<AddAndEditSafetyComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.dataRec = data;
	}
	ngOnInit(): void {
		this.editTitle = this.fb.group({
			act: [this.dataRec.act, Validators.required],
			regulation: [this.dataRec.regulation, Validators.required]
		});
	}

	onFormSubmit() {
		const data = {
			act: this.editTitle.get('act').value,
			regulation: this.editTitle.get('regulation').value,
			componentId: this.dataRec.componentId
		};
		this.logicalFormInfo
			.updateSafety(data, this.dataRec._id)
			.subscribe((resData) => {
				console.log('SafetyLegislation', resData);

				this.dialogRef.close('true');
				Swal.fire({
					title: 'Safety Legislation Edited successfully',
					showConfirmButton: false,
					timer: 1200
				});
			});
	}
	addForm() {
		const data = {
			act: this.editTitle.get('act').value,
			regulation: this.editTitle.get('regulation').value
		};
		this.logicalFormInfo.addSafety(data).subscribe((resData) => {
			console.log('SafetyLegislation', resData);

			this.dialogRef.close('true');
			if (this.dataRec) {
				Swal.fire({
					title: 'Safety Legislation Edited successfully',
					showConfirmButton: false,
					timer: 1200
				});
			} else {
				Swal.fire({
					title: 'Safety Legislation Added successfully',
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
