import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-add-whs-manager',
	templateUrl: './add-whs-manager.component.html',
	styleUrls: ['./add-whs-manager.component.scss']
})
export class AddWhsManagerComponent implements OnInit {
	WHSManagerDetails!: FormGroup;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private logicalFormInfo: LogicalFormInfoService,
		private navigationService: NavigationService
	) {
		this.WHSManagerDetails = this.fb.group({
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
		return this.WHSManagerDetails.get('arrObj') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			name: ['', Validators.required],
			email: ['', Validators.required]
		});
	}

	removeSafetyModule(i) {
		const item = <FormArray>this.WHSManagerDetails.controls.arrObj;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		const data = {
			arrObj: this.WHSManagerDetails.get('arrObj').value
		};
		this.logicalFormInfo.addMultipleWHSManager(data).subscribe(
			(data) => {
				Swal.fire({
					title: 'WHSManager Detail Added successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.router.navigateByUrl(this.navigationService.returnUrl);
			},
			(err) => {
				console.error(err);
			}
		);
	}
}
