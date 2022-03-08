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
	selector: 'app-add-safety-module',
	templateUrl: './add-safety-module.component.html',
	styleUrls: ['./add-safety-module.component.scss']
})
export class AddSafetyModuleComponent implements OnInit {
	safetyDetail: FormGroup;
	selectedImage: any;
	myId: boolean;
	Is_subMod: boolean;
	isEdit = false;
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
		public dialogRef: MatDialogRef<AddSafetyModuleComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.Is_Mod = data.moduleName;
		this.safetyDetail = fb.group({
			mode: 'Safety',
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

			this.safetyDetail.patchValue({
				mode: 'Safety',

				title: this.data.EditData.title,
				description: this.data.EditData.description
			});
			this.safetyImgArr().at(0).patchValue({
				title: this.data.EditData.subModules[this.data.index].title
			});
			this.selectedImage = this.data.EditData.subModules[
				this.data.index
			].fileUrl;
		}
		const index = this.data.index;
		this.subId = this.data.EditData.subModules[index]._id;
	}
	onFormSubmit() {
		const value = this.selectedImage[0];
		const arrlength = this.safetyImgArr().length;
		for (let i = 0; i < arrlength; i++) {
			this.safetyImgArr()
				.at(i)
				.get('fileUrl')
				?.setValue(this.selectedImage[i].toString());
		}
	}
	addSafetyModule() {
		this.safetyImgArr().push(this.safetyForm());
	}
	safetyImgArr(): FormArray {
		return this.safetyDetail.get('arrObj') as FormArray;
	}
	safetyForm(): FormGroup {
		return this.fb.group({
			fileUrl: [],
			title: [],
			subtitle: '',
			description: ''
		});
	}
	removeSafetyModule(i) {
		const item = <FormArray>this.safetyDetail.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
			this.selectedImage.splice(i, 1);
		}
	}

	browser(event, i) {
		const files = event.target.files[0];
		const formData = new FormData();
		formData.append('', files);
		const value = this.selectedImage[0];

		if (value) {
			this.upload.upload(formData).subscribe((res) => {
				this.selectedImage = res.files[0];
			});
		} else {
			this.upload.upload(formData).subscribe((res) => {
				this.safetyDetail.patchValue({
					filePath: res.filePath
				});
				this.selectedImage.push(res.files[0]);
			});
		}
	}
	editModule() {
		if (this.data.action == 'edit') {
			const SafetyData = {
				title: this.safetyDetail.controls.title.value,
				description: this.safetyDetail.controls.description.value,
				mode: 'Safety'
			};

			this.landingPageInfo
				.editModule(SafetyData, this.data.EditData._id)
				.subscribe((resData) => {
					Swal.fire('Module Edited Successfully');

					this.dialogRef.close('true');
					this.safetyDetail.reset();
				});
		} else {
			const data = {
				mode: 'Safety',

				title: this.safetyDetail.controls.title.value,
				description: this.safetyDetail.controls.description.value,
				arrObj: this.fb.array([])
			};

			this.landingPageInfo
				.addAppService(this.safetyDetail.value)
				.subscribe((data) => {
					this.safetyData = data;
				});
		}
	}
	editSubModule() {
		if (this.data.action == 'edit') {
			const submodulesData = {
				moduleId: this.data.EditData._id,
				title: this.safetyImgArr().at(0).get('title')?.value,
				fileUrl: this.selectedImage
				// "description": this.safetyImgArr().at(this.data.index).get('description')?.value,
			};

			this.landingPageInfo
				.editsubModule(submodulesData, this.subId)
				.subscribe((resData) => {
					Swal.fire('Module Edited Successfully');

					this.dialogRef.close('true');
				});
		} else {
			const data = {
				mode: 'Safety',

				title: this.safetyDetail.controls.title.value,
				description: this.safetyDetail.controls.description.value,
				arrObj: this.fb.array([])
			};

			this.landingPageInfo
				.addAppService(this.safetyDetail.value)
				.subscribe((data) => {
					this.safetyData = data;
				});
		}
	}
	close() {
		this.dialogRef.close();
	}
}
