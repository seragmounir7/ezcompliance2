import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	selectedImage: any;
	HeaderInformation!: FormGroup;
	serviceDetail: any;
	serviceData: any;
	myId: any;
	isEdit: boolean;
	data: any;
	dataHeader: any;
	headerId: any;
	infoData: any;
	constructor(
		private url: LandingPageInfoServiceService,
		private dialogRef: MatDialogRef<HeaderComponent>,
		@Inject(MAT_DIALOG_DATA) public data1: any,
		private fb: FormBuilder,
		public upload: UploadFileServiceService
	) {
		this.dataHeader = data1.headerData;
	}

	ngOnInit(): void {
		this.getHeaderById();

		this.HeaderInformation = this.fb.group({
			fileUrl: ['', Validators.required],
			title: ['', Validators.required],
			description: ['', Validators.required]
		});
		if (this.data1.action == 'edit') {
			(this.selectedImage = this.dataHeader.fileUrl),
				this.HeaderInformation.patchValue({
					description: this.dataHeader.description,

					title: this.dataHeader.title
				});
		}
	}

	onSubmit() {
		this.HeaderInformation.get('fileUrl')?.setValue(this.selectedImage);

		this.url.AddHeader(this.HeaderInformation.value).subscribe((res) => {});
	}
	browser(event) {
		const files = event.target.files[0];
		const formdata = new FormData();
		formdata.append('', files);

		this.upload.upload(formdata).subscribe((res) => {
			this.selectedImage = res.files[0];
		});
	}

	getHeaderById() {
		this.url.getHeaderBYId().subscribe((data) => {
			this.infoData = data.data;
		});
	}

	editHeaderInfo(id) {
		this.myId = this.dataHeader._id;
		this.HeaderInformation.get('fileUrl').setValue(this.selectedImage);

		this.isEdit = true;
		this.url
			.editHeader(this.myId, this.HeaderInformation.value)
			.subscribe((res) => {
				Swal.fire(' Edited Successfully');

				this.data = res.data;

				this.dialogRef.close('true');
			});
	}
	close() {
		this.dialogRef.close();
	}
	onFormSubmit() {
		const value = this.selectedImage[0];

		const serviceData = {};

		this.url.AddHeader(this.HeaderInformation.value).subscribe((data) => {
			this.serviceData = data;
		});
	}
}
