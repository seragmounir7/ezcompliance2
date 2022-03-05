import { SnackbarService } from './../../services/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { EditHazardComponent } from './edit-hazard/edit-hazard.component';
import { MatSort, Sort } from '@angular/material/sort';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
	selector: 'app-identify-hazards',
	templateUrl: './identify-hazards.component.html',
	styleUrls: ['./identify-hazards.component.scss']
})
export class IdentifyHazardsComponent implements OnInit {
	public Editor = ClassicEditor;
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
		private snack: SnackbarService,
		private logicalFormInfo: LogicalFormInfoService,
		private dialog: MatDialog,
		private setTitle: SetTitleService
	) {}

	ngOnInit(): void {
		this.getAllHazards();
		this.setTitle.setTitle('WHS-Identify Hazards List');
	}

	getAllHazards(field = '', value = '') {
		this.logicalFormInfo
			.getAllHazards(field, value)
			.subscribe((res: any) => {
				console.log('getAllHazards=>', res);
				const data = res.data;
				data.forEach((element, index) => {
					element.index = index + 1; //adding index
					element.isDisabled = true;
				});

				this.ELEMENT_DATA = data;
				this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
				this.dataSource.paginator = this.paginator;
				// this.dataSource.sort = this.sort;
				console.log('this.ELEMENT_DATA', this.ELEMENT_DATA);

				//  this.task = res.data.subComponents;
			});
	}
	edit(element) {
		if (element.isDisabled) return;
		if (element.title === element.updatedValue) return;
		const data = {
			title: element.updatedValue
		};
		this.logicalFormInfo
			.updateHazards(data, element._id)
			.subscribe((resData) => {
				console.log('resData', resData);
				this.getAllHazards();
				Swal.fire({
					title: 'Parameter Updated successfully',
					showConfirmButton: false,
					timer: 1200
				});
			});
		// const dialogRef = this.dialog.open(EditHazardComponent, {
		// 	width: '550px',
		// 	data: element
		// });
		// dialogRef.afterClosed().subscribe((result) => {
		// 	if (result == 'true') {
		// 	}
		// 	console.log('The dialog was closed');
		// });
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
					.deleteHazards(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Parameter Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});
						console.log('deleted res', res);
						this.getAllHazards();
					});
			}
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	copySuccess() {
		console.log('copy successfull');
		this.snack.openSnackBar('Copied to clipboard');
	}
	sortData(sort: Sort) {
		this.getAllHazards(sort.active, sort.direction);
	}
}
