import {
	AfterViewInit,
	Component,
	HostListener,
	NgZone,
	OnDestroy,
	OnInit
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators,
	FormControl
} from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { ViewChild } from '@angular/core';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { Observable, Subscription } from 'rxjs';
import {
	startWith,
	debounceTime,
	distinctUntilChanged,
	switchMap,
	map,
	filter,
	take,
	tap,
	last
} from 'rxjs/operators';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import {
	ActivatedRoute,
	ActivatedRouteSnapshot,
	Router
} from '@angular/router';
import Swal from 'sweetalert2';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { SavedformsService } from 'src/app/utils/services/savedforms.service';
import { EmployeeRegistrationService } from 'src/app/utils/services/employee-registration.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { MobileViewService } from 'src/app/utils/services/mobile-view.service';
import { UntilDestroy } from '@ngneat/until-destroy';
import { CustomValidators } from 'src/app/custom-validators';
import { UserValue } from 'src/app/utils/types/UserResponceTypes';
import { RoleManagementService } from 'src/app/utils/services/role-management.service';
import { RoleValue } from 'src/app/utils/types/AccessResponceTypes';
import { Action } from 'src/app/utils/types/HazardTypes';
import { DepartmentService } from 'src/app/utils/services/department.service';
import { Department } from 'src/app/utils/types/DepartmentTypes';

@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-hazard-report',
	templateUrl: './hazard-report.component.html',
	styleUrls: ['./hazard-report.component.scss']
})
export class HazardReportComponent implements OnInit, AfterViewInit, OnDestroy {
	title = 'hazardReport';
	hazardReport: FormGroup;
	myControl = new FormControl();
	empControl = new FormControl();
	options: string[] = [''];
	filteredOptions: Observable<any>;
	filteredOptions2: Observable<any>;
	filteredOptions3: Observable<any>;
	filteredOptions4: Observable<any>;
	filteredManager: Observable<any>;
	id: any;
	hazard: any;
	singRequired: any;
	selectedImage: any;
	isHistory: boolean;
	hasError: false;
	pad: 'inp_padding';
	allJobNumbers = [];
	whsData: any = [''];
	hazardData: any = [''];
	myControlEmail = new FormControl();
	myControlManagerEmail = new FormControl();
	myControlManager = new FormControl();
	signature: SignaturePad;
	@ViewChild('Signature1') signaturePad1: SignaturePad;
	dataUrl: any;
	@ViewChild('autosize') autosize: CdkTextareaAutosize;
	sub: Subscription;
	isPrint: Observable<any>;
	obj: Actionedby = {
		elliminateAction: null,
		substituteAction: null,
		isolatedAction: null,
		solutionAction: null,
		procedureRemoveAction: null,
		PPEAction: null
	};
	ActionedbyStrings: string[] = [
		'elliminateAction',
		'substituteAction',
		'isolatedAction',
		'solutionAction',
		'procedureRemoveAction',
		'PPEAction'
	];
	uploadFile: any;
	returnTo: Observable<string>;
	doesQueryMobilExists: boolean;
	enable: boolean;
	frequency: string;
	compileDepartment$: Observable<any[]>;
	public displayFnRole: (user: any) => string;
	department$: Observable<any[]>;
	position$: Observable<any[]>;
	compilePosition$: Observable<any[]>;
	roleValue: RoleValue[];
	displayFnDepartmentName: (user: any) => string;
	department: Department[];
	@HostListener('window:afterprint', [])
	function() {
		this.shared.printNext(false);
		if (this.router.url.includes('/admin/savedForms')) {
			this.router.navigateByUrl('/admin/savedForms');
			return;
		}
		this.router.navigateByUrl('/admin/forms/hazardTable');
	}
	maxDate = new Date();
	minDate = new Date();
	type: any;
	empData: UserValue[];
	check: any;
	isImg: any;
	// showImg:any;
	image: any[] = ['tif', 'tiff', 'jpg', 'jpeg', 'gif', 'png', 'svg'];
	constructor(
		private fb: FormBuilder,
		private employee: EmployeeRegistrationService,
		private dynamicFormsService: DynamicFormsService,
		private setTitle: SetTitleService,
		private url: LogicalFormInfoService,
		public router: Router,
		public upload: UploadFileServiceService,
		private activatedRoute: ActivatedRoute,
		private ngZone: NgZone,
		public forms: SavedformsService,
		private shared: RoleManagementSharedServiceService,
		public mobileViewService: MobileViewService,
		private roleManagementService: RoleManagementService,
		private departmentService: DepartmentService
	) {
		this.check = localStorage.getItem('key');

		this.hazardReport = this.fb.group({
			fullName: ['', Validators.required],
			email: ['', Validators.required],
			phone: [
				'',
				[Validators.required, CustomValidators.PhoneNumberValidator()]
			],
			department: ['', Validators.required],
			position: ['', Validators.required],
			date: [new Date(), Validators.required],
			signaturePad1: ['', Validators.required],
			describeHazard: ['', Validators.required],
			dateHazardReport: [new Date(), Validators.required],
			locationHazard: ['', Validators.required],
			dateHazardIdentify: [new Date(), Validators.required],
			jobNumberId: ['', Validators.required],
			name: ['', Validators.required],
			compilePosition: ['', Validators.required],
			compileDepartment: ['', Validators.required],
			myControl: [''],
			myControlManager: [''],
			employeeParttime: [''],
			managerSupervisor: [''],
			managerSupervisorEmail: [''],
			whsManagerEmail: [''],
			action: [''],
			// eliminateHazard: [''],
			// eliminateCorrect: [''],
			elliminateAction: this.correctiveActionFG(),
			// eliminateWhen: [new Date()],
			substituteCorrect: [''],
			substituteAction: this.correctiveActionFG(),
			substituteWhen: [new Date()],
			isolatedCorrect: [''],
			isolatedAction: this.correctiveActionFG(),
			isolatedWhen: [new Date()],
			solutionCorrect: [''],
			solutionAction: this.correctiveActionFG(),
			solutionWhen: [new Date()],
			procedureRemove: [new Date()],
			procedureRemoveCorrect: [''],
			procedureRemoveAction: this.correctiveActionFG(),
			procedureRemoveWhen: [''],
			PPECorrect: [''],
			PPEAction: this.correctiveActionFG(),
			PPEWhen: [new Date()],
			fileUpload: [''],
			complete: [''],
			consequence: [],
			riskRating: [''],
			actionRequired: [''],
			likelihood: [],
			reduceRisk: [''],
			procedures: [''],
			process: [''],
			isolatedHazard: [''],
			eliminateHazardAction: ['']
		});
	}
	private correctiveActionFG(): any {
		return this.fb.group({
			action: [''],
			personRes: [{ fullname: '' }],
			date: [''],
			completed: [false]
		});
	}

	async disableForm() {
		if (this.isHistory) {
			this.hazardReport.disable();

			const check1 = async () => {
				this.signaturePad1 != null;
			};
			await check1();
			this.signaturePad1.off();
		}
	}
	showImg() {
		let ext = this.selectedImage ? this.selectedImage.split('.') : [];

		return ext.length != 0
			? this.image.includes(ext[ext.length - 1])
			: false;
	}
	ngOnInit() {
		this.activatedRoute.queryParams.subscribe(({ enable, frequency }) => {
			this.enable = Boolean(enable);
			this.frequency = frequency;
		});

		this.isHistory = this.router.url.includes('/hazardTable/history');
		if (this.isHistory) {
			this.disableForm();
			this.returnTo = this.activatedRoute.queryParamMap.pipe(
				map((param) => param.get('returnTo'))
			);
			this.returnTo.subscribe();
		}

		this.employee.getAllEmployeeInfo().subscribe((empData) => {
			this.empData = empData;

			this.filteredOptions2 = this.hazardReport.controls.fullName.valueChanges.pipe(
				startWith(''),
				map((value) =>
					typeof value === 'string' ? value : value?.fullName
				),
				map((fullName) =>
					fullName ? this._filter(fullName) : this.empData.slice()
				)
			);
			this.filteredOptions3 = this.hazardReport.controls.name.valueChanges.pipe(
				startWith(''),
				map((value) =>
					typeof value === 'string' ? value : value?.fullName
				),
				map((fullName) =>
					fullName ? this._filter(fullName) : this.empData.slice()
				)
			);
			this.filteredOptions = this.hazardReport.controls.myControl.valueChanges.pipe(
				startWith(''),
				map((value) =>
					typeof value === 'string' ? value : value?.fullName
				),
				map((fullName) =>
					fullName ? this._filter(fullName) : this.empData.slice()
				)
			);
			this.ActionedbyStrings.forEach((ctrlName) => {
				const filter = (this.hazardReport.controls[
					ctrlName
				] as FormGroup).controls['personRes'].valueChanges.pipe(
					startWith({ fullName: '' }),
					map((value) =>
						typeof value === 'string' ? value : value?.fullName
					),
					map((fullName) =>
						fullName ? this._filter(fullName) : this.empData.slice()
					)
				);
				this.obj[ctrlName] = filter;
			});
		});
		this.isPrint = this.shared.printObs$ as Observable<any>;

		this.activatedRoute.queryParams.subscribe((params) => {
			this.type = params.formType;
		});

		this.filteredManager = this.myControlManager.valueChanges.pipe(
			startWith(''),
			debounceTime(400),
			distinctUntilChanged(),
			switchMap((val) => {
				return this.filter(val || '');
			})
		);
		this.getAllHazardTreatmentRelation();
		this.getAllJobNumber();

		this.dynamicFormsService.homebarTitle.next('Hazard Report Form');
		this.setTitle.setTitle('WHS-Hazard Report Form');
		this.hazardReport
			.get('managerSupervisor')
			.valueChanges.subscribe((res) => {
				if (res) {
					for (let i = 0; i < this.whsData.length; i++) {
						if (res === this.whsData[i]._id) {
							this.hazardReport
								.get('managerSupervisorEmail')
								.setValue(this.whsData[i].email);

							break;
						}
					}
				}
			});
		this.id = this.activatedRoute.snapshot.params.id;
		if (this.id != 'form') {
			this.getHazardByid(this.id);
		}
		this.getAllDepartment();
		this.displayFnRole = this.roleManagementService.displayFnRole;
		this.roleManagementService.getAllRole().subscribe((res) => {
			this.roleValue = res.data;

			this.position$ = this.roleManagementService.getRoleAutocomplete(
				this.hazardReport,
				'position',
				res.data
			);
			this.compilePosition$ = this.roleManagementService.getRoleAutocomplete(
				this.hazardReport,
				'compilePosition',
				res.data
			);
		});
	}

	getAllDepartment() {
		this.departmentService.getAllDepartment().subscribe((res) => {
			this.department = res.data;
			this.displayFnDepartmentName = this.departmentService.displayFnDepartmentName;
			this.department$ = this.departmentService.getDepartmentNameAutocomplete(
				this.hazardReport,
				'department',
				res.data
			);
			this.compileDepartment$ = this.departmentService.getDepartmentNameAutocomplete(
				this.hazardReport,
				'compileDepartment',
				res.data
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

	ngAfterViewInit() {
		this.sub = this.shared.printObs$.subscribe((res) => {
			this.check = res;
			if (this.check) {
				setTimeout(() => {
					window.print();
				}, 3000);
				localStorage.setItem('key', ' ');
			}
		});
		this.sub.add(this.mobileViewService.removeButton());
		// this.signaturePad is now available

		this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
		this.signaturePad1.clear();
		this.mobileViewService.observeXsmall().subscribe((result) => {
			if (result.matches) {
				const sign = this.signaturePad1.toDataURL();
				this.signaturePad1.set('canvasWidth', 247);
				this.signaturePad1.set('canvasHeight', 106);
				this.signaturePad1.fromDataURL(sign);
			} else {
				// this.reSizeSignArray(this.signaturePad2, 420, 121);
				const sign = this.signaturePad1.toDataURL();
				this.signaturePad1.set('canvasWidth', 500);
				this.signaturePad1.set('canvasHeight', 100);
				this.signaturePad1.fromDataURL(sign);
			}
		});
	}
	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}
	triggerResize() {
		// Wait for changes to be applied, then trigger textarea resize.
		this.ngZone.onStable
			.pipe(take(1))
			.subscribe(() => this.autosize.resizeToFitContent(true));
	}

	getHazardByid(id) {
		this.url.getHazardFormDataById(id).subscribe((res) => {
			this.ActionedbyStrings.forEach((value) => {
				(res.data[value] as Action).personRes = this.empData.find(
					(item) =>
						item._id ===
						((res.data[value] as Action).personRes as string)
				);
				console.log((res.data[value] as Action).personRes);
			});
			this.hazardReport.patchValue(res.data);
			// res.data.PPEAction.personRes
			// res.data.isolatedAction
			// res.data.solutionAction
			// res.data.eliminateHazardAction
			// res.data.procedureRemoveAction
			this.hazardReport.patchValue({
				// myControlManager: res.data.myControlManager,
				// employeeParttime: res.data.employeeParttime,
				// email: res.data.email,
				// phone: res.data.phone,
				// department: res.data.department,
				// position: res.data.position,
				// projectName: res.data.projectName,
				// managerSupervisorEmail: res.data.managerSupervisorEmail,
				// whsManagerEmail: res.data.whsManagerEmail,
				// describeHazard: res.data.describeHazard,
				// dateHazardReport: res.data.dateHazardReport,
				// jobNumberId: res.data.jobNumberId,
				// action: res.data.action,
				// eliminateHazard: res.data.eliminateHazard,
				// eliminateCorrect: res.data.eliminateCorrect,
				// eliminateWhen: res.data.eliminateWhen,
				// substituteCorrect: res.data.substituteCorrect,
				// substituteWhen: res.data.substituteWhen,
				// isolatedCorrect: res.data.isolatedCorrect,
				// isolatedWhen: res.data.isolatedWhen,
				// solutionCorrect: res.data.solutionCorrect,
				// customerName: res.data.customerName,
				// solutionWhen: res.data.solutionWhen,
				// procedureRemove: res.data.procedureRemove,
				// procedureRemoveCorrect: res.data.procedureRemoveCorrect,
				// procedureRemoveWhen: res.data.procedureRemoveWhen,
				// PPECorrect: res.data.PPECorrect,
				// PPEWhen: res.data.PPEWhen,
				// locationHazard: res.data.locationHazard,
				// compilePosition: res.data.compilePosition,
				// compileDepartment: res.data.compileDepartment,
				// date: res.data.date,
				// complete: res.data.complete,
				// consequence: res.data.consequence,
				// riskRating: res.data.riskRating,
				// actionRequired: res.data.actionRequired,
				// likelihood: res.data.likelihood,
				// reduceRisk: res.data.reduceRisk,
				// procedures: res.data.procedures,
				// process: res.data.process,
				// isolatedHazard: res.data.isolatedHazard,
				// dateHazardIdentify: res.data.dateHazardIdentify,
				// eliminateHazardAction: res.data.eliminateHazardAction,
				// signaturePad1: res.data.signaturePad1,
				myControl: this.empData.find(
					(x) => x._id == res.data.myControl._id
				),
				managerSupervisor: res.data.managerSupervisor._id,
				elliminateAction: { fullName: res.data.elliminateAction },
				substituteAction: { fullName: res.data.substituteAction },
				isolatedAction: { fullName: res.data.isolatedAction },
				solutionAction: { fullName: res.data.solutionAction },
				procedureRemoveAction: {
					fullName: res.data.procedureRemoveAction
				},
				PPEAction: { fullName: res.data.PPEAction },
				name: { fullName: res.data.name },
				fullName: { fullName: res.data.fullName }
			});
			this.minDate = res.data.date;
			this.selectedImage = res.data.fileUpload;

			this.uploadFile = this.selectedImage?.slice(
				this.selectedImage.indexOf('-') + 1
			);

			this.dataUrl = res.data.signaturePad1;
			const check = async () => {
				this.signaturePad1 != null;
			};
			check().then(() => {
				this.signaturePad1.fromDataURL(res.data.signaturePad1);
			});
		});
	}

	public signaturePadOptions: Object = {
		minWidth: 1,
		canvasWidth: 500,
		canvasHeight: 100
	};

	drawComplete() {
		this.hazardReport.controls.signaturePad1.setValue(
			this.signaturePad1.toDataURL()
		);
		this.singRequired = this.hazardReport.controls.signaturePad1.invalid;
		// will be notified of szimek/signature_pad's onEnd event
	}
	clear() {
		this.signaturePad1.clear();
		this.hazardReport.controls.signaturePad1.setValue('');
		this.singRequired = this.hazardReport.controls.signaturePad1.untouched;
	}
	drawStart() {}
	Consequences: Array<any> = [
		{ name: '1-Insignificant', value: 1 },
		{ name: '2-Minor', value: 2 },
		{ name: '3-Moderate', value: 3 },
		{ name: '4-Major', value: 4 },
		{ name: '5-Catastrophic', value: 5 }
	];

	Likelihood: Array<any> = [
		{ name: '1-Rare', value: 1 },
		{ name: '2-Unlikely', value: 2 },
		{ name: '3-Moderate', value: 3 },
		{ name: '4-Likely', value: 4 },
		{ name: '5-Almost Certain', value: 5 }
	];

	filter(val: string): Observable<any> {
		return this.url.getAllWHSManager().pipe(
			map((response: any) => {
				response.data = response.data.filter((option) => {
					return (
						option.name.toLowerCase().indexOf(val.toLowerCase()) ===
						0
					);
				});
				return response.data;
			})
		);
	}

	filter3(val: string): Observable<any> {
		return this.employee.getAllEmployeeInfo().pipe(
			map((response: any) => {
				response.data = response.data.filter((option) => {
					return (
						option.name.toLowerCase().indexOf(val.toLowerCase()) ===
						0
					);
				});

				return response.data;
			})
		);
	}

	// Action By
	filter4(val: string): Observable<any> {
		return this.employee.getAllEmployeeInfo().pipe(
			map((response: any) => {
				response.data = response.data.filter((option) => {
					return (
						option.name.toLowerCase().indexOf(val.toLowerCase()) ===
						0
					);
				});

				return response.data;
			})
		);
	}

	filterEvent(val: string): Observable<any> {
		return this.url.getAllManager().pipe(
			map((response: any) => {
				response.data = response.data.filter((manager) => {
					return (
						manager.name
							.toLowerCase()
							.indexOf(val.toLowerCase()) === 0
					);
				});
				return response.data;
			})
		);
	}

	change(event) {
		this.hazardReport
			.get('whsManagerEmail')
			.setValue(event.option.value.email || '');
	}
	changeName() {}

	jobNoSel() {
		this.allJobNumbers.forEach((item) => {
			if (this.hazardReport.get('jobNumberId').value === item._id) {
				this.hazardReport.patchValue({
					jobNumberId: this.hazardReport.get('jobNumberId').value,
					projectName: item.projectName,
					siteName: item.siteName,
					customerName: item.customerName,
					streetAddress: item.streetAddress,
					projectManager: item.projectManager,
					customerContact: item.customerContact,
					personCompletingForm: item.personCompletingForm,
					customerContactPhone: item.customerContactPhone,
					customerEmail: item.customerEmail
				});
			}
		});
		this.hazardReport.get('jobNumberId').updateValueAndValidity();
	}
	getAllJobNumber() {
		this.url.getAllJobNumber().subscribe((res: any) => {
			this.allJobNumbers = res.data;
		});
	}

	getHazardNo() {
		if (
			this.hazardReport.get('consequence').value &&
			this.hazardReport.get('likelihood').value
		) {
			const addition =
				parseInt(this.hazardReport.get('consequence').value) +
				parseInt(this.hazardReport.get('likelihood').value);

			this.hazardData.forEach((item) => {
				if (addition === item.title) {
					this.hazardReport.patchValue({
						riskRating: item.riskRating,
						actionRequired: item.actionRequired
					});
				}
			});
		}
	}
	getAllHazardTreatmentRelation() {
		this.url.getAllHazardTreatmentRelation().subscribe((res: any) => {
			this.hazardData = res.data;
		});
	}
	RiskRating: Array<any> = [
		{ name: 'Low', value: 'low' },
		{ name: 'Medium', value: 'medium' },
		{ name: 'High', value: 'high' }
	];
	ActionRequired: Array<any> = [
		{ name: 'Immediately', value: 'immediately' },
		{ name: 'Today', value: 'today' },
		{ name: 'This week', value: 'thisWeek' },
		{ name: 'This Month', value: 'thisMonth' }
	];
	onFormSubmit() {
		this.hazardReport.get('fileUpload')?.setValue(this.selectedImage);

		this.singRequired = this.hazardReport.controls.signaturePad1.invalid;

		const {
			fullName,
			name,
			elliminateAction,
			substituteAction,
			isolatedAction,
			solutionAction,
			procedureRemoveAction,
			PPEAction,
			...rest
		} = this.hazardReport.value;
		const data = {
			...rest,
			fullName:
				fullName.fullName == '' ? '' : fullName.fullName || fullName,
			name: name.fullName == '' ? '' : name.fullName || name,
			elliminateAction:
				elliminateAction.fullName == ''
					? ''
					: elliminateAction.fullName || elliminateAction,
			substituteAction:
				substituteAction.fullName == ''
					? ''
					: substituteAction.fullName || substituteAction,
			isolatedAction:
				isolatedAction.fullName == ''
					? ''
					: isolatedAction.fullName || isolatedAction,
			solutionAction:
				solutionAction.fullName == ''
					? ''
					: solutionAction.fullName || solutionAction,
			procedureRemoveAction:
				procedureRemoveAction.fullName == ''
					? ''
					: procedureRemoveAction.fullName || procedureRemoveAction,
			PPEAction:
				PPEAction.fullName == '' ? '' : PPEAction.fullName || PPEAction,
			enable: this.enable,
			frequency: this.frequency
		};
		if (this.id != 'form') {
			this.url.updateHazardFormData(this.id, data).subscribe(
				(res) => {
					this.router.navigate(['/admin/forms']);
					this.hazardReport.reset();

					Swal.fire({
						title: 'Update successfully',
						showConfirmButton: false,
						timer: 1200
					});
					this.router.navigate(['/admin/forms/hazardTable']);
				},
				(err) => {
					console.error(err);
				}
			);
		} else {
			this.url.addHazardFormData(data).subscribe(
				(res) => {
					this.hazardReport.reset();

					Swal.fire({
						title: 'Submit successfully',
						showConfirmButton: false,
						timer: 1200
					});
					if (this.doesQueryMobilExists) return;
					this.router.navigate(['/admin/forms/fillConfigForm/' + 0]);
				},
				(err) => console.error(err)
			);
		}
	}
	browser(event) {
		const files = event.target.files[0];
		const formdata = new FormData();
		formdata.append('', files);

		this.upload.upload(formdata).subscribe((res) => {
			this.selectedImage = res.files[0];
		});
	}
	employeeData(e: MatAutocompleteSelectedEvent) {
		const data: UserValue = e.option.value as UserValue;

		this.hazardReport.patchValue({
			department: this.department.find((x) => x._id == data.department),
			email: data.email,
			position: this.roleValue.find((x) => x._id == data.position),
			phone: data.phone
		});
	}

	employeeData1(e: MatAutocompleteSelectedEvent) {
		const data = e.option.value;
		this.hazardReport.patchValue({
			// name: data.name,
			compileDepartment: this.department.find(
				(x) => x._id == data.department
			),
			compilePosition: this.roleValue.find((x) => x._id == data.position)
			// elliminateAction:data.name
		});
	}

	setSupervisorEmail(e) {
		const val = this.empData.find((item) => {
			console.log(
				typeof e.target.value,
				typeof item._id,
				e.target.value === item._id
			);
			return e.target.value === item._id;
		});
		this.hazardReport.controls.managerSupervisorEmail.setValue(val.email);
	}

	public findInvalidControls(): Array<any> {
		const invalid = [];
		const controls = this.hazardReport.controls;
		for (const name in controls) {
			if (controls[name].invalid) {
				invalid.push({ name, error: controls[name].errors });
			}
		}
		return invalid;
	}
}

export interface Actionedby {
	elliminateAction: Observable<any>;
	substituteAction: Observable<any>;
	isolatedAction: Observable<any>;
	solutionAction: Observable<any>;
	procedureRemoveAction: Observable<any>;
	PPEAction: Observable<any>;
}
