import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';

import Swal from 'sweetalert2';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog';
@Component({
	selector: 'app-add-team-info',
	templateUrl: './add-team-info.component.html',
	styleUrls: ['./add-team-info.component.scss']
})
export class AddTeamInfoComponent implements OnInit {
	companyDetail: FormGroup;
	selectedImage: any = [];
	teamData: any;
	ID: any;
	hide: boolean = true;
	constructor(
		private landingPageInfo: LandingPageInfoServiceService,
		private fb: FormBuilder,
		public upload: UploadFileServiceService,
		public dialogRef: MatDialogRef<AddTeamInfoComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.companyDetail = this.fb.group({
			aboutUsId: this.data.EditData,
			imageUrl: ['', Validators.required],
			title: ['', Validators.required]
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
		this.companyDetail
			.get('imageUrl')
			?.setValue(this.selectedImage[0].toString());

		this.landingPageInfo
			.addTeam(this.companyDetail.value)
			.subscribe((data) => {
				Swal.fire('Team Added Successfully');

				this.teamData = data;
				this.dialogRef.close('true');
			});
	}
	close() {
		this.dialogRef.close();
	}
}
