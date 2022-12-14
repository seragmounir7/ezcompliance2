import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { EmployeeRegistrationService } from 'src/app/utils/services/employee-registration.service';
import {
	AfterViewInit,
	Component,
	HostListener,
	NgZone,
	OnDestroy,
	OnInit
} from '@angular/core';
import { ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
	FormGroup,
	FormBuilder,
	Validators,
	FormArray,
	FormControl,
	AbstractControl
} from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import Swal from 'sweetalert2';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { map, startWith, take, tap } from 'rxjs/operators';
import moment from 'moment';
import { SavedformsService } from 'src/app/utils/services/savedforms.service';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { Observable, Subscription } from 'rxjs';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MobileViewService } from 'src/app/utils/services/mobile-view.service';
import { RoleManagementService } from 'src/app/utils/services/role-management.service';
import { UserValue } from 'src/app/utils/types/UserResponceTypes';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ModifiedJobNumber } from 'src/app/utils/types/JobNumberResponceTypes';
import { RoleValue } from 'src/app/utils/types/AccessResponceTypes';
import { AuthService } from 'src/app/utils/services/auth.service';
import { Designation } from 'src/app/utils/types/Designation.enum';
import { DepartmentService } from 'src/app/utils/services/department.service';
import { Department } from 'src/app/utils/types/DepartmentTypes';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-incident-report',
	templateUrl: './incident-report.component.html',
	styleUrls: ['./incident-report.component.scss']
})
export class IncidentReportComponent
	implements OnInit, AfterViewInit, OnDestroy {
	public Editor = ClassicEditor;
	IncidentReport: FormGroup;
	fileData: any;
	data: any;
	staff: UserValue[];
	fileArr = [];
	imgArr = [];
	fileObj = [];
	PPEselection = [];
	ppeArr = [];
	changesArr = [];
	natureOfIncArr = [];
	incidentsArr = [];
	rootArr = [];
	allJobNumbers: ModifiedJobNumber[] = [];
	@ViewChild('signature') signaturePad: SignaturePad;
	@ViewChild('signature1') signaturePad1: SignaturePad;
	maxDate = new Date();
	minDate = new Date();
	@ViewChild('autosize') autosize: CdkTextareaAutosize;
	sub: Subscription;
	isPrint: Observable<any>;
	editorDisable = false;
	filteredOptions1: Observable<any>;
	empData: UserValue[];
	filteredOptions2: Observable<any>;
	uploadFile: string;
	isHistory: boolean;
	returnTo: Observable<string>;
	personCompletingForm$: Observable<any>;
	injuredorAffectedPersonName$: Observable<any>;
	department$: Observable<any>;
	roleData: RoleValue[] = [];
	completedDepartment$: Observable<any[]>;
	reviewedDepartment$: Observable<any[]>;
	isImg: boolean = false;
	enable: boolean;
	frequency: string;
	position$: Observable<any[]>;
	completedPosition$: Observable<any[]>;
	reviewedPosition$: Observable<any[]>;
	department: Department[];
	displayFnDepartmentName: (user: any) => string;
	@HostListener('window:afterprint', [])
	function() {
		this.shared.printNext(false);
		if (this.router.url.includes('/admin/savedForms')) {
			this.router.navigateByUrl('/admin/savedForms');
			return;
		}
		this.router.navigateByUrl('/admin/forms/incidentsTable');
	}
	projMan: any;
	projectMang: any;
	typeOfInc: [];
	root: any;
	PPE = [];
	changes = [];
	rootCauseIncident = [];
	natureOFIncidents = [];
	incidents = [];
	ppeSelectedArr = [];
	changesSelectedArr = [];
	natureOfIncSelectedArr = [];
	typeOfIncidentsSelectedArr = [];
	rootSelectedArr = [];
	id: string;
	dataUrl: any;
	selectedImage: string;
	singRequired: any;
	singRequired1: any;
	image: any[] = ['tif', 'tiff', 'jpg', 'jpeg', 'gif', 'png', 'svg'];

	type: any;
	check: any;
	constructor(
		private employee: EmployeeRegistrationService,
		private fb: FormBuilder,
		private dynamicFormsService: DynamicFormsService,
		private logicalFormInfo: LogicalFormInfoService,
		private activatedRoute: ActivatedRoute,
		private setTitle: SetTitleService,
		public upload: UploadFileServiceService,
		private router: Router,
		private ngZone: NgZone,
		public forms: SavedformsService,
		private shared: RoleManagementSharedServiceService,
		public mobileViewService: MobileViewService,
		public role: RoleManagementService,
		public authService: AuthService,
		private departmentService: DepartmentService
	) {
		this.id = this.activatedRoute.snapshot.params.id;
		if (this.id !== 'Form') {
			this.editorDisable = true;
		}
		this.check = localStorage.getItem('key');
		this.IncidentReport = this.fb.group({
			incidents: this.fb.array([]),
			natureOFIncidents: this.fb.array([]),
			PPE: this.fb.array([]),
			rootCauseIncident: this.fb.array([]),
			changes: this.fb.array([]),
			corrAction: this.fb.array([]),
			jobNumber: ['', Validators.required],
			// projectName: ['', Validators.required],
			siteName: ['', Validators.required],
			customerName: ['', Validators.required],
			streetAddress: ['', Validators.required],
			customerContact: ['', Validators.required],
			projectManager: ['', Validators.required],
			personCompletingForm: ['', Validators.required],
			customerContactPhone: ['', Validators.required],
			customerEmail: ['', Validators.required],
			dateOfFormCompletion: [new Date(), Validators.required],
			name: ['', Validators.required],
			department: ['', Validators.required],
			position: ['', Validators.required],
			locationOfTheIncident: ['', Validators.required],
			dateOfTheIncident: [new Date(), Validators.required],
			timeOfTheIncident: ['', Validators.required],
			whyDidtheUnsafeConditonExist: [''],
			completedName: ['', Validators.required],
			completedPosition: ['', Validators.required],
			completedDepartment: ['', Validators.required],
			completedDate: [new Date(), Validators.required],
			reviewedName: ['', Validators.required],
			reviewedPosition: ['', Validators.required],
			reviewedDepartment: ['', Validators.required],
			reviewedDate: [new Date(), Validators.required],
			priorIncident: [''],
			similarIncident: [''],
			witnessStatement: ['', Validators.required],
			nameOfWitness: ['', Validators.required],
			file: [''],
			similarIncidentText: [''],
			priorIncidentText: [''],
			signaturePad: ['', Validators.required],
			signaturePad1: ['', Validators.required],
			changesMadeOther: [false],
			changesMadeOtherText: [''],
			instructions: new FormControl({
				value: '',
				disabled: this.editorDisable
			})
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

	async disableForm() {
		if (this.isHistory) {
			this.IncidentReport.disable();
			const check = async () => {
				this.signaturePad != null;
			};
			const check2 = async () => {
				this.signaturePad1 != null;
			};
			await check();
			this.signaturePad.off();
			await check2();
			this.signaturePad1.off();
		}
	}
	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe(({ enable, frequency }) => {
			this.enable = Boolean(enable);
			this.frequency = frequency as string;
		});
		this.isHistory = this.router.url.includes('/incidentsTable/history');
		if (this.isHistory) {
			this.disableForm();
			this.returnTo = this.activatedRoute.queryParamMap.pipe(
				map((param) => param.get('returnTo'))
			);
			this.returnTo.subscribe();
		}
		this.departmentService.getAllDepartment().subscribe((res) => {
			this.department = res.data;
			this.displayFnDepartmentName = this.departmentService.displayFnDepartmentName;
			this.department$ = this.departmentService.getDepartmentNameAutocomplete(
				this.IncidentReport,
				'department',
				this.department
			);
			this.completedDepartment$ = this.departmentService.getDepartmentNameAutocomplete(
				this.IncidentReport,
				'completedDepartment',
				this.department
			);
			this.reviewedDepartment$ = this.departmentService.getDepartmentNameAutocomplete(
				this.IncidentReport,
				'reviewedDepartment',
				this.department
			);
		});
		this.role.getAllRole().subscribe((res) => {
			this.roleData = res.data;
			this.completedPosition$ = this.role.getRoleAutocomplete(
				this.IncidentReport,
				'completedPosition',
				this.roleData
			);
			this.reviewedPosition$ = this.role.getRoleAutocomplete(
				this.IncidentReport,
				'reviewedPosition',
				this.roleData
			);

			this.position$ = this.role.getRoleAutocomplete(
				this.IncidentReport,
				'position',
				this.roleData
			);
		});
		this.employee.getAllEmployeeInfo().subscribe((empData) => {
			this.empData = empData;
			empData.forEach((item) => {
				if (this.authService.loginData.designation === Designation.user)
					if (this.authService.loginData.id === item._id) {
						this.IncidentReport.controls.personCompletingForm.patchValue(
							item
						);
					}
			});
			const filteredOptions = () => {
				return (
					startWith(''),
					map((value: any) =>
						typeof value === 'string' ? value : value?.fullName
					),
					map((fullName: string) =>
						fullName ? this._filter(fullName) : this.empData.slice()
					)
				);
			};
			this.injuredorAffectedPersonName$ = this.IncidentReport.controls.name.valueChanges.pipe(
				startWith(''),
				map((value) =>
					typeof value === 'string' ? value : value?.fullName
				),
				map((fullName) =>
					fullName ? this._filter(fullName) : this.empData.slice()
				)
			);
			this.personCompletingForm$ = this.employee.getEmpAutoComplete(
				this.IncidentReport,
				'personCompletingForm',
				this.empData
			);
			/* this.personCompletingForm$ = this.IncidentReport.controls.personCompletingForm.valueChanges.pipe(
				startWith(''),
				map((value) =>
					typeof value === 'string' ? value : value?.fullName
				),
				map((fullName) =>
					fullName ? this._filter(fullName) : this.empData.slice()
				)
			); */
			this.filteredOptions1 = this.IncidentReport.controls.completedName.valueChanges.pipe(
				startWith(''),
				map((value) =>
					typeof value === 'string' ? value : value?.fullName
				),
				map((fullName) =>
					fullName ? this._filter(fullName) : this.empData.slice()
				)
			);
			this.filteredOptions2 = this.IncidentReport.controls.reviewedName.valueChanges.pipe(
				startWith(''),
				map((value) =>
					typeof value === 'string' ? value : value?.fullName
				),
				map((fullName) =>
					fullName ? this._filter(fullName) : this.empData.slice()
				)
			);
		});
		this.isPrint = this.shared.printObs$ as Observable<any>;
		this.activatedRoute.queryParams.subscribe((params) => {
			this.type = params.formType;
		});

		this.dynamicFormsService.homebarTitle.next('Incident Report Form');
		this.setTitle.setTitle('WHS-Accident Report Form');

		if (this.id !== 'Form') {
			this.getIncidentsByid(this.id);
		} else {
			this.addAction();
			this.getAllChanges();
			this.getAllPPE();
			this.getAllTypeOfInc();
			this.getAllRoot();
			this.getAllNatureOfInc();
			this.getAllJobNumber();
			this.getAllProjectMang();
			this.getAllStaff();
			this.getInstruction();
		}
	}
	private _filter(name: string): any[] {
		const filterValue = name.toLowerCase();
		return this.empData.filter((option) =>
			option.fullName.toLowerCase().includes(filterValue)
		);
	}
	private _filterRole(name: string): any[] {
		const filterValue = name.toLowerCase();
		return this.roleData.filter((option) =>
			option.role.toLowerCase().includes(filterValue)
		);
	}
	displayFn(user: any): string {
		return user && user.fullName ? user.fullName : '';
	}
	displayFnRole(user: any): string {
		return user && user.role ? user.role : '';
	}
	showImg() {
		let ext = this.selectedImage ? this.selectedImage.split('.') : [];

		this.isImg =
			ext.length != 0 ? this.image.includes(ext[ext.length - 1]) : false;
	}
	employeeData(e: MatAutocompleteSelectedEvent, controlName: string) {
		const data = e.option.value;
		if (controlName == 'completedName') {
			this.IncidentReport.patchValue({
				completedDepartment: this.department.find(
					(x) => x._id == data.department
				),
				completedPosition: this.roleData.find(
					(x) => x._id == data.position
				)
			});
		}
		if (controlName == 'reviewedName') {
			this.IncidentReport.patchValue({
				reviewedDepartment: this.department.find(
					(x) => x._id == data.department
				),
				reviewedPosition: this.roleData.find(
					(x) => x._id == data.position
				)
			});
		}
		if (controlName == 'injuredorAffectedPersonName') {
			this.IncidentReport.patchValue({
				department: this.department.find(
					(x) => x._id == data.department
				),
				position: this.roleData.find((x) => x._id == data.position)
			});
		}
	}

	addAction() {
		{
			this.add().push(this.newAction());
			this.disableForm();
		}
	}

	add(): FormArray {
		return this.IncidentReport.get('corrAction') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			action: ['', Validators.required],
			personRes: ['', Validators.required],
			// complete: ["", Validators.required],
			date: [new Date(), Validators.required]
		});
	}
	removeIncident(i) {
		const item = <FormArray>this.IncidentReport.controls.corrAction;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	changeAdd(): FormArray {
		return this.IncidentReport.get('changes') as FormArray;
	}
	changeAction(index): FormGroup {
		return this.fb.group({
			[this.changes[index]._id]: ['']
		});
	}

	incidentsAdd(): FormArray {
		return this.IncidentReport.get('incidents') as FormArray;
	}
	incidentsAction(index): FormGroup {
		return this.fb.group({
			[this.incidents[index]._id]: ['']
		});
	}
	natureAdd(): FormArray {
		return this.IncidentReport.get('natureOFIncidents') as FormArray;
	}
	natureAction(index): FormGroup {
		return this.fb.group({
			[this.natureOFIncidents[index]._id]: ['']
		});
	}
	ppeAdd(): FormArray {
		return this.IncidentReport.get('PPE') as FormArray;
	}
	ppeAction(index): FormGroup {
		return this.fb.group({
			[this.PPE[index]._id]: ['']
		});
	}
	rootCauseIncidentAdd(): FormArray {
		return this.IncidentReport.get('rootCauseIncident') as FormArray;
	}
	rootCauseIncidentAction(index): FormGroup {
		return this.fb.group({
			[this.rootCauseIncident[index]._id]: ['']
		});
	}

	jobNoSel() {
		this.allJobNumbers.forEach((item) => {
			if (this.IncidentReport.get('jobNumber').value === item._id) {
				this.IncidentReport.patchValue({
					jobNumber: this.IncidentReport.get('jobNumber').value,
					// projectName: item.projectName,
					siteName: item.siteName,
					customerName: item.customerName,
					streetAddress: item.streetAddress,
					// projectManager: item.projectManager,
					customerContact: item.customerContact,
					// personCompletingForm: item.personCompletingForm,
					customerContactPhone: item.contacts[0].phone,
					customerEmail: item.contacts[0].email
				});
			}
		});
		this.IncidentReport.get('jobNumber').updateValueAndValidity();
	}
	getAllJobNumber() {
		this.logicalFormInfo.getAllJobNumber().subscribe((res) => {
			this.allJobNumbers = res.data as ModifiedJobNumber[];
		});
	}
	getAllProjectMang() {
		this.logicalFormInfo.getAllProjectMang().subscribe((res: any) => {
			this.projectMang = res.data;
		});
	}
	getAllPPE() {
		this.logicalFormInfo.getAllPPE().subscribe((res: any) => {
			this.PPE = res.data;
			for (let i = 0; i < this.PPE.length; i++) {
				this.ppeArr[i] = 0;
				this.ppeAdd().push(this.ppeAction(i));
			}
		});
	}
	getAllTypeOfInc() {
		this.logicalFormInfo.getAllTypeOfIncident().subscribe((res: any) => {
			this.incidents = res.data;
			for (let i = 0; i < this.incidents.length; i++) {
				this.incidentsArr[i] = 0;
				this.incidentsAdd().push(this.incidentsAction(i));
			}
		});
	}
	getAllRoot() {
		this.logicalFormInfo.getAllRootCause().subscribe((res: any) => {
			this.rootCauseIncident = res.data;
			for (let i = 0; i < this.rootCauseIncident.length; i++) {
				this.rootArr[i] = 0;
				this.rootCauseIncidentAdd().push(
					this.rootCauseIncidentAction(i)
				);
			}
		});
	}
	getAllNatureOfInc() {
		this.logicalFormInfo.getAllNatOfInc().subscribe((res: any) => {
			this.natureOFIncidents = res.data;
			for (let i = 0; i < this.natureOFIncidents.length; i++) {
				this.natureOfIncArr[i] = 0;
				this.natureAdd().push(this.natureAction(i));
			}
		});
	}
	getAllChanges() {
		this.logicalFormInfo.getAllChangesMade().subscribe((res: any) => {
			this.changes = res.data;
			this.changesArr = [];
			for (let i = 0; i < this.changes.length; i++) {
				this.changesArr[i] = 0;
				this.changeAdd().push(this.changeAction(i));
			}
		});
	}

	selectFile(event: any) {
		this.fileData = event.target.files[0];

		if (
			this.fileData.type == 'image/jpeg' ||
			this.fileData.type == 'application/pdf'
		) {
		} else {
			alert('file type should be image of pdf');
			return;
		}
	}

	submit() {}

	public signaturePadOptions: Object = {
		// passed through to szimek/signature_pad constructor
		minWidth: 1,
		canvasWidth: 500,
		canvasHeight: 100
	};
	public signaturePadOptions1: Object = {
		// passed through to szimek/signature_pad constructor
		minWidth: 1,
		canvasWidth: 500,
		canvasHeight: 100
	};

	ngAfterViewInit() {
		this.sub = this.shared.printObs$.subscribe((res) => {
			this.check = res;
			this.showImg();
			if (this.check) {
				setTimeout(() => {
					window.print();
				}, 3000);
				localStorage.setItem('key', ' ');
			}
		});
		this.sub.add(this.mobileViewService.removeButton());
		// this.signaturePad is now available
		this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
		this.signaturePad.set('dotSize', 1); // set szimek/signature_pad options at runtime
		this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
		this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API

		this.mobileViewService.observeXsmall().subscribe((result) => {
			if (result.matches) {
				// this.reSizeSignArray(this.signaturePad2, 233, 114);
				const sign = this.signaturePad.toDataURL();
				const sign1 = this.signaturePad1.toDataURL();
				this.signaturePad.set('canvasWidth', 247);
				this.signaturePad.set('canvasHeight', 106);
				this.signaturePad.fromDataURL(sign);
				this.signaturePad1.set('canvasWidth', 247);
				this.signaturePad1.set('canvasHeight', 106);
				this.signaturePad1.fromDataURL(sign1);
			} else {
				// this.reSizeSignArray(this.signaturePad2, 420, 121);
				const sign = this.signaturePad.toDataURL();
				const sign1 = this.signaturePad1.toDataURL();
				this.signaturePad.set('canvasWidth', 500);
				this.signaturePad.set('canvasHeight', 100);
				this.signaturePad.fromDataURL(sign);
				this.signaturePad1.set('canvasWidth', 500);
				this.signaturePad1.set('canvasHeight', 100);
				this.signaturePad1.fromDataURL(sign1);
			}
		});
	}

	drawComplete() {
		// will be notified of szimek/signature_pad's onEnd event

		this.IncidentReport.controls.signaturePad.setValue(
			this.signaturePad.toDataURL()
		);
		this.singRequired = this.IncidentReport.controls.signaturePad.invalid;
	}
	drawComplete1() {
		// will be notified of szimek/signature_pad's onEnd event

		this.IncidentReport.controls.signaturePad1.setValue(
			this.signaturePad1.toDataURL()
		);
		this.singRequired1 = this.IncidentReport.controls.signaturePad1.invalid;
	}
	clear() {
		this.signaturePad.clear();
		this.singRequired = this.IncidentReport.controls.signaturePad1.untouched;
	}
	clear1() {
		this.signaturePad1.clear();
		this.singRequired1 = this.IncidentReport.controls.signaturePad1.untouched;
	}
	drawStart() {
		// will be notified of szimek/signature_pad's onBegin event
	}
	drawStart1() {
		// will be notified of szimek/signature_pad's onBegin event
	}
	ppeSelected(e) {
		const item = e.target.value;
		if (e.target.checked) {
			this.ppeSelectedArr.push(item);
		} else {
			this.ppeSelectedArr.forEach((item, j) => {
				if (item == e.target.value) {
					this.ppeSelectedArr.splice(j, 1);
					return;
				}
			});
		}
	}
	changesSelected(e, i) {
		const item = e.target.value;
		if (e.target.checked) {
			this.changesSelectedArr.push(item);
		} else {
			this.changesSelectedArr.forEach((item, j) => {
				if (item == e.target.value) {
					this.changesSelectedArr.splice(j, 1);
					return;
				}
			});
		}
		if (!this.IncidentReport.get('changesMadeOther').value) {
			this.IncidentReport.get('changesMadeOtherText').setValue('');
		}
	}

	natureOfIncSelected(e) {
		const item = e.target.value;
		if (e.target.checked) {
			this.natureOfIncSelectedArr.push(item);
		} else {
			this.natureOfIncSelectedArr.forEach((item, j) => {
				if (item == e.target.value) {
					this.natureOfIncSelectedArr.splice(j, 1);
					return;
				}
			});
		}
	}

	typeOfIncidentsSelected(e) {
		const item = e.target.value;
		if (e.target.checked) {
			this.typeOfIncidentsSelectedArr.push(item);
		} else {
			this.typeOfIncidentsSelectedArr.forEach((item, j) => {
				if (item == e.target.value) {
					this.typeOfIncidentsSelectedArr.splice(j, 1);
					return;
				}
			});
		}
	}

	rootSelected(e) {
		const item = e.target.value;
		if (e.target.checked) {
			this.rootSelectedArr.push(item);
		} else {
			this.rootSelectedArr.forEach((item, j) => {
				if (item == e.target.value) {
					this.rootSelectedArr.splice(j, 1);
					return;
				}
			});
		}
	}
	getAllStaff() {
		this;
		this.employee.getAllEmployeeInfo().subscribe((res) => {
			this.staff = res;
		});
	}

	getIncidentsByid(id) {
		this.logicalFormInfo.getIncidentReportById(id).subscribe((res: any) => {
			this.changes = res.data.changesArr;
			this.natureOFIncidents = res.data.natureOFIncidentsArr;
			this.incidents = res.data.incidentsArr;
			this.PPE = res.data.ppeArr;
			this.rootCauseIncident = res.data.rootCauseIncidentArr;
			this.maxDate = res.data.dateOfFormCompletion;
			this.minDate = res.data.dateOfFormCompletion;
			this.selectedImage = res.data.file;
			this.allJobNumbers = res.data.allJobNumbersArr;
			this.projectMang = res.data.projectMangArr;
			this.staff = res.data.staffArr;

			this.uploadFile = this.selectedImage?.split('-')[1];
			for (let i = 0; i < this.changes.length; i++) {
				this.changesArr[i] = 0;
				this.changeAdd().push(this.changeAction(i));
				this.disableForm();
			}
			for (let i = 0; i < this.natureOFIncidents.length; i++) {
				this.natureOfIncArr[i] = 0;
				this.natureAdd().push(this.natureAction(i));
				this.disableForm();
			}
			for (let i = 0; i < this.rootCauseIncident.length; i++) {
				this.rootArr[i] = 0;
				this.rootCauseIncidentAdd().push(
					this.rootCauseIncidentAction(i)
				);
				this.disableForm();
			}
			for (let i = 0; i < this.incidents.length; i++) {
				this.incidentsArr[i] = 0;
				this.incidentsAdd().push(this.incidentsAction(i));
				this.disableForm();
			}
			for (let i = 0; i < this.PPE.length; i++) {
				this.ppeArr[i] = 0;
				this.ppeAdd().push(this.ppeAction(i));
				this.disableForm();
			}

			this.IncidentReport.patchValue({
				// projectName: res.data.projectName,
				siteName: res.data.siteName,
				customerName: res.data.customerName,
				streetAddress: res.data.streetAddress,
				customerContact: res.data.customerContact,
				projectManager: res.data.projectManager,
				personCompletingForm: this.staff.find(
					(x) => x._id === res.data.personCompletingForm
				),
				customerContactPhone: res.data.customerContactPhone,
				customerEmail: res.data.customerEmail,
				jobNumber: res.data.jobNumber,
				dateOfFormCompletion: res.data.dateOfFormCompletion,
				name: { fullName: res.data.name },
				department: { role: res.data.department },
				position: { role: res.data.position },
				locationOfTheIncident: res.data.locationOfTheIncident,
				dateOfTheIncident: res.data.dateOfTheIncident,
				timeOfTheIncident: res.data.timeOfTheIncident,
				nameOfWitness: res.data.nameOfWitness,
				witnessStatement: res.data.witnessStatement,
				//file:res.data.file,
				whyDidtheUnsafeConditonExist:
					res.data.whyDidtheUnsafeConditonExist,
				priorIncident: res.data.priorIncident,
				similarIncident: res.data.similarIncident,
				completedName: { fullName: res.data.completedName },
				completedPosition: { role: res.data.completedPosition },
				completedDepartment: { role: res.data.completedDepartment },
				completedDate: res.data.completedDate,
				reviewedName: { fullName: res.data.reviewedName },
				reviewedPosition: { role: res.data.reviewedPosition },
				reviewedDepartment: { role: res.data.reviewedDepartment },
				reviewedDate: res.data.reviewedDate,
				similarIncidentText: res.data.similarIncidentText,
				priorIncidentText: res.data.priorIncidentText,
				changesMadeOther: res.data.changesMadeOther,
				changesMadeOtherText: res.data.changesMadeOtherText,
				instructions: res.data.instructions
			});

			for (let index = 0; index < res.data.corrAction.length; index++) {
				let key;
				key = Object.keys(res.data.corrAction[index]);

				const changeIndex = this.changeAdd().length;
				this.addAction();
				// this.add().controls[index].get("complete").setValue(res.data.corrAction[index].complete)
				this.add()
					.controls[index].get('action')
					.setValue(res.data.corrAction[index].action);
				this.add()
					.controls[index].get('date')
					.setValue(res.data.corrAction[index].date);
				this.add()
					.controls[index].get('personRes')
					.setValue(res.data.corrAction[index].personRes);
			}
			for (let index = 0; index < res.data.changes.length; index++) {
				let key;
				key = Object.keys(res.data.changes[index]);

				const changeIndex = this.changeAdd().length;

				this.changeAdd()
					.controls[index].get(key)
					.setValue(res.data.changes[index][key]);
			}
			for (let index = 0; index < res.data.PPE.length; index++) {
				let key;
				key = Object.keys(res.data.PPE[index]);

				const changeIndex = this.changeAdd().length;

				this.ppeAdd()
					.controls[index].get(key)
					.setValue(res.data.PPE[index][key]);
			}
			for (let index = 0; index < res.data.incidents.length; index++) {
				let key;
				key = Object.keys(res.data.incidents[index]);

				const changeIndex = this.changeAdd().length;
				this.incidentsAdd()
					.controls[index].get(key)
					.setValue(res.data.incidents[index][key]);
			}

			for (
				let index = 0;
				index < res.data.natureOFIncidents.length;
				index++
			) {
				let key;
				key = Object.keys(res.data.natureOFIncidents[index]);

				const changeIndex = this.changeAdd().length;

				this.natureAdd()
					.controls[index].get(key)
					.setValue(res.data.natureOFIncidents[index][key]);
			}
			for (
				let index = 0;
				index < res.data.rootCauseIncident.length;
				index++
			) {
				let key;
				key = Object.keys(res.data.rootCauseIncident[index]);

				const changeIndex = this.changeAdd().length;

				this.rootCauseIncidentAdd()
					.controls[index].get(key)
					.setValue(res.data.rootCauseIncident[index][key]);
			}

			this.dataUrl = res.data.signaturePad1;
			const check = async () => {
				this.signaturePad1 != null;
			};
			check().then(() => {
				this.signaturePad1.fromDataURL(res.data.signaturePad1);
			});
			const check2 = async () => {
				this.signaturePad != null;
			};
			check2().then(() => {
				this.signaturePad.fromDataURL(res.data.signaturePad);
			});
			this.IncidentReport.patchValue({
				signaturePad: res.data.signaturePad,
				signaturePad1: res.data.signaturePad1
			});
		});
	}
	onSubmit() {
		this.IncidentReport.get('file')?.patchValue(this.selectedImage);
		let removeArr = [
			'completedPosition',
			'completedDepartment',
			'reviewedPosition',
			'reviewedDepartment',
			'name',
			'department',
			'position'
		];
		const completedName = this.IncidentReport.controls.completedName
			.value as UserValue;
		const reviewedName = this.IncidentReport.controls.reviewedName
			.value as UserValue;
		const {
			completedPosition,
			completedDepartment,
			reviewedPosition,
			reviewedDepartment,
			name,
			department,
			position
		} = this.IncidentReport.controls;
		removeArr.forEach((value) => this.IncidentReport.removeControl(value));
		this.IncidentReport.removeControl('completedName');
		this.IncidentReport.removeControl('reviewedName');
		const data = {
			...this.IncidentReport.value,
			changesArr: this.changes,
			natureOFIncidentsArr: this.natureOFIncidents,
			incidentsArr: this.incidents,
			ppeArr: this.PPE,
			rootCauseIncidentArr: this.rootCauseIncident,
			allJobNumbersArr: this.allJobNumbers,
			projectMangArr: this.projectMang,
			staffArr: this.staff,
			name: name.value.fullName,
			department: department.value.role,
			position: position.value.role,
			completedName: completedName.fullName || completedName,
			reviewedName: reviewedName.fullName || reviewedName,
			completedPosition: completedPosition.value.role,
			completedDepartment: completedDepartment.value.role,
			reviewedPosition: reviewedPosition.value.role,
			reviewedDepartment: reviewedDepartment.value.role,
			enable: this.enable,
			frequency: this.frequency
		};

		if (this.id !== 'Form') {
			this.logicalFormInfo.updateIncidentReport(this.id, data).subscribe(
				(res) => {
					Swal.fire({
						title: 'Update successfully',
						showConfirmButton: false,
						timer: 1200
					});
					this.router.navigate(['/admin/forms/incidentsTable']);
				},
				(err) => {
					console.error(err);
				}
			);
		} else {
			this.logicalFormInfo.addIncidentReport(data).subscribe(
				(res) => {
					Swal.fire({
						title: 'Submit successfully',
						showConfirmButton: false,
						timer: 1200
					});
					this.router.navigate(['/admin/forms/fillConfigForm/' + 0]);
				},
				(err) => {
					console.error(err);
				}
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
	getInstruction() {
		this.logicalFormInfo.getInstruction().subscribe((res: any) => {
			this.IncidentReport.patchValue({
				instructions: res.data[0].instruction
			});
		});
	}
}
