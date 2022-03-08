import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-high-risk-construction',
	templateUrl: './add-high-risk-construction.component.html',
	styleUrls: ['./add-high-risk-construction.component.scss']
})
export class AddHighRiskConstructionComponent implements OnInit {
	// riskDetails!: FormGroup;
	// riskData: any = [];
	// ID: any;
	// hide: boolean = true;
	// constructor(
	//   private logicalFormInfo: LogicalFormInfoService,
	//   private fb: FormBuilder,
	//   public dialogRef: MatDialogRef<AddHighRiskConstructionComponent>,
	//   @Inject(MAT_DIALOG_DATA) public data: any
	// ) {
	//   {
	//     this.riskDetails = this.fb.group({
	//       title: ['', Validators.required],
	//     });
	//
	//   }
	// }

	// ngOnInit(): void {}

	// onFormSubmit() {
	//
	//   let data = {
	//     componentId: this.data.EditData,
	//     title: this.riskDetails.get('title').value,
	//   };
	//   this.logicalFormInfo.addSubComponent(data).subscribe((data) => {
	//
	//     // this.riskData = data;
	//     this.dialogRef.close('true');
	//     this.riskDetails.reset();
	//     Swal.fire('Parameter added successfully');
	//   });
	// }

	riskConstr!: FormGroup;
	formData: any;
	numberOfLineBreaks: any;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private logicalFormInfo: LogicalFormInfoService
	) {
		this.riskConstr = this.fb.group({
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
		return this.riskConstr.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			title: ['', Validators.required]
		});
	}

	removeSafetyModule(i) {
		const item = <FormArray>this.riskConstr.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		//
		const data = {
			arrObj: this.riskConstr.get('arrObj').value
		};
		//

		this.logicalFormInfo.addMultipleRisk(data).subscribe(
			(data) => {
				Swal.fire({
					title: 'Parameter Added successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.router.navigate(['/admin/setting/highRisk']);
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
