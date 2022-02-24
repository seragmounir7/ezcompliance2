import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

@Component({
	selector: 'app-add-type-of-incident',
	templateUrl: './add-type-of-incident.component.html',
	styleUrls: ['./add-type-of-incident.component.scss']
})
export class AddTypeOfIncidentComponent implements OnInit {
	typeformgp!: FormGroup;
	formData: any;
	numberOfLineBreaks: any;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private logicalFormInfo: LogicalFormInfoService
	) {
		this.typeformgp = this.fb.group({
			// mode:"JobTask",
			arrObj: this.fb.array([])
		});
	}

	ngOnInit(): void {
		this.addAction();
	}
	addAction() {
		{
			this.add().push(this.newAction());
		}
	}
	add(): FormArray {
		return this.typeformgp.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			title: ['', Validators.required]
		});
	}

	removeSafetyModule(i) {
		const item = <FormArray>this.typeformgp.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		console.log(this.typeformgp.value);
		const data = {
			arrObj: this.typeformgp.get('arrObj').value
		};
		this.logicalFormInfo.addMultipleTypeOfIncident(data).subscribe(
			(data) => {
				console.log('nature=>', data);
				this.router.navigate(['/admin/siteInfo/typeOfIncident']);
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
