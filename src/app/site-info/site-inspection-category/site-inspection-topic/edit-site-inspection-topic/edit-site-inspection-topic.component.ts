import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-edit-site-inspection-topic',
	templateUrl: './edit-site-inspection-topic.component.html',
	styleUrls: ['./edit-site-inspection-topic.component.scss']
})
export class EditSiteInspectionTopicComponent implements OnInit {
	StatesData: any = [''];
	siteInspectionTopicEdit: FormGroup;
	numberOfLineBreaks: any;
	datevalue: any;
	formData: any;
	constructor(
		private fb: FormBuilder,
		private logicalFormInfoService: LogicalFormInfoService,
		private router: Router,
		private dialogRef: MatDialogRef<EditSiteInspectionTopicComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.formData = data.element;
	}

	ngOnInit(): void {
		this.siteInspectionTopicEdit = this.fb.group({
			categoryId: [this.formData.categoryId, Validators.required],
			action: [this.formData.action, Validators.required],
			item: [this.formData.item, Validators.required],
			topic: [this.formData.topic, Validators.required]
		});
	}

	onSubmit() {
		this.logicalFormInfoService
			.updateSiteInspectionTopic(
				this.formData._id,
				this.siteInspectionTopicEdit.value
			)
			.subscribe(
				(res) => {
					this.dialogRef.close('true');
					this.router.navigate([
						'/admin/setting/siteinspectiontopic/' +
							this.data.categoryId
					]);
				},
				(err) => {
					console.error(err);
				}
			);
	}
}
