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

@Component({
	selector: 'app-add-service-info',
	templateUrl: './add-service-info.component.html',
	styleUrls: ['./add-service-info.component.scss']
})
export class AddServiceInfoComponent implements OnInit {
	selectedImage: any = [];
	serviceDetail!: FormGroup;
	serviceData: any;
	ID: any;
	hide: boolean = true;
	constructor(
		private landingPageInfo: LandingPageInfoServiceService,
		private fb: FormBuilder,
		public upload: UploadFileServiceService,
		public dialogRef: MatDialogRef<AddServiceInfoComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.serviceDetail = this.fb.group({
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
		this.serviceDetail
			.get('fileUrl')
			?.setValue(this.selectedImage[0].toString());

		this.landingPageInfo
			.addSubModule(this.serviceDetail.value)
			.subscribe((data) => {
				Swal.fire('Service Added Successfully');

				this.serviceData = data;
				this.dialogRef.close('true');
				this.serviceDetail.reset();
			});
	}
	close() {
		this.dialogRef.close();
	}
}
