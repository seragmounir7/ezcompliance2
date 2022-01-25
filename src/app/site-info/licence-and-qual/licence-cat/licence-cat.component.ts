import { EditLicenceCatComponent } from './edit-licence-cat/edit-licence-cat.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatCheckboxChange } from '@angular/material/checkbox';
@Component({
	selector: 'app-licence-cat',
	templateUrl: './licence-cat.component.html',
	styleUrls: ['./licence-cat.component.scss']
})
export class LicenceCatComponent implements OnInit {
	mode: any;
	jobTaskData: any = [];
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	displayedColumns: string[] = ['index', 'title', 'action'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	/////////////mat table end////////////////

	constructor(
		private logicalFormInfo: LogicalFormInfoService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.getAllLicenceCat();
	}

	getAllLicenceCat(field = '', value = '') {
		this.logicalFormInfo.getAllLicenceCat(field, value).subscribe((res) => {
			console.log('getAllLicenceCat=>', res);
			// this.jobTaskData = res.data[0].subComponents;
			let data = res.data;
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
		const dialogRef = this.dialog.open(EditLicenceCatComponent, {
			width: '550px',
			data: element
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.getAllLicenceCat();
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
					.deleteLicenceCat(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Category Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});
						console.log('deleted res', res);
						this.getAllLicenceCat();
					});
			}
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	sortData(sort: Sort) {
		this.getAllLicenceCat(sort.active, sort.direction);
	}
	toggleCategory(event: MatCheckboxChange, element) {
		// if(event.checked){
		console.log(element, event.checked);
		this.logicalFormInfo
			.updateLicenceCat({ show: event.checked }, element._id)
			.subscribe((res) => {
				Swal.fire({
					title: `Category ${
						event.checked ? 'Displayed' : 'Hidden'
					}  successfully`,
					showConfirmButton: false,
					timer: 1200
				});
			});
		// }
	}
}
