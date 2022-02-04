import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-edit-different-work',
	templateUrl: './edit-different-work.component.html',
	styleUrls: ['./edit-different-work.component.scss']
})
export class EditDifferentWorkComponent implements OnInit {
	SubWorkDetail!: FormGroup;
	selectedImage: any = [];
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
	module = false;
	subModule = false;
	moduleName: boolean;
	type: string = '';
	Update = false;
	hide = false;
	constructor(
		private fb: FormBuilder,
		private upload: UploadFileServiceService,
		private url: LandingPageInfoServiceService,
		public dialogRef: MatDialogRef<EditDifferentWorkComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		console.log(data);
		this.Is_Mod = data.moduleName;
		this.Is_subMod = data.modulename;

		console.log(this.Is_Mod);

		this.SubWorkDetail = this.fb.group({
			title: ['', Validators.required],
			mode: 'Different',
			arrObj: this.fb.array([])
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
			console.log(' subTitle', this.data);
			this.SubWorkDetail.patchValue({
				mode: 'Different',
				title: this.data.EditData.title
			});

			this.add().at(0).patchValue({
				title: this.data.EditData.subModules[this.data.index].title,
				description: this.data.EditData.subModules[this.data.index]
					.description
			});
		}

		const index = this.data.index;

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
	addAction() {
		{
			this.add().push(this.newAction());
		}
	}
	add(): FormArray {
		return this.SubWorkDetail.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			fileUrl: ['', Validators.required],
			title: ['', Validators.required],
			description: ['', Validators.required]
		});
	}
	removeSafetyModule(i) {
		const item = <FormArray>this.SubWorkDetail.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
			this.selectedImage.splice(i, 1);
		}
	}

	onFormSubmit() {
		console.log(this.SubWorkDetail.value);
	}
	editModule() {
		if (this.data.action == 'edit') {
			const ServiceData = {
				title: this.SubWorkDetail.controls.title.value,
				mode: 'Different'
			};
			console.log('asdfgh', ServiceData);
			console.log('this.EditData', this.data.EditData._id);
			this.url
				.editModule(ServiceData, this.data.EditData._id)
				.subscribe((resData) => {
					Swal.fire('Edited Successfully');
					console.log('editModule', resData);

					this.dialogRef.close('true');
					this.SubWorkDetail.reset();
				});
		}
	}
	editSubModule() {
		if (this.data.action == 'edit') {
			const submodulesData = {
				// subTitle: this.SubWorkDetail.controls.subTitle.value,
				moduleId: this.data.EditData._id,
				title: this.add().at(0).get('title')?.value,
				fileUrl: '',
				description: this.add().at(0).get('description')?.value
			};
			console.log(' submodulesData', submodulesData);

			this.url
				.editsubModule(submodulesData, this.subId)
				.subscribe((resData) => {
					Swal.fire('Edited Successfully');
					console.log('submodulesData', resData);

					this.dialogRef.close('true');
					this.SubWorkDetail.reset();
				});
		}
	}
	close() {
		this.dialogRef.close();
	}
}
