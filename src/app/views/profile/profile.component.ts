import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/utils/services/app.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
	constructor(
		public appService: AppService,
		private setTitle: SetTitleService
	) {}

	ngOnInit() {
		this.setTitle.setTitle('WHS-Profile');
	}
}
