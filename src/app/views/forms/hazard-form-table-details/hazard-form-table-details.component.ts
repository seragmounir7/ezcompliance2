import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { environment } from 'src/environments/environment';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { map } from 'rxjs/operators';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { FormName } from 'src/app/side-nav-access.enum';
import { RoleManagementService } from 'src/app/utils/services/role-management.service';
import { AccessObj } from 'src/app/utils/types/AccessResponceTypes';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-hazard-form-table-details',
	templateUrl: './hazard-form-table-details.component.html',
	styleUrls: ['./hazard-form-table-details.component.scss']
})
export class HazardFormTableDetailsComponent implements OnInit {
	displayedColumns: string[] = [
		'formId',
		'name',
		'phone',
		'email',
		'site',
		'createdAt',
		'updatedAt',
		'action'
	];
	showDatas: any;
	dataSource: MatTableDataSource<any>;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	isHistory: boolean;
	id: string;
	accessObj: AccessObj;
	constructor(
		private logicalFormInfo: LogicalFormInfoService,
		public router: Router,
		private spinner: NgxSpinnerService,
		private shared: RoleManagementSharedServiceService,
		private activatedRoute: ActivatedRoute,
		private setTitle: SetTitleService,
		private role: RoleManagementService
	) {}

	ngOnInit(): void {
		this.accessObj = this.role.getAccessObj(FormName.WHSForms);
		this.setTitle.setTitle('WHS-Hazard Form List');
		this.isHistory = this.router.url.includes('/hazardTable/history');

		if (this.isHistory) {
			this.activatedRoute.paramMap
				.pipe(map((params) => params.get('id')))
				.subscribe((res) => {
					this.id = res;
					this.displayedColumns = [
						'version',
						'formId',
						'name',
						'phone',
						'email',
						'site',
						'createdTime',
						'updatedTime',
						'action'
					];
					this.getAllHazardFormDataHistory();
				});
		} else {
			this.getAllHazardFormData();
		}
	}
	getAllHazardFormDataHistory(field = '', value = '', id = this.id) {
		this.logicalFormInfo
			.getAllHazardFormDataHistory(field, value, id)
			.subscribe((res: any) => {
				this.showDatas = res.result;
				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});

				this.dataSource = new MatTableDataSource<any>(this.showDatas);
			});
	}
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
					.deleteHazardFormData(id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});

						this.getAllHazardFormData();
					});
			}
		});
	}
	getAllHazardFormData(field = '', value = '') {
		this.logicalFormInfo
			.getAllHazardFormData(field, value)
			.subscribe((res: any) => {
				this.showDatas = res.data;
				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});

				this.dataSource = new MatTableDataSource<any>(this.showDatas);
			});
	}
	edit(id) {
		this.router.navigate(['/admin/forms/hazardRep/' + id]);
	}
	printPage(element) {
		this.shared.printNext(true);

		this.shared.sendPrintData({
			...element,
			formName: 'Hazard Report Form'
		});

		localStorage.setItem('key', 'print');

		this.spinner.show('printLoader');
		this.router.navigate([
			'/',
			{ outlets: { print: ['print', 'hazardRep', element._id] } }
		]);
	}
	sortData(sort: Sort) {
		if (this.isHistory) {
			this.getAllHazardFormDataHistory(sort.active, sort.direction);
			return;
		}
		this.getAllHazardFormData(sort.active, sort.direction);
	}
	view(id) {
		this.router.navigate(
			['/admin/forms/hazardTable/history/hazardRep/' + id],
			{ queryParams: { returnTo: this.router.url } }
		);
	}
}
