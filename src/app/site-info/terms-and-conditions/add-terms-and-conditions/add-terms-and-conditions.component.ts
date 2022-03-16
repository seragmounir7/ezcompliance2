import { element } from 'protractor';
import { Component, Inject, OnInit } from '@angular/core';
import {
	FormArray,
	FormBuilder,
	FormControl,
	FormGroup,
	Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { map, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-terms-and-conditions',
	templateUrl: './add-terms-and-conditions.component.html',
	styleUrls: ['./add-terms-and-conditions.component.scss']
})
export class AddTermsAndConditionsComponent implements OnInit {
	public Editor = ClassicEditor;
	termsAndCond: FormControl = new FormControl();
	formData: any;
	numberOfLineBreaks: any;
	acknowledgment$: Observable<any>;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private logicalFormInfo: LogicalFormInfoService,
		private dialogRef: MatDialogRef<AddTermsAndConditionsComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {}

	ngOnInit(): void {
		this.acknowledgment$ = this.logicalFormInfo
			.getTermsAndConditions()
			.pipe(
				take(1),
				map((res: any) => res[0])
			);
	}
	onFormSubmit() {
		this.dialogRef.close(true);
	}
}
