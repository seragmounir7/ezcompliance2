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

			this.totalPages = Math.ceil(document.body.scrollHeight / 1123);
		});
	}

	getData() {
		console.log('is Calling >>>>>>>>>>>>>>>>');

		this.id = '62090789d083841874e3faad';
		this.subscript.getCompanyDeatils().subscribe((data: any) => {
			console.log('data=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', data);
			// this.companyData = data;
			(this.companyName = data.data.companyName),
				(this.phone = data.data.phone),
				(this.fax = data.data.fax),
				(this.emailAddress = data.data.email),
				(this.streetAddress = data.data.streetAddress),
				(this.subUrb = data.data.suburb),
				(this.state = data.data.stateId),
				// mailingAddress= data.data.mailingAddress,
				(this.postcode = data.data.postcode),
				(this.companyABN = data.data.companyABN),
				(this.companyAddress = data.data.companyAddress),
				(this.licenceNumber = data.data.licenceNumber),
				(this.companyWeb = data.data.website),
				(this.companyLogo = data.data.companyLogo);
		});
	}

	testPrint() {
		this.shared.printNext(true);
	}
}
