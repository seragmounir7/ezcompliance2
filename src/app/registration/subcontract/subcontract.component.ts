import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import Swal from 'sweetalert2';
import { AddAndEditSubcontractComponent } from './add-and-edit-subcontract/add-and-edit-subcontract.component';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-subcontract',
	templateUrl: './subcontract.component.html',
	styleUrls: ['./subcontract.component.scss']
})
export class SubcontractComponent implements OnInit {
	ELEMENT_DATA = [];
	displayedColumns: string[] = [
		'index',
		'companyName',
		'email',
		'streetAddress',
		'phone',
		'action'
	];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	isSetup: boolean = false;
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	constructor(
		private subContract: LogicalFormInfoService,
		private fb: FormBuilder,
		private setTitle: SetTitleService,
		private dialog: MatDialog,
		private spinner: NgxSpinnerService,
		public router: Router
	) {}

	ngOnInit(): void {
		this.isSetup = this.router.url.includes('setup');
		this.getAllSubcontractor();
		this.setTitle.setTitle('WHS-Subcontractor Details');
	}
	getAllSubcontractor() {
		this.subContract.getAllSubcontract().subscribe((res: any) => {
			const couponData = res.data;
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
			text: `Do you want to delete "${item.companyName}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				void this.spinner.show();
				this.subContract
					.deleteSubcontract(item._id)
					.subscribe((res) => {
						this.getAllSubcontractor();
						void this.spinner.hide();
					});
			}
		});
	}

	edit(id) {
		if (this.isSetup) {
			const dialogRef = this.dialog.open(AddAndEditSubcontractComponent, {
				width: '80%',
				height: '80%',
				data: {
					id
				}
			});
			dialogRef.afterClosed().subscribe((res: boolean) => {
				if (res) {
					this.getAllSubcontractor();
				}
			});
			return;
		}
		this.router.navigate(['/admin/registration/addSubcontract/' + id]);
	}
	addSubContractorModal() {
		const dialogRef = this.dialog.open(AddAndEditSubcontractComponent, {
			width: '80%',
			height: '80%'
		});
		dialogRef.afterClosed().subscribe((res: boolean) => {
			if (res) {
				this.getAllSubcontractor();
			}
		});
	}
}
