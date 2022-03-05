import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-add-ppe',
	templateUrl: './add-ppe.component.html',
	styleUrls: ['./add-ppe.component.scss']
})
export class AddPPEComponent implements OnInit {
	PPEformgp!: FormGroup;
	formData: any;
	numberOfLineBreaks: any;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private logicalFormInfo: LogicalFormInfoService
	) {
		this.PPEformgp = this.fb.group({
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
		return this.PPEformgp.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			title: ['', Validators.required]
		});
	}

	removeSafetyModule(i) {
		const item = <FormArray>this.PPEformgp.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		console.log(this.PPEformgp.value);
		const data = {
			arrObj: this.PPEformgp.get('arrObj').value
		};
		this.logicalFormInfo.addMultiplePPE(data).subscribe(
			(data) => {
				console.log('PPE=>', data);
				this.router.navigate(['/admin/setting/ppeSel']);
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
