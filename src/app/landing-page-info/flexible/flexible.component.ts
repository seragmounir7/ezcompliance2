import { LandingPageInfoServiceService } from './../../utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from './../../utils/services/upload-file-service.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import {
	FormBuilder,
	FormGroup,
	Validators,
	FormArray,
	FormControl
} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AddFlexibleInfoComponent } from './add-flexible-info/add-flexible-info.component';
import { EditFlexibleInfoComponent } from './edit-flexible-info/edit-flexible-info.component';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort } from '@angular/material/sort';
@Component({
	selector: 'app-flexible',
	templateUrl: './flexible.component.html',
	styleUrls: ['./flexible.component.scss']
})
export class FlexibleComponent implements OnInit {
	flexibleDetail!: FormGroup;
	selectedImage: any;
	myId: any;
	isEdit = false;
	data: any = [];
	enum: any;
	flexibleData: any = [];
	Is_id: any;
	Edit = false;
	Add = false;
	hide = false;
	closeResult: string;
	FlexibleData: any = [];
	flexible?: any;
	mode: any;
	ELEMENT_DATA = [];
	displayedColumns: string[] = ['heading', 'description', 'actions'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	ELEMENTS_DATA = [];
	displayedColumnss: string[] = [
		'index',
		'images',
		'title',
		'subTitle',
		'action'
	];
	dataSources = new MatTableDataSource(this.ELEMENTS_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	constructor(
		private fb: FormBuilder,
		private upload: UploadFileServiceService,
		private landingPageInfo: LandingPageInfoServiceService,
		private modalService: NgbModal,
		public dialog: MatDialog,
		private spinner: NgxSpinnerService,
		public router: Router,
		private setTitle: SetTitleService
	) {
		this.flexibleDetail = this.fb.group({
			title: ['', Validators.required],
			description: ['', Validators.required],
			mode: 'Flexible',
			arrObj: this.fb.array([])
		});
	}

	ngOnInit(): void {
		//  this.addAction();
		this.getFlexible();
		this.setTitle.setTitle('WHS-Flexible Complience');
	}

	getFlexible() {
		this.mode = 'Flexible';
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((res) => {
			this.dataSource.data = res.data;
			this.dataSource.paginator = this.paginator;
			const testimonialData = res.data[0].subModules;
			testimonialData.forEach((element, index) => {
				element.index = index + 1;
			});
			this.ELEMENTS_DATA = testimonialData;
			this.dataSources = new MatTableDataSource(this.ELEMENTS_DATA);
			this.dataSources.paginator = this.paginator;
			this.dataSources.sort = this.sort;
			// this.flexibleData = data.data[0];
			// this.flexible = this.flexibleData.subModules[0].title;
		});
	}
	editForm(id, name: boolean, i?: any) {
		void this.spinner.show();

		this.myId = id;
		this.isEdit = true;
		this.mode = 'Flexible';
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
			this.flexibleData = data.data[0];

			const dialogRef = this.dialog.open(EditFlexibleInfoComponent, {
				data: {
					action: 'edit',

					EditData: this.flexibleData,
					index: i,
					moduleName: name
				},

				width: '1000px',
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
			this.flexibleData = data.data[0];

			const dialogRef = this.dialog.open(AddFlexibleInfoComponent, {
				data: {
					action: 'new',
					ID: id,
					EditData: this.flexibleData._id
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
						this.getFlexible();
						this.ngOnInit();
						void this.spinner.hide();
					});
			}
		});
	}
}
