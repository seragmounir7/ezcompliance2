import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-form',
	templateUrl: './add-form.component.html',
	styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
	addForm: FormGroup;
	formCategores: any;
	formCategoryObj: any;
	constructor(
		public router: Router,
		public dialogRef: MatDialogRef<AddFormComponent>,
		private fb: FormBuilder,
		private dynamicService: DynamicFormsService,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	onNoClick(): void {
		this.dialogRef.close();
	}
	ngOnInit(): void {
		this.addForm = this.fb.group({
			formName: ['', Validators.required],
			frequency: ['', Validators.required],
			formCategories: ['', Validators.required]
		});
		this.getFormCategories();
	}
	createForm() {
		// let a=this.addForm.get('formCategories').value
		//

		sessionStorage.setItem('type', 'add');
		sessionStorage.setItem('formTitle', this.addForm.get('formName').value);
		sessionStorage.setItem(
			'frequency',
			this.addForm.get('frequency').value
		);
		sessionStorage.setItem(
			'formCategories',
			JSON.stringify(this.formCategoryObj)
		);
		// this.dialogRef.close(this.addForm.get('formName').value,this.addForm.get('frequency').value);
		this.router.navigate(['/admin/dynamic/dynamicForm']);
		this.dialogRef.close();
	}
	closeDialog() {
		this.dialogRef.close('false');
	}
	getFormCategories() {
		this.dynamicService.formCategoriesGetAll().subscribe((res: any) => {
			this.formCategores = res.data;
		});
	}
	getCategory(category) {
		this.formCategoryObj = this.addForm.get('formCategories').value;
	}
}
