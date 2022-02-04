import { ToastrService } from 'ngx-toastr';
import { AddingCustComponent } from './../../../../site-info/add-customer/adding-cust/adding-cust.component';
import { AddSiteComponent } from 'src/app/site-info/add-site-info/add-site/add-site.component';
import { JobNumber } from './../../../../utils/services/logical-form-info.service';
import {
	FormGroup,
	FormBuilder,
	Validators,
	FormControl
} from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import {
	MatDialog,
	MatDialogRef,
	MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-create-job-no',
	templateUrl: './create-job-no.component.html',
	styleUrls: ['./create-job-no.component.scss']
})
export class CreateJobNoComponent implements OnInit, AfterViewInit {
	jobHasError: boolean = false;
	allSites: any[] = [];
	addJobNumberForm: FormGroup;
	addCustomerForm: FormGroup;
	allCustomers: any[] = [];
	allState: any = [];
	constructor(
		private dialog: MatDialog,
		private dialogRef: MatDialogRef<CreateJobNoComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private logicalFormInfoService: LogicalFormInfoService,
		private fb: FormBuilder,
		private toastrService: ToastrService
	) {}
	ngAfterViewInit(): void {}

	ngOnInit(): void {
		this.addJobNumberForm = this.fb.group({
			siteName: ['', Validators.required],
			// streetNumber: [{ value: '', disabled: true }, Validators.required],
			streetAddress: [{ value: '', disabled: true }, Validators.required],
			suburb: [{ value: '', disabled: true }, Validators.required],
			state: [{ value: '', disabled: true }, Validators.required],
			customerName: ['', Validators.required],
			customerContact: [
				{ value: '', disabled: true },
				Validators.required
			],
			customerContactPhone: [
				{ value: '', disabled: true },
				Validators.required
			],
			customerEmail: [{ value: '', disabled: true }, Validators.required]
		});
		this.addJobNumberForm.get('siteName').valueChanges.subscribe((res) => {
			console.log(res);
			// this.addJobNumberForm.get('streetNumber').setValue(res.streetNumber)
			this.addJobNumberForm
				.get('streetAddress')
				.setValue(res.streetAddress);
			this.addJobNumberForm.get('suburb').setValue(res.suburb);
			this.addJobNumberForm.get('state').setValue(res.stateId._id);
		});
		this.addJobNumberForm
			.get('customerName')
			.valueChanges.subscribe((res) => {
				console.log(res);
				// res = JSON.parse(res)
				this.addJobNumberForm
					.get('customerContact')
					.setValue(res.customerContact);
				this.addJobNumberForm
					.get('customerContactPhone')
					.setValue(res.contacts[0]?.phone);
				this.addJobNumberForm
					.get('customerEmail')
					.setValue(res.contacts[0]?.email);
				// this.addJobNumberForm.get('customerEmail').setValue(res.ABN)
			});
		// this.addJobNumberForm.controls.jobNumber.valueChanges.subscribe(res => {
		//   console.log('this.addJobNumberForm.controls.jobNumber', this.addJobNumberForm.controls.jobNumber.errors, this.addJobNumberForm.invalid)
		// })
		this.getAllSites();
		this.getAllCustomer();
		this.getAllStates();
	}
	getAllCustomer() {
		this.logicalFormInfoService.getAllCustomer().subscribe((res: any) => {
			this.allCustomers = res.data;
		});
	}
	getAllSites() {
		this.logicalFormInfoService.getAllSite().subscribe(
			(res: any) => {
				this.jobHasError = false;
				this.allSites = res.data;
				console.log(res.data);
			},
			(err) => {
				if (err instanceof HttpErrorResponse && err.status === 422) {
					this.jobHasError = true;
				}
				console.error(err);
			}
		);
	}
	get f() {
		return this.addJobNumberForm.controls;
	}
	onSubmit() {
		console.log(this.addJobNumberForm.value);
		const jobNumber = this.f?.jobNumber?.value
			? { jobNumber: this.f.jobNumber.value }
			: '';
		let data: JobNumber;
		data = {
			arrObj: [
				{
					customerContact: this.f.customerContact.value,
					customerContactPhone: this.f.customerContactPhone.value,
					customerEmail: this.f.customerEmail.value,
					customerName: this.f.customerName.value.customerName,
					siteName: this.f.siteName.value.siteName,
					stateId: this.f.state.value,
					streetAddress: this.f.streetAddress.value,
					suburb: this.f.suburb.value,
					...jobNumber
				}
			]
		};
		console.log(data);
		this.logicalFormInfoService.addJobNumber(data).subscribe(
			(res: any) => {
				console.log(res);
				this.dialogRef.close('success');
			},
			(err) => {
				if (err instanceof HttpErrorResponse) {
					if (err.status === 422) {
						this.toastrService.error('Job Number Already exists!');
					}
					console.error(err);
				}
			}
		);
	}
	setSite(item) {
		console.log(item);
		// this.addJobNumberForm.get('streetNumber').setValue(item.streetNumber)
		this.addJobNumberForm.get('streetAddress').setValue(item.streetAddress);
		this.addJobNumberForm.get('suburb').setValue(item.suburb);
		this.addJobNumberForm.get('state').setValue(item.stateId._id);
	}
	setCustomer(item) {
		this.addJobNumberForm
			.get('customerContact')
			.setValue(item.customerContact);
		this.addJobNumberForm
			.get('customerContactPhone')
			.setValue(item.contacts[0]?.phone);
		this.addJobNumberForm
			.get('customerEmail')
			.setValue(item.contacts[0]?.email);
		//   this.addJobNumberForm.get('customerEmail').setValue(item.ABN)
	}
	close() {
		this.dialogRef.close();
	}
	getAllStates() {
		this.logicalFormInfoService.getAllStates().subscribe((res) => {
			console.log('getAllStates=>', res);
			this.allState = res.data;
		});
	}
	jobNumberChecked(e: MatCheckboxChange) {
		console.log(e);
		if (e.checked) {
			this.addJobNumberForm.addControl(
				'jobNumber',
				new FormControl('', Validators.required)
			);
			// this.addJobNumberForm.get('jobNumber').setErrors(Validators.required)
			// this.addJobNumberForm.get('jobNumber').updateValueAndValidity()
		} else {
			this.addJobNumberForm.removeControl('jobNumber');
			// this.addJobNumberForm.get('jobNumber').setErrors(null)
			// this.addJobNumberForm.get('jobNumber').updateValueAndValidity()
		}

		console.log(
			'this.addJobNumberForm.controls.jobNumber',
			this.addJobNumberForm.controls.jobNumber.errors,
			this.addJobNumberForm.invalid
		);
	}
	addSite() {
		const dialog = this.dialog.open(AddSiteComponent, {});
		dialog.afterClosed().subscribe((res) => {
			if (res === 'true') {
				this.getAllSites();
			}
		});
	}
	addCustomer() {
		const dialog = this.dialog.open(AddingCustComponent, {});
		dialog.afterClosed().subscribe((res) => {
			if (res === 'ok') {
				this.getAllCustomer();
			}
		});
	}
}
