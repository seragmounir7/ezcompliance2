import { Component, OnInit } from '@angular/core';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-not-found-page',
	templateUrl: './not-found-page.component.html',
	styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
