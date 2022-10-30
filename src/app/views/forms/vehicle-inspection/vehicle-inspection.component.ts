import { DatePipe } from '@angular/common';
import {
	AfterViewInit,
	Component,
	HostListener,
	OnDestroy,
	OnInit,
	Renderer2,
	ViewChild
} from '@angular/core';
import Swal from 'sweetalert2';
import {
	FormBuilder,
	FormGroup,
	Validators,
	FormArray,
	FormControl,
	AbstractControl
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { SavedformsService } from 'src/app/utils/services/savedforms.service';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { Observable, Subscription } from 'rxjs';
import { SignaturePad } from 'angular2-signaturepad';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { EmployeeRegistrationService } from 'src/app/utils/services/employee-registration.service';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';
import { MobileViewService } from 'src/app/utils/services/mobile-view.service';

import { UntilDestroy } from '@ngneat/until-destroy';
import { ModifiedJobNumber } from 'src/app/utils/types/JobNumberResponceTypes';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-vehicle-inspection',
	templateUrl: './vehicle-inspection.component.html',
	styleUrls: ['./vehicle-inspection.component.scss']
})
export class VehicleInspectionComponent
	implements OnInit, AfterViewInit, OnDestroy {
	sidePreview!: FormGroup;
	SiteControl!: FormArray;
	siteshow = true;
	siteAction = false;
	itemvalue: any;
	singRequired: any;
	sub: Subscription;

	isPrint: Observable<any>;
	@ViewChild('Signature') signaturePad: SignaturePad;
	isHistory: boolean;
	returnTo: Observable<string>;
	valueChangesArr: Observable<any>[];
	enable: boolean;
	frequency: string;
	@HostListener('window:afterprint', [])
	function() {
		this.shared.printNext(false);
		if (this.router.url.includes('/admin/savedForms')) {
			this.router.navigateByUrl('/admin/savedForms');
			return;
		}

		this.router.navigateByUrl('/admin/forms/vehicleinspectiontable');
	}
	maxDate = new Date();
	minDate = new Date();
	item_values: any = ['In Progress', 'Completed', 'Closed'];
	jobTaskData: any;
	allJobNumbers: ModifiedJobNumber[] = [];
	projectMang = [];
	keyArr = [
		'jobNumber',
		'siteName',
		'customerName',
		'streetNo',
		'streetAddr',
		'subUrb',
		'custConct',
		'custConctPh',
		'custEmail',
		'datetooboxtalk',
		'date',
		'projectManager'
	];
	filteredOptions1: Observable<any>;
	filteredOptions2: Observable<any>;
	empData: any;
	id: any;
	allcategory: any;
	allTopic: any;
	showDatas: any;
	staff: any;
	type: any;
	check: any;
	constructor(
		private fb: FormBuilder,
		private dynamicFormsService: DynamicFormsService,
		private setTitle: SetTitleService,
		private logicalFormInfo: LogicalFormInfoService,
		public router: Router,
		private activatedRoute: ActivatedRoute,
		private datePipe: DatePipe,
		public forms: SavedformsService,
		private shared: RoleManagementSharedServiceService,
		private employee: EmployeeRegistrationService,
		private renderer: Renderer2,
		private mobileViewService: MobileViewService
	) {
		this.check = localStorage.getItem('key');
		this.sidePreview = this.fb.group({
			jobNumber: ['', Validators.required],
			siteName: ['', Validators.required],
			customerName: ['', Validators.required],
			streetAddr: ['', Validators.required],
			custConct: ['', Validators.required],
			custConctPh: ['', Validators.required],
			custEmail: ['', Validators.required],
			date: [new Date(), Validators.required],
			projectManager: ['', Validators.required],
			empName: ['', Validators.required],
			submitDate: [new Date(), Validators.required],
			signature: ['', Validators.required],
			siteAction: this.fb.array([]),
			siteCategorytTopic: this.fb.array([])
		});
	}
	ngOnDestroy(): void {}
	public signaturePadOptions1: Object = {
		minWidth: 1,
		canvasWidth: 350,
		canvasHeight: 100
	};

	async disableForm() {
		if (this.isHistory) {
			this.sidePreview.disable();
			const check1 = async () => {
				this.signaturePad != null;
			};
			await check1();
			this.signaturePad.off();
		}
	}
	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe(({ enable, frequency }) => {
			this.enable = Boolean(enable);
			this.frequency = frequency as string;
		});
		this.isHistory = this.router.url.includes(
			'/vehicleinspectiontable/history'
		);
		if (this.isHistory) {
			this.disableForm();
			this.returnTo = this.activatedRoute.queryParamMap.pipe(
				map((param) => param.get('returnTo'))
			);
			this.returnTo.subscribe();
		}

		this.isPrint = this.shared.printObs$ as Observable<any>;
		this.activatedRoute.queryParams.subscribe((params) => {
			this.type = params.formType;
		});
		this.id = this.activatedRoute.snapshot.params.id;

		this.dynamicFormsService.homebarTitle.next('Vehicle Inspection Form');
		this.setTitle.setTitle('Vehicle Inspection Form');

		if (this.id != 'form') {
			this.logicalFormInfo
				.getVehicleInspection(this.id)
				.subscribe((res: any) => {
					this.showDatas = res.data;
					this.allTopic = this.showDatas.allTopic;
					this.allcategory = this.showDatas.allcategory;
					this.allJobNumbers = this.showDatas.allJobNumbersArr;
					this.projectMang = this.showDatas.projectMangArr;
					this.staff = this.showDatas.staffArr;
					this.maxDate = this.showDatas.date;
					this.minDate = this.showDatas.date;
					for (let index = 0; index < this.allTopic.length; index++) {
						this.add2().push(this.newAction2(index));
					}

					setTimeout(() => {
						let formatDate;
						if (this.showDatas.date) {
							const date = new Date(this.showDatas.date);
							formatDate = this.datePipe.transform(
								date,
								'yyyy-MM-dd'
							);
							this.sidePreview.patchValue({ date: formatDate });
						} else {
							formatDate = '';
						}
						this.showDatas.empName.fullName = `${this.showDatas.empName.firstName} ${this.showDatas.empName.lastName}`;
						this.sidePreview.patchValue({
							siteName: this.showDatas.siteName,
							customerName: this.showDatas.customerName,
							streetAddr: this.showDatas.streetAddr,
							custConct: this.showDatas.custConct,
							custConctPh: this.showDatas.custConctPh,
							custEmail: this.showDatas.custEmail,
							jobNumber: this.showDatas.jobNumber,
							projectManager: this.showDatas.projectManager,

							empName: this.showDatas.empName,
							submitDate: this.showDatas.submitDate,
							signature: this.showDatas.signature
						});
						const check = async () => {
							this.signaturePad != null;
						};
						check().then(() => {
							this.signaturePad.fromDataURL(
								this.showDatas.signature
							);
						});

						if (this.add2().controls) {
							let key;
							for (let i = 0; i < this.allTopic.length; i++) {
								for (
									let index = 0;
									index <
									this.showDatas.siteCategorytTopic.length;
									index++
								) {
									key = Object.keys(
										this.showDatas.siteCategorytTopic[index]
									);
									this.add2()
										.controls[i].get(key)
										?.setValue(
											this.showDatas.siteCategorytTopic[
												index
											][key]
										);
								}
							}
						}
					}, 500);
					if (this.id !== 'form') {
						this.showDatas.siteAction = this.showDatas.siteAction.map(
							(item) => {
								item.personRes.fullName = `${item.personRes.firstName} ${item.personRes.lastName}`;
								return item;
							}
						);
						if (!this.add().length) {
							for (
								let index = 0;
								index < this.showDatas.siteAction.length;
								index++
							) {
								this.addAction();
								this.add()
									.controls[index].get('item')
									.setValue(
										this.showDatas.siteAction[index].item
									);
								this.add()
									.controls[index].get('action')
									.setValue(
										this.showDatas.siteAction[index].action
									);
								this.add()
									.controls[index].get('topicId')
									.setValue(
										this.showDatas.siteAction[index].topicId
									);
								this.add()
									.controls[index].get('personRes')
									.setValue(
										this.showDatas.siteAction[index]
											.personRes
									);
								this.add()
									.controls[index].get('complete')
									.setValue(
										this.showDatas.siteAction[index]
											.complete
									);
							}
						}
					}
					if (this.check) {
						this.showAction();
					}
				});
		} else {
			this.getAllCategory();
			this.getAllTopic();
			this.getAllJobNumber();
			this.getAllProjectMang();
			this.getAllStaff();
		}

		this.employee.getAllEmployeeInfo().subscribe((empData) => {
			this.empData = empData;
			this.filteredOptions1 = this.sidePreview.controls.empName.valueChanges.pipe(
				startWith(''),
				debounceTime(400),
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
	employeeData(e: MatAutocompleteSelectedEvent, controlName: string) {
		const data = e.option.value;
	}
	ngAfterViewInit(): void {
		this.sub = this.mobileViewService.removeButton();
		this.sub.add(
			this.shared.printObs$.subscribe((res) => {
				this.check = res;

				if (this.check) {
					setTimeout(() => {
						window.print();
					}, 3000);
					localStorage.setItem('key', ' ');
				}
			})
		);
	}
	drawComplete1() {
		this.sidePreview.controls.signature.setValue(
			this.signaturePad.toDataURL()
		);
		this.singRequired = this.sidePreview.controls.signature.invalid;
	}
	clear1() {
		this.signaturePad.clear();
		this.sidePreview.controls.signature.setValue('');
		this.singRequired = this.sidePreview.controls.signature.untouched;
	}
	drawStart1() {}
	jobNoSel() {
		this.allJobNumbers.forEach((item) => {
			if (this.sidePreview.get('jobNumber').value === item._id) {
				this.sidePreview.patchValue({
					siteName: item.siteName,
					customerName: item.customerName,
					streetAddr: item.streetAddress,
					custConct: item.customerContact,
					custConctPh: item.contacts[0].phone,
					custEmail: item.contacts[0].email,
					jobNumber: this.sidePreview.get('jobNumber').value
				});
			}
		});
		this.sidePreview.get('jobNumber').updateValueAndValidity();
	}
	addAction() {
		{
			this.add().push(this.newAction());
			this.disableForm();
			this.valueChangesArr = new Array<Observable<any>>();
			for (let index = 0; index < this.add().length; index++) {
				const element = this.add().at(index) as FormGroup;
				this.valueChangesArr.push(
					(element.controls.personRes
						.valueChanges as Observable<any>).pipe(
						startWith({ fullName: '' }),
						tap((value) =>
							typeof value === 'object'
								? ''
								: typeof value === 'string'
								? (element.controls
										.personRes as AbstractControl).setErrors(
										{ incorrect: true }
								  )
								: ''
						),
						map((value) =>
							typeof value === 'string' ? value : value?.fullName
						),
						map((fullName) =>
							fullName
								? this._filter(fullName)
								: this.empData.slice()
						)
					)
				);
			}
		}
	}
	add(): FormArray {
		return this.sidePreview.get('siteAction') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			item: ['', Validators.required],
			action: ['', Validators.required],
			personRes: ['', Validators.required],
			date: [new Date(), Validators.required],
			topicId: ['']
		});
	}
	showsite() {
		this.siteshow = true;
		this.siteAction = false;
	}
	showAction() {
		this.siteAction = true;
		this.siteshow = false;
	}
	removeAction() {
		const index = this.add().length;
		this.add().removeAt(index - 1);
	}
	addAcionData(data) {
		const b = Object.keys(this.sidePreview.value);

		const index = this.add().length;
		this.addAction();
		this.add().controls[index].get('item').setValue(data.item);
		this.add().controls[index].get('action').setValue(data.action);
		this.add().controls[index].get('topicId').setValue(data._id);
	}
	removeAcionData(data) {
		for (let index = 0; index < this.add().length; index++) {
			if (this.add().at(index).get('topicId').value == data._id) {
				this.add().removeAt(index);
			}
		}
	}

	getAllJobTask() {
		this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
			this.jobTaskData = res.data;
		});
	}
	getAllProjectMang() {
		this.logicalFormInfo.getAllProjectMang().subscribe((res: any) => {
			this.projectMang = res.data;
		});
	}
	getAllJobNumber() {
		this.logicalFormInfo.getAllJobNumber().subscribe((res) => {
			this.allJobNumbers = res.data as ModifiedJobNumber[];
		});
	}
	tabClick(eve) {
		if (eve.index == 0) {
			this.showsite();
		}
		if (eve.index == 1) {
			this.sidePreview.updateValueAndValidity();
			this.showAction();
		}
	}
	onSave() {
		let { empName, siteAction, ...rest } = this.sidePreview.value;

		//let empName = this.sidePreview.controls.empName.value
		siteAction = siteAction.map((res) => {
			return {
				personRes: res.personRes._id,
				action: res.action,
				complete: res.complete,
				item: res.item,
				topicId: res.topicId
			};
		});
		const data = {
			...rest,
			allTopic: this.allTopic,
			allcategory: this.allcategory,
			allJobNumbersArr: this.allJobNumbers,
			projectMangArr: this.projectMang,
			staffArr: this.staff,
			empName: empName._id,
			siteAction,
			enable: this.enable,
			frequency: this.frequency
		};
		if (this.id != 'form') {
			this.sidePreview.removeControl('empName');

			this.logicalFormInfo
				.updateVehicleInspection(this.id, data)
				.subscribe((res) => {
					Swal.fire({
						title: 'Update successfully',
						showConfirmButton: false,
						timer: 1200
					});
					this.router.navigate([
						'/admin/forms/vehicleinspectiontable'
					]);
				});
		} else {
			const empName = this.sidePreview.controls.empName.value;
			this.sidePreview.removeControl('empName');
			this.logicalFormInfo.addVehicleInspection(data).subscribe((res) => {
				Swal.fire({
					title: 'Submit successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.router.navigate(['/admin/forms/fillConfigForm/' + 0]);
			});
		}
		this.sidePreview.reset();
		this.signaturePad.clear();
	}
	getAllCategory() {
		this.logicalFormInfo
			.getAllVehicleInspectionCategory()
			.subscribe((res: any) => {
				this.allcategory = res.data;
			});
	}
	add2(): FormArray {
		return this.sidePreview.get('siteCategorytTopic') as FormArray;
	}
	newAction2(index): FormGroup {
		return this.fb.group({
			[this.allTopic[index]._id]: ['']
		});
	}
	getAllTopic() {
		this.logicalFormInfo
			.getAllVehicleInspectionTopic()
			.subscribe((res: any) => {
				this.allTopic = res.data;

				for (let index = 0; index < this.allTopic.length; index++) {
					this.add2().push(this.newAction2(index));
					this.disableForm();
				}
			});
	}
	categorychecked(index) {
		let value;
		value = this.allTopic?.find((ele) => {
			return ele?.categoryId == this.allcategory[index]?._id;
		});
		return value != null;
	}
	getAllStaff() {
		this.logicalFormInfo.getAllStaff().subscribe((res: any) => {
			this.staff = res.data;
		});
	}
}
