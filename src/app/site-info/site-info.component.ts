import { Component, OnInit } from '@angular/core';
import { SetTitleService } from '../utils/services/set-title.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-site-info',
	templateUrl: './site-info.component.html',
	styleUrls: ['./site-info.component.scss']
})
export class SiteInfoComponent implements OnInit {
	constructor(private setTitle: SetTitleService) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-Site Info');
	}
}
