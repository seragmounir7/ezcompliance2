import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { title } from 'process';
import { FormControl } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-ques-ans',
	templateUrl: './ques-ans.component.html',
	styleUrls: ['./ques-ans.component.scss']
})
export class QuesAnsComponent implements OnInit {
	mode: any;
	QAData: any = [];
	ELEMENT_DATA = [];
	portalData: any = [];
	allData: any = [];
	portalId: any = [];
	/////////////mat table////////////////
	displayedColumns: string[] = ['index', 'question', 'answer', 'action'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	portal = new FormControl();
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	Id: any;

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	/////////////mat table end////////////////
	constructor(
		private landingPafeInfo: LandingPageInfoServiceService,
		private setTitle: SetTitleService,
		private dialog: MatDialog
	) {}

	ngOnInit(): void {
		this.getAllPortal();

		this.setTitle.setTitle('WHS-FAQ List');
		this.portal.valueChanges.subscribe((res) => {
			if (res) {
				this.getAllFaqbasedOnPortal(res);
			}
		});
	}

	getAllPortal() {
		this.landingPafeInfo.getAllPortal().subscribe((res) => {
			this.portalData = res.data;

			this.portal.setValue(res.data[0]._id);
			this.getAllFaqbasedOnPortal(res.data[0]._id);
		});
	}
	getAllFaqbasedOnPortal(id) {
		this.landingPafeInfo.getAllFaqbasedOnPortal(id).subscribe((res) => {
			const allData = res.data;

			allData[0].faq.forEach((element, index) => {
				element.index = index + 1;
			});
			this.ELEMENT_DATA = allData[0].faq;
			this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}
	edit(element) {
		const dialogRef = this.dialog.open(EditQuestionComponent, {
			width: '600px',
			data: element
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.ngOnInit();
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
				this.landingPafeInfo.deleteFaq(item._id).subscribe((res) => {
					Swal.fire({
						title: 'Deleted successfully',
						showConfirmButton: false,
						timer: 1000
					});

					this.ngOnInit();
				});
			}
		});
	}
}
