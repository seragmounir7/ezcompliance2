import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';

import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add-faq',
	templateUrl: './add-faq.component.html',
	styleUrls: ['./add-faq.component.scss']
})
export class AddFaqComponent implements OnInit {
	portalDetails!: FormGroup;
	formData: any;
	hide = true;
	constructor(
		private fb: FormBuilder,
		private router: Router,
		private landingPageInfoService: LandingPageInfoServiceService
	) {
		this.portalDetails = this.fb.group({
			title: ['', Validators.required]
			//  faq: this.fb.array([]),
		});
	}

	ngOnInit(): void {
		// this.addAction();
	}
	addAction() {
		{
			this.add().push(this.newAction());
		}
	}
	add(): FormArray {
		return this.portalDetails.get('faq') as FormArray;
	}
	newAction(): FormGroup {
		return this.fb.group({
			question: ['', Validators.required],
			answer: ['', Validators.required]
		});
	}

	removeSafetyModule(i) {
		const item = <FormArray>this.portalDetails.controls.faq;
		if (item.length > 1) {
			item.removeAt(i);
		}
	}
	onFormSubmit() {
		console.log(this.portalDetails.value);
		const data = {
			title: this.portalDetails.value
			//  faq:this.portalDetails.get('faq').value
		};
		this.landingPageInfoService
			.addPortal(this.portalDetails.value)
			.subscribe(
				(data) => {
					console.log('portal=>', data);

					this.router.navigate(['/admin/landingPageInfo/faq']);
				},
				(err) => {
					console.error(err);
				}
			);
	}
	close() {
		this.hide = false;
	}
}
