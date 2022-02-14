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
	constructor(
		private logicalFormInfo: LogicalFormInfoService,
		public router: Router,
		private spinner: NgxSpinnerService,
		private shared: RoleManagementSharedServiceService,
		private activatedRoute: ActivatedRoute,
		private setTitle: SetTitleService
	) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-Hazard Form List');
		this.isHistory = this.router.url.includes('/hazardTable/history');
		console.log(this.isHistory);
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
				console.log('res', res.data);

				this.showDatas = res.result;
				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});
				console.log('this.showDatas', this.showDatas);

				this.dataSource = new MatTableDataSource<any>(this.showDatas);
				console.log('get res', this.showDatas);
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
						console.log('deleted res', res);
						this.getAllHazardFormData();
					});
			}
		});
	}
	getAllHazardFormData(field = '', value = '') {
		this.logicalFormInfo
			.getAllHazardFormData(field, value)
			.subscribe((res: any) => {
				console.log('res', res.data);

				this.showDatas = res.data;
				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});
				console.log('this.showDatas', this.showDatas);

				this.dataSource = new MatTableDataSource<any>(this.showDatas);
				console.log('get res', this.showDatas);
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
		console.log('check');
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
