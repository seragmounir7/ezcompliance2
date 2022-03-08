import { Component, OnInit, Inject } from '@angular/core';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { Router } from '@angular/router';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-residual-risk-level',
	templateUrl: './add-residual-risk-level.component.html',
	styleUrls: ['./add-residual-risk-level.component.scss']
})
export class AddResidualRiskLevelComponent implements OnInit {
	addResidualForm: FormGroup;
	numberOfLineBreaks: any;
	constructor(
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		private router: Router
	) {
		this.addResidualForm = this.fb.group({
			arrObj: this.fb.array([])
		});
	}

	ngOnInit(): void {
		this.addResidual();
	}
	addResidual() {
		{
			this.add().push(this.newAction());
		}
	}
	add(): FormArray {
		return this.addResidualForm.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			title: ['', Validators.required]
		});
	}

	removeResidual(i) {
		const item = <FormArray>this.addResidualForm.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		const data = {
			arrObj: this.addResidualForm.get('arrObj').value
		};
		this.logicalFormInfo.addMultipleResidual(data).subscribe(
			(data) => {
				this.router.navigate(['/admin/setting/residual']);
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
