/* eslint-disable @typescript-eslint/unbound-method */
import { Component, Injector, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {
	debounceTime,
	distinctUntilChanged,
	map,
	startWith,
	switchMap,
	tap
} from 'rxjs/operators';
import { CustomValidators } from 'src/app/custom-validators';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { UploadFileService } from 'src/app/utils/services/upload-file.service';
import Swal from 'sweetalert2';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-and-edit-subcontract',
	templateUrl: './add-and-edit-subcontract.component.html',
	styleUrls: ['./add-and-edit-subcontract.component.scss']
})
export class AddAndEditSubcontractComponent implements OnInit {
	subcontractDetails!: FormGroup;
	selectedImage: any;
	LicenceInfo = false;
	profile = false;
	dataEmp: boolean;
	filteredOptions2: Observable<any>;
	licenceData: any[] = [];
	licenceValueChanges: Observable<any>[];
	submitted: boolean;
	id: any;
	StatesData: any = [];
	dialogRef: MatDialogRef<any, any>;
	dialogData: any = 'form';
	isSetup: boolean = false;
	constructor(
		private fb: FormBuilder,
		private upload: UploadFileService,
		private activatedRoute: ActivatedRoute,
		public router: Router,
		private licenceInfo: LogicalFormInfoService,
		private setTitle: SetTitleService,
		private injector: Injector
	) {
		this.dialogRef = this.injector.get(MatDialogRef, null);
		this.dialogData = this.injector.get(MAT_DIALOG_DATA, null);
		this.subcontractDetails = this.fb.group({
			companyName: ['', Validators.required],
			phone: [
				'',
				[Validators.required, CustomValidators.PhoneNumberValidator()]
			],
			fax: ['', CustomValidators.PhoneNumberValidator()],
			email: ['', [Validators.required, Validators.email]],
			suburb: ['', Validators.required],
			state: ['', Validators.required],
			streetAddress: ['', Validators.required],
			ABN: ['', Validators.required],
			postCode: ['', Validators.required],
			file: [''],
			licenceNumber: ['', Validators.required],
			website: ['', Validators.required],

			LicenceName: [''],

			LicenceNumber: [''],
			TrainingQrginisation: [''],
			ExpiryDate: [''],
			licenceAndQualifications: this.fb.array([])
		});
	}

	ngOnInit(): void {
		this.isSetup = this.router.url.includes('setup');
		this.getAllStates();
		this.setTitle.setTitle('WHS-Subcontractor Information');
		this.id =
			this.activatedRoute.snapshot.params.id ||
			this.dialogData?.id ||
			'form';

		if (this.id !== 'form') {
			this.licenceInfo
				.getAllLicence()
				.pipe(
					map((res) => {
						return res.data.map((item) => {
							item.fullName = `${item.title}`;
							return item;
						});
					})
				)
				.subscribe((empData) => {
					this.licenceData = empData;
				});
			this.dataEmp = true;
			this.patchData();
		} else {
			this.dataEmp = false;
			this.licenceInfo
				.getAllLicence()
				.pipe(
					map((res) => {
						return res.data.map((item) => {
							item.fullName = `${item.title}`;
							return item;
						});
					})
				)
				.subscribe((empData) => {
					this.licenceData = empData;

					this.addFiled();
				});
		}
		this.filteredOptions2 = this.subcontractDetails.controls.LicenceName.valueChanges.pipe(
			startWith(''),
			debounceTime(800),
			distinctUntilChanged(),
			switchMap((val) => {
				return this.filter2(val || '');
			})
		);
	}
	getAllStates() {
		this.licenceInfo.getAllStates().subscribe((res: any) => {
			this.StatesData = res.data;
		});
	}
	addLicence() {
		return this.subcontractDetails.get(
			'licenceAndQualifications'
		) as FormArray;
	}
	newFiled(): FormGroup {
		return this.fb.group({
			file: [''],
			LicenceName: [''],
			LicenceNumber: [''],
			TrainingQrginisation: [''],
			ExpiryDate: ['']
		});
	}
	newFiled1(data): FormGroup {
		return this.fb.group({
			file: [data.file],
			LicenceName: [data.LicenceName],
			LicenceNumber: [data.LicenceNumber],
			TrainingQrginisation: [data.TrainingQrginisation],
			ExpiryDate: [data.ExpiryDate]
		});
	}
	addFiled1(data) {
		this.addLicence().push(this.newFiled1(data));
		this.licenceValueChanges = new Array<Observable<any>>();
		for (let index = 0; index < this.addLicence().length; index++) {
			const element = this.addLicence().at(index) as FormGroup;
			this.licenceValueChanges.push(
				element.controls.LicenceName.valueChanges.pipe(
					startWith(''),
					map((value) =>
						typeof value === 'string' ? value : value?.fullName
					),
					map((fullName) =>
						fullName
							? this._filter(fullName)
							: this.licenceData.slice()
					)
				)
			);
		}
	}
	addFiled() {
		this.addLicence().push(this.newFiled());
		this.licenceValueChanges = new Array<Observable<any>>();
		for (let index = 0; index < this.addLicence().length; index++) {
			const element = this.addLicence().at(index) as FormGroup;
			this.licenceValueChanges.push(
				(element.controls.LicenceName
					.valueChanges as Observable<any>).pipe(
					startWith(''),
					map((value) =>
						typeof value === 'string' ? value : value?.fullName
					),
					map((fullName) =>
						fullName
							? this._filter(fullName)
							: this.licenceData.slice()
					)
				)
			);
		}
	}
	private _filter(name: string): any[] {
		const filterValue = name.toLowerCase();
		return this.licenceData.filter((option) =>
			option.fullName.toLowerCase().includes(filterValue)
		);
	}
	removeFiled(i) {
		const item = <FormArray>(
			this.subcontractDetails.controls.licenceAndQualifications
		);
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	browser(event, index) {
		const files = event.target.files[0];
		const formdata = new FormData();
		formdata.append('', files);

		this.upload.upload(formdata).subscribe((res) => {
			this.selectedImage = res.files;
			this.addLicence()
				.at(index)
				.get('file')
				.patchValue(this.selectedImage);
		});
	}
	profileshow() {
		this.LicenceInfo = false;
		this.profile = true;
	}
	LicenceInfoshow() {
		this.LicenceInfo = true;
		this.profile = false;
	}
	filter2(val: string): Observable<any> {
		return this.licenceInfo.getAllLicence().pipe(
			map((res) => {
				res.data = res.data.map((item) => {
					item.LicenceName = `${item.title}`;
					return item;
				});
				return res;
			}),
			map((response: any) => {
				response.data = response.data.filter((option) => {
					return (
						option.LicenceName.toLowerCase().indexOf(
							val.toLowerCase()
						) === 0
					);
				});

				return response.data;
			})
		);
	}
	displayFn(user: any): string {
		return user && user.title ? user.title : '';
	}
	patchData() {
		this.licenceInfo.getSubcontract(this.id).subscribe((res: any) => {
			res.data.licenceAndQualifications.length > 0
				? res.data.licenceAndQualifications.forEach((ele) => {
						this.addFiled1(ele);
				  })
				: this.addFiled();

			this.subcontractDetails.patchValue({
				companyName: res.data.companyName,
				phone: res.data.phone,
				fax: res.data.fax,
				email: res.data.email,
				state: res.data.stateId,
				streetAddress: res.data.streetAddress,
				suburb: res.data.suburb,
				postCode: res.data.postCode,
				// mailingAddress: res.data.companyName,
				ABN: res.data.ABN,
				licenceNumber: res.data.licenceNumber,
				website: res.data.website
			});
		});
	}
	onFormSubmit() {
		this.submitted = true;

		const licenceArr = () => {
			this.addLicence().length;
			const arr = [];
			this.addLicence().controls.forEach((item: any) => {
				arr.push({
					LicenceName: item.controls.LicenceName.value,
					LicenceNumber: item.controls.LicenceNumber.value,
					TrainingQrginisation:
						item.controls.TrainingQrginisation.value,
					ExpiryDate: item.controls.ExpiryDate.value,
					file: item.controls.file.value
				});
			});
			return arr;
		};
		const body = {
			licenceAndQualifications: licenceArr(),
			companyName: this.subcontractDetails.get('companyName').value,
			phone: this.subcontractDetails.get('phone').value,
			fax: this.subcontractDetails.get('fax').value,
			email: this.subcontractDetails.get('email').value,
			stateId: this.subcontractDetails.get('state').value,
			streetAddress: this.subcontractDetails.get('streetAddress').value,
			suburb: this.subcontractDetails.get('suburb').value,
			postCode: this.subcontractDetails.get('postCode').value,
			// mailingAddress: this.subcontractDetails.get('mailingAddress').value,
			ABN: this.subcontractDetails.get('ABN').value,
			licenceNumber: this.subcontractDetails.get('licenceNumber').value,
			website: this.subcontractDetails.get('website').value
		};

		this.licenceInfo.addSubcontract(body).subscribe(
			(data) => {
				Swal.fire({
					title: 'Subcontractor Added successfully',
					showConfirmButton: false,
					timer: 1200
				});
				if (this.dialogRef) {
					this.dialogRef.close(true);
					return;
				}
				this.router.navigate(['/admin/registration/subcontract']);
			},
			(err) => {
				console.error(err);
			}
		);
	}
	onFormUpdate(id) {
		const licenceArr = () => {
			this.addLicence().length;
			const arr = [];
			this.addLicence().controls.forEach((item: any) => {
				arr.push({
					LicenceName: item.controls.LicenceName.value,
					LicenceNumber: item.controls.LicenceNumber.value,
					TrainingQrginisation:
						item.controls.TrainingQrginisation.value,
					ExpiryDate: item.controls.ExpiryDate.value,
					file: item.controls.file.value
				});
			});
			return arr;
		};
		const body = {
			licenceAndQualifications: licenceArr(),
			companyName: this.subcontractDetails.get('companyName').value,
			phone: this.subcontractDetails.get('phone').value,
			fax: this.subcontractDetails.get('fax').value,
			email: this.subcontractDetails.get('email').value,

			stateId: this.subcontractDetails.get('state').value,
			streetAddress: this.subcontractDetails.get('streetAddress').value,
			suburb: this.subcontractDetails.get('suburb').value,
			postCode: this.subcontractDetails.get('postCode').value,
			// mailingAddress: this.subcontractDetails.get('mailingAddress').value,
			ABN: this.subcontractDetails.get('ABN').value,
			licenceNumber: this.subcontractDetails.get('licenceNumber').value,
			website: this.subcontractDetails.get('website').value
		};

		this.licenceInfo.updateSubcontract(this.id, body).subscribe(
			(resData) => {
				Swal.fire({
					title: 'Subcontractor Updated successfully',
					showConfirmButton: false,
					timer: 1200
				});
				if (this.dialogRef) {
					this.dialogRef.close(true);
					return;
				}
				this.router.navigate(['/admin/registration/subcontract']);
			},
			(err) => {
				console.error(err);
			}
		);
	}
	get f() {
		return this.subcontractDetails.controls;
	}
}
