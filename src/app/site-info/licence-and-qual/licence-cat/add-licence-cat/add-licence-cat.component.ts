import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-add-licence-cat',
	templateUrl: './add-licence-cat.component.html',
	styleUrls: ['./add-licence-cat.component.scss']
})
export class AddLicenceCatComponent implements OnInit {
	addLicenceCatFG!: FormGroup;
	formData: any;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private logicalFormInfo: LogicalFormInfoService
	) {
		this.addLicenceCatFG = this.fb.group({
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
		return this.addLicenceCatFG.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			title: ['', Validators.required]
		});
	}

	removeSafetyModule(i) {
		const item = <FormArray>this.addLicenceCatFG.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		const data = {
			arrObj: this.addLicenceCatFG.get('arrObj').value
		};
		this.logicalFormInfo.addLicenceCat(data).subscribe(
			(data) => {
				console.log('JOBTask=>', data);
				this.router.navigate(['/admin/setting/licenceCat']);
			},
			(err) => {
				console.error(err);
			}
		);
	}
}
