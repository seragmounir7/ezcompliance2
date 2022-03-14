import { Component, OnInit } from '@angular/core';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-confi-logi',
	templateUrl: './confi-logi.component.html',
	styleUrls: ['./confi-logi.component.scss']
})
export class ConfiLogiComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
