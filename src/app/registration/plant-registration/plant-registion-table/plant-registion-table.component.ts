import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ViewChild } from '@angular/core';
import { LogicalFormInfoService } from '../../../utils/services/logical-form-info.service';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-plant-registion-table',
	templateUrl: './plant-registion-table.component.html',
	styleUrls: ['./plant-registion-table.component.scss']
})
export class PlantRegistionTableComponent implements OnInit {
	ELEMENT_DATA = [];
	displayedColumns: string[] = [
		'index',
		'employeeName',
		'email',
		'fileType',
		'date',
		'action'
	];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	isHistory: boolean;
	id: any;
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	constructor(
		private logicalervice: LogicalFormInfoService,
		private fb: FormBuilder,
		private setTitle: SetTitleService,
		private dialog: MatDialog,
		private activatedRoute: ActivatedRoute,
		private spinner: NgxSpinnerService,
		public router: Router,
		private datePipe: DatePipe
	) {}

	ngOnInit(): void {
		this.id = this.activatedRoute.snapshot.params.id;
		this.getData();
		this.setTitle.setTitle('WHS-Employee Details');
	}
	getData() {
		this.logicalervice
			.getSubmitedPPEPlantEmpId(this.id)
			.subscribe((res: any) => {
				const couponData = res.data;
				couponData.forEach((element, index) => {
					element.index = index + 1; //adding index
				});
				this.ELEMENT_DATA = couponData;

				this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
				this.dataSource.paginator = this.paginator;
			});
	}

	view(id) {
		this.router.navigate([
			'/admin/registration/plantRegistration/history/' + id
		]);
	}
}
