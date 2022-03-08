import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyRegistrationService } from 'src/app/utils/services/company-registration.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-company-registration',
	templateUrl: './company-registration.component.html',
	styleUrls: ['./company-registration.component.scss']
})
export class CompanyRegistrationComponent implements OnInit {
	companyInfo: FormGroup;
	selectedImage: any;
	constructor(
		private fb: FormBuilder,
		private company: CompanyRegistrationService,
		private setTitle: SetTitleService
	) {
		this.companyInfo = fb.group({
			companyName: [null, Validators.required],
			ABN: [null, Validators.required],
			ACN: [null, Validators.required],
			website: [null, Validators.required],
			email: [null, Validators.required],
			phone: [null, Validators.required],
			customerType: [null, Validators.required],
			businessLicense: [null, Validators.required],
			streetAddress: [null, Validators.required],
			suburb: [null, Validators.required],
			state: [null, Validators.required],
			postcode: [null, Validators.required],
			sameAsStreet: [null, Validators.required],
			PObox: [null, Validators.required],
			postalSuburb: [null, Validators.required],
			postalState: [null, Validators.required],
			postalPostcode: [null, Validators.required],
			file: [null, Validators.required]
		});
	}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-Company Information');
	}

	browser(event) {
		const files = event.target.files[0];

		const formdata = new FormData();
		formdata.append('', files);

		this.company.upload(formdata).subscribe((res) => {
			this.selectedImage = res.files;
		});
	}
	onFormSubmit() {
		this.company
			.addCompanyInfo(this.companyInfo.value)
			.subscribe((data) => {
				this.browser(event);
			});
	}
}
