import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from './../../utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';

import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AddApplicationServiceInfoComponent } from './add-application-service-info/add-application-service-info.component';
import { AddServiceInfoComponent } from './add-service-info/add-service-info.component';
import Swal from 'sweetalert2';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort } from '@angular/material/sort';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-application-service-info',
	templateUrl: './application-service-info.component.html',
	styleUrls: ['./application-service-info.component.scss']
})
export class ApplicationServiceInfoComponent implements OnInit {
	serviceDetail: FormGroup;
	selectedImage: any;
	myId: any;
	isEdit = false;
	data: any = [];
	enum: any;
	serviceData: any;
	Is_id: any;
	Edit = false;
	Add = false;
	page = 1;
	pageSize = 10;
	ServiceData: any = [];
	Service: any = [];
	mode: any;
	collectionSize = 10;
	hide = false;
	closeResult: string;
	ELEMENT_DATA = [];
	displayedColumns: string[] = ['heading', 'description', 'actions'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	ELEMENTS_DATA = [];
	displayedColumnss: string[] = [
		'index',
		'images',
		'title',
		'descrip',
		'action'
	];
	dataSources = new MatTableDataSource(this.ELEMENTS_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	constructor(
		private fb: FormBuilder,
		private landingPageInfo: LandingPageInfoServiceService,
		public upload: UploadFileServiceService,

		public dialog: MatDialog,
		private spinner: NgxSpinnerService,
		public router: Router,
		private setTitle: SetTitleService
	) {
		this.serviceDetail = fb.group({
			arrObj: this.fb.array([]),
			title: ['', Validators.required],
			description: ['', Validators.required],
			mode: 'Service'
		});
	}

	ngOnInit(): void {
		this.getServiceData();
		this.setTitle.setTitle('WHS-Application Service Info');
	}

	service: any;
	getServiceData() {
		this.mode = 'Service';
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((res) => {
			this.dataSource.data = res.data;
			this.dataSource.paginator = this.paginator;
			const ServiceData = res.data[0].subModules;
			ServiceData.forEach((element, index) => {
				element.index = index + 1; //adding index
			});
			this.ELEMENTS_DATA = ServiceData;
			this.dataSources = new MatTableDataSource(this.ELEMENTS_DATA);
			this.dataSources.paginator = this.paginator;
			this.dataSources.sort = this.sort;
		});
	}

	editForm(element, name: boolean, i?: any) {
		void this.spinner.show();

		this.myId = element._id;
		this.isEdit = true;
		this.mode = 'Service';
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
			this.ServiceData = data.data[0];

			const dialogRef = this.dialog.open(
				AddApplicationServiceInfoComponent,
				{
					data: {
						action: 'edit',

						EditData: this.ServiceData,
						index: i,
						moduleName: name
					},

					width: '1000px',
					height: '500px'
				}
			);
			dialogRef.afterClosed().subscribe((result) => {
				if ((result = 'true')) {
					this.getServiceData();
				}
			});

			void this.spinner.hide();
		});
	}

	addForm(id) {
		void this.spinner.show();
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
			this.ServiceData = data.data[0];

			const dialogRef = this.dialog.open(AddServiceInfoComponent, {
				data: {
					action: 'new',
					ID: id,
					EditData: this.ServiceData._id
				},
				width: '800px',
				height: '600px'
			});
			dialogRef.afterClosed().subscribe((result) => {
				if ((result = 'true')) {
					this.getServiceData();
				}
			});

			void this.spinner.hide();
		});
	}
	close() {
		this.hide = false;
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
				this.landingPageInfo
					.deletesubModule(item._id)
					.subscribe((res) => {
						Swal.fire('Deleted Successfully');

						this.getServiceData();
						this.ngOnInit();
						void this.spinner.hide();
					});
			}
		});
	}
}
