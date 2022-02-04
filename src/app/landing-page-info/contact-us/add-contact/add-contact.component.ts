import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';

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
		console.log('dataContact=>', this.dataContact);

		// this.getContact();
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
	// getContact() {
	//   this.mode = 'HappyClient';
	//   this.url.getAppServiceById(this.mode).subscribe((data) => {
	//     this.dataContact = data.data;
	//   });
	// }
	onSubmit() {
		const data = {
			// "title": this.HeaderInformation.get("heading").value,
			// "description":  this.HeaderInformation.get("description").value,
			// "fileUrl":this.HeaderInformation.get("uploadImage").value,
		};
		console.log(this.contactUsForm.value);
		this.url.addContact(this.contactUsForm.value).subscribe((res) => {
			console.log('AddContact', res);
			this.dialogRef.close();
		});
	}

	editContactUs(id) {
		console.log('id=>', id);
		this.myId = this.dataContact._id;

		console.log('form', this.contactUsForm.value);

		// this.isEdit = true;
		this.url
			.editContactUs(this.myId, this.contactUsForm.value)
			.subscribe((res) => {
				console.log('Data Set response' + res);
				this.data = res.data;
				console.log('new response' + this.data);
				this.dialogRef.close('true');
			});
	}
}
