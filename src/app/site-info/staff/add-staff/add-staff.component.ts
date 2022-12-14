import { Component, OnInit, Inject } from '@angular/core';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-staff',
	templateUrl: './add-staff.component.html',
	styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {
	addStaffForm: FormGroup;
	numberOfLineBreaks: any;
	constructor(
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		private router: Router,
		private navigationService: NavigationService
	) {
		this.addStaffForm = this.fb.group({
			arrObj: this.fb.array([])
		});
	}

	ngOnInit(): void {
		this.addStaff();
	}
	addStaff() {
		{
			this.add().push(this.newAction());
		}
	}
	add(): FormArray {
		return this.addStaffForm.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			title: ['', Validators.required]
		});
	}

	removeStaff(i) {
		const item = <FormArray>this.addStaffForm.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		const data = {
			arrObj: this.addStaffForm.get('arrObj').value
		};
		this.logicalFormInfo.addMultipleStaff(data).subscribe(
			(data) => {
				this.router.navigateByUrl(this.navigationService.returnUrl);
			},
			(err) => {
				console.error(err);
			}
		);
	}
	calcHeight(target) {
		let value = target.value;
		this.numberOfLineBreaks = (value.match(/\n/g) || []).length + 1;
	}
}
