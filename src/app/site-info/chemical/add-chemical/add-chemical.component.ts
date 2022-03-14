import { Component, OnInit, Inject } from '@angular/core';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-chemical',
	templateUrl: './add-chemical.component.html',
	styleUrls: ['./add-chemical.component.scss']
})
export class AddChemicalComponent implements OnInit {
	addChemicalForm: FormGroup;
	numberOfLineBreaks: any;
	constructor(
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		private router: Router
	) {
		this.addChemicalForm = this.fb.group({
			arrObj: this.fb.array([])
		});
	}

	ngOnInit(): void {
		this.addChemical();
	}
	addChemical() {
		{
			this.add().push(this.newAction());
		}
	}
	add(): FormArray {
		return this.addChemicalForm.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			title: ['', Validators.required]
		});
	}

	removeChemical(i) {
		const item = <FormArray>this.addChemicalForm.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		const data = {
			arrObj: this.addChemicalForm.get('arrObj').value
		};
		this.logicalFormInfo.addMultipleChemical(data).subscribe(
			(data) => {
				this.router.navigate(['/admin/setting/chemical']);
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
