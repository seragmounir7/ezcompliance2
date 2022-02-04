import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

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
		const item = <FormArray>this.rootformgp.controls['arrObj'];
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		console.log(this.rootformgp.value);
		let data = {
			arrObj: this.rootformgp.get('arrObj').value
		};
		this.logicalFormInfo.addMultipleRootCause(data).subscribe(
			(data) => {
				console.log('nature=>', data);
				this.router.navigate(['/admin/siteInfo/rootCauseOfIncident']);
			},
			(err) => {
				console.error(err);
			}
		);
	}
	calcHeight(value) {
		this.numberOfLineBreaks = (value.match(/\n/g) || []).length + 1;
		console.log('numberOfLineBreaks', this.numberOfLineBreaks);
	}
}
