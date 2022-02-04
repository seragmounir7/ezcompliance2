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
		'streetNumber',
		'streetAddress',
		'suburb',
		'state',
		'customerName',
		'customerContact',
		//'customerContactPhone',
		// 'customerEmail',
		/* 'edit', */
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
		this.setTitle.setTitle('WHS-Add Site Info');
		this.getAllJobNumber();
	}
	getAllJobNumber(field = '', value = '') {
		this.logicalFormInfoService
			.getAllJobNumber(field, value)
			.subscribe((res: any) => {
				console.log(res);
				this.dataSource = res.data;
				console.log('getAllJobNumber', this.dataSource);
				this.dataSource.paginator = this.paginator;
				// this.dataSource.sort = this.sort;
			});
	}

	getAllJobTask() {
		// this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
		//   console.log('jobTaskDetails=>', res);
		//   // this.jobTaskData = res.data[0].subComponents;
		//   let data = res.data
		//   data.forEach((element, index) => {
		//     element.index = index + 1; //adding index
		//   });
		//   this.ELEMENT_DATA = data;
		//   this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
		//   this.dataSource.paginator = this.paginator;
		//   //  this.task = res.data.subComponents;
		// });
	}

	openDialog(id) {
		let dialogRef = this.dialog.open(CreateJobNoComponent, {
			height: '80%',
			data: {
				action: 'new',
				userId: id
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log(
				'CustomerInfoComponent -> openDialog -> result',
				result
			);
			console.log('result', result);
			if (result === 'success') {
				this.getAllJobNumber();
				Swal.fire({
					title: 'Job Number created successfully',
					showConfirmButton: false,
					timer: 1200
				});
			}
			console.log('The dialog was closed');
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
			console.log('The dialog was closed');
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
						console.log('deleted res', res);
						this.getAllJobNumber();
					});
			}
		});
	}
	sortData(sort: Sort) {
		this.getAllJobNumber(sort.active, sort.direction);
	}
}
