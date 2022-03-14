import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-site-inspection-category',
	templateUrl: './add-site-inspection-category.component.html',
	styleUrls: ['./add-site-inspection-category.component.scss']
})
export class AddSiteInspectionCategoryComponent implements OnInit {
	siteInspectionCategoryAdd: FormGroup;
	constructor(
		private fb: FormBuilder,
		private logicalFormInfoService: LogicalFormInfoService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.siteInspectionCategoryAdd = this.fb.group({
			category: ['', Validators.required]
		});
	}
	onSubmit() {
		this.logicalFormInfoService
			.addSiteInspectionCategory(this.siteInspectionCategoryAdd.value)
			.subscribe(
				(res) => {
					//this.dialogRef.close('ok')
					this.router.navigate([
						'/admin/setting/siteinspectioncategory'
					]);
				},
				(err) => {
					console.error(err);
				}
			);
	}
}
