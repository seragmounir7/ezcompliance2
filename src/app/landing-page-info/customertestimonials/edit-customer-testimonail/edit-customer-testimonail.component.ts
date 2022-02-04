import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog';
@Component({
	selector: 'app-edit-customer-testimonail',
	templateUrl: './edit-customer-testimonail.component.html',
	styleUrls: ['./edit-customer-testimonail.component.scss']
})
export class EditCustomerTestimonailComponent implements OnInit {
	testiomnial: FormGroup;
	selectedImage: any;
	myId: boolean;
	Is_subMod: boolean;
	isEdit = false;
	// data: any;
	enum: any;
	subId: any;
	testimonailData: any;
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
		public dialogRef: MatDialogRef<EditCustomerTestimonailComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.Is_Mod = data.moduleName;
		this.Is_subMod = data.modulename;

		this.testiomnial = fb.group({
			arrObj: this.fb.array([]),
			title: ['', Validators.required],
			description: ['', Validators.required],
			mode: 'Testimonial'
		});
	}

	ngOnInit(): void {
		this.addAction();
		this.Eddit();
		this.Added();

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

			this.testiomnial.patchValue({
				mode: 'Testimonial',
				title: this.data.EditData.title,
				description: this.data.EditData.description
			});
			this.add().at(0).patchValue({
				subTitle: this.data.EditData.subModules[this.data.index]
					.subTitle,
				description: this.data.EditData.subModules[this.data.index]
					.description
			});
			(this.selectedImage = this.data.EditData.subModules[
				this.data.index
			].fileUrl),
				console.log('img', this.selectedImage);
		}

		let index = this.data.index;
		this.subId = this.data.EditData.subModules[index]._id;
	}
	Added() {
		if (this.Edit == true) {
			this.Edit = false;
			this.Add = true;
		} else {
			this.Add = true;
		}
	}

	Eddit() {
		if (this.Add == true) {
			this.Add = false;
			this.Edit = true;
		} else {
			this.Edit = true;
		}
	}
	onFormSubmit() {
		console.log('data action=>', this.data.action);

		this.editModule();
		this.editSubModule();
		let value = this.selectedImage;

		console.log(this.testiomnial.value);
		let arrlength = this.add().length;
		for (let i = 0; i < arrlength; i++) {
			this.add()
				.at(i)
				.get('fileUrl')
				?.setValue(this.selectedImage[i].toString());
		}
	}
	addAction() {
		{
			this.add().push(this.newAction());
		}
	}
	add(): FormArray {
		return this.testiomnial.get('arrObj') as FormArray;
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
	browser(event, i) {
		console.log(event, i);
		const files = event.target.files[0];
		const formData = new FormData();
		formData.append('', files);
		let value = this.selectedImage;

		if (value) {
			this.upload.upload(formData).subscribe((res) => {
				console.log(' browser -> res', res);

				this.selectedImage = res.files[0];
			});
		} else {
			this.upload.upload(formData).subscribe((res) => {
				console.log(' browser -> res', res);
				this.testiomnial.patchValue({
					filePath: res.filePath
				});
				this.selectedImage.push(res.files[0]);
			});
		}
	}

	editModule() {
		if (this.data.action == 'edit') {
			let ServiceData = {
				title: this.testiomnial.controls.title.value,
				description: this.testiomnial.controls.description.value,
				mode: 'Testimonial'
			};
			console.log('asdfgh', ServiceData);
			console.log('this.EditData', this.data.EditData._id);
			this.landingPageInfo
				.editModule(ServiceData, this.data.EditData._id)
				.subscribe((resData) => {
					Swal.fire('Edited Successfully');
					console.log('editModule', resData);

					this.dialogRef.close('true');
					this.testiomnial.reset();
				});
		}
	}
	editSubModule() {
		if (this.data.action == 'edit') {
			let submodulesData = {
				moduleId: this.data.EditData._id,
				subTitle: this.add().at(0).get('subTitle')?.value,
				fileUrl: this.selectedImage,
				description: this.add().at(0).get('description')?.value
			};

			this.landingPageInfo
				.editsubModule(submodulesData, this.subId)
				.subscribe((resData) => {
					Swal.fire('Edited Successfully');
					console.log('submodulesData', resData);

					this.dialogRef.close('true');
					this.testiomnial.reset();
				});
		} else {
			let data = {
				mode: 'Testimonial',

				title: this.testiomnial.controls.title.value,
				description: this.testiomnial.controls.description.value,
				arrObj: this.fb.array([])
			};

			this.landingPageInfo
				.addAppService(this.testiomnial.value)
				.subscribe((data) => {
					console.log('data=>', data);
					this.testimonailData = data;
				});
		}
	}
	close() {
		this.dialogRef.close();
	}
}
