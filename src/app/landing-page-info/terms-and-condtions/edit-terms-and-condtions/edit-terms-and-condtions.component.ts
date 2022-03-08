import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-edit-terms-and-condtions',
	templateUrl: './edit-terms-and-condtions.component.html',
	styleUrls: ['./edit-terms-and-condtions.component.scss']
})
export class EditTermsAndCondtionsComponent implements OnInit {
	termsDetail: FormGroup;
	selectedImage: any;
	myId: boolean;
	Is_subMod: boolean;
	isEdit = false;
	// data: any;
	enum: any;
	subId: any;
	safetyData: any;
	Is_Mod: any;
	Edit = false;
	Add = false;
	type: string = '';
	Update = false;
	module = false;
	subModule = false;
	moduleName: string;
	constructor(
		private fb: FormBuilder,
		private landingPageInfo: LandingPageInfoServiceService,
		public upload: UploadFileServiceService,
		public router: Router,
		private route: ActivatedRoute,
		private spinner: NgxSpinnerService,
		public dialogRef: MatDialogRef<EditTermsAndCondtionsComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.Is_Mod = data.moduleName;
		this.termsDetail = fb.group({
			mode: 'Terms',
			arrObj: this.fb.array([]),
			title: ['', Validators.required],
			description: ['', Validators.required]
		});
	}
	ngOnInit(): void {
		if (this.Is_Mod == true) {
			this.subModule = true;
			this.module = false;
		}
		if (this.Is_Mod == false) {
			this.module = true;
			this.subModule = false;
		}
		this.addSafetyModule();
		if (this.data.action == 'edit') {
			this.Update = true;

			this.termsDetail.patchValue({
				mode: 'Terms',

				title: this.data.EditData.title,
				description: this.data.EditData.description
			});
			this.safetyImgArr().at(0).patchValue({
				title: this.data.EditData.subModules[this.data.index].title,
				description: this.data.EditData.subModules[this.data.index]
					.description
			});
		}
		const index = this.data.index;
		this.subId = this.data.EditData.subModules[index]._id;
	}
	onFormSubmit() {}
	addSafetyModule() {
		this.safetyImgArr().push(this.safetyForm());
	}
	safetyImgArr(): FormArray {
		return this.termsDetail.get('arrObj') as FormArray;
	}
	safetyForm(): FormGroup {
		return this.fb.group({
			fileUrl: '',
			title: [''],
			subtitle: '',
			description: ['']
		});
	}
	removeSafetyModule(i) {
		const item = <FormArray>this.termsDetail.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}

	editModule() {
		if (this.data.action == 'edit') {
			const SafetyData = {
				title: this.termsDetail.controls.title.value,
				description: this.termsDetail.controls.description.value,
				mode: 'Terms'
			};

			this.landingPageInfo
				.editModule(SafetyData, this.data.EditData._id)
				.subscribe((resData) => {
					Swal.fire('Module Edited Successfully');

					this.dialogRef.close('true');
					this.termsDetail.reset();
				});
		}
	}
	editSubModule() {
		if (this.data.action == 'edit') {
			const submodulesData = {
				moduleId: this.data.EditData._id,
				title: this.safetyImgArr().at(0).get('title')?.value,
				description: this.safetyImgArr().at(0).get('description')
					?.value,
				fileUrl: ''
			};

			this.landingPageInfo
				.editsubModule(submodulesData, this.subId)
				.subscribe((resData) => {
					Swal.fire('Module Edited Successfully');

					this.dialogRef.close('true');
				});
		}
	}
	close() {
		this.dialogRef.close();
	}
}
