import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-contact',
	templateUrl: './add-contact.component.html',
	styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
	contactUsForm!: FormGroup;
	mode: any;
	happyClientData: any = [];
	dataContact: any;
	myId: any;
	data: any;
	constructor(
		private url: LandingPageInfoServiceService,
		private dialogRef: MatDialogRef<AddContactComponent>,
		@Inject(MAT_DIALOG_DATA) public data1: any,
		private fb: FormBuilder,
		public upload: UploadFileServiceService
	) {
		this.dataContact = data1.headerData;
	}

	ngOnInit(): void {
		this.contactUsForm = this.fb.group({
			fullName: ['', Validators.required],
			phone: ['', Validators.required],
			email: ['', Validators.required],
			query: ['', Validators.required]
		});
		if (this.data1.action == 'edit') {
			this.contactUsForm.patchValue({
				fullName: this.data1.headerData.fullname,
				phone: this.data1.headerData.phone,
				email: this.data1.headerData.email,
				query: this.data1.headerData.query
			});
		}
	}

	onSubmit() {
		const data = {};

		this.url.addContact(this.contactUsForm.value).subscribe((res) => {
			this.dialogRef.close();
		});
	}

	editContactUs(id) {
		this.myId = this.dataContact._id;

		this.url
			.editContactUs(this.myId, this.contactUsForm.value)
			.subscribe((res) => {
				this.data = res.data;

				this.dialogRef.close('true');
			});
	}
}
