import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort, Sort } from '@angular/material/sort';
import { EditWhsManagerComponent } from './edit-whs-manager/edit-whs-manager.component';
@Component({
	selector: 'app-whs-manager',
	templateUrl: './whs-manager.component.html',
	styleUrls: ['./whs-manager.component.scss']
})
export class WHSManagerComponent implements OnInit {
	mode: any;
	jobTaskData: any = [];
	ELEMENT_DATA = [];
	displayedColumns: string[] = ['index', 'name', 'email', 'action'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	constructor(
		private logicalFormInfo: LogicalFormInfoService,
		private dialog: MatDialog,
		private setTitle: SetTitleService
	) {}

	ngOnInit(): void {
		this.getAllWHSManager();
		this.setTitle.setTitle('WHS-WHS-Manager');
	}
	getAllWHSManager(field = '', value = '') {
		this.logicalFormInfo
			.getAllWHSManager(field, value)
			.subscribe((res: any) => {
				console.log('getAllWHSManager=>', res);
				// this.jobTaskData = res.data[0].subComponents;
				const data = res.data;
				data.forEach((element, index) => {
					element.index = index + 1; //adding index
				});

				this.ELEMENT_DATA = data;
				this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
				this.dataSource.paginator = this.paginator;
				// this.dataSource.sort = this.sort;
				//  this.task = res.data.subComponents;
			});
	}
	edit(element) {
		const dialogRef = this.dialog.open(EditWhsManagerComponent, {
			width: '550px',
			data: element
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.getAllWHSManager();
			}
			console.log('The dialog was closed');
		});
	}
	delete(item) {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete "${item.name}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				this.logicalFormInfo
					.deleteWHSManager(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Detail Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});
						console.log('deleted res', res);
						this.getAllWHSManager();
					});
			}
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	sortData(sort: Sort) {
		this.getAllWHSManager(sort.active, sort.direction);
	}
}
