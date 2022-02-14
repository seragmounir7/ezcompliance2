import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
@Component({
	selector: 'app-edit-question',
	templateUrl: './edit-question.component.html',
	styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
	editTitle: FormGroup;
	dataRec: any;
	FAQ = [];
	portalData: any = [];

	constructor(
		private fb: FormBuilder,
		private landingPageInfo: LandingPageInfoServiceService,
		public dialogRef: MatDialogRef<EditQuestionComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.dataRec = data;
	}

	ngOnInit(): void {
		console.log(this.dataRec);

		this.editTitle = this.fb.group({
			question: [this.dataRec.question, Validators.required],
			answer: [this.dataRec.answer, Validators.required],
			portalId: [this.dataRec.portalId, Validators.required]
		});
		this.getAllPortal();
	}
	getAllFaq() {
		this.landingPageInfo.getAllFaq().subscribe((res) => {
			console.log('getaLlFAQ=>', res);
			this.FAQ = res.data;
		});
	}
	onFormSubmit() {
		const data = {
			question: this.editTitle.get('question').value,
			answer: this.editTitle.get('answer').value,
			portalId: this.editTitle.get('portalId').value
		};
		console.log('dataaa', data);

		this.landingPageInfo
			.editFAQ(data, this.dataRec._id)
			.subscribe((resData) => {
				console.log('editFAQ', resData);

				this.dialogRef.close('true');
				Swal.fire('Question Edited successfully');
			});
	}
	closeDialog() {
		this.dialogRef.close('false');
	}
	getAllPortal() {
		this.landingPageInfo.getAllPortal().subscribe((res) => {
			console.log('getAllPortal=>', res);
			this.portalData = res.data;
			console.log('portalData=>', this.portalData);
		});
	}
}
