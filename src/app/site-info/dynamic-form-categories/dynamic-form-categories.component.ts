import { title } from 'process';
import { DynamicFormsService } from './../../utils/services/dynamic-forms.service';
import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { AddFormCategoriesComponent } from './add-form-categories/add-form-categories.component';
import { MatSort, Sort } from '@angular/material/sort';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-dynamic-form-categories',
	templateUrl: './dynamic-form-categories.component.html',
	styleUrls: ['./dynamic-form-categories.component.scss']
})
export class DynamicFormCategoriesComponent implements OnInit {
	ELEMENT_DATA = [];
	displayedColumns: string[] = ['index', 'category', 'action'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	constructor(
		private setTitle: SetTitleService,
		private dialog: MatDialog,
		private dynamicService: DynamicFormsService
	) {}

	ngOnInit(): void {
		this.getAllCategory();
		this.setTitle.setTitle('Add Dynamic Form Category');
	}
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}

	getAllCategory() {
		this.dynamicService.formCategoriesGetAll().subscribe((res: any) => {
			this.dataSource.data = res.data;
			this.dataSource.paginator = this.paginator;
			// this.dataSource.sort = this.sort;
		});
	}

	openDialog() {
		const dialogRef = this.dialog.open(AddFormCategoriesComponent, {
			height: '600px',
			width: '700px',

			data: {
				action: 'new'
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result === 'ok') {
				this.getAllCategory();
			}
		});
	}
	edit(element) {
		const dialogRef = this.dialog.open(AddFormCategoriesComponent, {
			height: '700px',
			width: '750px',

			// height:'400px',
			data: {
				element,
				action: 'edit'
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.getAllCategory();
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
				this.dynamicService
					.formCategoriesDelete(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});

						this.getAllCategory();
					});
			}
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	sortData(sort: Sort) {
		// this.getAllCategory(sort.active, sort.direction)
	}
}
