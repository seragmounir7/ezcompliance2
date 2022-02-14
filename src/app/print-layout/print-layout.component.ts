import { Component, OnInit } from '@angular/core';
import { RoleManagementSharedServiceService } from '../utils/services/role-management-shared-service.service';
import { SubscriptionService } from '../utils/services/subscription.service';

@Component({
	selector: 'app-print-layout',
	templateUrl: './print-layout.component.html',
	styleUrls: [
		'./print-layout.component.scss',
		'./new-print-layout.componet.scss'
	]
})
export class PrintLayoutComponent implements OnInit {
	companyName: any;
	phone: any;
	emailAddress: any;
	companyLogo: any;
	streetAddress: any;
	subUrb: any;
	postcode: any;
	companyABN: any;
	licenceNumber: any;
	companyWeb: any;
	id: any;
	companyData: any;
	fax: any;
	state: any;
	companyAddress: any;
	formNam: any;
	version: any;
	pageNumber: any;
	totalPages: any;

	constructor(
		private subscript: SubscriptionService,
		private shared: RoleManagementSharedServiceService
	) {}

	ngOnInit(): void {
		this.getData();
		this.shared.printDataObs$.subscribe((res) => {
			console.log('check print data obs::', res);
			this.formNam = res.formName;
			this.version = res.version;
		});
		this.totalPages = Math.ceil(document.body.scrollHeight / 1123);
	}

	getData() {
		this.id = '61eeeef751744133c768653c';
		this.subscript.getsubscription(this.id).subscribe((data) => {
			console.log('data=>', data);
			(this.companyName = data.data.customerDetails.companyName),
				(this.phone = data.data.customerDetails.phone),
				(this.fax = data.data.customerDetails.fax),
				(this.emailAddress = data.data.customerDetails.email),
				(this.streetAddress = data.data.customerDetails.streetAddress),
				(this.subUrb = data.data.customerDetails.suburb),
				(this.state = data.data.customerDetails.stateId),
				// mailingAddress= data.data.customerDetails.mailingAddress,
				(this.postcode = data.data.customerDetails.postcode),
				(this.companyABN = data.data.customerDetails.companyABN),
				(this.companyAddress =
					data.data.customerDetails.companyAddress),
				(this.licenceNumber = data.data.customerDetails.licenceNumber),
				(this.companyWeb = data.data.customerDetails.website),
				(this.companyLogo = data.data.customerDetails.companyLogo);
		});
	}

	testPrint() {
		this.shared.printNext(true);
	}
}
