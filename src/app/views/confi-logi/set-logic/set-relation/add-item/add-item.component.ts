import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
	selector: 'app-add-item',
	templateUrl: './add-item.component.html',
	styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
	addItem!: FormGroup;
	dataRec: any;
	public Editor = ClassicEditor;
	constructor(
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		public dialogRef: MatDialogRef<AddItemComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any
	) {
		this.dataRec = data;
	}
	ngOnInit(): void {
		console.log(this.dataRec);

		this.addItem = this.fb.group({
			title: ['', Validators.required]
		});
	}
	onFormSubmit() {
		let data = {
			title: this.addItem.get('title').value
		};

		switch (this.dataRec.type) {
			case 'highRisk': {
				this.addHighRisk(data);
				break;
			}
			case 'ppe': {
				this.addPPE(data);
				break;
			}
			case 'licence': {
				this.addLicence(data);
				break;
			}
			case 'identifyHazards': {
				this.addHazard(data);
				break;
			}
			case 'codeOfPract': {
				this.addCOP(data);
				break;
			}
			case 'riskLevel': {
				this.addRiskLevel(data);
				break;
			}
			case 'ctrlActreq': {
				this.addControlActReq(data);
				break;
			}
			case 'resRiskLevel': {
				this.addResidRiskLevel(data);
				break;
			}
			case 'perResbl': {
				this.addStaff(data);
				break;
			}
		}
	}
	closeDialog() {
		this.dialogRef.close('false');
	}

	addHighRisk(data) {
		this.logicalFormInfo.addRisk(data).subscribe((resData) => {
			console.log('resData', resData);

			this.dialogRef.close('highRisk');
			Swal.fire({
				title: 'Item  Added successfully',
				showConfirmButton: false,
				timer: 1200
			});
		});
	}
	addPPE(data) {
		this.logicalFormInfo.addPPE(data).subscribe((resData) => {
			console.log('resData', resData);

			this.dialogRef.close('ppe');
			Swal.fire({
				title: 'Item  Added successfully',
				showConfirmButton: false,
				timer: 1200
			});
		});
	}
	addRiskLevel(data) {
		this.logicalFormInfo.addRiskLevel(data).subscribe((resData) => {
			console.log('resData', resData);

			this.dialogRef.close('riskLevel');
			Swal.fire({
				title: 'Item  Added successfully',
				showConfirmButton: false,
				timer: 1200
			});
		});
	}
	addResidRiskLevel(data) {
		this.logicalFormInfo.addResidual(data).subscribe((resData) => {
			console.log('resData', resData);

			this.dialogRef.close('resRiskLevel');
			Swal.fire({
				title: 'Item  Added successfully',
				showConfirmButton: false,
				timer: 1200
			});
		});
	}
	addHazard(data) {
		this.logicalFormInfo.addHazards(data).subscribe((resData) => {
			console.log('resData', resData);

			this.dialogRef.close('identifyHazards');
			Swal.fire({
				title: 'Item  Added successfully',
				showConfirmButton: false,
				timer: 1200
			});
		});
	}
	addLicence(data) {
		let dataTemp = {
			title: data.title,
			tradeCategoryId: this.dataRec.tradeCategoryId
		};
		this.logicalFormInfo.addLicence(dataTemp).subscribe((resData) => {
			console.log('resData', resData);

			this.dialogRef.close('licence');
			Swal.fire({
				title: 'Item  Added successfully',
				showConfirmButton: false,
				timer: 1200
			});
		});
	}
	addControlActReq(data) {
		this.logicalFormInfo.addContrlActReq(data).subscribe((resData) => {
			console.log('resData', resData);

			this.dialogRef.close('ctrlActreq');
			Swal.fire({
				title: 'Item  Added successfully',
				showConfirmButton: false,
				timer: 1200
			});
		});
	}
	addStaff(data) {
		this.logicalFormInfo.addStaff(data).subscribe((resData) => {
			console.log('resData', resData);

			this.dialogRef.close('perResbl');
			Swal.fire({
				title: 'Item  Added successfully',
				showConfirmButton: false,
				timer: 1200
			});
		});
	}
	addCOP(data) {
		this.logicalFormInfo.addCode(data).subscribe((resData) => {
			console.log('resData', resData);

			this.dialogRef.close('codeOfPract');
			Swal.fire({
				title: 'Item  Added successfully',
				showConfirmButton: false,
				timer: 1200
			});
		});
	}
}
