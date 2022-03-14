import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs/operators';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import Swal from 'sweetalert2';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-incidents-table',
	templateUrl: './incidents-table.component.html',
	styleUrls: ['./incidents-table.component.scss']
})
export class IncidentsTableComponent implements OnInit {
	displayedColumns: string[] = [
		'formId',
		'projectName',
		'customerName',
		'Email',
		'Site',
		'createdAt',
		'updatedAt',
		'Action'
	];
	showDatas: any;
	tempArray: MatTableDataSource<any>;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	isHistory: boolean = false;
	id: string;
	constructor(
		private logicalFormInfo: LogicalFormInfoService,
		public router: Router,
		private shared: RoleManagementSharedServiceService,
		private spinner: NgxSpinnerService,
		private activatedRoute: ActivatedRoute,
		private setTitle: SetTitleService
	) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-Accident Report List');
		this.isHistory = this.router.url.includes('/incidentsTable/history');

		if (this.isHistory) {
			this.activatedRoute.paramMap
				.pipe(map((params) => params.get('id')))
				.subscribe((res) => {
					this.id = res;
					this.displayedColumns = [
						'version',
						'formId',
						'projectName',
						'customerName',
						'Email',
						'Site',
						'createdTime',
						'updatedTime',
						'Action'
					];
					this.getIncidentReportHistory();
				});
		} else {
			this.getIncidentReport();
		}
	}
	view(id) {
		this.router.navigate(
			['/admin/forms/incidentsTable/history/incidentRep/' + id],
			{ queryParams: { returnTo: this.router.url } }
		);
	}
	getIncidentReportHistory(field = '', value = '', id = this.id) {
		this.logicalFormInfo
			.getAllIncidentHistory(field, value, id)
			.subscribe((res: any) => {
				this.showDatas = res.data[0].result;
				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});
				this.tempArray = new MatTableDataSource<any>(this.showDatas);
			});
	}
	ngAfterViewInit() {}
	delete(id) {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete `,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				this.logicalFormInfo
					.deleteIncidentReport(id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});

						this.getIncidentReport();
					});
			}
		});
	}
	getIncidentReport(field = '', value = '') {
		this.logicalFormInfo
			.getAllIncidentReport(field, value)
			.subscribe((res: any) => {
				this.showDatas = res.data;
				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});
				this.tempArray = new MatTableDataSource<any>(this.showDatas);
			});
	}
	edit(id) {
		this.router.navigate(['/admin/forms/incidentRep/' + id]);
	}

	sortData(sort: Sort) {
		if (this.isHistory) {
			this.getIncidentReportHistory(sort.active, sort.direction);
			return;
		}
		this.getIncidentReport(sort.active, sort.direction);
	}

	printPage(element) {
		this.shared.printNext(true);
		this.shared.sendPrintData({
			...element,
			formName: 'Accident Report'
		});

		localStorage.setItem('key', 'print');
		void this.spinner.show();
		this.router.navigate([
			'/',
			{ outlets: { print: ['print', 'incidentRep', element._id] } }
		]);
	}
}
