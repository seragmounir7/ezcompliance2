import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormName } from 'src/app/side-nav-access.enum';
import { RoleManagementService } from 'src/app/utils/services/role-management.service';
import { AccessObj } from 'src/app/utils/types/AccessResponceTypes';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-saved-dynamic-form-table',
	templateUrl: './saved-dynamic-form-table.component.html',
	styleUrls: ['./saved-dynamic-form-table.component.scss']
})
export class SavedDynamicFormTableComponent implements OnInit {
	displayedColumns: string[] = [
		'formIndex',
		'title',
		'frequency',
		'createdAt',
		'updatedAt',
		'action'
	];
	showDatas: any;
	id: any;
	isHistory: boolean;
	tempArray: MatTableDataSource<any>;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	formId: any;
	returnTo: Observable<string>;
	accessObj: AccessObj;
	constructor(
		private dynamicFormsService: DynamicFormsService,
		private setTitle: SetTitleService,
		private activatedRoute: ActivatedRoute,
		public router: Router,
		private spinner: NgxSpinnerService,
		private role: RoleManagementService
	) {}

	ngOnInit(): void {
		this.accessObj = this.role.getAccessObj(FormName.WHSForms);
		this.isHistory = this.router.url.includes('/history');
		this.returnTo = this.activatedRoute.queryParams.pipe(
			map((res) => res.returnTo)
		);
		this.formId = this.activatedRoute.snapshot.params.id;
		this.getSavedForm();
		this.setTitle.setTitle('WHS-Saved Dynamic Form');
		// this.getSavedForm();

		if (this.isHistory) {
			this.activatedRoute.paramMap
				.pipe(map((params) => params.get('id')))
				.subscribe((res) => {
					this.id = res;
					this.displayedColumns = [
						'version',
						'formIndex',
						'title',
						'createdTime',
						'updatedTime',
						'action'
					];

					this.getSavedFormHistory();
				});
		} else {
			this.getSavedForm();
		}
	}
	ngAfterViewInit() {}
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
				void this.spinner.show();
				this.dynamicFormsService
					.savedFormDelete(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: `"${item.title}"? Deleted successfully`,
							showConfirmButton: false,
							timer: 1200
						});
						this.getSavedForm();
						void this.spinner.hide();
					});
			}
		});
	}
	getSavedFormHistory(id = this.id) {
		this.dynamicFormsService
			.getSavedFormHistory(this.formId)
			.subscribe((res: any) => {
				this.showDatas = res;

				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});

				this.tempArray = new MatTableDataSource<any>(this.showDatas);
				this.tempArray.paginator = this.paginator;
				this.tempArray.sort = this.sort;
			});
	}
	getSavedForm() {
		this.dynamicFormsService
			.getsavedFormByFormId(this.formId)
			.subscribe((res: any) => {
				this.showDatas = res.data[0].result;

				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});

				this.tempArray = new MatTableDataSource<any>(this.showDatas);
				this.tempArray.paginator = this.paginator;
				this.tempArray.sort = this.sort;
			});
	}
	edit(id) {
		const data = {
			id,
			type: 'edit'
		};
		//this.router.navigateByUrl('/admin/savedDynamicForm/',{data{a}})
		if (this.isHistory) {
			this.router.navigate(['/admin/dynamic/savedDynamicForm/history'], {
				queryParams: {
					id,
					type: 'view',
					returnTo: this.router.url
				}
			});
			return;
		}
		this.router.navigate(['/admin/dynamic/savedDynamicForm'], {
			queryParams: data
		});
	}

	sortData() {
		this.getSavedForm();
		// if (this.isHistory) {
		// 	this.getSavedFormHistory(sort.active);
		// 	return;
		// }
	}
	onHistoryClick(id: string) {
		this.router.navigate([`${this.router.url}/history/${id}`], {
			queryParams: { returnTo: this.router.url }
		});
	}
}
