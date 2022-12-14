import { environment } from './../../../../environments/environment';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { map } from 'rxjs/operators';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-risk-assesment-table',
	templateUrl: './risk-assesment-table.component.html',
	styleUrls: ['./risk-assesment-table.component.scss']
})
export class RiskAssesmentTableComponent implements OnInit {
	displayedColumns: string[] = [
		'formId',
		'customerName',
		'phone',
		'email',
		'site',
		'createdAt',
		'updatedAt',
		'action'
	];
	showDatas: any;
	tempArray: MatTableDataSource<any>;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	isHistory: boolean;
	id: string;
	constructor(
		private logicalFormInfo: LogicalFormInfoService,
		public router: Router,
		private spinner: NgxSpinnerService,
		private setTitle: SetTitleService,
		private shared: RoleManagementSharedServiceService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-Risk Assessment List');

		this.isHistory = this.router.url.includes('/riskAssessTable/history');

		if (this.isHistory) {
			this.activatedRoute.paramMap
				.pipe(map((params) => params.get('id')))
				.subscribe((res) => {
					this.id = res;
					this.displayedColumns = [
						'version',
						'formId',
						'customerName',
						'phone',
						'email',
						'site',
						'createdTime',
						'updatedTime',
						'action'
					];
					this.getAssesmentHistory();
				});
		} else {
			this.getAssesment();
		}
	}
	getAssesmentHistory(field = '', value = '', id = this.id) {
		this.logicalFormInfo
			.getAllassessmetHistory(field, value, id)
			.subscribe((res: any) => {
				this.showDatas = res.result;
				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});

				this.tempArray = new MatTableDataSource<any>(this.showDatas);
			});
	}

	ngAfterViewInit() {}
	delete(item) {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete "${item.customerName}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				void this.spinner.show();
				this.logicalFormInfo
					.deleteAssessment(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: `"${item.customerName}"? Deleted successfully`,
							showConfirmButton: false,
							timer: 1200
						});
						this.getAssesment();
						void this.spinner.hide();
					});
			}
		});
	}
	printPage(element) {
		this.shared.printNext(true);
		this.shared.sendPrintData({
			...element,
			formName: 'Risk Assessment and SWMS'
		});

		localStorage.setItem('key', 'print');

		this.spinner.show('printLoader');
		this.router.navigate([
			'/',
			{ outlets: { print: ['print', 'riskAssessSWMS', element._id] } }
		]);
	}
	getAssesment(field = '', value = '') {
		this.logicalFormInfo
			.getAllassessmet(field, value)
			.subscribe((res: any) => {
				this.showDatas = res.data;
				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});

				this.tempArray = new MatTableDataSource<any>(this.showDatas);
			});
	}
	edit(id) {
		localStorage.setItem('key', ' ');
		this.router.navigate(['/admin/forms/riskAssessSWMS/' + id]);
	}

	sortData(sort: Sort) {
		if (this.isHistory) {
			this.getAssesmentHistory(sort.active, sort.direction);
			return;
		}
		this.getAssesment(sort.active, sort.direction);
	}
	view(id) {
		this.router.navigate(
			['/admin/forms/riskAssessTable/history/riskAssessSWMS/' + id],
			{ queryParams: { returnTo: this.router.url } }
		);
	}
}
