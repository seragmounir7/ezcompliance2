import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Component({
	selector: 'app-notifiable-accident',
	templateUrl: './notifiable-accident.component.html',
	styleUrls: ['./notifiable-accident.component.scss']
})
export class NotifiableAccidentSettingComponent implements OnInit {
	selectedIndex$: Observable<number>;

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.selectedIndex$ = this.activatedRoute.queryParams.pipe(
			tap((x) => console.log(x)),
			map((x) => x.selectedTab)
		);
	}

	selectedIndexChange(event) {
		console.log(event);
		this.router.navigate([], {
			relativeTo: this.activatedRoute,
			queryParams: { selectedTab: event }
		});
	}
}
