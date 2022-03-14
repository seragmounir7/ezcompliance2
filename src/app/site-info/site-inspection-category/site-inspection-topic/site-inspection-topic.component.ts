import Swal from 'sweetalert2';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { AddSiteInspectionTopicComponent } from '../site-inspection-topic/add-site-inspection-topic/add-site-inspection-topic.component';
import { EditSiteInspectionTopicComponent } from '../site-inspection-topic/edit-site-inspection-topic/edit-site-inspection-topic.component';
import { MatSort, Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-site-inspection-topic',
	templateUrl: './site-inspection-topic.component.html',
	styleUrls: ['./site-inspection-topic.component.scss']
})
export class SiteInspectionTopicComponent implements OnInit {
	ELEMENT_DATA = [];
	displayedColumns: string[] = [
		'index',
		'topic',
		'item',
		'getaction',
		'action'
	];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	id: any;
	constructor(
		private setTitle: SetTitleService,
		private dialog: MatDialog,
		private logicalFormInfoService: LogicalFormInfoService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.setTitle.setTitle('Add Site Inspection Topic');
		this.id = this.activatedRoute.snapshot.params.id;
		this.getAllTopic();
	}
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}

	getAllTopic(field = '', value = '') {
		this.logicalFormInfoService
			.getTopicByCategoryID(this.id, field, value)
			.subscribe((res: any) => {
				this.dataSource.data = res.data[0].topic;
				this.dataSource.paginator = this.paginator;
				// this.dataSource.sort = this.sort;
			});
	}
	openDialog(id) {
		const dialogRef = this.dialog.open(AddSiteInspectionTopicComponent, {
			height: '600px',
			width: '700px',

			data: {
				action: 'new',
				userId: id
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result === 'ok') {
				this.getAllTopic();
			}
		});
	}
	edit(element) {
		const dialogRef = this.dialog.open(EditSiteInspectionTopicComponent, {
			height: '700px',
			width: '750px',

			// height:'400px',
			data: {
				element,
				categoryId: this.id
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.getAllTopic();
			}
		});
	}
	delete(item) {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete "${item.topic}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				this.logicalFormInfoService
					.deleteSiteInspectionTopic(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});

						this.getAllTopic();
					});
			}
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}
	sortData(sort: Sort) {
		this.getAllTopic(sort.active, sort.direction);
	}
}
