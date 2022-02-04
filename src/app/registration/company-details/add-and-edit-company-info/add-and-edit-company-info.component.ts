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
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
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
	@ViewChild('signature2') signaturePad2: any;
	id: any;
	dateGet: any;
	dataUrl2: any;
	StatesData: any = [];
	selectedLogo: any;
	constructor(
		private fb: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private subscript: SubscriptionService,
		private spinner: NgxSpinnerService,
		public router: Router,
		private upload: UploadFileService,
		private licenceInfo: LogicalFormInfoService
	) {}

	ngOnInit(): void {
		this.formData = this.fb.group({
			companyName: ['', Validators.required],
			phone: ['', Validators.required],
			fax: [''],
			emailAddress: ['', Validators.required],
			streetAddress: ['', Validators.required],
			subUrb: ['', Validators.required],
			state: ['', Validators.required],
			// postCode: ['', Validators.required],
			// mailingAddress: ['', Validators.required],
			companyABN: ['', Validators.required],
			companyAddr: ['', Validators.required],
			licenceNumber: ['', Validators.required],
			companyWeb: ['', Validators.required],
			companyLogo: [''],
			plantArr: this.fb.array([]),
			// plantName: [''],
			// checkedOut: [''],
			// hours: [''],
			// kilometres: [''],
			// date: [''],
			// make: [''],
			// modelNumber: [''],
			// registrationNumber: [''],
			// registrationRenewalDate: [''],
			// plantType: [''],
			// purchaseDate: [''],
			// insurancePolicyNumber: [''],
			// insuranceExpiry: [''],
			// fuelCardNumber: [''],
			// ETagNumber: [''],
			plantSignature: [''],
			insuranceArr: this.fb.array([])
			// documentNumber: [''],
			// documentType: [''],
			// documentName: [''],
			// thirdParty: [''],
			// startDate: [''],
			// expiryDate: [''],
			// reminderNotice: [''],
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
	// public signaturePadOptions: Object = {
	//   // passed through to szimek/signature_pad constructor
	//   minWidth: 1,
	//   canvasWidth: 500,
	//   canvasHeight: 100,
	// };

	// drawStart() {
	//   // will be notified of szimek/signature_pad's onBegin event
	//   console.log('begin drawing');
	//   }

	// get f() {
	//   return this.registerFormControl.controls;
	// }

	get registerFormControl() {
		return this.formData.controls;
	}

	// browser2(event) {
	// 	const files = event.target.files[0];
	// 	const formdata = new FormData();
	// 	formdata.append('', files);
	// 	console.log(files);
	// }
	public signaturePadOptions: Object = {
		// passed through to szimek/signature_pad constructor
		minWidth: 1,
		canvasWidth: 500,
		canvasHeight: 100
	};
	drawStart() {
		// will be notified of szimek/signature_pad's onBegin event
		console.log('begin drawing');
	}
	drawComplete2() {
		// will be notified of szimek/signature_pad's onEnd event
		this.formData.controls.plantSignature.setValue(
			this.signaturePad2.toDataURL()
		);
		console.log(this.signaturePad2.toDataURL());
	}
	clear2() {
		this.signaturePad2.clear();
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
		// if (!this.empDetails.controls.valid) {
		//   this.formData='formfield'
		// }
		// const Sign = this.signaturePad2.toDataURL();
		// console.log('sign=>', this.signaturePad2.toDataURL());
		const plantSignature = this.signaturePad2.toDataURL();

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
				// "mailingAddress": this.formData.get('mailingAddress').value,
				companyABN: this.formData.get('companyABN').value,
				companyAddress: this.formData.get('companyAddr').value,
				licenceNumber: this.formData.get('licenceNumber').value,
				website: this.formData.get('companyWeb').value,
				companyLogo: this.formData.get('companyLogo').value
			},
			plantRegister: {
				plant: equipArr(),
				signature: plantSignature
			},
			insuranceRegister: {
				insurance: insuranceArr()
			}
		};

		console.log('body=>', body);

		this.subscript.addsubscription(body).subscribe(
			(data) => {
				console.log('data=>', data);
				this.signaturePad2.toDataURL();
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
		this.subscript.getsubscription(this.id).subscribe((data) => {
			console.log('data=>', data);
			// this.signaturePad.toDataURL();

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
			this.selectedLogo = data.data.customerDetails.companyLogo;
			this.formData.patchValue({
				companyName: data.data.customerDetails.companyName,
				phone: data.data.customerDetails.phone,
				fax: data.data.customerDetails.fax,
				emailAddress: data.data.customerDetails.email,
				streetAddress: data.data.customerDetails.streetAddress,
				subUrb: data.data.customerDetails.suburb,
				state: data.data.customerDetails.stateId,
				// mailingAddress: data.data.customerDetails.mailingAddress,
				companyABN: data.data.customerDetails.companyABN,
				companyAddr: data.data.customerDetails.companyAddress,
				licenceNumber: data.data.customerDetails.licenceNumber,
				companyWeb: data.data.customerDetails.website,
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

			// this.dataUrl = data.data.ppe.signature;
			this.dataUrl2 = data.data.plantRegister.signature;
			console.log(
				'data.data.ppe.signature;',
				data.data.plantRegister.signature
			);

			// let check = async () => { this.signaturePad != null }
			// check().then((res) => {
			//   console.log("this.signaturePad", this.signaturePad, res);

			//   this.signaturePad.fromDataURL(data.data.ppe.signature)

			// })
			const check2 = async () => {
				this.signaturePad2 != null;
			};
			check2().then((res) => {
				console.log('this.signaturePad', this.signaturePad2, res);

				this.signaturePad2.fromDataURL(
					data.data.plantRegister.signature
				);
			});
		});
	}
	onFormUpdate(id) {
		// const Sign = this.signaturePad2.toDataURL();
		const plantSignature = this.signaturePad2.toDataURL();
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
				// "mailingAddress": this.formData.get('mailingAddress').value,
				companyABN: this.formData.get('companyABN').value,
				companyAddress: this.formData.get('companyAddr').value,
				licenceNumber: this.formData.get('licenceNumber').value,
				website: this.formData.get('companyWeb').value,
				companyLogo: this.formData.get('companyLogo').value
			},
			plantRegister: {
				plant: equipArr(),
				signature: plantSignature
			},
			insuranceRegister: {
				insurance: insuranceArr()
			}
		};

		this.subscript.editsubscription(this.id, body).subscribe(
			(resData) => {
				console.log('updateData', resData);
				Swal.fire({
					title: 'Company Detail Updated successfully',
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
