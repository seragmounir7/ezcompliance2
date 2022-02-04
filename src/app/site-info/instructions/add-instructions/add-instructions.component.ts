import { element } from 'protractor';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
	selector: 'app-add-instructions',
	templateUrl: './add-instructions.component.html',
	styleUrls: ['./add-instructions.component.scss']
})
export class AddInstructionsComponent implements OnInit {
	public Editor = ClassicEditor;
	addIstruction: FormGroup;
	formData: any;
	numberOfLineBreaks: any;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private logicalFormInfo: LogicalFormInfoService,
		private dialogRef: MatDialogRef<AddInstructionsComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.addIstruction = this.fb.group({
			// mode:"JobTask",
			instruction: ['', Validators.required]
		});
	}

	ngOnInit(): void {
		if (this.data.element.instruction) {
			this.addIstruction.controls.instruction.setValue(
				this.data.element.instruction
			);
		}
	}

	onFormSubmit() {
		console.log(this.addIstruction.value);
		// let data = {

		// }
		if (this.data.url === 'accident') {
			this.logicalFormInfo
				.postInstruction(this.addIstruction.value)
				.subscribe(
					(data) => {
						console.log('nature=>', data);
						this.router.navigate([
							'/admin/siteInfo/instructions/accident'
						]);
						this.dialogRef.close('true');
					},
					(err) => {
						console.error(err);
					}
				);
		} else if (this.data.url === 'riskAssess') {
			this.logicalFormInfo
				.postRiskInstruction(this.addIstruction.value)
				.subscribe(
					(data) => {
						console.log('nature=>', data);
						this.router.navigate([
							'/admin/siteInfo/instructions/riskAssess'
						]);
						this.dialogRef.close('true');
					},
					(err) => {
						console.error(err);
					}
				);
		}
	}
	closeDialog() {
		this.dialogRef.close('false');
	}
}
