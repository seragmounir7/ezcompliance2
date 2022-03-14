import { Component, OnInit, Inject } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators,
	FormArray,
	FormControl
} from '@angular/forms';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';

import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-flexible-info',
	templateUrl: './add-flexible-info.component.html',
	styleUrls: ['./add-flexible-info.component.scss']
})
export class AddFlexibleInfoComponent implements OnInit {
	selectedImage: any = [];
	flexibleDetail!: FormGroup;
	flexibleData: any;
	ID: any;
	hide: boolean = true;
	constructor(
		private landingPageInfo: LandingPageInfoServiceService,
		private fb: FormBuilder,
		public upload: UploadFileServiceService,
		public dialogRef: MatDialogRef<AddFlexibleInfoComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.flexibleDetail = this.fb.group({
			moduleId: this.data.EditData,
			title: ['', Validators.required],
			subTitle: ['', Validators.required],
			fileUrl: ['', Validators.required]
		});
	}

	ngOnInit(): void {}
	browser(event) {
		const files = event.target.files[0];
		const formdata = new FormData();
		formdata.append('', files);

		this.upload.upload(formdata).subscribe((res) => {
			this.selectedImage.push(res.files[0]);
		});
	}
	onSubmit() {
		this.flexibleDetail
			.get('fileUrl')
			?.setValue(this.selectedImage[0].toString());

		this.landingPageInfo
			.addSubModule(this.flexibleDetail.value)
			.subscribe((data) => {
				Swal.fire('Added Successfully');

				this.flexibleData = data;
				this.dialogRef.close('true');
				this.flexibleDetail.reset();
			});
	}
	close() {
		this.dialogRef.close();
	}
}
