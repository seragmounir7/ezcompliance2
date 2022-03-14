import { Component, OnInit } from '@angular/core';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-blank',
	templateUrl: './blank.component.html',
	styleUrls: ['./blank.component.scss']
})
export class BlankComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
