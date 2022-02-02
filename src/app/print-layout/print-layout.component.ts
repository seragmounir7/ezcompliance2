import { Component, OnInit } from '@angular/core';
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
	companyABN: any;
	licenceNumber: any;
	companyWeb: any;
	id: any;
	companyData: any;
	fax: any;
	state: any;
	companyAddress: any;
	constructor(private subscript: SubscriptionService) {}

	ngOnInit(): void {
		this.getData();
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
				(this.companyABN = data.data.customerDetails.companyABN),
				(this.companyAddress =
					data.data.customerDetails.companyAddress),
				(this.licenceNumber = data.data.customerDetails.licenceNumber),
				(this.companyWeb = data.data.customerDetails.website),
				(this.companyLogo = data.data.customerDetails.companyLogo);
		});
	}
}
