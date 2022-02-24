import { Component, OnInit, Inject } from '@angular/core';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-risk-level',
	templateUrl: './add-risk-level.component.html',
	styleUrls: ['./add-risk-level.component.scss']
})
export class AddRiskLevelComponent implements OnInit {
	addRiskForm: FormGroup;
	numberOfLineBreaks: any;
	constructor(
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		private router: Router
	) {
		this.addRiskForm = this.fb.group({
			arrObj: this.fb.array([])
		});
	}

	ngOnInit(): void {
		this.addRisk();
	}
	addRisk() {
		{
			this.add().push(this.newAction());
		}
	}
	add(): FormArray {
		return this.addRiskForm.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			title: ['', Validators.required]
		});
	}

	removeRisk(i) {
		const item = <FormArray>this.addRiskForm.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		console.log(this.addRiskForm.value);
		const data = {
			arrObj: this.addRiskForm.get('arrObj').value
		};
		this.logicalFormInfo.addMultipleRiskLevel(data).subscribe(
			(data) => {
				console.log('chemical=>', data);
				this.router.navigate(['/admin/siteInfo/riskLevel']);
			},
			(err) => {
				console.error(err);
			}
		);
	}
	calcHeight(target) {
		let value = target.value;
		this.numberOfLineBreaks = (value.match(/\n/g) || []).length + 1;
		console.log('numberOfLineBreaks', this.numberOfLineBreaks);
	}
}
