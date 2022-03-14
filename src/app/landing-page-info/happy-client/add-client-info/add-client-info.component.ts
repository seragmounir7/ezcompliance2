import { Component, OnInit, Inject } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators,
	FormArray,
	FormControl
} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import Swal from 'sweetalert2';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-client-info',
	templateUrl: './add-client-info.component.html',
	styleUrls: ['./add-client-info.component.scss']
})
export class AddClientInfoComponent implements OnInit {
	selectedImage: any = [];
	clientDetail!: FormGroup;
	happyClientData: any;
	ID: any;
	hide: boolean = true;
	constructor(
		private landingPageInfo: LandingPageInfoServiceService,
		private fb: FormBuilder,
		public upload: UploadFileServiceService,
		public dialogRef: MatDialogRef<AddClientInfoComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.clientDetail = this.fb.group({
			moduleId: this.data.EditData,
			title: ['', Validators.required],
			description: ['', Validators.required],
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
		this.clientDetail
			.get('fileUrl')
			?.setValue(this.selectedImage[0].toString());
		this.landingPageInfo
			.addSubModule(this.clientDetail.value)
			.subscribe((data) => {
				Swal.fire('Client Added Successfully');
				this.happyClientData = data;
				this.dialogRef.close('true');
				this.clientDetail.reset();
			});
	}
	close() {
		this.dialogRef.close();
	}
}
