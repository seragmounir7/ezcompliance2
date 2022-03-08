import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-risk-assessment-setting',
	templateUrl: './risk-assessment-setting.component.html',
	styleUrls: ['./risk-assessment-setting.component.scss']
})
export class RiskAssessmentSettingComponent implements OnInit {
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
