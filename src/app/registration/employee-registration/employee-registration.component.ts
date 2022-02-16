import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ViewChild } from '@angular/core';
import { EmployeeRegistrationService } from 'src/app/utils/services/employee-registration.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-employee-registration',
	templateUrl: './employee-registration.component.html',
	styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {
	ELEMENT_DATA = [];
	displayedColumns: string[] = [
		'index',
		'title',
		'firstName',
		'lastName',
		'email',
		'action'
	];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	isEmployeeRegistration: Observable<string>;
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	constructor(
		private employee: EmployeeRegistrationService,
		private fb: FormBuilder,
		private setTitle: SetTitleService,
		private dialog: MatDialog,
		private spinner: NgxSpinnerService,
		public router: Router,
		private activatedRoute: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.isEmployeeRegistration = this.activatedRoute.url.pipe(
			map((value) => value[0].path)
		);
		this.getAllEmployee();
		this.setTitle.setTitle('WHS-Employee Details');
	}
	getAllEmployee() {
		this.employee.getAllEmployeeInfo().subscribe((res) => {
			console.log(res);
			const couponData = res;
			couponData.forEach((element, index) => {
				element.index = index + 1; //adding index
			});
			this.ELEMENT_DATA = couponData;
			this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
			this.dataSource.paginator = this.paginator;
		});
	}

	delete(item) {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete "${item.firstName}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				console.log(result);
				void this.spinner.show();
				this.employee.deleteEmployeeInfo(item._id).subscribe((res) => {
					this.getAllEmployee();
					void this.spinner.hide();
				});
			}
		});
	}

	edit(id) {
		this.router.navigate(['/admin/registration/addEmployee/' + id]);
	}
	returnById(id) {
		this.router.navigate(['/admin/registration/plantRegistration/' + id]);
	}
	openAddEmployee() {
		this.dialog.open(AddEmployeeComponent, {
			data: {
				isDialog: true
			},
			height: '90%',
			width: '90%'
		});
	}
}
