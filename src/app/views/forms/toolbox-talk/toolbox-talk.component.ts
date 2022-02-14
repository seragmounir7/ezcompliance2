import {
	Component,
	OnInit,
	AfterViewInit,
	QueryList,
	ViewChildren,
	OnDestroy,
	HostListener
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { ViewChild } from '@angular/core';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SavedformsService } from 'src/app/utils/services/savedforms.service';
import { filter, map } from 'rxjs/operators';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { Observable, Subscription } from 'rxjs';
import { EmployeeRegistrationService } from 'src/app/utils/services/employee-registration.service';
import { MobileViewService } from 'src/app/utils/services/mobile-view.service';
@Component({
	selector: 'app-toolbox-talk',
	templateUrl: './toolbox-talk.component.html',
	styleUrls: ['./toolbox-talk.component.scss']
})
export class ToolboxTalkComponent implements OnInit, AfterViewInit, OnDestroy {
	sub: Subscription;
	isPrint: Observable<any>;
	@HostListener('window:afterprint', [])
	function() {
		console.log('Printing completed...');
		if (this.router.url.includes('/admin/savedForms')) {
			this.router.navigateByUrl('/admin/savedForms');
			return;
		}
		this.router.navigateByUrl('/admin/forms/tableData');
		this.shared.printNext(false);
	}
	toolBox: FormGroup;
	allJobNumbers = [];
	sign = [];
	staff: any;
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
		console.log('toolbox destroy');
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
						if (res != null) console.log(res);
						res.toArray().map((item) => {
							item.off();
						});
					}
				);
			});
		}
	}

	ngOnInit(): void {
		this.isHistory = this.router.url.includes('/tableData/history');
		if (this.isHistory) {
			this.disableForm();
			this.returnTo = this.activatedRoute.queryParamMap.pipe(
				map((param) => param.get('returnTo'))
			);
			this.returnTo.subscribe((res) => console.log(res));
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
			console.log('id', this.id);
			this.getToolboxByid(this.id);
		} else {
			this.addIssues();
			this.addCorrectAct();
			this.addAttendee();
		}
	}

	getToolboxByid(id) {
		this.logicalFormInfo.getToolboxById(id).subscribe((res: any) => {
			console.log(res);
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
			console.log('this.signaturePad1', this.signaturePad1);

			const check2 = async () => {
				this.signaturePad2 != null;
			};
			check2().then(() => {
				console.log(this.signaturePad2);
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
					.patchValue(res.data.attendees[i].employee);
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
					.controls[x].get('complete')
					.patchValue(res.data.corrAction[x].complete);
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
	jobNoSel() {
		this.allJobNumbers.forEach((item) => {
			if (this.toolBox.get('jobNumberId').value === item._id) {
				console.log('Id found', item);
				this.toolBox.patchValue({
					siteName: item.siteName,
					customerName: item.customerName,
					streetAddr: item.streetAddress,
					custConct: item.customerContact,
					custConctPh: item.customerContactPhone,
					custEmail: item.customerEmail,
					jobNumber: this.toolBox.get('jobNumberId').value
				});
			}
		});
		this.toolBox.get('jobNumberId').updateValueAndValidity();
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
			complete: ['', Validators.required]
		});
	}
	removeCorrectAct(i) {
		const item = <FormArray>this.toolBox.controls.corrAction;
		if (item.length > 1) item.removeAt(i);
	}
	addAttendee() {
		this.attendee().push(this.attendeeForm());
		this.disableForm();
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
		console.log(signArr, canvasWidth, canvasHeight);

		signArr.toArray().forEach((x) => {
			const sign = x.toDataURL();
			x.set('canvasWidth', canvasWidth);
			x.set('canvasHeight', canvasHeight);
			x.fromDataURL(sign);
		});
	}
	ngAfterViewInit() {
		this.disableForm();

		this.sub = this.shared.printObs$.subscribe((res) => {
			this.check = res;
			console.log('check1...', this.check);
			if (this.check) {
				setTimeout(() => {
					window.print();
					console.log('printing....');
				}, 3000);
				localStorage.setItem('key', ' ');
			}
		});
		this.sub.add(this.mobileViewService.removeButton());
		this.mobileViewService.observeXsmall().subscribe((result) => {
			console.log(result);

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
		console.log(this.signaturePad1, this.dataUrl);
		this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
	}

	drawComplete1() {
		console.log('signnn', this.signaturePad1);
		this.toolBox.controls.signaturePad1.setValue(
			this.signaturePad1.toDataURL()
		);
		console.log(
			'signaturePad1 control',
			this.toolBox.controls.signaturePad1.value
		);
		this.singRequired = this.toolBox.controls.signaturePad1.invalid;
	}
	clear1() {
		this.signaturePad1.clear();
		this.toolBox.controls.signaturePad1.setValue('');
		this.singRequired = this.toolBox.controls.signaturePad1.untouched;
	}
	drawStart1() {
		console.log('begin drawing');
	}
	drawComplete2(index, sign) {
		console.log('sign', sign);

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
	drawStart2(index) {
		console.log('begin drawing');
		console.log(' this.sing2Required', this.sing2Required[index]);
	}
	onSave() {
		for (let index = 0; index < this.attendee().length; index++) {
			this.sing2Required[index] = this.attendee().controls[index].get(
				'signature'
			).invalid;
		}

		this.singRequired = this.toolBox.controls.signaturePad1.invalid;

		console.log('form data', this.toolBox.value);
		if (this.id !== 'form') {
			const data = {
				...this.toolBox.value
			};
			this.logicalFormInfo.editToolBox(this.id, data).subscribe((res) => {
				console.log('res', res);
				Swal.fire({
					title: 'Update successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.router.navigate(['/admin/forms/tableData']);
			});
		} else {
			const data = {
				...this.toolBox.value
			};
			this.logicalFormInfo.addtoolBox(data).subscribe((res) => {
				console.log('res', res);
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
		this.employee.getAllEmployeeInfo().subscribe((res: any) => {
			this.staff = res;
			console.log('res', this.staff);
		});
	}
}
