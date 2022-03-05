import { title } from 'process';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-form-categories',
	templateUrl: './add-form-categories.component.html',
	styleUrls: ['./add-form-categories.component.scss']
})
export class AddFormCategoriesComponent implements OnInit {
	dynamicFormCategoryAdd: FormGroup;
	constructor(
		private fb: FormBuilder,
		private dynamicService: DynamicFormsService,
		private router: Router,
		private dialogRef: MatDialogRef<AddFormCategoriesComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {
		this.dynamicFormCategoryAdd = this.fb.group({
			title: ['', Validators.required]
		});
		if (this.data.action == 'edit') {
			console.log('edit');

			this.dynamicFormCategoryAdd.controls.title.setValue(
				this.data?.element?.title
			);
		}
	}
	onSubmit() {
		console.log(this.dynamicFormCategoryAdd.value);
		if (this.data.action === 'new') {
			this.dynamicService
				.formCategoriesPost(this.dynamicFormCategoryAdd.value)
				.subscribe(
					(res) => {
						console.log('addCustomerForm=>', res);
						this.dialogRef.close('ok');
						this.router.navigate([
							'/admin/setting/dynamicFormCategories'
						]);
					},
					(err) => {
						console.error(err);
					}
				);
		} else if (this.data.action === 'edit') {
			this.dynamicService
				.formCategoriesPut(
					this.data.element._id,
					this.dynamicFormCategoryAdd.value
				)
				.subscribe(
					(res) => {
						console.log('addCustomerForm=>', res);
						this.dialogRef.close('true');
						this.router.navigate([
							'/admin/setting/dynamicFormCategories'
						]);
					},
					(err) => {
						console.error(err);
					}
				);
		}
	}
}
