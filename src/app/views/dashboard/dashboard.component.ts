import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';
import 'chart.piecelabel.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/utils/services/auth.service';
import { Observable, of } from 'rxjs';
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
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
@StopSpinner()
export class DashboardComponent implements OnInit {
	// Doughnut

	corrAct = [
		{
			Item: 'Incorrect Singage',
			Action: 'Install correct singage',
			personResposibility: 'Tim Smith',
			date: '11-01-22'
		},
		{
			Item: 'PPE not issued',
			Action: 'issue PPE',
			personResposibility: 'John Hunt',
			date: '11-01-22'
		},
		{
			Item: 'Staff to be inducted',
			Action: 'Induct new staff members',
			personResposibility: 'John Hunt',
			date: '11-01-22'
		}
	];

	expRem = [
		{ name: 'Tim Smith', type: 'driver Licence', expdate: '10-01-2022' },
		{ name: 'Bob Green', type: 'Security Licence', expdate: '19-01-2022' },
		{ name: 'John Hunt', type: 'EWP Licence', expdate: '22-01-2022' },
		{
			name: 'Thomas Do',
			type: 'Electrical Licence',
			expdate: '01-02-2022'
		},
		{ name: 'Mark jones', type: 'EWP Licence', expdate: '06-02-2022' },
		{
			name: 'Mick Smart',
			type: 'COVID Vacs Passport',
			expdate: '07-03-2022'
		},
		{ name: 'Phil Collins', type: 'Driver Licence', expdate: '10-03-2022' },
		{ name: 'Steve Carol', type: 'Police Check', expdate: '11-03-2022' }
	];

	auditAndForm = [
		{ audit: 'Take 5', quantity: '20' },
		{ audit: 'site Induction', quantity: '15' },
		{ audit: 'Safety Meetings', quantity: '4' },
		{ audit: 'Site Inspections', quantity: '6' },
		{ audit: 'Plant Inspections', quantity: '5' },
		{ audit: 'Corrective Actions', quantity: '5' },
		{ audit: 'Return to work plan', quantity: '1' },
		{ audit: 'Vehicle Inspections', quantity: '12' },
		{ audit: 'Permit to Work', quantity: '4' }
	];

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
	set barChardData(value: BarChart) {
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
		this.designation = Designation;
		this.correctiveAction$ = this.dashboardApiService.getCorrectiveAction();
		this.formsCount$ = this.authService.loginData$.pipe(
			switchMap((res) => {
				if (res.accessToken) {
					this.resDesignation = res.designation;
					switch (res.designation) {
						case Designation.superAdmin:
							return this.dashboardApiService.getFormCount();
						case Designation.clientAdmin:
							return this.dashboardApiService.getFormCount();
						case Designation.user:
							return this.dashboardApiService.getFormCount();
						default:
							return of({} as CountData);
					}
				} else {
					return of({} as CountData);
				}
			})
		);
		this.cards$ = this.formsCount$.pipe(
			map((res) => {
				this.barChardData = res.barChart;
				return res.cards;
			}),
			shareReplay()
		);
		this.formsCount$ = this.formsCount$.pipe(shareReplay());
		this.isUser$ = this.authService.isUser$;
		void this.spinner.show();
		setTimeout(() => {
			/** spinner ends after 5 seconds */
			void this.spinner.hide();
		}, 2000);
	}

	public chartOptions: any = {
		labels: {
			render: 'percentage'
		}
	};
	slideChanged(event) {
		this.formShow = event.checked;
	}

	updateCorrectiveAction(item: CorrectiveActionData, i: number) {
		let { _id, formName } = item;
		this.dashboardApiService
			.updateCorrectiveAction({ _id, formName })
			.subscribe((res) => {
				console.log(res);
				this.correctiveAction$ = this.dashboardApiService.getCorrectiveAction();
			});
	}
}
