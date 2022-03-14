import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditProjMangComponent } from './add-edit-proj-mang/add-edit-proj-mang.component';
import { MatSort, Sort } from '@angular/material/sort';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-project-manager',
	templateUrl: './project-manager.component.html',
	styleUrls: ['./project-manager.component.scss']
})
export class ProjectManagerComponent implements OnInit {
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
		private dialog: MatDialog,
		private setTitle: SetTitleService
	) {}

	ngOnInit(): void {
		this.getAllProjectMang();
		this.setTitle.setTitle('WHS-Project Manager List');
	}

	getAllProjectMang(field = '', value = '') {
		this.logicalFormInfo
			.getAllProjectMang(field, value)
			.subscribe((res: any) => {
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
		const dialogRef = this.dialog.open(AddEditProjMangComponent, {
			width: '550px',
			data: element
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.getAllProjectMang();
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
					.deleteProjectMang(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Project Manager Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});

						this.getAllProjectMang();
					});
			}
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	sortData(sort: Sort) {
		this.getAllProjectMang(sort.active, sort.direction);
	}
}
