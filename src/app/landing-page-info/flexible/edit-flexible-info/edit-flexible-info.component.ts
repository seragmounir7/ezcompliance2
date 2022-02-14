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
@Component({
	selector: 'app-edit-flexible-info',
	templateUrl: './edit-flexible-info.component.html',
	styleUrls: ['./edit-flexible-info.component.scss']
})
export class EditFlexibleInfoComponent implements OnInit {
	flexibleDetail: FormGroup;
	selectedImage: any;
	myId: boolean;
	Is_subMod: boolean;
	isEdit = false;
	enum: any;
	subId: any;
	flexibleData: any;
	Is_Mod: any;
	Edit = false;
	Add = false;
	type: string = '';
	Update = false;
	module = false;
	subModule = false;
	moduleName: boolean;
	constructor(
		private fb: FormBuilder,
		private landingPageInfo: LandingPageInfoServiceService,
		public upload: UploadFileServiceService,
		public router: Router,
		private route: ActivatedRoute,
		private spinner: NgxSpinnerService,
		public dialogRef: MatDialogRef<EditFlexibleInfoComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.Is_Mod = data.moduleName;
		this.Is_subMod = data.modulename;

		this.flexibleDetail = this.fb.group({
			title: ['', Validators.required],
			description: ['', Validators.required],
			mode: 'Flexible',
			arrObj: this.fb.array([])
		});
	}

	ngOnInit(): void {
		this.addAction();
		if (this.Is_Mod == true) {
			this.subModule = true;
			this.module = false;
		}
		if (this.Is_Mod == false) {
			this.module = true;
			this.subModule = false;
		}

		if (this.data.action == 'edit') {
			this.Update = true;

			this.flexibleDetail.patchValue({
				mode: 'Flexible',
				title: this.data.EditData.title,
				description: this.data.EditData.description
			});
			this.add().at(0).patchValue({
				title: this.data.EditData.subModules[this.data.index].title,
				subTitle: this.data.EditData.subModules[this.data.index]
					.subTitle
			});
			(this.selectedImage = this.data.EditData.subModules[
				this.data.index
			].fileUrl),
				console.log('img', this.selectedImage);
		}

		const index = this.data.index;
		this.subId = this.data.EditData.subModules[index]._id;
	}

	addAction() {
		{
			this.add().push(this.newAction());
		}
	}
	add(): FormArray {
		return this.flexibleDetail.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			fileUrl: ['', Validators.required],
			subTitle: ['', Validators.required],
			title: ['', Validators.required],
			description: ['', Validators.required]
		});
	}
	removeSafetyModule(i) {
		this.add().removeAt(i);
	}
	onFormSubmit() {
		this.editModule();
		this.editSubModule();
		const value = this.selectedImage;

		const arrlength = this.add().length;
		for (let i = 0; i < arrlength; i++) {
			this.add()
				.at(i)
				.get('fileUrl')
				?.setValue(this.selectedImage[i].toString());
		}

		const serviceData = {};
	}
	browser(event, i) {
		const files = event.target.files[0];
		const formData = new FormData();
		formData.append('', files);
		const value = this.selectedImage;

		if (value) {
			this.upload.upload(formData).subscribe((res) => {
				this.selectedImage = res.files[0];
			});
		} else {
			this.upload.upload(formData).subscribe((res) => {
				this.flexibleDetail.patchValue({
					filePath: res.filePath
				});
				this.selectedImage.push(res.files[0]);
			});
		}
	}

	editModule() {
		if (this.data.action == 'edit') {
			const flexibleData = {
				title: this.flexibleDetail.controls.title.value,
				description: this.flexibleDetail.controls.description.value,
				mode: 'Flexible'
			};

			this.landingPageInfo
				.editModule(flexibleData, this.data.EditData._id)
				.subscribe((resData) => {
					Swal.fire('Edited Successfully');
					console.log('editModule', resData);

					this.dialogRef.close('true');
					this.flexibleDetail.reset();
				});
		}
	}
	editSubModule() {
		if (this.data.action == 'edit') {
			const submodulesData = {
				moduleId: this.data.EditData._id,
				title: this.add().at(0).get('title')?.value,
				fileUrl: this.selectedImage,
				subTitle: this.add().at(0).get('subTitle')?.value
			};

			this.landingPageInfo
				.editsubModule(submodulesData, this.subId)
				.subscribe((resData) => {
					Swal.fire('Edited Successfully');

					this.dialogRef.close('true');
					this.flexibleDetail.reset();
				});
		} else {
			const data = {
				mode: 'Flexible',

				title: this.flexibleDetail.controls.title.value,
				description: this.flexibleDetail.controls.description.value,
				arrObj: this.fb.array([])
			};

			this.landingPageInfo
				.addAppService(this.flexibleDetail.value)
				.subscribe((data) => {
					this.flexibleData = data;
				});
		}
	}
	close() {
		this.dialogRef.close();
	}
}
