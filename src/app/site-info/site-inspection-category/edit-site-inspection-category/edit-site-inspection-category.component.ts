import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
	selector: 'app-edit-site-inspection-category',
	templateUrl: './edit-site-inspection-category.component.html',
	styleUrls: ['./edit-site-inspection-category.component.scss']
})
export class EditSiteInspectionCategoryComponent implements OnInit {
	siteInspectionCategoryEdit: FormGroup;
	formData: any;
	constructor(
		private dialogRef: MatDialogRef<EditSiteInspectionCategoryComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder,
		private logicalFormInfoService: LogicalFormInfoService,
		private router: Router
	) {
		this.formData = data;
		console.log('fdata', this.formData);
	}

	ngOnInit(): void {
		this.siteInspectionCategoryEdit = this.fb.group({
			category: [this.formData.category, Validators.required]
		});
	}
	onSubmit() {
		console.log(this.siteInspectionCategoryEdit.value);

		this.logicalFormInfoService
			.updateSiteInspectionCategory(
				this.formData._id,
				this.siteInspectionCategoryEdit.value
			)
			.subscribe(
				(res) => {
					console.log('addCustomerForm=>', res);
					this.dialogRef.close('true');
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
