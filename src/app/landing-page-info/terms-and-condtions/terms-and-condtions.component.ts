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
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort } from '@angular/material/sort';
import { EditTermsAndCondtionsComponent } from './edit-terms-and-condtions/edit-terms-and-condtions.component';
import { AddTermsAndCondtionsComponent } from './add-terms-and-condtions/add-terms-and-condtions.component';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-terms-and-condtions',
	templateUrl: './terms-and-condtions.component.html',
	styleUrls: ['./terms-and-condtions.component.scss']
})
export class TermsAndCondtionsComponent implements OnInit {
	termDetail: FormGroup;
	selectedImage: any;
	data: any;
	enum: any;
	Is_id: any;
	mode: any;
	myId: any;
	isEdit = false;
	hide = false;
	termData: any = [''];
	closeResult: string;
	ELEMENT_DATA = [];
	displayedColumns: string[] = ['heading', 'description', 'actions'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	ELEMENTS_DATA = [];
	displayedColumnss: string[] = ['index', 'title', 'descriptions', 'action'];
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
		this.termDetail = fb.group({
			mode: 'Terms',
			arrObj: this.fb.array([]),
			title: ['', Validators.required],
			description: ['', Validators.required]
		});
	}

	ngOnInit(): void {
		this.getTerms();
		this.setTitle.setTitle('WHS-T&C');
	}
	getTerms() {
		this.mode = 'Terms';
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((res) => {
			this.dataSource.data = res.data;
			this.dataSource.paginator = this.paginator;
			const termData = res.data[0].subModules;
			termData.forEach((element, index) => {
				element.index = index + 1; //adding index
			});
			this.ELEMENTS_DATA = termData;
			this.dataSources = new MatTableDataSource(this.ELEMENTS_DATA);
			this.dataSources.paginator = this.paginator;
			this.dataSources.sort = this.sort;
		});
	}
	editForm(id, name: boolean, i?: any) {
		void this.spinner.show();

		this.myId = id;
		this.isEdit = true;
		this.mode = 'Terms';
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
			this.termData = data.data[0];

			const dialogRef = this.dialog.open(EditTermsAndCondtionsComponent, {
				data: {
					action: 'edit',

					EditData: this.termData,
					index: i,
					moduleName: name
				},

				width: '800px',
				height: '800px'
			});
			dialogRef.afterClosed().subscribe((result) => {
				if ((result = 'true')) {
					this.ngOnInit();
				}
			});

			void void void this.spinner.hide();
		});
	}

	addForm(id) {
		void this.spinner.show();
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
			this.termData = data.data[0];

			const dialogRef = this.dialog.open(AddTermsAndCondtionsComponent, {
				data: {
					action: 'new',
					ID: id,
					EditData: this.termData._id
				},

				width: '800px',
				height: '700px'
			});
			dialogRef.afterClosed().subscribe((result) => {
				if ((result = 'true')) {
					this.ngOnInit();
				}
			});

			void void this.spinner.hide();
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
						this.getTerms();
						this.ngOnInit();
						void void this.spinner.hide();
					});
			}
		});
	}
	close() {
		this.hide = false;
	}
}
