import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {
	CorrectiveActionData,
	DashboardApiService
} from 'src/app/utils/services/dashboard-api.service';

@Component({
	selector: 'app-corrective-action-table',
	templateUrl: './corrective-action-table.component.html',
	styleUrls: ['./corrective-action-table.component.scss']
})
export class CorrectiveActionTableComponent implements OnInit {
	displayedColumns = ['action', 'personRes', 'date', 'completed'];
	private _data = [
		{
			item: '',
			action: '',
			personRes: '',
			date: ''
		}
	];
	dateParams: string;
	public get data() {
		return this._data;
	}
	public set data(value) {
		this._data = value;
	}

	correctiveActions$: Observable<CorrectiveActionData[]>;

	constructor(
		private dashboardApiService: DashboardApiService,
		private activatedRoute: ActivatedRoute
	) {
		activatedRoute.queryParams.subscribe((res) => {
			console.log(
				'🚀 ~ file: corrective-action-table.component.ts ~ line 40 ~ CorrectiveActionTableComponent ~ res',
				res
			);
			this.dateParams = res.date;
		});
	}

	ngOnInit(): void {
		this.correctiveActions$ = this.dashboardApiService.getCorrectiveAction(
			this.dateParams
		);
	}
	updateCorrectiveAction(item: CorrectiveActionData, i: number) {
		let { _id, formName } = item;
		this.dashboardApiService
			.updateCorrectiveAction({ _id, formName })
			.subscribe((res) => {
				console.log(res);
				this.correctiveActions$ = this.correctiveActions$;
			});
	}
}
