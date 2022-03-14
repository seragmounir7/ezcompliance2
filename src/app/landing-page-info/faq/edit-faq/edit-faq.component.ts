import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-edit-faq',
	templateUrl: './edit-faq.component.html',
	styleUrls: ['./edit-faq.component.scss']
})
export class EditFaqComponent implements OnInit {
	editPortal: FormGroup;
	dataRec: any;
	constructor(
		private fb: FormBuilder,
		private landingPageInfo: LandingPageInfoServiceService,
		public dialogRef: MatDialogRef<EditFaqComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.dataRec = data;
	}

	ngOnInit(): void {
		this.editPortal = this.fb.group({
			title: [this.dataRec.title, Validators.required]
		});
	}

	onFormSubmit() {
		const data = {
			title: this.editPortal.get('title').value
		};

		this.landingPageInfo
			.editportal(data, this.dataRec._id)
			.subscribe((resData) => {
				this.dialogRef.close('true');
				Swal.fire({
					title: 'Portal Edited successfully',
					showConfirmButton: false,
					timer: 1200
				});
			});
	}
	addForm() {
		const data = {
			title: this.editPortal.get('title').value
		};
		this.landingPageInfo.addPortal(data).subscribe((resData) => {
			this.dialogRef.close('true');
			if (this.dataRec) {
				Swal.fire({
					title: 'Portal Added successfully',
					showConfirmButton: false,
					timer: 1200
				});
			} else {
				Swal.fire({
					title: 'Portal Added successfully',
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
