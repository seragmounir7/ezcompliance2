import { Component, OnInit } from '@angular/core';
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
	public get data() {
		return this._data;
	}
	public set data(value) {
		this._data = value;
	}

	correctiveActions$: Observable<CorrectiveActionData[]>;

	constructor(private dashboardApiService: DashboardApiService) {}

	ngOnInit(): void {
		this.correctiveActions$ = this.dashboardApiService.getCorrectiveAction();
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
