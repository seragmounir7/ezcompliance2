import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort } from '@angular/material/sort';
import { EditDifferentWorkComponent } from './edit-different-work/edit-different-work.component';
import { AddDifferentWorkComponent } from './add-different-work/add-different-work.component';

@Component({
	selector: 'app-different-module',
	templateUrl: './different-module.component.html',
	styleUrls: ['./different-module.component.scss']
})
export class DifferentModuleComponent implements OnInit {
	workData: any = [''];
	differentData: any = [''];
	selectedImage: any = [];
	mode: any;
	myId: any;
	isEdit = false;
	hide = false;
	Is_id: any;
	ELEMENT_DATA = [];
	displayedColumns: string[] = ['heading', 'actions'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	ELEMENTS_DATA = [];
	displayedColumnss: string[] = ['index', 'title', 'description', 'action'];
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
	) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-OurWork');
		this.getScreenWork();
	}

	getScreenWork() {
		this.mode = 'Different';
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((res) => {
			console.log('Different', res.data);
			this.dataSource.data = res.data;
			// this.differentData = res.data;
			let differentData = res.data[0].subModules;
			differentData.forEach((element, index) => {
				element.index = index + 1;
			});
			this.ELEMENTS_DATA = differentData;
			this.dataSources = new MatTableDataSource(this.ELEMENTS_DATA);
		});
	}
	close() {
		this.hide = false;
	}
	editSubWork(id, name: boolean, i?: any) {
		void this.spinner.show();
		this.myId = id;
		this.isEdit = true;
		this.mode = 'Different';
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
			this.differentData = data.data[0];
			let dialogRef = this.dialog.open(EditDifferentWorkComponent, {
				data: {
					action: 'edit',
					EditData: this.differentData,
					index: i,
					moduleName: name
				},

				width: '800px',
				height: '500px'
			});
			dialogRef.afterClosed().subscribe((result) => {
				if ((result = 'true')) {
					this.getScreenWork();
				}
			});
			void this.spinner.hide();
		});
	}

	addForm(id) {
		void this.spinner.show();
		this.mode = 'Different';
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
			this.differentData = data.data[0];
			console.log(this.differentData);
			let dialogRef = this.dialog.open(AddDifferentWorkComponent, {
				data: {
					action: 'new',
					ID: id,
					EditData: this.differentData._id
				},
				width: '800px',
				height: '500px'
			});
			dialogRef.afterClosed().subscribe((result) => {
				if ((result = 'true')) {
					this.getScreenWork();
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
						this.getScreenWork();
						this.ngOnInit();
						void this.spinner.hide();
					});
			}
		});
	}
}
