import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, Subscription } from 'rxjs';

@Component({
	selector: 'app-invoice',
	templateUrl: './invoice.component.html',
	styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {
	constructor(private router: Router) {}
	ngOnInit(): void {}
	printPage() {
		// window.print()
		// this.router.navigate([
		// 	'/',
		// 	{ outlets: { printInvoice: ['printinvoice'] } }
		// ]);

		this.router
			.navigate(['/', { outlets: { print: ['print', 'invoice'] } }])
			.then((res) => {
				window.print();
			});
	}
}
