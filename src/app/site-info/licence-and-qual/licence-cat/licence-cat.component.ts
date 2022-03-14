import { EditLicenceCatComponent } from './edit-licence-cat/edit-licence-cat.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-licence-cat',
	templateUrl: './licence-cat.component.html',
	styleUrls: ['./licence-cat.component.scss']
})
export class LicenceCatComponent implements OnInit {
	@ViewChild('table') table: MatTable<any>;

	mode: any;
	jobTaskData: any = [];
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	displayedColumns: string[] = ['title', 'action'];
	// dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	dataSource = new Array<any>();
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	ngAfterViewInit() {
		// this.dataSource.paginator = this.paginator;
	}
	/////////////mat table end////////////////

	constructor(
		private logicalFormInfo: LogicalFormInfoService,
		private setTitle: SetTitleService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.getAllLicenceCat();
		this.setTitle.setTitle('WHS-Trade Category List');
	}

	getAllLicenceCat(field = '', value = '') {
		this.logicalFormInfo.getAllLicenceCat(field, value).subscribe((res) => {
			// this.jobTaskData = res.data[0].subComponents;
			const data = res.data;
			data.forEach((element, index) => {
				element.index = index + 1; //adding index
			});

			this.ELEMENT_DATA = data;
			// this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
			this.dataSource = this.ELEMENT_DATA;
			// this.dataSource.paginator = this.paginator;
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

						this.getAllLicenceCat();
					});
			}
		});
	}
	applyFilter(event: Event) {
		// const filterValue = (event.target as HTMLInputElement).value;
		// this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	sortData(sort: Sort): void {
		this.getAllLicenceCat(sort.active, sort.direction);
	}
	toggleCategory(event: MatCheckboxChange, element) {
		// if(event.checked){

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

	dropTable(event: CdkDragDrop<any[]>) {
		const prevIndex = this.dataSource.findIndex(
			(d) => d === event.item.data
		);
		moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
		this.table.renderRows();
	}
	onSaveOrder() {
		this.displayedColumns = ['title', 'action'];
		this.logicalFormInfo.reOrderCat(this.dataSource).subscribe((res) => {});
	}
}
