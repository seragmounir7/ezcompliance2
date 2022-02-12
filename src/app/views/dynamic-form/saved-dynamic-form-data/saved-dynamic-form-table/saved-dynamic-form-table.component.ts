import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { map } from 'rxjs/operators';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

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
	constructor(
		private dynamicFormsService: DynamicFormsService,
		private setTitle: SetTitleService,
		private activatedRoute: ActivatedRoute,
		public router: Router,
		private spinner: NgxSpinnerService
	) {}

	ngOnInit(): void {
		this.formId = this.activatedRoute.snapshot.params.id;
		this.getSavedForm();
		this.setTitle.setTitle('WHS-Saved Dynamic Form');
		console.log('asdfghj', this.formId);

		// this.isHistory = this.router.url.includes('dynamic/savedDynamicForm/history');
		// console.log(this.isHistory);
		// if (this.isHistory) {
		// 	this.activatedRoute.paramMap
		// 		.pipe(map((params) => params.get('id')))
		// 		.subscribe((res) => {
		// 			this.id = res;

		// 			this.getSavedFormHistory();
		// 		});
		// } else {
		// 	this.getSavedForm();
		// }
	}
	ngAfterViewInit() {
		// this.tempArray.paginator = this.paginator;
		// this.tempArray.sort = this.sort;
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
	// getSavedFormHistory(id = this.id) {
	// 	this.dynamicFormsService
	// 		.getsavedFormByFormId(this.formId)
	// 		.subscribe((res: any) => {
	// 			this.showDatas = res.data[0].result;
	// 			console.log('get res', this.showDatas);
	// 			this.showDatas.forEach((element, i) => {
	// 				return (this.showDatas[i].index = i);
	// 			});

	// 			this.tempArray = new MatTableDataSource<any>(this.showDatas);
	// 			this.tempArray.paginator = this.paginator;
	// 			this.tempArray.sort = this.sort;
	// 			console.log('get res', this.showDatas);
	// 		});
	// }
	getSavedForm() {
		this.dynamicFormsService
			.getsavedFormByFormId(this.formId)
			.subscribe((res: any) => {
				this.showDatas = res.data[0].result;
				console.log('get res', this.showDatas);
				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});

				this.tempArray = new MatTableDataSource<any>(this.showDatas);
				this.tempArray.paginator = this.paginator;
				this.tempArray.sort = this.sort;
				console.log('get res', this.showDatas);
			});
	}
	edit(id) {
		const data = {
			id,
			type: 'edit'
		};
		//this.router.navigateByUrl('/admin/savedDynamicForm/',{data{a}})
		this.router.navigate(['/admin/dynamic/savedDynamicForm'], {
			queryParams: data
		});
	}

	sortData(sort: Sort) {
		this.getSavedForm();
		// if (this.isHistory) {
		// 	this.getSavedFormHistory(sort.active);
		// 	return;
		// }
	}
}
