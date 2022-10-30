import { Component, Inject, Injector, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad';
import { ToastrService } from 'ngx-toastr';
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
import { EmployeeRegistrationService } from 'src/app/utils/services/employee-registration.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { RoleManagementService } from 'src/app/utils/services/role-management.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { UploadFileService } from 'src/app/utils/services/upload-file.service';
import Swal from 'sweetalert2';

import { UntilDestroy } from '@ngneat/until-destroy';
import { RoleValue } from 'src/app/utils/types/AccessResponceTypes';
import { UserValue } from 'src/app/utils/types/UserResponceTypes';
import { DepartmentService } from 'src/app/utils/services/department.service';
import { Department } from 'src/app/utils/types/DepartmentTypes';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-employee',
	templateUrl: './add-employee.component.html',
	styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
	empDetails!: FormGroup;
	PPERegister = false;
	LicenceInfo = false;
	EquipmentInfo = false;
	dataEmp: boolean;
	formData: any;
	uploadImage1: any;
	uploadlicense1: any;
	submitted = false;
	id: any;
	reportingData: any;
	profile = true;
	@ViewChild('signature1') signaturePad: any;
	@ViewChild('signature2') signaturePad2: any;
	sidePreview: any;
	registerForm: any;
	file1: any;
	dataUrl: any;
	dataUrl2: any;
	roleData: RoleValue[];
	filteredOptions2: Observable<any>;
	filteredOptions1: Observable<any>;
	filteredOptions3: Observable<any>;
	empData: any[] = [];
	licenceValueChanges: Observable<any>[];
	PPEData: any[] = [];
	StatesData: any = [];
	PPEValueChanges: Observable<any>[];
	url: any;
	private dialogRef: MatDialogRef<any, any> = null;
	public dialogData = null;
	displayFnRole: any;
	porfPosition$: Observable<any[]>;
	porfDepartment$: Observable<any[]>;
	displayFnDepartmentName: (user: any) => string;
	departments: Department[];

	constructor(
		private fb: FormBuilder,
		private role: RoleManagementService,
		private employee: EmployeeRegistrationService,
		private licenceInfo: LogicalFormInfoService,
		private upload: UploadFileService,
		private activatedRoute: ActivatedRoute,
		private departmentService: DepartmentService,
		public router: Router,
		// @Inject(MAT_DIALOG_DATA) public data?,
		// private matDialogRef?:MatDialogRef<AddEmployeeComponent>
		private injector: Injector,
		private setTitle: SetTitleService,
		private toast: ToastrService
	) {
		this.dialogRef = this.injector.get(MatDialogRef, null);
		this.dialogData = this.injector.get(MAT_DIALOG_DATA, null);

		this.empDetails = this.fb.group({
			profTitie: ['', Validators.required],
			profFirst: ['', Validators.required],
			porfListName: ['', Validators.required],
			porfEmail: ['', [Validators.required]],
			porfPosition: ['', Validators.required],
			porfDepartment: ['', Validators.required],
			porfPhone: ['', [Validators.required]],
			porfMobile: ['', [Validators.required]],
			// porfEmployee: ['', Validators.required],
			// porfManager: ['', Validators.required],
			// porfAdministrater: ['', Validators.required],
			file: [''],
			reportingTo: [''],
			roleId: ['', Validators.required],
			porfStreetAddress: ['', Validators.required],
			porfSuburb: ['', Validators.required],

			porfState: ['', Validators.required],
			porfPostalCode: ['', Validators.required],
			porfUploadImage: [''],
			EmpFirst: ['', Validators.required],
			empLastName: ['', Validators.required],
			empRelationship: ['', Validators.required],
			empEmail: ['', [Validators.required, Validators.email]],
			empPhone: ['', [Validators.required]],
			empMobile: ['', [Validators.required]],
			LicenceName: [''],

			LicenceNumber: [''],
			TrainingQrginisation: [''],
			ExpiryDate: [''],
			UploadLicenceArr: this.fb.array([]),
			PPESupplied: [''],
			BrandOrType: [''],
			IssueDate: [''],
			PPEArr: this.fb.array([]),
			ReplacementDate: [''],
			Sign: [''],
			plantArr: this.fb.array([]),
			plantSignature: [''],

			modelNumber: [''],
			serialNumber: [''],
			plantType: [''],
			serviceRenewDate: ['']
		});
	}

	ngOnInit(): void {
		this.getall();

		this.setTitle.setTitle('WHS-Employee Information');
		this.empDetails.get('reportingTo').valueChanges.subscribe((res) => {
			if (res) {
			}
		});
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
				this.empData = empData;
			});
		this.licenceInfo
			.getAllPPE()
			.pipe(
				map((res: any) => {
					return res.data.map((item) => {
						item.fullName = `${item.title}`;
						return item;
					});
				})
			)
			.subscribe((empData) => {
				this.PPEData = empData;
			});

		this.getAllRoles();
		this.getAllDepartment();

		this.id = this.dialogData?.isDialog
			? 'form'
			: this.activatedRoute.snapshot.params.id;

		if (this.router.url.includes('setup')) {
			this.dataEmp = false;
			this.addFiled();
			this.addFiled2();
			this.addEquipFiled2();
		} else if (this.id !== 'form') {
			this.dataEmp = true;
			this.patchData();
		} else {
			this.dataEmp = false;
			this.addFiled();
			this.addFiled2();
			this.addEquipFiled2();
		}
		this.filteredOptions2 = this.empDetails.controls.LicenceName.valueChanges.pipe(
			startWith(''),
			debounceTime(800),
			distinctUntilChanged(),
			switchMap((val) => {
				return this.filter2(val || '');
			})
		);
		this.filteredOptions1 = this.empDetails.controls.PPESupplied.valueChanges.pipe(
			startWith(''),
			debounceTime(800),
			distinctUntilChanged(),
			switchMap((val) => {
				return this.filter1(val || '');
			})
		);
		this.getAllStates();
	}

	getall() {
		this.employee.getAllEmployeeInfo().subscribe((res) => {
			this.reportingData = res;
		});
	}

	getAllRoles() {
		this.role.getAllRole().subscribe((res) => {
			this.roleData = res.data;
			this.displayFnRole = this.role.displayFnRole;
			this.role.getAllRole().subscribe((res) => {
				this.porfPosition$ = this.role.getRoleAutocomplete(
					this.empDetails,
					'porfPosition',
					res.data
				);
			});
		});
	}
	getAllDepartment() {
		this.departmentService.getAllDepartment().subscribe((res) => {
			this.departments = res.data;
			this.displayFnDepartmentName = this.departmentService.displayFnDepartmentName;
			this.porfDepartment$ = this.departmentService.getDepartmentNameAutocomplete(
				this.empDetails,
				'porfDepartment',
				res.data
			);
		});
	}
	patchData() {
		this.employee.getEmployeeInfoById(this.id).subscribe((data) => {
			data.data.licence.forEach((element) => {
				element.uploadLicence.length > 0
					? element.uploadLicence.forEach((ele) => {
							this.addFiled1(ele);
					  })
					: this.addFiled();
			});

			data.data.ppe.PPEArr.length > 0
				? data.data.ppe.PPEArr.forEach((ele) => {
						this.addFiled3(ele);
				  })
				: this.addFiled2();

			data.data.plant.plantArr.length > 0
				? data.data.plant.plantArr.forEach((ele) => {
						this.addEquipFiled3(ele);
				  })
				: this.addEquipFiled2();
			this.empDetails.patchValue({
				profTitie: data.data.title,
				profFirst: data.data.firstName,
				porfListName: data.data.lastName,
				porfEmail: data.data.email,
				porfPosition: data.data.position as UserValue,
				porfDepartment: data.data.department as Department,
				porfPhone: data.data.phone,
				porfMobile: data.data.mobileNumber,

				roleId: (data.data.roleId as UserValue)._id,
				reportingTo: data.data.reportingTo,
				porfStreetAddress: data.data.location.address,
				porfSuburb: data.data.suburb,
				porfPostalCode: data.data.location.postcode,
				porfState: data.data.location.state,

				porfUploadImage: data.data.uploadImage,
				EmpFirst: data.data.emergencyContact.firstName,
				empLastName: data.data.emergencyContact.lastName,
				empRelationship: data.data.emergencyContact.relationship,
				empEmail: data.data.emergencyContact.email,
				empPhone: data.data.emergencyContact.phone,
				empMobile: data.data.emergencyContact.mobile,

				PPESupplied: data.data.ppe.ppeSupplied,
				BrandOrType: data.data.ppe.brand,
				IssueDate: data.data.ppe.issueDate,
				ReplacementDate: data.data.ppe.replacementDate,
				Sign: data.data.ppe.signature,

				plantType: data.data.plant.plantType,
				modelNumber: data.data.plant.modelNumber,
				serialNumber: data.data.plant.serialNumber,
				serviceRenewDate: data.data.plant.serviceRenewDate
			});

			this.dataUrl = data.data.ppe.signature;
			this.dataUrl2 = data.data.plant.plantSignature;

			const check = async () => {
				this.signaturePad != null;
			};
			check().then((res) => {
				this.signaturePad.fromDataURL(data.data.ppe.signature);
			});
			const check2 = async () => {
				this.signaturePad2 != null;
			};
			check2().then((res) => {
				this.signaturePad2.fromDataURL(data.data.plant.plantSignature);
			});
		});
	}
	public signaturePadOptions: Object = {
		minWidth: 1,
		canvasWidth: 500,
		canvasHeight: 100
	};
	drawComplete2() {
		this.empDetails.controls.plantSignature.setValue(
			this.signaturePad2.toDataURL()
		);
	}
	clear2() {
		this.signaturePad2.clear();
	}
	drawStart2() {}
	drawComplete() {
		this.empDetails.controls.Sign.setValue(this.signaturePad.toDataURL());
	}

	clear() {
		this.signaturePad.clear();
	}
	drawStart() {}

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

	browser1(event) {
		const files = event.target.files[0];
		const formdata = new FormData();
		formdata.append('', files);

		this.upload.upload(formdata).subscribe((res) => {
			this.file1 = res.files[0];

			this.empDetails.get('porfUploadImage').patchValue(this.file1);
		});
	}
	selectedImage(arg0: string, selectedImage: any) {
		throw new Error('Method not implemented.');
	}

	sign(sign: any) {
		throw new Error('Method not implemented.');
	}

	addAcionTab(event) {
		const b = Object.keys(this.sidePreview.value);
	}

	profileshow() {
		this.PPERegister = false;
		this.LicenceInfo = false;
		this.profile = true;
		this.EquipmentInfo = false;
	}
	LicenceInfoshow() {
		this.PPERegister = false;
		this.LicenceInfo = true;
		this.profile = false;
		this.EquipmentInfo = false;
	}
	PPERegisteshow() {
		this.PPERegister = true;
		this.LicenceInfo = false;
		this.profile = false;
		this.EquipmentInfo = false;
	}
	addPlantshow() {
		this.PPERegister = false;
		this.LicenceInfo = false;
		this.profile = false;
		this.EquipmentInfo = true;
	}
	addLicence() {
		return this.empDetails.get('UploadLicenceArr') as FormArray;
	}
	addEquip() {
		return this.empDetails.get('plantArr') as FormArray;
	}
	newEquipFiled2(): FormGroup {
		return this.fb.group({
			modelNumber: [''],
			serialNumber: [''],
			plantType: [''],
			serviceRenewDate: ['']
		});
	}
	addEquipFiled2() {
		this.addEquip().push(this.newEquipFiled2());
	}
	newEquipFiled3(data): FormGroup {
		return this.fb.group({
			plantType: [data.plantType],
			modelNumber: [data.modelNumber],
			serialNumber: [data.serialNumber],
			serviceRenewDate: [data.serviceRenewDate]
		});
	}
	addEquipFiled3(data) {
		this.addEquip().push(this.newEquipFiled3(data));
	}
	removeEquipFiled1(i) {
		const item = <FormArray>this.empDetails.controls.plantArr;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	addPPE() {
		return this.empDetails.get('PPEArr') as FormArray;
	}
	newFiled2(): FormGroup {
		return this.fb.group({
			PPESupplied: [''],
			BrandOrType: [''],
			IssueDate: [''],
			ReplacementDate: ['']
		});
	}
	addFiled2() {
		this.addPPE().push(this.newFiled2());

		this.PPEValueChanges = new Array<Observable<any>>();
		for (let index = 0; index < this.addPPE().length; index++) {
			const element = this.addPPE().at(index) as FormGroup;
			this.PPEValueChanges.push(
				element.controls.PPESupplied.valueChanges.pipe(
					startWith(''),
					map((value) =>
						typeof value === 'string' ? value : value?.fullName
					),
					map((fullName) =>
						fullName
							? this._filterPPE(fullName)
							: this.PPEData.slice()
					)
				)
			);
		}
	}
	removeFiled1(i) {
		const item = this.empDetails.controls.PPEArr as FormArray;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	newFiled3(data): FormGroup {
		return this.fb.group({
			PPESupplied: [data.ppeSupplied],
			BrandOrType: [data.brand],
			IssueDate: [data.issueDate],
			ReplacementDate: [data.replacementDate]
		});
	}
	addFiled3(data) {
		this.addPPE().push(this.newFiled3(data));

		this.PPEValueChanges = new Array<Observable<any>>();
		for (let index = 0; index < this.addPPE().length; index++) {
			const element = this.addPPE().at(index) as FormGroup;
			this.PPEValueChanges.push(
				element.controls.PPESupplied.valueChanges.pipe(
					startWith(''),
					debounceTime(400),
					map((value) =>
						typeof value === 'string' ? value : value?.fullName
					),
					map((fullName) =>
						fullName
							? this._filterPPE(fullName)
							: this.PPEData.slice()
					)
				)
			);
		}
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
						fullName ? this._filter(fullName) : this.empData.slice()
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
				element.controls.LicenceName.valueChanges.pipe(
					startWith(''),
					debounceTime(400),
					map((value) =>
						typeof value === 'string' ? value : value?.fullName
					),
					map((fullName) =>
						fullName ? this._filter(fullName) : this.empData.slice()
					)
				)
			);
		}
	}
	removeFiled(i) {
		const item = <FormArray>this.empDetails.controls.UploadLicenceArr;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	//
	getAllStates() {
		this.licenceInfo.getAllStates().subscribe((res: any) => {
			this.StatesData = res.data;
		});
	}
	//
	get registerFormControl() {
		return this.empDetails.controls;
	}

	private _filter(name: string): any[] {
		const filterValue = name.toLowerCase();
		return this.empData.filter((option) =>
			option.fullName.toLowerCase().includes(filterValue)
		);
	}
	private _filterPPE(name: string): any[] {
		const filterValue = name.toLowerCase();
		return this.PPEData.filter((option) =>
			option.fullName.toLowerCase().includes(filterValue)
		);
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
	filter1(val: string): Observable<any> {
		return this.licenceInfo.getAllPPE().pipe(
			map((res: any) => {
				res.data = res.data.map((item) => {
					item.PPESupplied = `${item.title}`;
					return item;
				});
				return res;
			}),
			map((response: any) => {
				response.data = response.data.filter((option) => {
					return (
						option.PPESupplied.toLowerCase().indexOf(
							val.toLowerCase()
						) === 0
					);
				});

				return response.data;
			})
		);
	}

	onFormSubmit() {
		this.submitted = true;
		const Sign = this.signaturePad.toDataURL();

		const plantSignature = this.signaturePad2.toDataURL();

		const ppeArr = () => {
			this.addPPE().length;
			const arr = [];
			this.addPPE().controls.forEach((item: any) => {
				arr.push({
					ppeSupplied: item.controls.PPESupplied.value,
					brand: item.controls.BrandOrType.value,
					issueDate: item.controls.IssueDate.value,
					replacementDate: item.controls.ReplacementDate.value
				});
			});
			return arr;
		};
		const equipArr = () => {
			this.addEquip().length;
			const arr = [];
			this.addEquip().controls.forEach((item: any) => {
				arr.push({
					plantType: item.controls.plantType.value,
					modelNumber: item.controls.modelNumber.value,
					serialNumber: item.controls.serialNumber.value,
					serviceRenewDate: item.controls.serviceRenewDate.value
				});
			});
			return arr;
		};
		const body = {
			designation: 'User',
			title: this.empDetails.get('profTitie').value,
			email: this.empDetails.get('porfEmail').value,
			position: this.empDetails.get('porfPosition').value,
			mobileNumber: this.empDetails.get('porfMobile').value,
			roleId: this.empDetails.get('roleId').value,
			// reportingTo: this.empDetails.get('reportingTo').value,

			suburb: this.empDetails.get('porfSuburb').value,
			stateId: this.empDetails.get('porfState').value,
			department: this.empDetails.get('porfDepartment').value,
			phone: this.empDetails.get('porfPhone').value,
			firstName: this.empDetails.get('profFirst').value,
			lastName: this.empDetails.get('porfListName').value,
			uploadImage: this.empDetails.get('porfUploadImage').value,
			emergencyContact: {
				firstName: this.empDetails.get('EmpFirst').value,
				lastName: this.empDetails.get('empLastName').value,
				email: this.empDetails.get('empEmail').value,
				phone: this.empDetails.get('empPhone').value,
				mobile: this.empDetails.get('empMobile').value,
				relationship: this.empDetails.get('empRelationship').value
			},
			licence: {
				licenceName: this.empDetails.get('LicenceName').value,
				licenceNumber: this.empDetails.get('LicenceNumber').value,
				trainingOrganisation: this.empDetails.get(
					'TrainingQrginisation'
				).value,
				expiryDate: this.empDetails.get('ExpiryDate').value,
				uploadLicence: this.empDetails.get('UploadLicenceArr').value
			},
			ppe: {
				PPEArr: ppeArr()
			},
			location: {
				address: this.empDetails.get('porfStreetAddress').value,
				landmark: 'Nagpur',
				state: this.empDetails.get('porfState').value,
				postcode: this.empDetails.get('porfPostalCode').value,
				country: 'India'
			}
		};

		this.employee.addEmployeeInfo(body).subscribe(
			(data) => {
				this.signaturePad.toDataURL();
				Swal.fire({
					title: 'Employee Added successfully',
					showConfirmButton: false,
					timer: 1200
				});
				if (this.dialogRef) {
					this.dialogRef.close(true);
					return;
				}
				this.router.navigate([
					'/admin/registration/employeeRegistration'
				]);
			},
			(err) => {
				this.toast.error(err);
				console.error(err);
			}
		);
	}

	onFormUpdate(id) {
		const Sign = this.signaturePad.toDataURL();
		const plantSignature = this.signaturePad2.toDataURL();
		const ppeArr = () => {
			this.addPPE().length;
			const arr = [];
			this.addPPE().controls.forEach((item: any) => {
				arr.push({
					ppeSupplied: item.controls.PPESupplied.value,
					brand: item.controls.BrandOrType.value,
					issueDate: item.controls.IssueDate.value,
					replacementDate: item.controls.ReplacementDate.value
				});
			});
			return arr;
		};
		const equipArr = () => {
			this.addPPE().length;
			const arr = [];
			this.addEquip().controls.forEach((item: any) => {
				arr.push({
					plantType: item.controls.plantType.value,
					modelNumber: item.controls.modelNumber.value,
					serialNumber: item.controls.serialNumber.value,
					serviceRenewDate: item.controls.serviceRenewDate.value
				});
			});
			return arr;
		};
		const data = {
			title: this.empDetails.get('profTitie').value,
			email: this.empDetails.get('porfEmail').value,
			position: (this.empDetails.get('porfPosition').value as RoleValue)
				._id,
			mobileNumber: this.empDetails.get('porfMobile').value,
			roleId: this.empDetails.get('roleId').value,
			// designation: this.empDetails.get('porfEmployee').value,
			// deviceToken: '',porfPostalCode

			suburb: this.empDetails.get('porfSuburb').value,
			stateId: this.empDetails.get('porfState').value,
			reportingTo: this.empDetails.get('reportingTo').value,
			department: (this.empDetails.get('porfDepartment')
				.value as RoleValue)._id,
			phone: this.empDetails.get('porfPhone').value,
			firstName: this.empDetails.get('profFirst').value,
			lastName: this.empDetails.get('porfListName').value,
			uploadImage: this.empDetails.get('porfUploadImage').value,
			emergencyContact: {
				firstName: this.empDetails.get('EmpFirst').value,
				lastName: this.empDetails.get('empLastName').value,
				email: this.empDetails.get('empEmail').value,
				phone: this.empDetails.get('empPhone').value,
				mobile: this.empDetails.get('empMobile').value,
				relationship: this.empDetails.get('empRelationship').value
			},
			licence: {
				licenceName: this.empDetails.get('LicenceName').value,
				licenceNumber: this.empDetails.get('LicenceNumber').value,
				trainingOrganisation: this.empDetails.get(
					'TrainingQrginisation'
				).value,
				expiryDate: this.empDetails.get('ExpiryDate').value,
				uploadLicence: this.empDetails.get('UploadLicenceArr').value
			},
			ppe: {
				PPEArr: ppeArr(),
				signature: Sign
			},
			location: {
				address: this.empDetails.get('porfStreetAddress').value,
				landmark: 'Nagpur',

				state: this.empDetails.get('porfState').value,
				postcode: this.empDetails.get('porfPostalCode').value,
				country: 'India'
			},
			plant: {
				plantArr: this.empDetails.get('plantArr').value,
				plantSignature: this.empDetails.controls.plantSignature.value
			}
		};

		this.employee.updateEmployeeInfo(this.id, data).subscribe(
			(resData) => {
				Swal.fire({
					title: 'Employee Updated successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.router.navigate([
					'/admin/registration/employeeRegistration'
				]);
			},
			(err) => {
				console.error(err);
			}
		);
	}
}
