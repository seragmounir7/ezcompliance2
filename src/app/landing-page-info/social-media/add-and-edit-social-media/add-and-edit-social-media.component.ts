import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { element } from 'protractor';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import Swal from 'sweetalert2';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-and-edit-social-media',
	templateUrl: './add-and-edit-social-media.component.html',
	styleUrls: ['./add-and-edit-social-media.component.scss']
})
export class AddAndEditSocialMediaComponent implements OnInit {
	socialMediaDetail: FormGroup;
	socialMedieDetails: any;
	data1: any;
	constructor(
		private landingPageInfo: LandingPageInfoServiceService,
		private fb: FormBuilder,
		public dialogRef: MatDialogRef<AddAndEditSocialMediaComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.socialMediaDetail = this.fb.group({
			facebook: ['', Validators.required],
			twitter: ['', Validators.required],
			youtube: ['', Validators.required],
			instagram: ['', Validators.required]
		});
		this.data1 = data;
		if (data._id) {
			this.socialMediaDetail.patchValue({
				facebook: this.data1.facebook,
				twitter: this.data1.twitter,
				youtube: this.data1.youtube,
				instagram: this.data1.instagram
			});
		}
	}

	ngOnInit(): void {}
	onSubmit() {
		this.landingPageInfo
			.addSocialMedia(this.socialMediaDetail.value)
			.subscribe((data) => {
				Swal.fire('Social Media Added Successfully');

				this.socialMediaDetail = data;
				this.dialogRef.close('true');
			});
	}
	close() {
		this.dialogRef.close();
	}

	onFormUpdate(data) {
		this.landingPageInfo
			.editSocialMedia(this.socialMediaDetail.value, this.data._id)
			.subscribe((resData) => {
				this.dialogRef.close('true');
				Swal.fire({
					title: 'Social Media Edited successfully',
					timer: 1200
				});
			});
	}
}
