import Swal from 'sweetalert2';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { CreateJobNoComponent } from './create-job-no/create-job-no.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddSiteComponent } from 'src/app/site-info/add-site-info/add-site/add-site.component';
import { EditSiteComponent } from 'src/app/site-info/add-site-info/edit-site/edit-site.component';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort, Sort } from '@angular/material/sort';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-job-number',
	templateUrl: './job-number.component.html',
	styleUrls: ['./job-number.component.scss']
})
export class JobNumberComponent implements OnInit {
	@ViewChild(MatSort) sort: MatSort;
	mode: any;
	jobTaskData: any = [];
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	displayedColumns: string[] = [
		'jobNumber',
		'siteName',
		'streetAddress',
		'suburb',
		'state',
		'customerName',
		'customerContact',
		'action'
	];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	/////////////mat table end////////////////

	constructor(
		private dialog: MatDialog,
		private setTitle: SetTitleService,
		private logicalFormInfoService: LogicalFormInfoService
	) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-Job Number List');
		this.getAllJobNumber();
	}
	getAllJobNumber(field = '', value = '') {
		this.logicalFormInfoService
			.getAllJobNumber(field, value)
			.subscribe((res: any) => {
				this.dataSource = res.data;

				this.dataSource.paginator = this.paginator;
				// this.dataSource.sort = this.sort;
			});
	}

	getAllJobTask() {
		// this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
		//   let data = res.data
		// });
	}

	openDialog(id) {
		const dialogRef = this.dialog.open(CreateJobNoComponent, {
			height: '80%',
			data: {
				action: 'new',
				userId: id
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result === 'success') {
				this.getAllJobNumber();
				Swal.fire({
					title: 'Job Number created successfully',
					showConfirmButton: false,
					timer: 1200
				});
			}
		});
	}
	edit(element) {
		const dialogRef = this.dialog.open(EditSiteComponent, {
			width: '550px',
			data: element
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.getAllJobTask();
			}
		});
	}
	delete(item) {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete "${item.jobNumber}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				this.logicalFormInfoService
					.deleteJobNumber(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Job Number Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});

						this.getAllJobNumber();
					});
			}
		});
	}
	sortData(sort: Sort) {
		this.getAllJobNumber(sort.active, sort.direction);
	}
}
