import { Component, OnInit } from '@angular/core';
import { SetTitleService } from '../utils/services/set-title.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
	constructor(private setTitle: SetTitleService) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-Registration');
	}
}
