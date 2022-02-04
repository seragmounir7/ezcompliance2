import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort, Sort } from '@angular/material/sort';
import { AddJobTaskComponent } from './add-job-task/add-job-task.component';

@Component({
	selector: 'app-job-task',
	templateUrl: './job-task.component.html',
	styleUrls: ['./job-task.component.scss']
})
export class JobTaskComponent implements AfterViewInit, OnInit {
	mode: any;
	jobTaskData: any = [];
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	displayedColumns: string[] = [
		'index',
		'title',
		'tradeCategoryId',
		'action'
	];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	/////////////mat table end////////////////

	constructor(
		private logicalFormInfo: LogicalFormInfoService,
		private dialog: MatDialog,
		private setTitle: SetTitleService
	) {}

	ngOnInit(): void {
		this.getAllJobTask();
		this.setTitle.setTitle('WHS-Job Task List');
	}

	getAllJobTask(field = '', value = '') {
		this.logicalFormInfo
			.getAllJobtask(field, value)
			.subscribe((res: any) => {
				console.log('jobTaskDetails=>', res);
				// this.jobTaskData = res.data[0].subComponents;
				let data = res.data;
				data.forEach((element, index) => {
					element.index = index + 1; //adding index
				});

				this.ELEMENT_DATA = data;
				this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
				this.dataSource.paginator = this.paginator;
				//this.dataSource.sort = this.sort;
				//  this.task = res.data.subComponents;
			});
	}
	edit(element) {
		const dialogRef = this.dialog.open(EditTaskComponent, {
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
			text: `Do you want to delete "${item.title}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				this.logicalFormInfo
					.deleteJobTask(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Parameter Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});
						console.log('deleted res', res);
						this.getAllJobTask();
					});
			}
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	sortData(sort: Sort) {
		this.getAllJobTask(sort.active, sort.direction);
	}
	addJobTask() {
		let dilog = this.dialog.open(AddJobTaskComponent, {
			width: '70%'
		});
		dilog.afterClosed().subscribe((res) => {
			if (res === 'ok') {
				this.getAllJobTask();
			}
		});
	}
}
