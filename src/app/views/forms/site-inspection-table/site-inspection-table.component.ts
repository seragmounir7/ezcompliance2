import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-site-inspection-table',
	templateUrl: './site-inspection-table.component.html',
	styleUrls: ['./site-inspection-table.component.scss']
})
export class SiteInspectionTableComponent implements OnInit {
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
		private shared: RoleManagementSharedServiceService,
		private setTitle: SetTitleService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-Site Inspection List');

		this.isHistory = this.router.url.includes(
			'/siteinspectiontable/history'
		);

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
					this.getsiteInspectionHistory();
				});
		} else {
			this.getsiteInspection();
		}
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
					.deleteSiteInspection(id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});

						this.getsiteInspection();
					});
			}
		});
	}
	getsiteInspection(field = '', value = '') {
		this.logicalFormInfo
			.getAllSiteInspection(field, value)
			.subscribe((res: any) => {
				this.showDatas = res.data;

				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});

				this.tempArray = new MatTableDataSource<any>(this.showDatas);
			});
	}
	getsiteInspectionHistory(field = '', value = '', id = this.id) {
		this.logicalFormInfo
			.getAllSiteInspectionHistory(field, value, id)
			.subscribe((res: any) => {
				this.showDatas = res.result;

				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});

				this.tempArray = new MatTableDataSource<any>(this.showDatas);
			});
	}
	edit(id) {
		this.router.navigate(['/admin/forms/siteInspect/' + id]);
	}

	sortData(sort: Sort) {
		if (this.isHistory) {
			this.getsiteInspectionHistory(sort.active, sort.direction);
			return;
		}
		this.getsiteInspection(sort.active, sort.direction);
	}

	printPage(element) {
		this.shared.printNext(true);
		this.shared.sendPrintData({
			...element,
			formName: 'Site Inspection Form'
		});

		localStorage.clear();
		localStorage.setItem('key', 'print');
		void this.spinner.show();
		this.router.navigate([
			'/',
			{ outlets: { print: ['print', 'siteInspect', element._id] } }
		]);
	}

	view(id) {
		this.router.navigate(
			['/admin/forms/siteinspectiontable/history/siteInspect/' + id],
			{ queryParams: { returnTo: this.router.url } }
		);
	}
}
