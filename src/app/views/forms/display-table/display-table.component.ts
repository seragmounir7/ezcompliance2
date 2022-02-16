import { map } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { environment } from 'src/environments/environment';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
@Component({
	selector: 'app-display-table',
	templateUrl: './display-table.component.html',
	styleUrls: ['./display-table.component.scss']
})
export class DisplayTableComponent implements OnInit {
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
	id: any;
	isHistory: boolean;
	role: any[] = ['product owner'];
	constructor(
		private activatedRoute: ActivatedRoute,
		private logicalFormInfo: LogicalFormInfoService,
		public router: Router,
		private shared: RoleManagementSharedServiceService,
		private spinner: NgxSpinnerService,
		private setTitle: SetTitleService
	) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-ToolBox Talk List');
		this.isHistory = this.router.url.includes('/tableData/history');
		console.log(this.isHistory);
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
					this.getToolBoxHistory();
				});
		} else {
			this.getToolBox();
		}
	}
	ngAfterViewInit() {}
	delete(id) {
		this.logicalFormInfo.deleteToolBox(id).subscribe((res) => {
			console.log('deleted', res);
			this.getToolBox();
		});
	}
	getToolBox(field = '', value = '') {
		this.logicalFormInfo.gettoolBox(field, value).subscribe((res: any) => {
			this.showDatas = res.data;
			this.showDatas.forEach((element, i) => {
				return (this.showDatas[i].index = i);
			});
			this.tempArray = new MatTableDataSource<any>(this.showDatas);
			console.log('get res', this.showDatas);
		});
	}
	getToolBoxHistory(field = '', value = '', id = this.id) {
		this.logicalFormInfo
			.gettoolBoxHistory(field, value, id)
			.subscribe((res: any) => {
				this.showDatas = res.data[0].result;
				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});
				this.tempArray = new MatTableDataSource<any>(this.showDatas);
				console.log('get res', this.showDatas);
			});
	}
	edit(id) {
		this.router.navigate(['/admin/forms/toolboxTalk/' + id]);
	}

	view(id) {
		this.router.navigate(
			['/admin/forms/tableData/history/toolboxTalk/' + id],
			{ queryParams: { returnTo: this.router.url } }
		);
	}

	sortData(sort: Sort) {
		if (this.isHistory) {
			this.getToolBoxHistory(sort.active, sort.direction);
			return;
		}
		this.getToolBox(sort.active, sort.direction);
	}

	printPage(element) {
		this.shared.printNext(true);
		this.shared.sendPrintData({ ...element, formName: 'Toolbox Talk' });
		console.log('check');
		localStorage.setItem('key', 'print');
		void this.spinner.show();
		this.router.navigate([
			'/',
			{ outlets: { print: ['print', 'toolboxTalk', element._id] } }
		]);
	}
}
