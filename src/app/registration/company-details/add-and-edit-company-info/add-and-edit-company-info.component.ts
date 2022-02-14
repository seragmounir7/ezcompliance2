import { Component, OnInit, ViewChild } from '@angular/core';
import {
	AbstractControl,
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/utils/services/auth.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { SubscriptionService } from 'src/app/utils/services/subscription.service';
import { UploadFileService } from 'src/app/utils/services/upload-file.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-add-and-edit-company-info',
	templateUrl: './add-and-edit-company-info.component.html',
	styleUrls: ['./add-and-edit-company-info.component.scss']
})
export class AddAndEditCompanyInfoComponent implements OnInit {
	formData: FormGroup;
	submitted = false;
	dataPlant: boolean;
	date1 = false;
	kilometer1 = false;
	hours1 = false;
	companyRegister = false;
	plantRegister = false;
	insuranceRegister = false;
	plantDetails: any;
	id: any;
	dateGet: any;
	dataUrl2: any;
	StatesData: any = [];
	selectedLogo: any;
	userId: string;
	constructor(
		private fb: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private subscript: SubscriptionService,
		private spinner: NgxSpinnerService,
		public router: Router,
		private upload: UploadFileService,
		private licenceInfo: LogicalFormInfoService,
		private authService: AuthService,
		private setTitle: SetTitleService
	) {}

	ngOnInit(): void {
		this.authService.loginData$.subscribe((res) => (this.userId = res.id));
		this.formData = this.fb.group({
			companyName: ['', Validators.required],
			phone: ['', Validators.required],
			fax: [''],
			emailAddress: ['', Validators.required],
			streetAddress: ['', Validators.required],
			subUrb: ['', Validators.required],
			state: ['', Validators.required],
			postcode: ['', Validators.required],
			mailingAddress: ['', Validators.required],
			companyABN: ['', Validators.required],
			companyAddr: ['', Validators.required],
			licenceNumber: ['', Validators.required],
			companyWeb: ['', Validators.required],
			companyLogo: [''],
			plantArr: this.fb.array([]),
			plantSignature: [''],
			insuranceArr: this.fb.array([])
		});

		this.id = this.activatedRoute.snapshot.params.id;

		if (this.id !== 'form') {
			this.dataPlant = true;
			this.patchData();
		} else {
			this.dataPlant = false;

			this.addEquipFiled2();
			this.addInsuranceFiled2();
		}
		this.getAllStates();

		this.setTitle.setTitle('WHS-Company Details');
	}

	browser(event) {
		const files = event.target.files[0];
		const formdata = new FormData();
		formdata.append('', files);
		console.log(files);

		this.upload.upload(formdata).subscribe((res) => {
			console.log('AddProductComponent -> browser -> res', res);

			this.selectedLogo = res.files[0];
			this.formData.get('companyLogo').patchValue(this.selectedLogo);
			console.log(
				'AddProductComponent -> browse -> this.selectedLogo',
				this.selectedLogo
			);
		});
	}
	addEquip() {
		return this.formData.get('plantArr') as FormArray;
	}
	getAllStates() {
		this.licenceInfo.getAllStates().subscribe((res: any) => {
			console.log('setStatesDetails=>', res);
			this.StatesData = res.data;
		});
	}
	newEquipFiled2(): FormGroup {
		return this.fb.group({
			plantName: [''],
			checkedOut: [''],
			hours: [''],
			kilometres: [''],
			date: [''],
			make: [''],
			modelNumber: [''],
			registrationNumber: [''],
			registrationRenewalDate: [''],
			plantType: [''],
			purchaseDate: [''],
			insurancePolicyNumber: [''],
			insuranceExpiry: [''],
			fuelCardNumber: [''],
			ETagNumber: ['']
		});
	}
	addEquipFiled2() {
		this.addEquip().push(this.newEquipFiled2());
		console.log(this.formData.value);
	}
	newEquipFiled3(data): FormGroup {
		console.log('newData', data);

		return this.fb.group({
			plantName: [data.plantName],
			checkedOut: [data.checkedOut],
			hours: [data.hours],
			kilometres: [data.kilometres],
			date: [data.date],
			make: [data.make],
			modelNumber: [data.modelNumber],
			registrationNumber: [data.registrationNumber],
			registrationRenewalDate: [data.registrationRenewalDate],
			plantType: [data.plantType],
			purchaseDate: [data.purchaseDate],
			insurancePolicyNumber: [data.insurancePolicyNumber],
			insuranceExpiry: [data.insuranceExpiry],
			fuelCardNumber: [data.fuelCardNumber],
			ETagNumber: [data.ETagNumber]
		});
	}
	addEquipFiled3(data) {
		console.log('data', data);
		this.addEquip().push(this.newEquipFiled3(data));
		console.log('addPPEFiled1', this.formData.value);
	}
	removeEquipFiled1(i) {
		const item = <FormArray>this.formData.controls.plantArr;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	addInsurance() {
		return this.formData.get('insuranceArr') as FormArray;
	}

	newInsuranceFiled2(): FormGroup {
		return this.fb.group({
			documentNumber: [''],
			documentType: [''],
			documentName: [''],
			thirdParty: [''],
			startDate: [''],
			expiryDate: [''],
			reminderNotice: ['']
		});
	}
	addInsuranceFiled2() {
		this.addInsurance().push(this.newInsuranceFiled2());
		console.log(this.formData.value);
	}
	newInsurance(data): FormGroup {
		return this.fb.group({
			documentNumber: [data.documentNumber],
			documentType: [data.documentType],
			documentName: [data.documentName],
			thirdParty: [data.thirdParty],
			startDate: [data.startDate],
			expiryDate: [data.expiryDate],
			reminderNotice: [data.reminderNotice]
		});
	}
	addInsurance2(data) {
		this.addInsurance().push(this.newInsurance(data));
		console.log(this.formData.value);
	}
	removeInsuranceFiled1(i) {
		const item = <FormArray>this.formData.controls.insuranceArr;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}

	get registerFormControl() {
		return this.formData.controls;
	}

	companyShow() {
		this.companyRegister = true;
		this.plantRegister = false;
		this.insuranceRegister = false;
	}
	addPlantshow() {
		this.companyRegister = false;
		this.plantRegister = true;
		this.insuranceRegister = false;
	}
	addInsuranceShow() {
		this.companyRegister = false;
		this.plantRegister = false;
		this.insuranceRegister = true;
	}
	onFormSubmit() {
		this.submitted = true;
		console.log('this.EmployeeInfo.value', this.formData.value);
		const insuranceArr = () => {
			this.addInsurance().length;
			const arr = [];
			this.addInsurance().controls.forEach((item: any) => {
				console.log('item', item);
				arr.push({
					documentNumber: item.controls.documentNumber.value,
					documentType: item.controls.documentType.value,
					documentName: item.controls.documentName.value,
					thirdParty: item.controls.thirdParty.value,
					startDate: item.controls.startDate.value,
					expiryDate: item.controls.expiryDate.value,
					reminderNotice: item.controls.reminderNotice.value
				});
			});
			return arr;
		};
		const equipArr = () => {
			this.addEquip().length;
			const arr = [];
			this.addEquip().controls.forEach((item: any) => {
				console.log('item', item);
				arr.push({
					plantName: item.controls.plantName.value,
					checkedOut: item.controls.checkedOut.value,
					hours: item.controls.hours.value,
					kilometres: item.controls.kilometres.value,
					date: item.controls.date.value,
					make: item.controls.make.value,
					modelNumber: item.controls.modelNumber.value,
					registrationNumber: item.controls.registrationNumber.value,
					registrationRenewalDate:
						item.controls.registrationRenewalDate.value,
					plantType: item.controls.plantType.value,
					purchaseDate: item.controls.purchaseDate.value,
					insurancePolicyNumber:
						item.controls.insurancePolicyNumber.value,
					insuranceExpiry: item.controls.insuranceExpiry.value,
					fuelCardNumber: item.controls.fuelCardNumber.value,
					ETagNumber: item.controls.ETagNumber.value
				});
			});
			return arr;
		};
		const body = {
			customerDetails: {
				companyName: this.formData.get('companyName').value,
				fax: this.formData.get('fax').value,
				phone: this.formData.get('phone').value,
				email: this.formData.get('emailAddress').value,
				streetAddress: this.formData.get('streetAddress').value,
				suburb: this.formData.get('subUrb').value,
				stateId: this.formData.get('state').value,

				postcode: this.formData.get('postcode').value,
				mailingAddress: this.formData.get('mailingAddress').value,
				companyABN: this.formData.get('companyABN').value,
				companyAddress: this.formData.get('companyAddr').value,
				licenceNumber: this.formData.get('licenceNumber').value,
				website: this.formData.get('companyWeb').value,
				companyLogo: this.formData.get('companyLogo').value
			},
			plantRegister: {
				plant: equipArr()
			},
			insuranceRegister: {
				insurance: insuranceArr()
			}
		};

		console.log('body=>', body);

		this.subscript.updateCompanyDetails(body).subscribe(
			(data) => {
				console.log('data=>', data);
				Swal.fire({
					title: 'Company Detail Added successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.router.navigate(['/admin/registration/compdetails']);
			},
			(err) => {
				console.error(err);
			}
		);
	}
	patchData() {
		this.subscript.getCompanyDeatils().subscribe((data: any) => {
			console.log('data=>', data);

			data.data.insuranceRegister.insurance.length > 0
				? data.data.insuranceRegister.insurance.forEach((ele) => {
						this.addInsurance2(ele);
				  })
				: this.addInsuranceFiled2();

			data.data.plantRegister.plant.length > 0
				? data.data.plantRegister.plant.forEach((ele) => {
						this.addEquipFiled3(ele);
				  })
				: this.addEquipFiled2();
			this.selectedLogo = data.data.companyLogo;
			this.formData.patchValue({
				companyName: data.data.companyName,
				phone: data.data.phone,
				fax: data.data.fax,
				emailAddress: data.data.email,
				streetAddress: data.data.streetAddress,
				subUrb: data.data.suburb,
				state: data.data.stateId,
				postcode: data.data.postcode,
				mailingAddress: data.data.mailingAddress,
				companyABN: data.data.companyABN,
				companyAddr: data.data.companyAddress,
				licenceNumber: data.data.licenceNumber,
				companyWeb: data.data.website,
				companyLogo: this.selectedLogo,

				plantName: data.data.plantRegister.plant.plantName,
				checkedOut: data.data.plantRegister.plant.checkedOut,
				hours: data.data.plantRegister.plant.hours,
				kilometres: data.data.plantRegister.plant.kilometres,
				date: data.data.plantRegister.plant.date,
				make: data.data.plantRegister.plant.make,
				modelNumber: data.data.plantRegister.plant.modelNumber,
				registrationNumber:
					data.data.plantRegister.plant.registrationNumber,
				registrationRenewalDate:
					data.data.plantRegister.plant.registrationRenewalDate,
				plantType: data.data.plantRegister.plant.plantType,
				purchaseDate: data.data.plantRegister.plant.purchaseDate,
				insurancePolicyNumber:
					data.data.plantRegister.plant.insurancePolicyNumber,
				insuranceExpiry: data.data.plantRegister.plant.insuranceExpiry,
				fuelCardNumber: data.data.plantRegister.plant.fuelCardNumber,
				ETagNumber: data.data.plantRegister.plant.ETagNumber,

				plantSignature: data.data.plantRegister.signature,

				documentNumber:
					data.data.insuranceRegister.insurance.documentNumber,
				documentType:
					data.data.insuranceRegister.insurance.documentType,
				documentName:
					data.data.insuranceRegister.insurance.documentName,
				thirdParty: data.data.insuranceRegister.insurance.thirdParty,
				startDate: data.data.insuranceRegister.insurance.startDate,
				expiryDate: data.data.insuranceRegister.insurance.expiryDate,
				reminderNotice:
					data.data.insuranceRegister.insurance.reminderNotice
			});
		});
	}
	onFormUpdate(id) {
		const insuranceArr = () => {
			this.addInsurance().length;
			const arr = [];
			this.addInsurance().controls.forEach((item: any) => {
				console.log('item', item);
				arr.push({
					documentNumber: item.controls.documentNumber.value,
					documentType: item.controls.documentType.value,
					documentName: item.controls.documentName.value,
					thirdParty: item.controls.thirdParty.value,
					startDate: item.controls.startDate.value,
					expiryDate: item.controls.expiryDate.value,
					reminderNotice: item.controls.reminderNotice.value
				});
			});
			return arr;
		};
		const equipArr = () => {
			this.addEquip().length;
			const arr = [];
			this.addEquip().controls.forEach((item: any) => {
				console.log('item', item);
				arr.push({
					plantName: item.controls.plantName.value,
					checkedOut: item.controls.checkedOut.value,
					hours: item.controls.hours.value,
					kilometres: item.controls.kilometres.value,
					date: item.controls.date.value,
					make: item.controls.make.value,
					modelNumber: item.controls.modelNumber.value,
					registrationNumber: item.controls.registrationNumber.value,
					registrationRenewalDate:
						item.controls.registrationRenewalDate.value,
					plantType: item.controls.plantType.value,
					purchaseDate: item.controls.purchaseDate.value,
					insurancePolicyNumber:
						item.controls.insurancePolicyNumber.value,
					insuranceExpiry: item.controls.insuranceExpiry.value,
					fuelCardNumber: item.controls.fuelCardNumber.value,
					ETagNumber: item.controls.ETagNumber.value
				});
			});
			return arr;
		};
		const body = {
			companyName: this.formData.get('companyName').value,
			email: this.formData.get('emailAddress').value,
			phone: this.formData.get('phone').value,
			companyABN: this.formData.get('companyABN').value,
			streetAddress: this.formData.get('streetAddress').value,
			suburb: this.formData.get('subUrb').value,
			website: this.formData.get('companyWeb').value,
			fax: this.formData.get('fax').value,
			mailingAddress: this.formData.get('mailingAddress').value,
			companyAddress: this.formData.get('companyAddr').value,
			licenceNumber: this.formData.get('licenceNumber').value,
			companyLogo: this.formData.get('companyLogo').value,
			postcode: this.formData.get('postcode').value,
			stateId: this.formData.get('state').value,
			plantRegister: {
				plant: equipArr()
			},
			insuranceRegister: {
				insurance: insuranceArr()
			},
			userId: this.userId
		};

		this.subscript.updateCompanyDetails(body).subscribe(
			(resData) => {
				console.log('updateData', resData);
				Swal.fire({
					title: 'Company Detail Updated successfully',
					showConfirmButton: false,
					timer: 1200
				});
				// this.router.navigate(['/admin/registration/compdetails']);
			},
			(err) => {
				console.error(err);
			}
		);
	}

	nextServiceToggle(index, value) {
		switch (value) {
			case 'Hours':
				(this.addEquip().at(
					index
				) as FormGroup).controls.kilometres.setValue('');
				(this.addEquip().at(index) as FormGroup).controls.date.setValue(
					''
				);
				break;
			case 'Kilometres':
				(this.addEquip().at(
					index
				) as FormGroup).controls.hours.setValue('');
				(this.addEquip().at(index) as FormGroup).controls.date.setValue(
					''
				);

				break;
			case 'Date':
				(this.addEquip().at(
					index
				) as FormGroup).controls.kilometres.setValue('');
				(this.addEquip().at(
					index
				) as FormGroup).controls.hours.setValue('');

				break;

			default:
				break;
		}
	}
}
