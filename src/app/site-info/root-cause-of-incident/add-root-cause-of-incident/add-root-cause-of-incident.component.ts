import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-root-cause-of-incident',
	templateUrl: './add-root-cause-of-incident.component.html',
	styleUrls: ['./add-root-cause-of-incident.component.scss']
})
export class AddRootCauseOfIncidentComponent implements OnInit {
	rootformgp!: FormGroup;
	formData: any;
	numberOfLineBreaks: any;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private logicalFormInfo: LogicalFormInfoService
	) {
		this.rootformgp = this.fb.group({
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
		return this.rootformgp.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			title: ['', Validators.required]
		});
	}

	removeSafetyModule(i) {
		const item = <FormArray>this.rootformgp.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		const data = {
			arrObj: this.rootformgp.get('arrObj').value
		};
		this.logicalFormInfo.addMultipleRootCause(data).subscribe(
			(data) => {
				this.router.navigate(['/admin/setting/rootCauseOfIncident']);
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
