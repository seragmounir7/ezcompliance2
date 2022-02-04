import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

@Component({
	selector: 'app-add-changes-made',
	templateUrl: './add-changes-made.component.html',
	styleUrls: ['./add-changes-made.component.scss']
})
export class AddChangesMadeComponent implements OnInit {
	changesformgp!: FormGroup;
	formData: any;
	numberOfLineBreaks: any;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private logicalFormInfo: LogicalFormInfoService
	) {
		this.changesformgp = this.fb.group({
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
		return this.changesformgp.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			title: ['', Validators.required]
		});
	}

	removeSafetyModule(i) {
		const item = <FormArray>this.changesformgp.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		console.log(this.changesformgp.value);
		const data = {
			arrObj: this.changesformgp.get('arrObj').value
		};
		this.logicalFormInfo.addMultipleChangesMade(data).subscribe(
			(data) => {
				console.log('nature=>', data);
				this.router.navigate(['/admin/siteInfo/changesMade']);
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
