import { Component, OnInit, Inject } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators,
	FormArray,
	FormControl
} from '@angular/forms';
import Swal from 'sweetalert2';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-edit-team-info',
	templateUrl: './edit-team-info.component.html',
	styleUrls: ['./edit-team-info.component.scss']
})
export class EditTeamInfoComponent implements OnInit {
	companyDetail!: FormGroup;
	selectedImage: any;
	Image: any;
	Image1: any;
	myId: boolean;
	Is_subMod: boolean;
	isEdit = false;
	enum: any;
	subId: any;
	teamData: any;
	Is_Mod: any;
	Edit = false;
	Add = false;
	type: string = '';
	Update = false;
	module = false;
	subModule = false;
	moduleName: boolean;
	constructor(
		private landingPageInfo: LandingPageInfoServiceService,
		private fb: FormBuilder,
		public upload: UploadFileServiceService,
		public router: Router,
		private route: ActivatedRoute,
		private spinner: NgxSpinnerService,
		public dialogRef: MatDialogRef<EditTeamInfoComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.Is_Mod = data.moduleName;
		this.Is_subMod = data.modulename;

		this.companyDetail = this.fb.group({
			imageUrl: ['', Validators.required],
			description: ['', Validators.required],
			title: ['', Validators.required],
			desc: ['', Validators.required],
			fileUrl: ['', Validators.required],
			subTitle: ['', Validators.required],
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

			this.Image = this.data.EditData.fileUrl;

			this.companyDetail.patchValue({
				desc: this.data.EditData.desc,
				subTitle: this.data.EditData.subTitle,
				title: this.data.EditData.title,
				description: this.data.EditData.description
			});
			this.add().at(0).patchValue({
				title: this.data.EditData.team[this.data.index].title
			});
			this.selectedImage = this.data.EditData.team[
				this.data.index
			].imageUrl;
		}

		const index = this.data.index;
		this.subId = this.data.EditData.team[index]._id;
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
		return this.companyDetail.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			imageUrl: ['', Validators.required],
			title: ['', Validators.required]
		});
	}
	onFormSubmit() {
		this.editModule();
		this.editSubModule();
		this.companyDetail.get('fileUrl')?.setValue(this.Image);

		const value = this.selectedImage[0];

		const arrlength = this.add().length;
		for (let i = 0; i < arrlength; i++) {
			this.add()
				.at(i)
				.get('imageUrl')
				?.setValue(this.selectedImage[i].toString());
		}
	}

	removeSafetyModule(i) {
		const item = <FormArray>this.companyDetail.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
			this.selectedImage.splice(i, 1);
		}
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
				this.companyDetail.patchValue({
					filePath: res.filePath
				});
				this.selectedImage.push(res.files[0]);
			});
		}
	}
	image(event) {
		const files = event.target.files[0];
		const formdata = new FormData();
		formdata.append('', files);

		this.upload.upload(formdata).subscribe((res) => {
			this.Image = res.files[0];
		});
	}
	uploadImage(event) {
		const files = event.target.files[0];
		const formdata = new FormData();
		formdata.append('', files);

		this.upload.upload(formdata).subscribe((res) => {
			this.Image1 = res.files[0];
		});
	}
	editModule() {
		if (this.data.action == 'edit') {
			const AboutUsData = {
				title: this.companyDetail.controls.title.value,
				description: this.companyDetail.controls.description.value,
				//  imageUrl: this.Image1 ,
				desc: this.companyDetail.controls.desc.value,
				fileUrl: this.Image,
				subTitle: this.companyDetail.controls.subTitle.value
			};

			this.landingPageInfo
				.editAboutUs(AboutUsData, this.data.EditData._id)
				.subscribe((resData) => {
					Swal.fire('Detial Edited Successfully');

					this.dialogRef.close('true');
					this.companyDetail.reset();
				});
		}
	}
	editSubModule() {
		if (this.data.action == 'edit') {
			const teamData = {
				aboutUsId: this.data.EditData._id,

				imageUrl: this.selectedImage,
				title: this.add().at(0).get('title')?.value
			};

			this.landingPageInfo
				.editTeam(teamData, this.subId)
				.subscribe((resData) => {
					Swal.fire('Team Edited Successfully');

					this.dialogRef.close('true');
					this.companyDetail.reset();
				});
		}
	}
	close() {
		this.dialogRef.close();
	}
}
