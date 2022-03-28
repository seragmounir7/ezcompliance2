import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SnackbarService } from '../services/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { LogicalFormInfoService } from '../utils/services/logical-form-info.service';
import { SetTitleService } from '../utils/services/set-title.service';
import Swal from 'sweetalert2';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentService } from '../utils/services/department.service';

@Component({
	selector: 'app-department',
	templateUrl: './department.component.html',
	styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
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
		private departmentService: DepartmentService,
		private dialog: MatDialog,
		private setTitle: SetTitleService
	) {}

	ngOnInit(): void {
		this.getAllDepartment();
		this.setTitle.setTitle('WHS-Control And Action Required List');
	}

	getAllDepartment(field = '', value = '') {
		this.departmentService.getAllDepartment().subscribe((res: any) => {
			const data: any[] = res.data;
			data.forEach((element, index) => {
				element.index = index + 1; //adding index
			});

			this.ELEMENT_DATA = data.map((element) =>
				Object.assign({}, { ...element, isDisabled: true })
			);
			this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
			this.dataSource.paginator = this.paginator;
		});
	}
	edit(element) {
		if (element.isDisabled) return;
		if (element.title === element.updatedValue) return;
		const departmentName = element.updatedValue;
		this.departmentService
			.updateDepartment(element._id, { departmentName })
			.subscribe((resData) => {
				this.getAllDepartment();
				Swal.fire({
					title: 'Parameter Edited successfully',
					showConfirmButton: false,
					timer: 1200
				});
			});
	}
	delete(item) {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete "${item.departmentName}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				this.departmentService
					.deleteDepartment(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Parameter Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});

						this.getAllDepartment();
					});
			}
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	copySuccess() {
		this.snack.openSnackBar('Copied to clipboard');
	}
	sortData(sort: Sort) {
		this.getAllDepartment(sort.active, sort.direction);
	}

	addDepartment() {
		const dialogRef = this.dialog.open(AddDepartmentComponent, {});
		dialogRef.afterClosed().subscribe((res) => {
			if (res) {
				Swal.fire({
					title: 'Deparment Added successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.getAllDepartment();
			}
		});
	}
	log(e) {
		console.log(e);
	}
}
