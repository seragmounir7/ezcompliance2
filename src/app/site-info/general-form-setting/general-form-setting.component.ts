import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { AuthService } from 'src/app/utils/services/auth.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-general-form-setting',
	templateUrl: './general-form-setting.component.html',
	styleUrls: ['./general-form-setting.component.scss']
})
export class GeneralFormSettingComponent implements OnInit {
	selectedIndex$: Observable<number>;
	isAdmin$: Observable<boolean>;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.isAdmin$ = this.authService.isAdmin$;
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
