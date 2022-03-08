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
import { SiteData } from 'src/app/utils/types/SiteResponceTypes';
import { CustomerData } from 'src/app/utils/types/CustomerResponceTypes';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
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
	siteId: string;
	customerId: string;
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
			streetAddress: [{ value: '', disabled: true }, Validators.required],
			suburb: [{ value: '', disabled: true }, Validators.required],
			state: [{ value: '', disabled: true }, Validators.required],
			postcode: [{ value: '', disabled: true }, Validators.required],
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
		this.addJobNumberForm
			.get('siteName')
			.valueChanges.subscribe((res: SiteData) => {
				this.siteId = res._id;

				this.addJobNumberForm
					.get('streetAddress')
					.setValue(res.streetAddress);
				this.addJobNumberForm.get('suburb').setValue(res.suburb);
				this.addJobNumberForm.get('state').setValue(res.stateId._id);
				this.addJobNumberForm.get('postcode').setValue(res.postcode);
			});
		this.addJobNumberForm
			.get('customerName')
			.valueChanges.subscribe((res: CustomerData) => {
				this.customerId = res._id;

				this.addJobNumberForm
					.get('customerContact')
					.setValue(res.customerContact);
				this.addJobNumberForm
					.get('customerContactPhone')
					.setValue(res.contacts[0]?.phone);
				this.addJobNumberForm
					.get('customerEmail')
					.setValue(res.contacts[0]?.email);
			});
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
		const jobNumber = this.f?.jobNumber?.value
			? { jobNumber: this.f.jobNumber.value }
			: '';
		let data: JobNumber;
		data = {
			// arrObj: [
			// {
			// customerContact: this.f.customerContact.value,
			// customerContactPhone: this.f.customerContactPhone.value,
			// customerEmail: this.f.customerEmail.value,
			// customerName: this.f.customerName.value.customerName,
			// siteName: this.f.siteName.value.siteName,
			// stateId: this.f.state.value,
			// streetAddress: this.f.streetAddress.value,
			// suburb: this.f.suburb.value,
			// postcode: this.f.postcode.value,
			stateId: this.f.state.value,
			customerId: this.customerId,
			siteId: this.siteId,
			...jobNumber
		};
		// ]
		// };

		this.logicalFormInfoService.addJobNumber(data).subscribe(
			(res: any) => {
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
		this.addJobNumberForm.get('streetAddress').setValue(item.streetAddress);
		this.addJobNumberForm.get('suburb').setValue(item.suburb);
		this.addJobNumberForm.get('state').setValue(item.stateId._id);
		this.addJobNumberForm.get('postcode').setValue(item.postcode);
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
	}
	close() {
		this.dialogRef.close();
	}
	getAllStates() {
		this.logicalFormInfoService.getAllStates().subscribe((res) => {
			this.allState = res.data;
		});
	}
	jobNumberChecked(e: MatCheckboxChange) {
		if (e.checked) {
			this.addJobNumberForm.addControl(
				'jobNumber',
				new FormControl('', Validators.required)
			);
		} else {
			this.addJobNumberForm.removeControl('jobNumber');
		}
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
