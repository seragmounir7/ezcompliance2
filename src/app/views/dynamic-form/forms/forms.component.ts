import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AddFormComponent } from './add-form/add-form.component';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AfterViewInit } from '@angular/core';

import Swal from 'sweetalert2';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { accessType, FormName } from 'src/app/side-nav-access.enum';
import { AccessObj } from 'src/app/utils/types/AccessResponceTypes';
import { RoleManagementService } from 'src/app/utils/services/role-management.service';
import { Designation } from 'src/app/utils/types/Designation.enum';
import { AuthService } from 'src/app/utils/services/auth.service';
export interface PeriodicElement {
	categories: string;
	position: number;
	symbol: string;
	formName: string;
}

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-dynamic-list',
	templateUrl: './forms.component.html',
	styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements AfterViewInit, OnInit {
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	@Input() displayedColumns: string[] = [
		'index',
		'formName',
		'formCategory',
		'formFrequency',
		'Disable/Enable',
		'edit'
	];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatSort) sort: MatSort;
	@ViewChild(MatPaginator) paginator: MatPaginator;
	url: any;

	accessObj: AccessObj;

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	closeResult: string;
	page = 1;
	pageSize = 10;
	collectionSize = 10;
	allForms = [];
	formName = '';
	addForm: FormGroup;
	form = '';

	constructor(
		public dialog: MatDialog,
		private spinner: NgxSpinnerService,
		public router: Router,
		private fb: FormBuilder,
		private dynamicFormServise: DynamicFormsService,
		private activatedRoute: ActivatedRoute,
		private role: RoleManagementService,
		private authService: AuthService
	) {}

	addDyForm() {
		const dialogRef = this.dialog.open(AddFormComponent, {
			width: '700px',
			data: ''
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.getAllForms();
			}
		});
	}

	ngOnInit(): void {
		this.authService.loginData$.subscribe((res) => {
			if (res?.designation === Designation.superAdmin) {
				this.displayedColumns = [
					'index',
					'formName',
					'formCategory',
					'adminEdit'
				];
			}
			if (res?.designation === Designation.user) {
				this.displayedColumns = [
					'index',
					'formName',
					'formCategory',
					'edit'
				];
			}
		});
		this.accessObj = this.role.getAccessObj(FormName.WHSForms);
		this.url = this.activatedRoute.snapshot.url;

		sessionStorage.setItem('formId', '');
		sessionStorage.setItem('type', '');
		sessionStorage.setItem('formTitle', '');
		sessionStorage.setItem('frequency', '');
		this.addForm = this.fb.group({
			formName: [null, Validators.required],
			frequency: [null, Validators.required]
		});

		this.getAllForms();
		this.dynamicFormServise.homebarTitle.next('Dynamic Forms List');
	}
	getAllForms() {
		void this.spinner.show();
		this.getDyanmicFormList();
	}
	private getDyanmicFormList(field = '', value = '') {
		this.dynamicFormServise.getAllForm(field, value).subscribe((resF) => {
			// this.allForms=res.data;
			//
			this.allForms = resF.data;
			const data = resF.data;
			data.forEach((element, index) => {
				element.index = index + 1; //adding index
			});

			this.ELEMENT_DATA = data;
			this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
			this.dataSource.paginator = this.paginator;
			void this.spinner.hide();
		});
	}

	slideChanged(e, form) {
		const data = {
			title: form.title,
			htmlObject: form.htmlObject,
			enable: e.checked,
			frequency: form.frequency
		};

		this.dynamicFormServise.editForm(data, form._id).subscribe((res) => {
			if (e.checked) {
				Swal.fire({
					title: 'Form Enabled successfully',
					showConfirmButton: false,
					timer: 1200
				});
			} else {
				Swal.fire({
					title: 'Form Disable successfully',
					showConfirmButton: false,
					timer: 1200
				});
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
				this.dynamicFormServise
					.deleteForm(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Form Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});
						this.getAllForms();
					});
			}
		});
	}

	editForm(form) {
		sessionStorage.setItem('formId', form._id);
		sessionStorage.setItem('type', 'edit');
		sessionStorage.setItem('formTitle', form.title);
		sessionStorage.setItem('frequency', form.frequency);
		this.router.navigate(['/admin/dynamic/dynamicForm']);
		//   {queryParams: {  type:'edit',formId:form._id, formName: form.title}});
	}
	viewForm(form) {
		sessionStorage.setItem('formId', form._id);
		sessionStorage.setItem('type', 'view');
		sessionStorage.setItem('formTitle', form.title);
		sessionStorage.setItem('frequency', form.frequency);
		this.router.navigate(['/admin/dynamic/dynamicForm']);
	}

	frequencyChange(e, form) {
		const data = {
			title: form.title,
			htmlObject: form.htmlObject,
			enable: form.enable,
			frequency: e.target.value
		};

		this.dynamicFormServise.editForm(data, form._id).subscribe((res) => {
			Swal.fire('Form Frequency Changed successfully');
			this.getAllForms();
		});
	}
	add(element) {
		const data = {
			id: element._id,
			type: 'add'
		};
		//this.router.navigateByUrl('/admin/savedDynamicForm/',{data{a}})
		this.router.navigate(['/admin/dynamic/savedDynamicForm'], {
			queryParams: data
		});
	}

	sortData(sort: Sort) {
		this.getDyanmicFormList('title', sort.direction);
	}
}
