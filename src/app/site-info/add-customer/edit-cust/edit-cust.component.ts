import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import Swal from 'sweetalert2';
@Component({
	selector: 'app-edit-cust',
	templateUrl: './edit-cust.component.html',
	styleUrls: ['./edit-cust.component.scss']
})
export class EditCustComponent implements OnInit {
	editCustomerForm: FormGroup;
	StatesData: any = [''];
	formData: any;
	constructor(
		private dialogRef: MatDialogRef<EditCustComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder,
		private logicalFormInfoService: LogicalFormInfoService
	) {
		this.formData = data;
		console.log('fdata', this.formData);
	}

	ngOnInit(): void {
		console.log(this.formData);

		this.editCustomerForm = this.fb.group({
			customerName: [this.formData.customerName],
			customerContact: [this.formData.customerContact],
			streetAddress: [this.formData.streetAddress],
			stateId: [this.formData.stateId],
			suburb: [this.formData.suburb],
			ABN: [this.formData.ABN],
			contacts: this.fb.array([])
		});

		this.formData.contacts.forEach((element) => {
			this.addCustomerDetails(
				element.position,
				element.email,
				element.phone
			);
		});
		//  this.addCustomerDetails();
		this.getAllStates();
	}

	onSubmit() {
		this.logicalFormInfoService
			.updateCustomer(this.data._id, this.editCustomerForm.value)
			.subscribe((res) => {
				console.log(res);
				this.dialogRef.close('true');
				Swal.fire({
					title: 'Customer Edited successfully',
					showConfirmButton: false,
					timer: 1200
				});
			});
	}
	close() {
		this.dialogRef.close();
	}
	addCustomerDetails(position, email, phone) {
		this.customerArr().push(this.customerForm(position, email, phone));
	}
	customerArr(): FormArray {
		return this.editCustomerForm.get('contacts') as FormArray;
	}
	customerForm(position, email, phone): FormGroup {
		return this.fb.group({
			position: [position],
			email: [email],
			phone: [phone]
		});
	}
	removeCustomerDetails(i) {
		const item = <FormArray>this.editCustomerForm.controls.contacts;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	getAllStates() {
		this.logicalFormInfoService.getAllStates().subscribe((res: any) => {
			console.log('setStatesDetails=>', res);
			this.StatesData = res.data;
		});
	}
}
