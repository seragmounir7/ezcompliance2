import {
	Component,
	OnInit,
	AfterViewInit,
	QueryList,
	ViewChildren,
	OnDestroy,
	HostListener
} from '@angular/core';
import {
	AbstractControl,
	FormArray,
	FormBuilder,
	FormGroup,
	Validators
} from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { ViewChild } from '@angular/core';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SavedformsService } from 'src/app/utils/services/savedforms.service';
import { filter, map, startWith, tap } from 'rxjs/operators';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRegistrationService } from 'src/app/utils/services/employee-registration.service';
import { MobileViewService } from 'src/app/utils/services/mobile-view.service';
import { UserValue } from 'src/app/utils/types/UserResponceTypes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-meeting-minutes',
	templateUrl: './meeting-minutes.component.html',
	styleUrls: ['./meeting-minutes.component.scss']
})
export class MeetingMinutesComponent
	implements OnInit, AfterViewInit, OnDestroy {
	sub: Subscription;
	isPrint: Observable<any>;
	enable: boolean;
	frequency: string;
	empObs$: Observable<any[]>;
	empObsArr$: Observable<any>[];
	@HostListener('window:afterprint', [])
	function() {
		this.shared.printNext(false);
		if (this.router.url.includes('/admin/savedForms')) {
			this.router.navigateByUrl('/admin/savedForms');
			return;
		}
		this.router.navigateByUrl('/admin/forms/tableData');
	}
	toolBox: FormGroup;
	allJobNumbers = [];
	sign = [];
	staff: UserValue[] = [];
	id: any;
	maxDate = new Date();
	minDate = new Date();
	signature: SignaturePad;
	@ViewChild('Signature1') signaturePad1: SignaturePad;
	dataUrl: any;
	singRequired: any;
	sing2Required = [];
	type: any;
	previousUrl: any;
	@ViewChildren('Signature2') signaturePad2: QueryList<SignaturePad>;
	check: any;
	isHistory: boolean;
	returnTo: Observable<string>;

	snippet: string;
	constructor(
		private fb: FormBuilder,
		private dynamicFormsService: DynamicFormsService,
		private setTitle: SetTitleService,
		private logicalFormInfo: LogicalFormInfoService,
		private activatedRoute: ActivatedRoute,
		public router: Router,
		public forms: SavedformsService,
		public shared: RoleManagementSharedServiceService,
		private employee: EmployeeRegistrationService,
		private mobileViewService: MobileViewService
	) {
		this.check = localStorage.getItem('key');
		this.toolBox = this.fb.group({
			siteName: ['', Validators.required],
			customerName: ['', Validators.required],
			streetAddr: ['', Validators.required],
			custConct: ['', Validators.required],
			custConctPh: ['', Validators.required],
			custEmail: ['', Validators.required],
			jobNumberId: ['', Validators.required],
			meetingBy: ['', Validators.required],
			date: [new Date(), Validators.required],
			signaturePad1: ['', Validators.required],
			issues: this.fb.array([]),
			corrAction: this.fb.array([]),
			attendees: this.fb.array([])
		});
	}
	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}

	disableForm() {
		if (this.isHistory) {
			this.toolBox.valueChanges.subscribe((res) => {
				this.toolBox.disable();
			});
			const check = async () => {
				this.signaturePad2 != null;
			};
			check().then((x) => {
				this.signaturePad2.changes.subscribe(
					(res: QueryList<SignaturePad>) => {
						if (res != null)
							res.toArray().map((item) => {
								item.off();
							});
					}
				);
			});
		}
	}

	ngOnInit(): void {
		this.activatedRoute.queryParams.subscribe(({ enable, frequency }) => {
			this.enable = Boolean(enable);
			this.frequency = frequency as string;
		});
		this.isHistory = this.router.url.includes('/tableData/history');
		if (this.isHistory) {
			this.disableForm();
			this.returnTo = this.activatedRoute.queryParamMap.pipe(
				map((param) => param.get('returnTo'))
			);
		}
		this.isPrint = this.shared.printObs$ as Observable<any>;
		this.activatedRoute.queryParams.subscribe((params) => {
			this.type = params.formType;
		});
		this.id = this.activatedRoute.snapshot.params.id;
		this.getAllJobNumber();
		this.getAllStaff();
		this.dynamicFormsService.homebarTitle.next('ToolBox Talk Form');
		this.setTitle.setTitle('WHS-ToolBox Talk Form');
		if (this.id !== 'form') {
			this.getToolboxByid(this.id);
		} else {
			this.addIssues();
			this.addCorrectAct();
			this.addAttendee();
		}
	}

	getToolboxByid(id) {
		this.logicalFormInfo.getToolboxById(id).subscribe((res: any) => {
			this.maxDate = res.data.date;
			this.minDate = res.data.date;
			this.toolBox.patchValue({
				siteName: res.data.siteName,
				customerName: res.data.customerName,
				streetAddr: res.data.streetAddr,
				custConct: res.data.custConct,
				custConctPh: res.data.custConctPh,
				custEmail: res.data.custEmail,
				jobNumberId: res.data.jobNumberId,
				meetingBy: res.data.meetingBy,
				date: res.data.date
			});
			this.dataUrl = res.data.signaturePad1;
			const check = async () => {
				this.signaturePad1 != null;
			};
			check().then(() => {
				this.signaturePad1.fromDataURL(res.data.signaturePad1);
				if (this.isHistory) this.signaturePad1.off();
			});

			const check2 = async () => {
				this.signaturePad2 != null;
			};
			check2().then(() => {
				setTimeout(() => {
					const signaturePadArr = this.signaturePad2.toArray();
					res.data.attendees.forEach((x, i) => {
						signaturePadArr[i].fromDataURL(x.signature);
						if (this.isHistory) signaturePadArr[i].off();
					});
				}, 2000);
			});
			this.toolBox.patchValue({
				signaturePad1: res.data.signaturePad1
			});
			for (let i = 0; i < res.data.attendees.length; i++) {
				this.addAttendee();
				this.attendee()
					.controls[i].get('employee')
					.patchValue(
						this.staff?.find(
							(x) => x._id == res.data.attendees[i].employee
						)
					);
				this.attendee()
					.controls[i].get('signature')
					.patchValue(res.data.attendees[i].signature);
			}
			for (let x = 0; x < res.data.corrAction.length; x++) {
				this.addCorrectAct();
				this.correctAct()
					.controls[x].get('action')
					.patchValue(res.data.corrAction[x].action);
				this.correctAct()
					.controls[x].get('date')
					.patchValue(res.data.corrAction[x].date);
				this.correctAct()
					.controls[x].get('personRes')
					.patchValue(res.data.corrAction[x].personRes);
			}
			for (let i = 0; i < res.data.issues.length; i++) {
				this.addIssues();
				this.issues()
					.controls[i].get('index')
					.patchValue(res.data.issues[i].index);
				this.issues()
					.controls[i].get('topicDisc')
					.patchValue(res.data.issues[i].topicDisc);
				this.issues()
					.controls[i].get('topicRes')
					.patchValue(res.data.issues[i].topicRes);
			}
		});
	}
	getAllJobNumber() {
		this.logicalFormInfo.getAllJobNumber().subscribe((res: any) => {
			this.allJobNumbers = res.data;
		});
	}
	jobNoSel($event) {
		if (this.id == 'form') {
			for (
				let index = this.issues().value.length - 1;
				index >= 0;
				index--
			) {
				console.log('000000000000', this.id);
				this.removeIssues(index);
			}
		}

		this.logicalFormInfo
			.getJobs($event.target.value)
			.subscribe((res: any) => {
				if (res.length > 0 && this.id == 'form') {
					for (let i = 0; i < res.length; i++) {
						this.addIssues();
						this.issues()
							.controls[i].get('index')
							.patchValue(res[i].index);
						this.issues()
							.controls[i].get('topicDisc')
							.patchValue(res[i].topicDisc);
						this.issues()
							.controls[i].get('topicRes')
							.patchValue(res[i].topicRes);
					}
				}

				this.allJobNumbers.forEach((item) => {
					if (this.toolBox.get('jobNumberId').value === item._id) {
						this.toolBox.patchValue({
							siteName: item.siteName,
							customerName: item.customerName,
							streetAddr: item.streetAddress,
							custConct: item.customerContact,
							custConctPh: item.contacts[0].phone,
							custEmail: item.contacts[0].email,
							jobNumber: this.toolBox.get('jobNumberId').value
						});
					}
					this.toolBox.controls.custConctPh.valueChanges.pipe();
					this.toolBox.controls.custEmail.valueChanges.pipe();
				});
				console.log(this.allJobNumbers);
				this.toolBox.get('jobNumberId').updateValueAndValidity();
			});
	}
	addIssues() {
		this.issues().push(this.issuesForm());
		this.disableForm();
	}
	issues(): FormArray {
		return this.toolBox.get('issues') as FormArray;
	}
	issuesForm(): FormGroup {
		return this.fb.group({
			index: ['', Validators.required],
			topicDisc: ['', Validators.required],
			topicRes: ['', Validators.required]
		});
	}
	removeIssues(i) {
		const item = <FormArray>this.toolBox.controls.issues;
		if (item.length > 1) item.removeAt(i);
	}

	addCorrectAct() {
		this.correctAct().push(this.correctActForm());
		this.disableForm();
	}
	correctAct(): FormArray {
		return this.toolBox.get('corrAction') as FormArray;
	}
	correctActForm(): FormGroup {
		return this.fb.group({
			action: ['', Validators.required],
			personRes: ['', Validators.required],
			date: ['', Validators.required]
		});
	}
	removeCorrectAct(i) {
		const item = <FormArray>this.toolBox.controls.corrAction;
		if (item.length > 1) item.removeAt(i);
	}
	addAttendee() {
		this.attendee().push(this.attendeeForm());
		this.empObsArr$ = new Array<Observable<any>>();
		this.valueChangesAutocomplete();
		this.disableForm();
	}
	private valueChangesAutocomplete() {
		for (let index = 0; index < this.attendee().length; index++) {
			const element = this.attendee().at(index) as FormGroup;
			this.empObsArr$.push(
				(element.controls.employee
					.valueChanges as Observable<any>).pipe(
					startWith({ fullName: '' }),
					tap((value) =>
						typeof value === 'object'
							? ''
							: typeof value === 'string'
							? (element.controls
									.employee as AbstractControl).setErrors({
									incorrect: true
							  })
							: ''
					),
					map((value) =>
						typeof value === 'string' ? value : value?.fullName
					),
					map((fullName) =>
						fullName ? this._filter(fullName) : this.staff.slice()
					)
				)
			);
		}
	}

	attendee(): FormArray {
		return this.toolBox.get('attendees') as FormArray;
	}
	attendeeForm(): FormGroup {
		return this.fb.group({
			employee: ['', Validators.required],
			signature: ['', Validators.required]
		});
	}
	removeAttendee(i) {
		const item = <FormArray>this.toolBox.controls.attendees;
		if (item.length > 1) item.removeAt(i);
	}
	public signaturePadOptions1: Object = {
		// passed through to szimek/signature_pad constructor
		minWidth: 1,
		canvasWidth: 550,
		canvasHeight: 100
	};
	public signaturePadOptions2: Object = {
		// passed through to szimek/signature_pad constructor
		minWidth: 1,
		canvasWidth: 450,
		canvasHeight: 100
	};

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
	ngAfterViewInit() {
		this.snippet = `
			$('.mat-datepicker-toggle-default-icon').on('click',function(){
				setTimeout(()=>{
					var position = $('.mat-datepicker-toggle-active').offset();
					console.log(position)
					$('.cdk-overlay-container').css(position)
				},10)
			});
		`;
		let date_script_to_render = document.createElement('script');
		date_script_to_render.type = 'text/javascript';
		date_script_to_render.async = false;
		date_script_to_render.appendChild(
			document.createTextNode(this.snippet)
		);
		//document.getElementsByTagName('body')[0].appendChild(date_script_to_render)

		this.disableForm();

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
		this.mobileViewService.observeXsmall().subscribe((result) => {
			if (result.matches) {
				const sign = this.signaturePad1.toDataURL();
				this.signaturePad1.set('canvasWidth', 247);
				this.signaturePad1.set('canvasHeight', 106);
				this.signaturePad1.fromDataURL(sign);
			} else {
				const sign = this.signaturePad1.toDataURL();
				this.signaturePad1.set('canvasWidth', 500);
				this.signaturePad1.set('canvasHeight', 100);
				this.signaturePad1.fromDataURL(sign);
			}
			if (result.matches) {
				this.reSizeSignArray(this.signaturePad2, 233, 114);
				const sign = this.signaturePad1.toDataURL();
				this.signaturePad1.set('canvasWidth', 247);
				this.signaturePad1.set('canvasHeight', 107);
				this.signaturePad1.fromDataURL(sign);
			} else {
				this.reSizeSignArray(this.signaturePad2, 420, 121);
				const sign = this.signaturePad1.toDataURL();
				this.signaturePad1.set('canvasWidth', 338);
				this.signaturePad1.set('canvasHeight', 107);
				this.signaturePad1.fromDataURL(sign);
			}
		});

		this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
	}

	drawComplete1() {
		this.toolBox.controls.signaturePad1.setValue(
			this.signaturePad1.toDataURL()
		);
		this.singRequired = this.toolBox.controls.signaturePad1.invalid;
	}
	clear1() {
		this.signaturePad1.clear();
		this.toolBox.controls.signaturePad1.setValue('');
		this.singRequired = this.toolBox.controls.signaturePad1.untouched;
	}
	drawStart1() {}
	drawComplete2(index, sign) {
		this.attendee()
			.controls[index].get('signature')
			.setValue(sign.toDataURL());
		this.sing2Required[index] = this.attendee().controls[index].get(
			'signature'
		).invalid;
	}
	clear2(i) {
		this.attendee().controls[i].get('signature').setValue('');
		this.sing2Required[i] = this.attendee().controls[i].get(
			'signature'
		).untouched;
	}
	drawStart2(index) {}
	onSave() {
		for (let index = 0; index < this.attendee().length; index++) {
			this.sing2Required[index] = this.attendee().controls[index].get(
				'signature'
			).invalid;
		}

		this.singRequired = this.toolBox.controls.signaturePad1.invalid;

		let {
			attendees,
			...rest
		}: {
			attendees: any[];
			rest: Record<string, unknown>;
		} = this.toolBox.value;
		attendees = attendees.map((obj) => {
			obj.employee = obj.employee._id;
			return obj;
		});
		const data = {
			...rest,
			attendees,
			enable: this.enable,
			frequency: this.frequency
		};

		if (this.id !== 'form') {
			this.logicalFormInfo.editToolBox(this.id, data).subscribe((res) => {
				Swal.fire({
					title: 'Update successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.router.navigate(['/admin/forms/tableData']);
			});
		} else {
			this.logicalFormInfo.addtoolBox(data).subscribe((res) => {
				Swal.fire({
					title: 'Submit successfully',
					showConfirmButton: false,
					timer: 1200
				});

				this.router.navigate(['/admin/forms/fillConfigForm/' + 0]);
			});
		}
		this.toolBox.reset();
	}
	getAllStaff() {
		this.employee.getAllEmployeeInfo().subscribe((res) => {
			this.staff = res;
			this.empObsArr$ = new Array<Observable<any>>();
			this.valueChangesAutocomplete();
		});
	}
	private _filter(name: string): any[] {
		const filterValue = name.toLowerCase();
		return this.staff.filter((option) =>
			option.fullName.toLowerCase().includes(filterValue)
		);
	}
	displayFn(user: any): string {
		return user && user.fullName ? user.fullName : '';
	}
}
