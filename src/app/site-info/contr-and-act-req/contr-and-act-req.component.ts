import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { SnackbarService } from '../../services/snackbar.service';
import { MatSort, Sort } from '@angular/material/sort';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
	selector: 'app-contr-and-act-req',
	templateUrl: './contr-and-act-req.component.html',
	styleUrls: ['./contr-and-act-req.component.scss']
})
export class ContrAndActReqComponent implements OnInit {
	public Editor = ClassicEditor;
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
		this.getAllContrlActReq();
		this.setTitle.setTitle('WHS-Control And Action Required List');
	}

	getAllContrlActReq(field = '', value = '') {
		this.logicalFormInfo
			.getAllContrlActReq(field, value)
			.subscribe((res: any) => {
				console.log('PPEAll=>', res);
				const data: any[] = res.data;
				data.forEach((element, index) => {
					element.index = index + 1; //adding index
				});

				this.ELEMENT_DATA = data.map((element) =>
					Object.assign({}, { ...element, isDisabled: true })
				);
				this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
				this.dataSource.paginator = this.paginator;
				//this.dataSource.sort = this.sort;
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
			.updateContrlActReq(data, element._id)
			.subscribe((resData) => {
				this.getAllContrlActReq();
				Swal.fire({
					title: 'Parameter Edited successfully',
					showConfirmButton: false,
					timer: 1200
				});
			});
		// const dialogRef = this.dialog.open(EditContActComponent, {
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
					.deleteContrlActReq(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Parameter Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});
						console.log('deleted res', res);
						this.getAllContrlActReq();
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
		this.getAllContrlActReq(sort.active, sort.direction);
	}
}
