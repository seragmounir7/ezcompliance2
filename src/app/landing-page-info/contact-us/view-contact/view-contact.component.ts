import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';

@Component({
	selector: 'app-view-contact',
	templateUrl: './view-contact.component.html',
	styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {
	contactUsForm!: FormGroup;
	contactDetail: any;
	Contact: any = [];
	constructor(
		private url: LandingPageInfoServiceService,
		private dialogRef: MatDialogRef<ViewContactComponent>,
		@Inject(MAT_DIALOG_DATA) public data1: any,
		private fb: FormBuilder
	) {}

	ngOnInit(): void {
		console.log('this.dataContact', this.Contact);

		this.contactUsForm = this.fb.group({
			fullName: ['', Validators.required],
			phone: ['', Validators.required],
			email: ['', Validators.required],
			query: ['', Validators.required]
		});

		this.contactUsForm.patchValue({
			fullName: this.data1.fullName,
			phone: this.data1.phone,
			email: this.data1.email,
			query: this.data1.query
		});
	}

	close() {
		this.dialogRef.close();
	}
}
