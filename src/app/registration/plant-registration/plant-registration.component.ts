import { Component, OnInit, ViewChild } from '@angular/core';
import {
	AbstractControl,
	FormArray,
	FormBuilder,
	FormGroup,
	Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';
import { EmployeeRegistrationService } from 'src/app/utils/services/employee-registration.service';
import { LogicalFormInfoService } from '../../utils/services/logical-form-info.service';
import Swal from 'sweetalert2';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-plant-registration',
	templateUrl: './plant-registration.component.html',
	styleUrls: ['./plant-registration.component.scss']
})
export class PlantRegistrationComponent implements OnInit {
	plantDetails: FormGroup;
	ppeDetails: FormGroup;
	PPERegister = false;
	EquipmentInfo = false;
	PPEValueChanges: Observable<any>[];
	filteredOptions1: Observable<any>;
	filteredOptions2: Observable<any>;
	PPEData: any[] = [];
	@ViewChild('signature2') signaturePad2: any;
	@ViewChild('signature1') signaturePad: any;
	id: any;
	empId: any;
	dataUrl: any;
	empData: any[] = [];
	employeeData: any;
	isHistory: any;
	ppeDataHistory: any;
	plantDataHistory: any;
	selectValue: any;
	constructor(
		private fb: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private employee: EmployeeRegistrationService,
		private logicalService: LogicalFormInfoService,
		private router: Router
	) {
		this.ppeDetails = this.fb.group({
			PPESupplied: [''],
			BrandOrType: [''],
			IssueDate: [''],
			PPEArr: this.fb.array([]),
			ReplacementDate: [''],
			Sign: ['', Validators.required],
			managerName: ['', Validators.required],
			date: ['', Validators.required]
		});
		this.plantDetails = this.fb.group({
			modelNumber: [''],
			serialNumber: [''],
			plantType: [''],
			serviceRenewDate: [''],
			plantManagerName: [''],
			plantDate: [''],
			plantSignature: [''],
			plantArr: this.fb.array([])
		});
	}
	async disableForm(fileType) {
		if (this.isHistory && fileType === 'PPE') {
			this.ppeDetails.disable();
			const check = async () => {
				this.signaturePad != null;
			};
			await check();
			this.signaturePad.off();
		} else if (this.isHistory && fileType === 'Plant/Equipment') {
			this.plantDetails.disable();
			const check2 = async () => {
				this.signaturePad2 != null;
			};
			await check2();
			this.signaturePad2.off();
		}
	}

	ngOnInit(): void {
		this.isHistory = this.router.url.includes('/plantRegistration/history');
		this.id = this.activatedRoute.snapshot.params.id;

		this.patchData();
		this.employee.getAllEmployeeInfo().subscribe((empData) => {
			this.empData = empData;

			this.filteredOptions1 = this.ppeDetails.controls.managerName.valueChanges.pipe(
				startWith(''),
				debounceTime(400),
				tap((value) =>
					typeof value === 'object'
						? ''
						: typeof value === 'string'
						? this.ppeDetails.controls.managerName.setErrors({
								incorrect: true
						  })
						: ''
				),
				map((value) =>
					typeof value === 'string' ? value : value?.fullName
				),
				map((fullName) =>
					fullName ? this._filter(fullName) : this.empData.slice()
				)
			);
			this.filteredOptions2 = this.plantDetails.controls.plantManagerName.valueChanges.pipe(
				startWith(''),
				debounceTime(400),
				tap((value) =>
					typeof value === 'object'
						? ''
						: typeof value === 'string'
						? this.plantDetails.controls.plantManagerName.setErrors(
								{ incorrect: true }
						  )
						: ''
				),
				map((value) =>
					typeof value === 'string' ? value : value?.fullName
				),
				map((fullName) =>
					fullName ? this._filter(fullName) : this.empData.slice()
				)
			);
		});
	}
	private _filter(name: string): any[] {
		const filterValue = name.toLowerCase();
		return this.empData.filter((option) =>
			option.fullName.toLowerCase().includes(filterValue)
		);
	}
	displayFn(user: any): string {
		return user && user.fullName ? user.fullName : '';
	}
	addEquip() {
		return this.plantDetails.get('plantArr') as FormArray;
	}

	newEquipFiled3(data): FormGroup {
		return this.fb.group({
			plantType: [data.plantType],
			modelNumber: [data.modelNumber],
			serialNumber: [data.serialNumber],
			serviceRenewDate: [data.serviceRenewDate],
			plantCheck: ['']
		});
	}
	addEquipFiled3(data) {
		this.addEquip().push(this.newEquipFiled3(data));

		this.disableForm('Plant/Equipment');
	}
	public signaturePadOptions: Object = {
		minWidth: 1,
		canvasWidth: 500,
		canvasHeight: 100
	};
	drawComplete2() {
		this.plantDetails.controls.plantSignature.setValue(
			this.signaturePad2.toDataURL()
		);
	}
	clear2() {
		this.signaturePad2.clear();
		this.plantDetails.controls.plantSignature.setValue('');
	}
	drawStart() {}

	addPPE() {
		return this.ppeDetails.get('PPEArr') as FormArray;
	}
	get isOnePpeChecked() {
		return ((this.ppeDetails.get('PPEArr') as FormArray)
			.value as any[]).some((x) => x.ppeCheck == true);
	}

	newFiled3(data): FormGroup {
		return this.fb.group({
			PPESupplied: [data.ppeSupplied],
			BrandOrType: [data.brand],
			IssueDate: [data.issueDate],
			ReplacementDate: [data.replacementDate],
			ppeCheck: ['']
		});
	}
	addFiled3(data) {
		this.addPPE().push(this.newFiled3(data));

		this.disableForm('PPE');
	}

	PPERegisteshow() {
		this.PPERegister = true;
		this.EquipmentInfo = false;
	}
	addPlantshow() {
		this.PPERegister = false;
		this.EquipmentInfo = true;
	}
	clear() {
		this.signaturePad.clear();
		this.ppeDetails.controls.Sign.setValue('');
	}

	drawComplete() {
		this.ppeDetails.controls.Sign.setValue(this.signaturePad.toDataURL());
	}
	patchData() {
		if (!this.isHistory) {
			this.employee.getEmployeeInfoById(this.id).subscribe((data) => {
				this.employeeData = data.data;

				data.data.ppe.PPEArr.forEach((ele) => {
					this.addFiled3(ele);
				});
				data.data.plant.plantArr.forEach((ele) => {
					this.addEquipFiled3(ele);
				});
			});
		} else {
			this.logicalService
				.getSubmitedPPEPlantById(this.id)
				.subscribe((res: any) => {
					if (res.data[0].fileType === 'PPE') {
						this.selectValue = 0;
						this.ppeDataHistory = res.data[0];

						this.ppeDataHistory.managerName.fullName = `${this.ppeDataHistory.managerName.firstName} ${this.ppeDataHistory.managerName.lastName}`;

						this.empId = this.ppeDataHistory.employeeId._id;
						this.ppeDataHistory.submitPPEArr.forEach((ele) => {
							this.addFiled3(ele);
						});

						this.ppeDetails.patchValue({
							Sign: this.ppeDataHistory.signature,
							managerName: this.ppeDataHistory.managerName,
							date: this.ppeDataHistory.date
						});
						this.dataUrl = this.ppeDataHistory.signature;
						const check = async () => {
							this.signaturePad != null;
						};
						check().then((res) => {
							setTimeout(() => {
								this.signaturePad.fromDataURL(this.dataUrl);
							}, 1000);
						});
					} else if (res.data[0].fileType === 'Plant/Equipment') {
						this.selectValue = 1;
						this.plantDataHistory = res.data[0];
						this.plantDataHistory.managerName.fullName = `${this.plantDataHistory.managerName.firstName} ${this.plantDataHistory.managerName.lastName}`;
						this.empId = this.plantDataHistory.employeeId._id;
						this.plantDataHistory.submitPlantArr.forEach((ele) => {
							this.addEquipFiled3(ele);
						});
						this.plantDetails.patchValue({
							plantManagerName: this.plantDataHistory.managerName,
							plantDate: this.plantDataHistory.date,
							plantSignature: this.plantDataHistory.signature
						});
						this.dataUrl = this.plantDataHistory.signature;
						const check2 = async () => {
							this.signaturePad2 != null;
						};
						check2().then((res) => {
							setTimeout(() => {
								this.signaturePad2.fromDataURL(this.dataUrl);
							}, 1000);
						});
					}
				});
		}
	}
	peeSubmit() {
		const submitPPEArr = [];
		const notSubPPEArr = [];
		const { ppe, ...rest } = this.employeeData;

		for (let index = 0; index < this.addPPE().length; index++) {
			if (this.addPPE().at(index).get('ppeCheck').value) {
				const arr = {
					ppeSupplied: this.addPPE().at(index).get('PPESupplied')
						.value,
					brand: this.addPPE().at(index).get('BrandOrType').value,
					issueDate: this.addPPE().at(index).get('IssueDate').value,
					replacementDate: this.addPPE()
						.at(index)
						.get('ReplacementDate').value
				};
				submitPPEArr.push(arr);
			} else {
				const arr = {
					ppeSupplied: this.addPPE().at(index).get('PPESupplied')
						.value,
					brand: this.addPPE().at(index).get('BrandOrType').value,
					issueDate: this.addPPE().at(index).get('IssueDate').value,
					replacementDate: this.addPPE()
						.at(index)
						.get('ReplacementDate').value
				};
				notSubPPEArr.push(arr);
			}
		}
		const data = {
			signature: this.ppeDetails.controls.Sign.value,
			date: this.ppeDetails.controls.date.value,
			managerName: this.ppeDetails.controls.managerName.value._id,
			submitPPEArr,
			employeeId: this.employeeData._id
		};
		let data2 = {};
		if (notSubPPEArr.length !== 0) {
			data2 = {
				...rest,
				ppe: {
					PPEArr: notSubPPEArr,
					signature: ppe.signature
				}
			};
		} else {
			data2 = {
				...rest,
				ppe: {
					PPEArr: notSubPPEArr,
					signature: ''
				}
			};
		}

		this.logicalService.postSubmitedPPE(data).subscribe(
			(res) => {
				this.employee
					.updateEmployeeInfo(this.employeeData._id, data2)
					.subscribe((resData) => {
						this.router.navigate([
							'admin/registration/employeeRegistration'
						]);
						Swal.fire({
							title: 'Submit successfully',
							showConfirmButton: false,
							timer: 1200
						});
					});
			},
			(err) => {
				if (err) {
					Swal.fire({
						title: 'Submit Failed',
						showConfirmButton: false,
						timer: 4000
					});
				}
			}
		);
	}
	plantSubmit() {
		const submitPlant = [];
		const notSubPlant = [];
		const { plant, ...rest } = this.employeeData;

		for (let index = 0; index < this.addEquip().length; index++) {
			if (this.addEquip().at(index).get('plantCheck').value) {
				const arr = {
					plantType: this.addEquip().at(index).get('plantType').value,
					modelNumber: this.addEquip().at(index).get('modelNumber')
						.value,
					serialNumber: this.addEquip().at(index).get('serialNumber')
						.value,
					serviceRenewDate: this.addEquip()
						.at(index)
						.get('serviceRenewDate').value
				};
				submitPlant.push(arr);
			} else {
				const arr = {
					plantType: this.addEquip().at(index).get('plantType').value,
					modelNumber: this.addEquip().at(index).get('modelNumber')
						.value,
					serialNumber: this.addEquip().at(index).get('serialNumber')
						.value,
					serviceRenewDate: this.addEquip()
						.at(index)
						.get('serviceRenewDate').value
				};
				notSubPlant.push(arr);
			}
		}
		const data = {
			signature: this.plantDetails.controls.plantSignature.value,
			date: this.plantDetails.controls.plantDate.value,
			managerName: this.plantDetails.controls.plantManagerName.value._id,
			submitPlantArr: submitPlant,
			employeeId: this.employeeData._id
		};
		let data2 = {};

		if (notSubPlant.length !== 0) {
			data2 = {
				...rest,
				plant: {
					plantArr: notSubPlant,
					signature: plant.plantSignature
				}
			};
		} else {
			data2 = {
				...rest,
				plant: {
					plantArr: notSubPlant,
					signature: ''
				}
			};
		}

		this.logicalService.postSubmitedPlant(data).subscribe(
			(res) => {
				this.employee
					.updateEmployeeInfo(this.employeeData._id, data2)
					.subscribe((resData) => {
						this.router.navigate([
							'admin/registration/employeeRegistration'
						]);
						Swal.fire({
							title: 'Submit successfully',
							showConfirmButton: false,
							timer: 1200
						});
					});
			},
			(err) => {
				if (err) {
					Swal.fire({
						title: 'Submit Failed',
						showConfirmButton: false,
						timer: 4000
					});
				}
			}
		);
	}
}
