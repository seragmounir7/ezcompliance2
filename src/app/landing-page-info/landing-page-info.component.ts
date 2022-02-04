import { Component, OnInit } from '@angular/core';
import { SetTitleService } from '../utils/services/set-title.service';

@Component({
	selector: 'app-landing-page-info',
	templateUrl: './landing-page-info.component.html',
	styleUrls: ['./landing-page-info.component.scss']
})
export class LandingPageInfoComponent implements OnInit {
	constructor(private setTitle: SetTitleService) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-Landing Page Information');
	}
}
