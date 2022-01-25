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
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.isHistory = this.router.url.includes(
			'/siteinspectiontable/history'
		);
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
						console.log('deleted res', res);
						this.getsiteInspection();
					});
			}
		});
	}
	getsiteInspection(field = '', value = '') {
		this.logicalFormInfo
			.getAllSiteInspection(field, value)
			.subscribe((res: any) => {
				console.log('res', res.data);

				this.showDatas = res.data;
				console.log('res', this.showDatas);
				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});

				this.tempArray = new MatTableDataSource<any>(this.showDatas);
				// this.tempArray.paginator = this.paginator;
				// this.tempArray.sort = this.sort;
				console.log('get res', this.showDatas);
			});
	}
	getsiteInspectionHistory(field = '', value = '', id = this.id) {
		this.logicalFormInfo
			.getAllSiteInspectionHistory(field, value, id)
			.subscribe((res: any) => {
				console.log('res', res.result);

				this.showDatas = res.result;
				console.log('res', this.showDatas);
				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});

				this.tempArray = new MatTableDataSource<any>(this.showDatas);
				// this.tempArray.paginator = this.paginator;
				// this.tempArray.sort = this.sort;
				console.log('get res', this.showDatas);
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

	printPage(id) {
		this.shared.printNext(true);
		console.log('check');
		// this.logicalFormInfo.printing.next('print');
		localStorage.clear();
		localStorage.setItem('key', 'print');
		// $("<iframe>")                             // create a new iframe element
		//     .hide()                               // make it invisible
		//     .attr("src", "http://localhost:4200/#/admin/forms/hazardRep/"+id) // point the iframe to the page you want to print
		//     .appendTo("body");                    // add iframe to the DOM to cause it to load the page
		// void this.spinner.show();
		// let iframe=document.createElement("iframe")
		// iframe.id = "printIframe"
		//       iframe.src= environment.stagingUrl+"#/admin/forms/siteInspect/"+id
		//       iframe.style.display="none";
		//       let body = document.getElementsByTagName("body")
		//       body[0].appendChild(iframe)
		//       setTimeout(() => {
		//         void this.spinner.hide();
		//       }, 3500);
		void this.spinner.show();
		this.router.navigate([
			'/',
			{ outlets: { print: ['print', 'siteInspect', id] } }
		]);
	}

	view(id) {
		this.router.navigate(
			['/admin/forms/siteinspectiontable/history/siteInspect/' + id],
			{ queryParams: { returnTo: this.router.url } }
		);
	}
}
