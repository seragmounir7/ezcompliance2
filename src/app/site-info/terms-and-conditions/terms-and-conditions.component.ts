import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { AddTermsAndConditionsComponent } from './add-terms-and-conditions/add-terms-and-conditions.component';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-terms-and-conditions',
	templateUrl: './terms-and-conditions.component.html',
	styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {
	public Editor = ClassicEditor;
	jobTaskData: any = [];
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	displayedColumns: string[] = ['index', 'title', 'action'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	url: any;
	addBtn = false;
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	/////////////mat table end////////////////

	constructor(
		private logicalFormInfo: LogicalFormInfoService,
		private dialog: MatDialog,
		private setTitle: SetTitleService,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-Terms & Conditions');
		this.url = this.activatedRoute.snapshot.url[0].path;

		// this.getInstructions();
		this.getTermsAndConditions();
	}
	getTermsAndConditions() {
		this.logicalFormInfo.getTermsAndConditions().subscribe(
			(res: any) => {
				const data = res;
				data.forEach((element, index) => {
					element.index = index + 1; //adding index
				});
				if (data.length > 0) {
					this.addBtn = false;
				} else {
					this.addBtn = true;
				}

				this.ELEMENT_DATA = data.map((obj) => {
					obj.isDisabled = true;
					return obj;
				});

				this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
			},
			(err) => (this.addBtn = false)
		);
	}

	edit(element) {
		this.addBtn = false;
		if (element.isDisabled) return;
		if (element.title === element.updatedValue) return;
		this.logicalFormInfo
			.postTermsAndConditions(element.updatedValue)
			.subscribe(
				(data) => {},
				(err) => {
					console.error(err);
				}
			);
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
					.deleteNatOfInc(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Parameter Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});

						// this.getInstructions();
					});
			}
		});
	}
}
