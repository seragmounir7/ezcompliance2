import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import 'chart.piecelabel.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/utils/services/auth.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import {
	BarChart,
	Cards,
	CorrectiveActionData,
	CountData,
	DashboardApiService
} from 'src/app/utils/services/dashboard-api.service';
import { Designation } from 'src/app/utils/types/Designation.enum';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { StopSpinner } from 'src/app/stop-spinner-after-view-init';
import { FormControl } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
// import moment, { Moment } from 'moment';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { default as _rollupMoment, Moment } from 'moment';

const moment: any = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
	parse: {
		dateInput: 'MM/YYYY'
	},
	display: {
		dateInput: 'MM/YYYY',
		monthYearLabel: 'MMM YYYY',
		dateA11yLabel: 'LL',
		monthYearA11yLabel: 'MMMM YYYY'
	}
};

@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
	providers: [
		// {
		// 	provide: DateAdapter,
		// 	useClass: MomentDateAdapter,
		// 	deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
		//   },

		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
	]
})
@StopSpinner()
export class DashboardComponent implements OnInit {
	applyFilterSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
		''
	);
	expRem: any;
	auditAndForm: any;
	public doughnutChartLabels: Label[] = ['Near Miss', 'Incident', 'Hazard'];
	public doughnutChartLabels1: Label[] = [];
	public doughnutChartData: MultiDataSet = [[350, 450, 100]];
	public doughnutChartData1: MultiDataSet = [[20, 27, 53]];
	public doughnutChartData2: MultiDataSet = [[15, 35, 50]];
	public doughnutChartData3: MultiDataSet = [[10, 0, 90]];
	public doughnutChartData4: MultiDataSet = [[0, 0, 100]];

	public doughnutChartColor = [
		{
			backgroundColor: [
				'rgba(211,211,211, 0.8)', //near miss
				'rgba(0, 0, 128, 0.8)', //incident
				'rgba(199,20,55,1)' //hazard
			]
		}
	];
	public horiztChartColor: Color[] = [
		{
			backgroundColor: [
				'rgba(199,20,55,0.4)',
				'rgba(199,20,55,0.6)',
				'rgba(199,20,55,0.8)',
				'rgba(199,20,55,1)'
			]
		}
	];
	public barChartColor: Color[] = [
		{ backgroundColor: 'rgba(211,211,211, 0.8)' },
		{ backgroundColor: 'rgba(0, 0, 128, 0.8)' },
		{ backgroundColor: 'rgba(199,20,55,1)' }
	];

	public barChartColor1: Color[] = [
		// new DashBoard
		{ backgroundColor: 'rgb(63, 127, 191)' }
	];

	public doughnutChartType: ChartType = 'doughnut';

	public barChartOptions: ChartOptions = {
		responsive: true
	};
	public barChartOptions1: ChartOptions = {
		responsive: true
	};
	public barChartLabels: Label[] = [
		'Location1',
		'Location3',
		'Location5',
		'Location7'
	];

	public barChartLabels1: Label[] = [];
	public barChartData1: ChartDataSets[] = [];
	correctiveAction$: Observable<CorrectiveActionData[]>;
	resDesignation: string;
	designation: typeof Designation;
	dateParams: string;
	jobsList: any;
	set barChardData(value: BarChart) {
		if (!value) return;
		this.barChartLabels1 = Object.keys(value).map((label) =>
			label
				.split(/(?=[A-Z])/)
				.filter((count) => count.toLowerCase() !== 'count')
				.join(' ')
				.toUpperCase()
		);
		this.barChartData1 = [
			{
				label: 'Type of Injuries',
				data: Object.entries(value).map((x) => x[1] as number)
			}
		];
	}

	public barChartType: ChartType = 'bar';
	public barChartType1: ChartType = 'bar';
	public barChartLegend = true;
	public barChartLegend1 = true;
	public barChartPlugins = [];
	public barChartPlugins1 = [];

	public barChartData: ChartDataSets[] = [
		{ data: [55, 59, 80, 81, 56, 55, 40], label: 'Near miss' },
		{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Incident' },
		{ data: [18, 28, 20, 49, 36, 37, 50], label: 'Hazard' }
	];

	////horizontal chart
	public barChartTypeH: ChartType = 'horizontalBar';
	public barChartLegendH = true;

	public barChartDataH: ChartDataSets[] = [
		{ data: [70, 15, 10, 5], label: 'Safety Consequences', stack: 'a' }
	];
	public barChartLabelsH: string[] = [
		'Insignificant',
		'No Imapact',
		'Minor',
		'Moderate'
	];
	formShow: any;
	isUser$: Observable<boolean>;
	formsCount$: Observable<CountData>;
	cards$: Observable<Cards>;

	// events
	public chartClicked({
		event,
		active
	}: {
		event: MouseEvent;
		active: {}[];
	}): void {}

	public chartHovered({
		event,
		active
	}: {
		event: MouseEvent;
		active: {}[];
	}): void {}
	constructor(
		private spinner: NgxSpinnerService,
		private authService: AuthService,
		private dashboardApiService: DashboardApiService
	) {}

	ngOnInit() {
		this.initilization();
		this.getExpiry();
		this.getFormCounts();
		this.getJobs();
	}

	public chartOptions: any = {
		labels: {
			render: 'percentage'
		}
	};
	private initilization() {
		console.count('initi');
		this.designation = Designation;
		this.getCorrectiveAction();
		this.getFormCountAndCards();
		this.isUser$ = this.authService.isUser$;
		void this.spinner.show();
		setTimeout(() => {
			/** spinner ends after 5 seconds */
			void this.spinner.hide();
		}, 2000);
	}

	getExpiry() {
		this.dashboardApiService.getExp().subscribe((resData) => {
			// console.log("this.expRemthis.expRemthis.expRem", resData)
			this.expRem = resData;
		});
	}

	getFormCounts() {
		this.dashboardApiService.getFormCounts().subscribe((resData) => {
			this.auditAndForm = resData;
		});
	}

	completed(id, name) {
		this.dashboardApiService.updateJobs(id, name).subscribe((resData) => {
			this.getJobs();
		});
	}

	getJobs() {
		this.dashboardApiService.getJobs().subscribe((resData) => {
			this.jobsList = resData;
		});
	}

	private getCorrectiveAction(dateParams: string = this.dateParams) {
		this.correctiveAction$ = this.applyFilterSubject.pipe(
			switchMap((value) =>
				this.dashboardApiService.getCorrectiveAction(value)
			)
		);
	}

	private getFormCountAndCards(dateParams: string = this.dateParams) {
		this.formsCount$ = this.applyFilterSubject.pipe(
			switchMap((value) =>
				this.authService.loginData$.pipe(
					switchMap((res) => {
						if (res.accessToken) {
							this.resDesignation = res.designation;
							switch (res.designation) {
								case Designation.superAdmin:
									return this.dashboardApiService.getFormCount(
										value
									);
								case Designation.clientAdmin:
									return this.dashboardApiService.getFormCount(
										value
									);
								case Designation.user:
									return this.dashboardApiService.getFormCount(
										value
									);
								default:
									return of({} as CountData);
							}
						} else {
							return of({} as CountData);
						}
					})
				)
			)
		);
		this.cards$ = this.formsCount$.pipe(
			map((res) => {
				this.barChardData = res.barChart;
				return res.cards;
			}),
			shareReplay()
		);
		this.formsCount$ = this.formsCount$.pipe(shareReplay());
	}

	slideChanged(event) {
		this.formShow = event.checked;
	}

	updateCorrectiveAction(item: CorrectiveActionData, i: number) {
		let { _id, formName } = item;
		this.dashboardApiService
			.updateCorrectiveAction({ _id, formName })
			.subscribe((res) => {
				console.log(res);
				this.correctiveAction$ = this.dashboardApiService.getCorrectiveAction(
					this.dateParams
				);
			});
	}

	date = new FormControl(null);

	chosenYearHandler(normalizedYear: Moment) {
		const ctrlValue = this.date.value || moment();
		ctrlValue.year(normalizedYear.year());
		this.date.setValue(ctrlValue);
	}

	chosenMonthHandler(
		normalizedMonth: Moment,
		datepicker: MatDatepicker<Moment>
	) {
		const ctrlValue = this.date.value || moment();
		ctrlValue.month(normalizedMonth.month());
		this.date.setValue(ctrlValue);
		datepicker.close();
	}

	applyFilter() {
		const date = this.date.value as Moment;
		this.dateParams = date.toISOString().slice(0, 10);
		console.log(date.toISOString().slice(0, 10), date);
		this.applyFilterSubject.next(this.dateParams);
	}
	reset() {
		this.date.setValue(null);
		this.dateParams = null;
		this.applyFilterSubject.next(this.dateParams);
	}
}
