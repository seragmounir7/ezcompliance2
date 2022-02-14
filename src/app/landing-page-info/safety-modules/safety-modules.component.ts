import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AddSafetyModuleComponent } from './add-safety-module/add-safety-module.component';
import { AddModulesInfoComponent } from './add-modules-info/add-modules-info.component';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort } from '@angular/material/sort';
@Component({
	selector: 'app-safety-modules',
	templateUrl: './safety-modules.component.html',
	styleUrls: ['./safety-modules.component.scss']
})
export class SafetyModulesComponent implements OnInit {
	safetyDetail: FormGroup;
	selectedImage: any;
	data: any;
	enum: any;
	Is_id: any;
	mode: any;
	myId: any;
	isEdit = false;
	hide = false;
	safetyData: any = [''];
	closeResult: string;
	ELEMENT_DATA = [];
	displayedColumns: string[] = ['heading', 'description', 'actions'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	ELEMENTS_DATA = [];
	displayedColumnss: string[] = ['index', 'images', 'title', 'action'];
	dataSources = new MatTableDataSource(this.ELEMENTS_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	constructor(
		private fb: FormBuilder,
		private landingPageInfo: LandingPageInfoServiceService,
		public upload: UploadFileServiceService,
		private modalService: NgbModal,
		public dialog: MatDialog,
		private spinner: NgxSpinnerService,
		public router: Router,
		private setTitle: SetTitleService
	) {
		this.safetyDetail = fb.group({
			mode: 'Safety',
			arrObj: this.fb.array([]),
			title: ['', Validators.required],
			description: ['', Validators.required]
		});
	}
	ngOnInit(): void {
		this.getSafety();
		this.setTitle.setTitle('WHS-Safty Module');
	}
	getSafety() {
		this.mode = 'Safety';
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((res) => {
			this.dataSource.data = res.data;
			this.dataSource.paginator = this.paginator;
			const safetyData = res.data[0].subModules;
			safetyData.forEach((element, index) => {
				element.index = index + 1; //adding index
			});
			this.ELEMENTS_DATA = safetyData;
			this.dataSources = new MatTableDataSource(this.ELEMENTS_DATA);
			this.dataSources.paginator = this.paginator;
			this.dataSources.sort = this.sort;
		});
	}
	editForm(id, name: boolean, i?: any) {
		void this.spinner.show();

		this.myId = id;
		this.isEdit = true;
		this.mode = 'Safety';
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
			this.safetyData = data.data[0];

			const dialogRef = this.dialog.open(AddSafetyModuleComponent, {
				data: {
					action: 'edit',

					EditData: this.safetyData,
					index: i,
					moduleName: name
				},

				width: '800px',
				height: '500px'
			});
			dialogRef.afterClosed().subscribe((result) => {
				if ((result = 'true')) {
					this.ngOnInit();
				}
			});

			void this.spinner.hide();
		});
	}

	addForm(id) {
		void this.spinner.show();
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
			this.safetyData = data.data[0];

			const dialogRef = this.dialog.open(AddModulesInfoComponent, {
				data: {
					action: 'new',
					ID: id,
					EditData: this.safetyData._id
				},

				width: '800px',
				height: '500px'
			});
			dialogRef.afterClosed().subscribe((result) => {
				if ((result = 'true')) {
					this.ngOnInit();
				}
			});

			void this.spinner.hide();
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
				void this.spinner.show();
				this.landingPageInfo
					.deletesubModule(item._id)
					.subscribe((res) => {
						Swal.fire('Deleted Successfully');
						this.getSafety();
						this.ngOnInit();
						void this.spinner.hide();
					});
			}
		});
	}
	close() {
		this.hide = false;
	}
}
