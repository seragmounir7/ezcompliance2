import {
	debounceTime,
	delay,
	map,
	startWith,
	takeUntil,
	tap
} from 'rxjs/operators';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import {
	Component,
	ElementRef,
	OnInit,
	AfterViewInit,
	HostListener,
	OnDestroy,
	ViewChildren,
	QueryList,
	LOCALE_ID,
	Renderer2,
	ChangeDetectorRef
} from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	FormArray,
	Validators,
	AbstractControl
} from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { ViewChild } from '@angular/core';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AddItemComponent } from './add-item/add-item.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { forkJoin, Observable, of, Subject } from 'rxjs';
import { SavedformsService } from 'src/app/utils/services/savedforms.service';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { EmployeeRegistrationService } from 'src/app/utils/services/employee-registration.service';
import { MatCheckbox } from '@angular/material/checkbox';
import { MobileViewService } from 'src/app/utils/services/mobile-view.service';
import { UserValue } from 'src/app/utils/types/UserResponceTypes';
import { ModifiedJobNumber } from 'src/app/utils/types/JobNumberResponceTypes';

import { UntilDestroy } from '@ngneat/until-destroy';
import { StopSpinner } from 'src/app/stop-spinner-after-view-init';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-risk-assessment-swms',
	templateUrl: './risk-assessment-swms.component.html',
	styleUrls: ['./risk-assessment-swms.component.scss']
})
@StopSpinner()
export class RiskAssessmentSWMSComponent
	implements OnInit, AfterViewInit, OnDestroy {
	@ViewChildren(MatCheckbox) jobTaskMatCheckBox: QueryList<MatCheckbox>;
	@ViewChildren('parent') parent: QueryList<ElementRef>;
	@ViewChild('projectManager') projectManager: ElementRef;
	@ViewChild('Signature1') signaturePad1: SignaturePad;
	@ViewChildren('Signature2') signaturePad2: QueryList<SignaturePad>;
	@ViewChildren('check') checkBox: QueryList<ElementRef<HTMLInputElement>>;
	@ViewChild('timepicker') timepicker: ElementRef;
	sub: any;
	isPrint: Observable<any>;
	isHistory: any;
	returnTo: Observable<string>;

	valueChangesArr: Observable<any>[];
	filteredOptions1: Observable<any>;
	tradeCategoryArr: any[];
	allChecked: Observable<any>;
	count: number = 0;
	public Editor = ClassicEditor;
	riskAssessmentFb!: FormGroup;
	SWMSTab!: FormArray;
	RiskAssessment = true;
	SWMSShow = false;
	chemicalTask = false;
	jobTask = [];
	staff = [];
	resiRiskLevel = [];
	riskLevel = [];
	highRiskConstruction = [];
	PPEselection = [];
	licenseAndQualification = [];
	checkArray = [];
	allJobNumbers: ModifiedJobNumber[] = [];
	allHazards = [];
	allContrlActReq = [];
	id: any;
	isSelected = [];
	isHazardous = [];
	hasJuridiction = false;
	hasLegist = false;
	hasRegulation = false;
	minDate = new Date();
	maxDate = new Date();
	cardImageBase64: any;
	type: any;
	public signaturePadOptions1: Object = {
		minWidth: 1,
		canvasWidth: 450,
		canvasHeight: 100
	};
	public signaturePadOptions2: Object = {
		minWidth: 1,
		canvasWidth: 430,
		canvasHeight: 100
	};
	highRiskConstruction2 = [
		{
			label:
				'Working in or near trenches or shafts deeper than 1.5metres',
			value: ''
		},
		{ label: 'Work in or near a confined space', value: '' },
		{
			label:
				'Work in an area that may have a contaminated or flammable atmosphere',
			value: ''
		},
		{ label: 'Working around or near mobile plant', value: '' },
		{ label: 'Work with near or near asbestos', value: '' },
		{ label: 'Working with hazardous substances', value: '' },
		{ label: 'Working with or near tilt-up/precast concrete', value: '' },
		{ label: 'Risk of falls higher than 2 metres', value: '' },
		{
			label: 'Working near on or adjacent to a road or rail corridor',
			value: ''
		},
		{ label: 'Working on or near telecommunication tower', value: '' },
		{ label: 'Working on or near telecommunication tower', value: '' },
		{ label: 'Work near explosives', value: '' },
		{
			label:
				'Work in or near water or other liquid that involves a risk of drowning',
			value: ''
		},
		{ label: 'Demolition of load-bearing structure', value: '' },
		{ label: 'Diving work', value: '' }
	];

	PPEselection2 = [
		{ label: 'Disposable dust mask', value: '' },
		{ label: 'Dust Mas', value: '' },
		{ label: 'Face shield', value: '' },
		{ label: 'Full face respirator', value: '' },
		{ label: 'Gttors', value: '' },
		{ label: 'Half face respirator', value: '' },
		{ label: 'Hard Hat', value: '' },
		{ label: 'Hearing protection', value: '' },
		{ label: 'High-Vis Clothing', value: '' },
		{ label: 'Lock Out Tags', value: '' },
		{ label: 'Long sleeve/Long pants', value: '' },
		{ label: 'Out of Service Tags', value: '' },
		{ label: 'Protective gloves', value: '' },
		{ label: 'Rescue kit', value: '' },
		{ label: 'Safety boots', value: '' },
		{ label: 'Safety glasses', value: '' },
		{ label: 'Sun Screen', value: '' },
		{ label: 'torch', value: '' },
		{ label: 'Wide Brim Hat', value: '' }
	];
	secondEditor = `
  <h1 class='form-control' >
  <strong>Worker consultation, instruction, training, toolbox talks, review,
  acceptance record:</strong>
  </h1>
  <br /><br />

  <h3 class='txt_1'>
    Only persons who have completed the singoff are authorised to work
    on the relevent tasks covered by this document. <br />
    Note: Work must be performed in accordance with this SWMS, any Risk
    Assessment prepared in relation to this work and any <br />
    relevent Safe WorkProcedures.<br />
    This SWMS must be accessible for inspection untill the energised
    electrical work to which this SWMS relates is completed. If the
    <br />
    SWMS is revised, all version should be kept.<br />
    If a Notifiable incident occurs in relation to the high-risk
    construction work in this SWMS, the SWMS must be kept for at least 2
    years<br />
    from the date of the Notifiable incident.<br /><br />
    If Changes are made to the work practice and the content of the SWMS
    workers will need sign to confirm that they haverecieved an<br />
    updated briefing, undestand the content and will comply with the
    requirements.<br /><br />
    Where there are other parties working adjascent to the contractor
    and the work activity that could impact upon the safety and
    welfare<br />
    of others not directly employed, SWMS will make references to how
    they will coordinate the work activity and where applicable<br />
    communicate to the other parties.<br /><br />
  </h3>`;
	riskArr = [];
	COPArr = [];
	ppeArr = [];
	taskArr = [];
	licenceArr = [];
	jobTaskData = [];
	jobTaskSelected = [];
	hazard = [];
	projectMang = [];
	allChemicals = [];
	allCOPSelected = [];
	singRequired: any;
	signRequired1 = [];

	regulatorData: any = [];
	safety: any = [];
	JurisdictionData: any = [];
	states: any = [];
	check: any;
	selectedFile1 = [];
	dateGet: Date;
	setTime: any;
	enable: boolean;
	frequency: string;
	empData: UserValue[];
	@HostListener('window:afterprint', [])
	function(): void {
		this.renderer.removeClass(document.querySelector('app-main'), 'hidden');
		this.shared.printNext(false);
		if (this.router.url.includes('/admin/savedForms')) {
			void this.router.navigateByUrl('/admin/savedForms');
			return;
		}
		void this.router.navigateByUrl('/admin/forms/riskAssessTable');
	}
	constructor(
		public router: Router,
		private dialog: MatDialog,
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		private activatedRoute: ActivatedRoute,
		private setTitle: SetTitleService,
		public upload: UploadFileServiceService,
		public forms: SavedformsService,
		private shared: RoleManagementSharedServiceService,
		private employee: EmployeeRegistrationService,
		private renderer: Renderer2,
		public mobileViewService: MobileViewService,
		private change: ChangeDetectorRef
	) {
		this.id = this.activatedRoute.snapshot.params.id;

		this.riskAssessmentFb = this.fb.group({
			SWMSTab: this.fb.array([]),
			jobNumber: ['', Validators.required],
			siteName: ['', Validators.required],
			customerName: ['', Validators.required],
			streetAddr: ['', Validators.required],
			suburb: ['', Validators.required],
			postcode: ['', Validators.required],
			custConct: ['', Validators.required],
			custConctPh: ['', Validators.required],
			custEmail: ['', Validators.required],
			employee1: ['', Validators.required],
			dateTime: [new Date(), Validators.required],
			statesSWMS: ['', Validators.required],
			projectManager: ['', Validators.required],
			date: [new Date()],
			projectManagerSWMS: ['', Validators.required],
			jurisdiction: ['', Validators.required],
			safetyLeg: ['', Validators.required],
			regulator: ['', Validators.required],
			location: [''],
			qty: [],
			hazardous: this.fb.array([]),
			ppeSelection: this.fb.array([]),
			file: this.fb.array([]),
			SDSRegister: this.fb.array([]),
			riskLevel: this.fb.array([]),
			residualRisk: this.fb.array([]),
			persResp: this.fb.array([]),
			jobTask: this.fb.array([]),
			riskConstruction: this.fb.array([]),
			riskConstruction2: this.fb.array([]),
			PPEselection: this.fb.array([]),
			PPESelection2: this.fb.array([]),
			licence: this.fb.array([]),
			employeeList: this.fb.array([]),
			editor: [''],
			signature1: ['']
		});
		this.riskAssessmentFb.controls.editor.setValue(this.secondEditor);
	}
	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}
	get siteControls() {
		return this.riskAssessmentFb.controls;
	}
	async disableForm() {
		if (this.isHistory) {
			this.riskAssessmentFb.disable();
			const check = async () => {
				this.signaturePad1 != null;
			};
			const check2 = async () => {
				this.signaturePad2 != null;
			};
			await check();
			this.signaturePad1.off();
			await check2();
		}
	}

	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe(({ enable, frequency }) => {
			this.enable = Boolean(enable);
			this.frequency = frequency as string;
		});
		this.getEmployeeData();
		this.isHistory = this.router.url.includes('/riskAssessTable/history');
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
		this.setTitle.setTitle('WHS-Risk Assesment Form');
		const dataMap = map((res: any) => res.data);
		const nameMap = map((res: any) => {
			res.data;
		});
		const allApiObs$ = [
			this.logicalFormInfo.getAllJobtask().pipe(dataMap),
			this.logicalFormInfo.getAllPPE().pipe(dataMap),
			this.logicalFormInfo.getAllRisk().pipe(dataMap),
			this.logicalFormInfo.getAllLicence().pipe(dataMap),
			this.logicalFormInfo.getAllProjectMang().pipe(dataMap),
			this.logicalFormInfo.getAllJobNumber().pipe(dataMap),
			this.logicalFormInfo.getAllResidual().pipe(dataMap),
			this.logicalFormInfo.getAllStaff().pipe(dataMap),
			this.logicalFormInfo.getAllRiskLevel().pipe(dataMap),
			this.logicalFormInfo.getAllChemical().pipe(dataMap),
			this.logicalFormInfo.getAllHazards().pipe(dataMap),
			this.logicalFormInfo.getAllContrlActReq().pipe(dataMap),
			this.logicalFormInfo.getAllRegulator().pipe(dataMap),
			this.logicalFormInfo.getAllSafety().pipe(dataMap),
			this.logicalFormInfo.getAllStates().pipe(dataMap),
			this.logicalFormInfo.getAllJurisdiction().pipe(dataMap),
			this.logicalFormInfo.getRiskInstruction().pipe(dataMap)
		];

		const allApis = forkJoin(allApiObs$);

		this.addActionSDSRegister();
		if (this.id != 'form') {
			this.getAssessmentByid(this.id);
		} else {
			allApis.subscribe((res: any[]) => {
				this.getAllJobTask(res[0]);
				this.getAllPPE(res[1]);
				this.getAllHighRisk(res[2]);
				this.getAllLicence(res[3]);
				this.getAllProjectMang(res[4]);
				this.getAllJobNumber(res[5]);
				this.getAllResidualRiskLevel(res[6]);
				this.getAllStaff(res[7]);
				this.getAllRiskLevel(res[8]);
				this.getAllChemical(res[9]);
				this.getAllHazard(res[10]);
				this.getAllContrActReq(res[11]);
				this.getAllRegulator(res[12]);
				this.getAllSafe(res[13]);
				this.getAllState(res[14]);
				this.getAllJurisdiction(res[15]);
				this.riskAssessmentFb.controls.editor.setValue(
					res[16][0].instruction
				);
				const time = new Date();
				this.dateGet = time;
				this.setTime = time.toTimeString().slice(0, 5);
				this.addEmployee();
			});
		}

		this.riskAssessmentFb
			.get('statesSWMS')
			.valueChanges.subscribe((res) => {
				if (res) {
					for (let i = 0; i < this.states.length; i++) {
						if (res === this.states[i]._id) {
							this.riskAssessmentFb
								.get('jurisdiction')
								.setValue(this.states[i].jurisdictionId._id);
							this.riskAssessmentFb
								.get('safetyLeg')
								.setValue(
									this.states[i].safetyLegislationId._id
								);
							this.riskAssessmentFb
								.get('regulator')
								.setValue(this.states[i].regulatorId._id);
							break;
						}
					}
				}
			});
	}
	getAssessmentByid(id) {
		this.logicalFormInfo.getAssessmentbyId(id).subscribe((res: any) => {
			this.allCOPSelected = [];

			this.tradeCategoryArr = res.data.tradeCategoryArr;
			this.jobTaskData = res.data.jobTaskDataArr;
			this.PPEselection = res.data.PPEselectionArr;
			this.highRiskConstruction = res.data.highRiskConstructionArr;
			this.licenseAndQualification = res.data.licenseAndQualificationArr;
			this.projectMang = res.data.projectMangArr;
			this.allJobNumbers = res.data.allJobNumbersArr;
			this.resiRiskLevel = res.data.resiRiskLevelArr;
			this.staff = res.data.staffArr;
			this.riskLevel = res.data.riskLevelArr;
			this.allChemicals = res.data.allChemicalsArr;
			this.allHazards = res.data.allHazardsArr;
			this.allContrlActReq = res.data.allContrlActReqArr;
			this.regulatorData = res.data.regulatorDataArr;
			this.safety = res.data.safetyArr;
			this.states = res.data.statesArr;
			this.JurisdictionData = res.data.JurisdictionDataArr;
			this.maxDate = res.data.date;
			this.minDate = res.data.date;

			for (let i = 0; i < this.jobTaskData.length; i++) {
				// this.taskArr[i] = 0;
				this.jobtask().push(this.jobtaskk(i));
				this.disableForm();
			}

			for (let i = 0; i < this.PPEselection.length; i++) {
				this.ppeArr[i] = 0;
				this.ppe().push(this.ppeSelect(i));
				this.ppe2().push(this.ppeSelect(i));
				this.disableForm();
			}

			for (let i = 0; i < this.highRiskConstruction.length; i++) {
				this.riskArr[i] = 0;
				this.riskConstruct().push(this.riskCons(i));
				this.riskConstruct2().push(this.riskCons(i));
			}

			for (let i = 0; i < this.licenseAndQualification.length; i++) {
				this.licenceArr[i] = 0;
				this.Licence().push(this.license(i));
				this.disableForm();
			}
			const check = async () => {
				this.signaturePad1 != null;
			};
			check().then(() => {
				this.signaturePad1.fromDataURL(res.data.signature1);
			});

			const dateTime = new Date(res.data.dateTime);

			const time = dateTime.toTimeString();
			this.setTime = time.slice(0, 5);
			const date = res.data.dateTime;
			this.dateGet = new Date(date);

			for (let i = 0; i < res.data.employeeList.length; i++) {
				this.addEmployee();
				this.disableForm();
			}

			this.signaturePad2.changes.subscribe(
				(item: QueryList<SignaturePad>) => {
					res.data.employeeList.forEach((element, i) => {
						item.toArray()[i].fromDataURL(element.signature2);
					});
				}
			);

			if (res?.data.jurisdiction != '') {
				this.hasJuridiction = true;
			}
			if (res?.data.safetyLeg != '') {
				this.hasLegist = true;
			}
			if (res?.data.regulator != '') {
				this.hasRegulation = true;
			}
			res.data.employee1.fullName = `${res.data.employee1.firstName} ${res.data.employee1.lastName}`;
			res.data.employeeList = res.data.employeeList.map((item) => {
				item.employeeId.fullName = `${item.employeeId.firstName} ${item.employeeId.lastName}`;
				return item;
			});
			this.riskAssessmentFb.patchValue({
				...res.data
			});
			const item = <FormArray>this.riskAssessmentFb.controls.SDSRegister;
			while (item.length > 0) {
				item.removeAt(0);
			}
			res?.data?.SDSRegister.forEach((element, index) => {
				this.chemicalTask = true;

				if (element?.chemicalName != '') {
					this.isSelected[index] = true;
				}
				if (element?.hazardous != '') {
					this.isHazardous[index] = true;
				}
				this.PushActionSDSRegister(element);
				if (element.file) {
					this.selectedFile1.push({
						fileName: element.file.substring(
							element.file.indexOf('-') + 1
						),
						fileUrl: element.file
					});
				}
			});
			res.data.riskLevel.forEach((element) => {
				this.PushActionRiskLevel(element);
			});
			res.data.residualRisk.forEach((element) => {
				this.PushActionResiRiskLevel(element);
			});
			res.data.riskLevel.forEach((element) => {
				this.PushActionPersonRes(element);
			});
			res.data.codeOfPract.forEach((element) => {
				this.allCOPSelected.push(element);
			});
			res.data.identifyHazards.forEach((element, index) => {
				this.checkHazards(element, index);
			});
			res.data.jobTask.forEach((element, index) => {
				this.checkJobtask(element, index);
			});
			res.data.PPEselection.forEach((element, index) => {
				this.checkPPE(element, index);
			});
			res.data.PPESelection2.forEach((element, index) => {
				this.checkPPE(element, index);
			});
			res.data.riskConstruction.forEach((element, index) => {
				this.checkRisk(element, index);
			});
			res.data.licence.forEach((element, index) => {
				this.checkLicense(element, index);
			});
		});
	}
	checkHazards(data, i): void {
		for (let j = 0; j < this.jobTaskData.length; j++) {
			if (this.jobTaskData[j]._id == data._id) {
				this.jobTaskData[j].allHazardsTitle = [];
				this.jobTaskData[j].allContrlActReqTitle = [];
				this.jobTaskData[j].allHazardsTitle = data.allHazardsTitle;
				this.jobTaskData[j].allContrlActReqTitle =
					data.allContrlActReqTitle;
			}
		}
	}
	checkJobtask(element, index) {
		const z = this.jobTaskData[index]._id;
		const c = this.riskAssessmentFb.controls.jobTask as FormArray;
		const d = c.controls[index] as FormGroup;
		if (element[z]) {
			d.controls[z].setValue(element[z]);
			this.jobTaskSelected.push(this.jobTaskData[index]);
		}
	}
	checkRisk(element, index) {
		const z = this.highRiskConstruction[index]._id;
		const c = this.riskAssessmentFb.controls.riskConstruction as FormArray;
		const d = c.controls[index] as FormGroup;
		if (element[z]) {
			d.controls[z].setValue(element[z]);
		}
	}
	checkPPE(element, index) {
		const z = this.PPEselection[index]._id;
		const c = this.riskAssessmentFb.controls.PPEselection as FormArray;
		const d = c.controls[index] as FormGroup;
		if (element[z]) {
			d.controls[z].setValue(element[z]);
		}
	}
	checkLicense(element, index) {
		const z = this.licenseAndQualification[index]._id;
		const c = this.riskAssessmentFb.controls.licence as FormArray;
		const d = c.controls[index] as FormGroup;
		if (element[z]) {
			d.controls[z].setValue(element[z]);
		}
	}
	jobNoSel() {
		this.allJobNumbers.forEach((item) => {
			if (this.riskAssessmentFb.get('jobNumber').value === item._id) {
				this.riskAssessmentFb.patchValue({
					siteName: item.siteName,
					customerName: item.customerName,
					streetAddr: item.streetAddress,
					suburb: item.suburb,
					postcode: item.postcode,
					statesSWMS: item.stateId._id,
					custConct: item.customerContact,
					custConctPh: item.contacts[0].phone,
					custEmail: item.contacts[0].email,
					jobNumber: this.riskAssessmentFb.get('jobNumber').value
				});
			}
		});
		this.riskAssessmentFb.get('jobNumber').updateValueAndValidity();
	}

	addActionRiskLevel() {
		{
			this.riskLevelFA().push(this.riskLevelFG());
		}
	}
	PushActionRiskLevel(data) {
		{
			this.riskLevelFA().push(this.GetriskLevelFG(data));
		}
	}
	addActionResiRiskLevel() {
		{
			this.residlRiskLevelFA().push(this.residlRiskLevelFG());
		}
	}
	PushActionResiRiskLevel(data) {
		{
			this.residlRiskLevelFA().push(this.GetresidlRiskLevelFG(data));
		}
	}
	addActionPersonRes() {
		{
			this.personResFA().push(this.personResFG());
		}
	}
	PushActionPersonRes(data) {
		{
			this.personResFA().push(this.GetpersonResFG(data));
		}
	}
	addActionSDSRegister() {
		{
			this.sdsRegisterFA().push(this.sdsRegisterFG());
		}
	}
	PushActionSDSRegister(data) {
		{
			this.sdsRegisterFA().push(this.GetsdsRegisterFG(data));
			this.disableForm();
		}
	}
	addEmployee() {
		{
			this.employeeArr().push(this.employeeField());
			this.valueChangesArr = new Array<Observable<any>>();
			for (let index = 0; index < this.employeeArr().length; index++) {
				const element = this.employeeArr().at(index) as FormGroup;
				this.valueChangesArr.push(
					(element.controls.employeeId
						.valueChanges as Observable<any>).pipe(
						startWith({ firstName: '' }),
						tap((value) =>
							typeof value === 'object'
								? ''
								: typeof value === 'string'
								? (element.controls
										.employeeId as AbstractControl).setErrors(
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
	private _filter(name: string): any[] {
		const filterValue = name.toLowerCase();
		return this.empData.filter((option) =>
			option.fullName.toLowerCase().includes(filterValue)
		);
	}
	displayFn(user: any): string {
		return user && user.fullName ? user.fullName : '';
	}

	jobtask(): FormArray {
		return this.riskAssessmentFb.get('jobTask') as FormArray;
	}
	COP(): FormArray {
		return this.riskAssessmentFb.get('CodeOfPract') as FormArray;
	}
	riskConstruct(): FormArray {
		return this.riskAssessmentFb.get('riskConstruction') as FormArray;
	}
	riskConstruct2(): FormArray {
		return this.riskAssessmentFb.get('riskConstruction2') as FormArray;
	}
	ppe(): FormArray {
		return this.riskAssessmentFb.get('PPEselection') as FormArray;
	}
	ppe2(): FormArray {
		return this.riskAssessmentFb.get('PPESelection2') as FormArray;
	}
	Licence(): FormArray {
		return this.riskAssessmentFb.get('licence') as FormArray;
	}
	riskLevelFA(): FormArray {
		return this.riskAssessmentFb.get('riskLevel') as FormArray;
	}
	residlRiskLevelFA(): FormArray {
		return this.riskAssessmentFb.get('residualRisk') as FormArray;
	}
	sdsRegisterFA(): FormArray {
		return this.riskAssessmentFb.get('SDSRegister') as FormArray;
	}
	personResFA(): FormArray {
		return this.riskAssessmentFb.get('persResp') as FormArray;
	}
	employeeArr(): FormArray {
		return this.riskAssessmentFb.get('employeeList') as FormArray;
	}
	riskLevelFG(): FormGroup {
		return this.fb.group({
			riskLevel: ['']
		});
	}
	GetriskLevelFG(data): FormGroup {
		return this.fb.group({
			riskLevel: data.riskLevel
		});
	}
	residlRiskLevelFG(): FormGroup {
		return this.fb.group({
			resiRiskLevel: ['']
		});
	}
	GetresidlRiskLevelFG(data): FormGroup {
		return this.fb.group({
			resiRiskLevel: data.resiRiskLevel
		});
	}
	personResFG(): FormGroup {
		return this.fb.group({
			personRes: ['']
		});
	}
	GetpersonResFG(data): FormGroup {
		return this.fb.group({
			personRes: ['']
		});
	}
	jobtaskk(index): FormGroup {
		return this.fb.group({
			[this.jobTaskData[index]._id]: ['']
		});
	}
	codeOfPrac(index): FormGroup {
		return this.fb.group({
			cop: ['']
		});
	}
	riskCons(index): FormGroup {
		return this.fb.group({
			[this.highRiskConstruction[index]._id]: ['']
		});
	}
	ppeSelect(index): FormGroup {
		return this.fb.group({
			[this.PPEselection[index]._id]: ['']
		});
	}
	license(index): FormGroup {
		return this.fb.group({
			[this.licenseAndQualification[index]._id]: ['']
		});
	}
	sdsRegisterFG(): FormGroup {
		return this.fb.group({
			chemicalName: [''],
			location: [''],
			hazardous: [''],
			quantity: [''],
			expDate: [''],
			file: ['']
		});
	}
	GetsdsRegisterFG(data): FormGroup {
		return this.fb.group({
			chemicalName: data.chemicalName,
			location: data.location,
			hazardous: data.hazardous,
			quantity: data.quantity,
			expDate: data.expDate,
			file: data.file
		});
	}
	employeeField(): FormGroup {
		return this.fb.group({
			employeeId: ['', Validators.required],
			signature2: ['', Validators.required]
		});
	}
	removeemployeeField(i) {
		const item = <FormArray>this.riskAssessmentFb.controls.employeeList;
		if (item.length > 1) {
			item.removeAt(i);
			this.signRequired1.splice(i, 1);
		}
	}
	removeSDSRegister(i) {
		const item = <FormArray>this.riskAssessmentFb.controls.SDSRegister;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	showsite() {
		this.RiskAssessment = true;
		this.SWMSShow = false;
	}
	showAction() {
		this.SWMSShow = true;
		this.RiskAssessment = false;
	}

	ngAfterViewInit() {
		this.count++;

		this.signaturePad2.changes.subscribe(
			(item: QueryList<SignaturePad>) => {}
		);

		this.sub = this.shared.printObs$.subscribe((res) => {
			this.check = res;

			if (this.check) {
				setTimeout(function () {
					window.print();
				}, 3000);
				localStorage.setItem('key', ' ');
			}
		});

		this.allChecked = this.parent.changes.pipe(
			map((res: QueryList<ElementRef<HTMLElement>>) => {
				const arr = [];
				res.toArray().forEach((x) => {
					const check = x.nativeElement.querySelectorAll(
						'input[type=checkbox]'
					);
					const allChecked = Array.from(check).reduce(
						(previousValue, currentValue) => {
							return previousValue == currentValue['checked'];
						},
						Array.from(check)[0]['checked']
					);

					arr.push(allChecked);
				});
				return of(arr);
			})
		);

		this.mobileViewService.observeXsmall().subscribe((result) => {
			if (result.matches) {
				this.renderer.addClass(
					document.querySelector('.btn.btn-outline-primary'),
					'hide'
				);
				this.reSizeSignArray(this.signaturePad2, 233, 114);
				const sign = this.signaturePad1.toDataURL();
				this.signaturePad1.set('canvasWidth', 247);
				this.signaturePad1.set('canvasHeight', 107);
				this.signaturePad1.fromDataURL(sign);
			} else {
				this.renderer.removeClass(
					document.querySelector('.btn.btn-outline-primary'),
					'hide'
				);
				this.reSizeSignArray(this.signaturePad2, 420, 121);
				const sign = this.signaturePad1.toDataURL();
				this.signaturePad1.set('canvasWidth', 338);
				this.signaturePad1.set('canvasHeight', 107);
				this.signaturePad1.fromDataURL(sign);
			}
		});
		this.jobTaskMatCheckBox.changes.subscribe(
			(res: QueryList<MatCheckbox>) => {
				const matCheckArr = res.toArray();
				matCheckArr.forEach((matCheck) => {
					const checkTrue = Array.from(
						matCheck._elementRef.nativeElement.parentNode.parentElement.querySelectorAll(
							'input[type=checkbox]'
						)
					)
						.map((x) => x['checked'])
						.slice(1) as boolean[];

					matCheck.indeterminate = !checkTrue.every(
						(x) => x === true
					);
					if (checkTrue.every((x) => x === true)) {
						matCheck.checked = true;
					}
					if (!checkTrue.every((x) => x === true)) {
						matCheck.indeterminate = true;
					}
					if (!checkTrue.every((x) => x === true)) {
						matCheck.indeterminate = false;
						matCheck.checked = false;
					}
					this.change.detectChanges();
				});
				res;
			}
		);
	}

	reSizeSignArray(
		signArr: QueryList<SignaturePad>,
		canvasWidth: number,
		canvasHeight: number
	) {
		signArr.toArray().forEach((x) => {
			const sign = x.toDataURL();
			x.set('canvasWidth', canvasWidth);
			x.set('canvasHeight', canvasHeight);
			x.fromDataURL(sign);
		});
	}

	drawComplete1() {
		this.riskAssessmentFb.controls.signature1.setValue(
			this.signaturePad1.toDataURL()
		);
		this.singRequired = this.riskAssessmentFb.controls.signature1.invalid;
	}
	clear1() {
		this.signaturePad1.clear();
		this.riskAssessmentFb.controls.signature1.setValue('');
		this.singRequired = this.riskAssessmentFb.controls.signature1.untouched;
	}
	drawStart1() {}
	drawComplete2(i) {
		this.employeeArr()
			.at(i)
			.get('signature2')
			.setValue(this.signaturePad2.toArray()[i].toDataURL());
		this.signRequired1[i] = this.employeeArr()
			.at(i)
			.get('signature2').invalid;
	}
	clear2(i) {
		this.signaturePad2.toArray()[i].clear();
		this.employeeArr().at(i).get('signature2').setValue('');
		this.signRequired1[i] = this.employeeArr()
			.at(i)
			.get('signature2').untouched;
	}
	drawStart2() {}

	getAllJobTask(data = []) {
		if (data) {
			this.logicalFormInfo.getAllLicenceCat().subscribe((res) => {
				this.tradeCategoryArr = res.data;
			});
			this.jobTaskData = data; /* .sort(function (a, b) {
				const titleA = a.tradeCategoryId.title.toUpperCase(); // ignore upper and lowercase
				const titleB = b.tradeCategoryId.title.toUpperCase(); // ignore upper and lowercase
				if (titleA < titleB) {
					return -1;
				}
				if (titleA > titleB) {
					return 1;
				}
				return 0;
			}); */

			for (let i = 0; i < this.jobTaskData.length; i++) {
				this.jobtask().push(this.jobtaskk(i));
			}
			return;
		}
		this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
			this.jobTaskData = res.data;

			for (let i = 0; i < this.jobTaskData.length; i++) {
				this.jobtask().push(this.jobtaskk(i));
			}
		});
	}

	getAllPPE(data = []) {
		if (data) {
			this.PPEselection = data;
			for (let i = 0; i < this.PPEselection.length; i++) {
				this.ppeArr[i] = 0;
				this.ppe().push(this.ppeSelect(i));
				this.ppe2().push(this.ppeSelect(i));
			}
			return;
		}
		this.logicalFormInfo.getAllPPE().subscribe((res: any) => {
			this.PPEselection = res.data;
			for (let i = 0; i < this.PPEselection.length; i++) {
				this.ppeArr[i] = 0;
				this.ppe().push(this.ppeSelect(i));
				this.ppe2().push(this.ppeSelect(i));
			}
		});
	}
	getAllProjectMang(data = []) {
		if (data) {
			this.projectMang = data;
			return;
		}
		this.logicalFormInfo.getAllProjectMang().subscribe((res: any) => {
			this.projectMang = res.data;
		});
	}
	getAllHighRisk(data = []) {
		if (data) {
			this.highRiskConstruction = data;
			for (let i = 0; i < this.highRiskConstruction.length; i++) {
				this.riskArr[i] = 0;
				this.riskConstruct().push(this.riskCons(i));
				this.riskConstruct2().push(this.riskCons(i));
			}
			return;
		}
		this.logicalFormInfo.getAllRisk().subscribe((res: any) => {
			this.highRiskConstruction = res.data;
			for (let i = 0; i < this.highRiskConstruction.length; i++) {
				this.riskArr[i] = 0;
				this.riskConstruct().push(this.riskCons(i));
				this.riskConstruct2().push(this.riskCons(i));
			}
		});
	}
	getHighRiskById() {
		const mode = 'Risk';
		this.logicalFormInfo.getFormDataById(mode).subscribe((res) => {
			this.highRiskConstruction = res.data[0].subComponents;
			for (let i = 0; i < this.highRiskConstruction.length; i++) {
				this.riskArr[i] = 0;
			}
		});
	}
	getAllLicence(data = []) {
		if (data) {
			this.licenseAndQualification = data;
			for (let i = 0; i < this.licenseAndQualification.length; i++) {
				this.licenceArr[i] = 0;
				this.Licence().push(this.license(i));
			}
			return;
		}
		this.logicalFormInfo.getAllLicence().subscribe((res) => {
			this.licenseAndQualification = res.data;
			for (let i = 0; i < this.licenseAndQualification.length; i++) {
				this.licenceArr[i] = 0;
				this.Licence().push(this.license(i));
			}
		});
	}
	getAllHazard(data = []) {
		if (data) {
			this.allHazards = data;
			return;
		}
		this.logicalFormInfo.getAllHazards().subscribe((res: any) => {
			this.allHazards = res.data;
		});
	}
	getAllContrActReq(data = []) {
		if (data) {
			this.allContrlActReq = data;
			return;
		}
		this.logicalFormInfo.getAllContrlActReq().subscribe((res: any) => {
			this.allContrlActReq = res.data;
		});
	}

	deleteHazrds(type, title, i, j) {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete "${title}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				if (type === 'identifyHazards') {
					this.jobTaskSelected[i].allHazardsTitle.splice(j, 1);
				}
				if (type === 'ctrlActreq') {
					this.jobTaskSelected[i].allContrlActReqTitle.splice(j, 1);
				}
			}
		});
	}
	onLicenseChange(e, license, i) {
		const c = this.riskAssessmentFb.controls.licence as FormArray;
		const d = c.controls[i] as FormGroup;
		if (e.target.checked) {
			d.controls[license].setValue('Open Cable Licence');
		} else {
			d.controls[license].reset();
		}
	}
	onRiskChange(e, risk, i) {
		const c = this.riskAssessmentFb.controls.riskConstruction as FormArray;
		const d = c.controls[i] as FormGroup;
		if (e.target.checked) {
			d.controls[risk].setValue(
				'Working in or near trenches or shafts deeper than 1.5metres'
			);
		} else {
			d.controls[risk].reset();
		}
	}
	onPPEChange(e, ppe, i) {
		const c = this.riskAssessmentFb.controls.PPEselection as FormArray;
		const d = c.controls[i] as FormGroup;
		if (e.target.checked) {
			d.controls[ppe].setValue('Disposable dust mask');
		} else {
			d.controls[ppe].reset();
		}
	}
	onRiskChange2(e, risk, i) {
		const c = this.riskAssessmentFb.controls.riskConstruction2 as FormArray;
		const d = c.controls[i] as FormGroup;
		if (e.target.checked) {
			d.controls[risk].setValue(
				'Working in or near trenches or shafts deeper than 1.5metres'
			);
		} else {
			d.controls[risk].reset();
		}
	}
	onPPEChange2(e, ppe, i) {
		const c = this.riskAssessmentFb.controls.PPESelection2 as FormArray;
		const d = c.controls[i] as FormGroup;
		if (e.target.checked) {
			d.controls[ppe].setValue('Disposable dust mask');
		} else {
			d.controls[ppe].reset();
		}
	}
	onJobtaskSelect(e, jobTaskRecd) {
		const item = e.target.value;
		if (e.target.checked) {
			this.checkArray.push(item);

			this.jobTaskSelected.push(jobTaskRecd);
		} else {
			this.checkArray.forEach((item, j) => {
				if (item == e.target.value) {
					this.checkArray.splice(j, 1);
					this.jobTaskSelected.splice(j, 1);
					return;
				}
			});
		}

		for (let k = 0; k < this.riskArr.length; k++) {
			this.riskArr[k] = 0;
			const c = this.riskAssessmentFb.controls
				.riskConstruction as FormArray;
			const c1 = this.riskAssessmentFb.controls
				.riskConstruction2 as FormArray;
			const d = c.controls[k] as FormGroup;
			const d1 = c1.controls[k] as FormGroup;
			d.controls[this.highRiskConstruction[k]._id].reset();
			d1.controls[this.highRiskConstruction[k]._id].reset();
		}
		for (let k = 0; k < this.ppeArr.length; k++) {
			this.ppeArr[k] = 0;
			const c = this.riskAssessmentFb.controls.PPEselection as FormArray;
			const d = c.controls[k] as FormGroup;
			d.controls[this.PPEselection[k]._id].reset();
			const c1 = this.riskAssessmentFb.controls
				.PPESelection2 as FormArray;
			const d1 = c1.controls[k] as FormGroup;
			d1.controls[this.PPEselection[k]._id].reset();
		}
		for (let k = 0; k < this.licenceArr.length; k++) {
			this.licenceArr[k] = 0;
			const c = this.riskAssessmentFb.controls.licence as FormArray;
			const d = c.controls[k] as FormGroup;
			d.controls[this.licenseAndQualification[k]._id].reset();
		}
		this.chemicalTask = false;

		this.jobTaskSelected.forEach((element) => {
			if (element.chemical == 'YES') {
				this.chemicalTask = true;
			}

			element.risk.forEach((item) => {
				this.highRiskConstruction.forEach((highRisk, index) => {
					if (highRisk._id === item) {
						this.riskArr[index] = 1;
						const c = this.riskAssessmentFb.controls
							.riskConstruction as FormArray;
						const d = c.controls[index] as FormGroup;
						d.controls[
							this.highRiskConstruction[index]._id
						].setValue(
							'Working in or near trenches or shafts deeper than 1.5metres'
						);
						const c1 = this.riskAssessmentFb.controls
							.riskConstruction2 as FormArray;
						const d1 = c1.controls[index] as FormGroup;
						d1.controls[
							this.highRiskConstruction[index]._id
						].setValue(
							'Working in or near trenches or shafts deeper than 1.5metres'
						);
					}
				});
			});
			element.PPE.forEach((item) => {
				this.PPEselection.forEach((ppeItem, index) => {
					if (ppeItem._id === item) {
						this.ppeArr[index] = 1;
						const c = this.riskAssessmentFb.controls
							.PPEselection as FormArray;
						const d = c.controls[index] as FormGroup;
						d.controls[this.PPEselection[index]._id].setValue(
							'Disposable dust mask'
						);
						const c1 = this.riskAssessmentFb.controls
							.PPESelection2 as FormArray;
						const d1 = c1.controls[index] as FormGroup;
						d1.controls[this.PPEselection[index]._id].setValue(
							'Disposable dust mask'
						);
					}
				});
			});
			element.licence.forEach((ele) => {
				this.licenseAndQualification.forEach((item, index) => {
					if (item._id === ele) {
						this.licenceArr[index] = 1;
						const c = this.riskAssessmentFb.controls
							.licence as FormArray;
						const d = c.controls[index] as FormGroup;
						d.controls[
							this.licenseAndQualification[index]._id
						].setValue('Open Cable Licence');
					}
				});
			});
		});
		while (this.riskLevelFA().length) {
			this.riskLevelFA().removeAt(0);
		}
		while (this.residlRiskLevelFA().length) {
			this.residlRiskLevelFA().removeAt(0);
		}
		while (this.personResFA().length) {
			this.personResFA().removeAt(0);
		}
		this.allCOPSelected = [];
		this.jobTaskSelected.forEach((data, i) => {
			this.addActionRiskLevel();
			this.addActionResiRiskLevel();
			this.addActionPersonRes();
			this.personResFA()
				.controls[i].get('personRes')
				.setValue(data?.staff);
			this.riskLevelFA()
				.controls[i].get('riskLevel')
				.setValue(data.riskLevel);
			this.residlRiskLevelFA()
				.controls[i].get('resiRiskLevel')
				.setValue(data.residualRisk);

			data.allCOPTitle.forEach((element, index) => {
				this.allCOPSelected.push(element);
			});

			const myMap = new Map();
			this.allCOPSelected.forEach((item) => {
				if (myMap.has(item)) {
					myMap.set(item, myMap.get(item) + 1);
				} else {
					myMap.set(item, 1);
				}
			});
			this.allCOPSelected = Array.from(
				new Set(this.allCOPSelected.map((x) => JSON.stringify(x)))
			).map((y) => JSON.parse(y));
		});
	}
	getAllJobNumber(data = []) {
		if (data) {
			this.allJobNumbers = data;
		}
		this.logicalFormInfo.getAllJobNumber().subscribe((res) => {
			this.allJobNumbers = res.data as ModifiedJobNumber[];
		});
	}
	getAllStaff(data = []) {
		if (data) {
			this.staff = data;
			return;
		}
		this.logicalFormInfo.getAllStaff().subscribe((res: any) => {
			this.staff = res.data;
		});
	}
	getAllResidualRiskLevel(data = []) {
		if (data) {
			this.resiRiskLevel = data;
		}
		this.logicalFormInfo.getAllResidual().subscribe((res: any) => {
			this.resiRiskLevel = res.data;
		});
	}
	getAllRiskLevel(data = []) {
		if (data) {
			this.riskLevel = data;
			return;
		}
		this.logicalFormInfo.getAllRiskLevel().subscribe((res: any) => {
			this.riskLevel = res.data;
		});
	}
	getAllChemical(data = []) {
		if (data) {
			this.allChemicals = data;
			return;
		}
		this.logicalFormInfo.getAllChemical().subscribe((res: any) => {
			this.allChemicals = res.data;
		});
	}
	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(
			this.jobTaskSelected,
			event.previousIndex,
			event.currentIndex
		);
		while (this.riskLevelFA().length) {
			this.riskLevelFA().removeAt(0);
		}
		while (this.residlRiskLevelFA().length) {
			this.residlRiskLevelFA().removeAt(0);
		}
		while (this.personResFA().length) {
			this.personResFA().removeAt(0);
		}
		this.allCOPSelected = [];
		this.jobTaskSelected.forEach((data, i) => {
			this.addActionRiskLevel();
			this.addActionResiRiskLevel();
			this.addActionPersonRes();
			this.personResFA()
				.controls[i].get('personRes')
				.setValue(data?.staffId?._id);
			this.riskLevelFA()
				.controls[i].get('riskLevel')
				.setValue(data.riskLevel);
			this.residlRiskLevelFA()
				.controls[i].get('resiRiskLevel')
				.setValue(data.residualRisk);

			data.allCOPTitle.forEach((element) => {
				this.allCOPSelected.push(element);
			});
		});
	}
	addItem(type, i) {
		const dialogRef = this.dialog.open(AddItemComponent, {
			width: '550px',
			height: '60%',
			data: {
				type,
				title: ''
			}
		});

		dialogRef.afterClosed().subscribe((result) => {
			const data = {
				title: result,
				id: ''
			};
			if (type === 'identifyHazards' && result != 'false') {
				this.jobTaskSelected[i].allHazardsTitle.push(data);
			}
			if (type === 'ctrlActreq' && result != 'false') {
				this.jobTaskSelected[i].allContrlActReqTitle.push(data);
			}
		});
	}
	editHazrds(type, title, i) {
		const dialogRef = this.dialog.open(AddItemComponent, {
			width: '550px',
			data: {
				type,
				title
			}
		});

		dialogRef.afterClosed().subscribe((result) => {
			const data = {
				title: result,
				id: ''
			};
			if (type === 'editIdentifyHazards' && result != 'false') {
				this.jobTaskSelected[i].allHazardsTitle[i] = data;
			}
			if (type === 'editCtrlActreq' && result != 'false') {
				this.jobTaskSelected[i].allContrlActReqTitle[i] = data;
			}
		});
	}
	addChemical() {
		const dialogRef = this.dialog.open(AddItemComponent, {
			width: '550px',
			data: {
				type: 'chemical',
				title: ''
			}
		});

		dialogRef.afterClosed().subscribe((result) => {
			if (result != 'false' && result) {
				const data = {
					title: result
				};
				this.logicalFormInfo.addChemical(data).subscribe((res: any) => {
					this.getAllChemical();
				});
			}
		});
	}
	getAllRegulator(data = []) {
		if (data) {
			this.regulatorData = data;
			return;
		}
		this.logicalFormInfo.getAllRegulator().subscribe((res: any) => {
			this.regulatorData = res.data;
		});
	}

	getAllSafe(data = []) {
		if (data) {
			this.safety = data;
			return;
		}
		this.logicalFormInfo.getAllSafety().subscribe((res: any) => {
			this.safety = res.data;
		});
	}
	getAllJurisdiction(data = []) {
		if (data) {
			this.JurisdictionData = data;
			return;
		}
		this.logicalFormInfo.getAllJurisdiction().subscribe((res: any) => {
			this.JurisdictionData = res.data;
		});
	}
	getAllState(data = []) {
		if (data) {
			this.states = data;
			return;
		}
		this.logicalFormInfo.getAllStates().subscribe((res: any) => {
			this.states = res.data;
		});
	}

	setProjectManager(value, e) {
		if (value === 'projectManagerSWMS') {
			this.riskAssessmentFb
				.get('projectManager')
				.setValue(e.target.value);
		}
		if (value === 'projectManager') {
			this.riskAssessmentFb
				.get('projectManagerSWMS')
				.setValue(e.target.value);
		}
	}
	fileChangeEvent(fileInput: any, i) {
		const files = fileInput.target.files[0];
		const formdata = new FormData();
		formdata.append('', files);

		this.upload.upload(formdata).subscribe((res) => {
			this.sdsRegisterFA().controls[i].get('file').setValue(res.files[0]);
		});
	}
	onSubmit() {
		let { employee1, employeeList, ...rest } = this.riskAssessmentFb.value;

		employeeList = employeeList.map((res) => {
			return {
				employeeId: res.employeeId._id,
				signature2: res.signature2
			};
		});
		const data = {
			...rest,
			tradeCategoryArr: this.tradeCategoryArr,
			codeOfPract: this.allCOPSelected,
			identifyHazards: this.jobTaskSelected,
			jobTaskDataArr: this.jobTaskData,
			PPEselectionArr: this.PPEselection,
			highRiskConstructionArr: this.highRiskConstruction,
			licenseAndQualificationArr: this.licenseAndQualification,
			projectMangArr: this.projectMang,
			allJobNumbersArr: this.allJobNumbers,
			resiRiskLevelArr: this.resiRiskLevel,
			staffArr: this.staff,
			riskLevelArr: this.riskLevel,
			allChemicalsArr: this.allChemicals,
			allHazardsArr: this.allHazards,
			allContrlActReqArr: this.allContrlActReq,
			regulatorDataArr: this.regulatorData,
			safetyArr: this.safety,
			statesArr: this.states,
			JurisdictionDataArr: this.JurisdictionData,
			employee1: employee1._id,
			employeeList,
			enable: this.enable,
			frequency: this.frequency
		};

		if (this.id !== 'form') {
			this.logicalFormInfo
				.updateAssessment(this.id, data)
				.subscribe((res) => {
					Swal.fire({
						title: 'Update successfully',
						showConfirmButton: false,
						timer: 1200
					});
					this.riskAssessmentFb.reset();
					this.allCOPSelected = [];
					this.jobTaskSelected = [];
					this.signaturePad1.clear();
					this.router.navigate(['/admin/forms/riskAssessTable']);
				});
		} else {
			this.logicalFormInfo.addAssessment(data).subscribe((res) => {
				Swal.fire({
					title: 'Submit successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.riskAssessmentFb.reset();
				this.allCOPSelected = [];
				this.jobTaskSelected = [];
				this.signaturePad1.clear();
				this.router.navigate(['/admin/forms/fillConfigForm/' + 0]);
			});
		}
	}
	getDate(event) {
		this.dateGet = event.value;
	}
	getTime(event, timePicker) {
		const time = event;

		let timeArr = [];
		timeArr = time.split(':');
		this.dateGet.setHours(timeArr[0]);
		this.dateGet.setMinutes(timeArr[1]);

		const a = new Date(this.dateGet).toUTCString();

		const b = new Date(a).toISOString();

		this.riskAssessmentFb.get('dateTime').setValue(b);
	}
	getEmployeeData() {
		this.employee.getAllEmployeeInfo().subscribe((empData) => {
			this.empData = empData;
			this.filteredOptions1 = this.riskAssessmentFb.controls.employee1.valueChanges.pipe(
				startWith({ fullName: '' }),
				tap((value) =>
					typeof value === 'object'
						? ''
						: typeof value === 'string'
						? this.riskAssessmentFb.controls.employee1.setErrors({
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
		});
	}

	doesCategoryExists(category_id: string) {
		return this.jobTaskData.find(
			(x) => x.tradeCategoryId._id == category_id
		);
	}

	jobTaskCategoryChecked(
		parent: HTMLElement,
		matCheck: MatCheckbox,
		i: number
	): void {
		const checkBoxes = Array.from(
			parent.querySelectorAll('input[type=checkbox]')
		).slice(1);
		this.tradeCategoryArr[i].checked = matCheck.checked;
		if (matCheck.checked) {
			checkBoxes.forEach((checkBox) => {
				if (checkBox['checked']) {
					checkBox['click']();
				}
			});
		}
		checkBoxes.forEach((checkBox) => {
			setTimeout(() => {
				checkBox['click']();
			}, 50);
		});
	}

	public findInvalidControls(): Array<any> {
		const invalid = [];
		const controls = this.riskAssessmentFb.controls;
		for (const name in controls) {
			if (controls[name].invalid) {
				invalid.push(name);
			}
		}
		return invalid;
	}
}
