import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-state-relation-setting',
	templateUrl: './state-relation-setting.component.html',
	styleUrls: ['./state-relation-setting.component.scss']
})
export class StateRelationSettingComponent implements OnInit {
	selectedIndex$: Observable<number>;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.selectedIndex$ = this.activatedRoute.queryParams.pipe(
			map((x) => x.selectedTab)
		);
	}

	selectedIndexChange(event) {
		this.router.navigate([], {
			relativeTo: this.activatedRoute,
			queryParams: { selectedTab: event }
		});
	}
}
