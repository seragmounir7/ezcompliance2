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
import { AddHappyClientComponent } from './add-happy-client/add-happy-client.component';
import { AddClientInfoComponent } from './add-client-info/add-client-info.component';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort } from '@angular/material/sort';
@Component({
	selector: 'app-happy-client',
	templateUrl: './happy-client.component.html',
	styleUrls: ['./happy-client.component.scss']
})
export class HappyClientComponent implements OnInit {
	clientDetail: FormGroup;
	happyClientData: any = [''];
	selectedImage: any;
	mode: any;
	myId: any;
	isEdit = false;
	hide = false;
	Is_id: any;
	closeResult: string;
	ELEMENT_DATA = [];
	displayedColumns: string[] = ['heading', 'actions'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	ELEMENTS_DATA = [];
	displayedColumnss: string[] = ['index', 'images', 'action'];
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
		this.clientDetail = fb.group({
			arrObj: this.fb.array([]),
			title: ['', Validators.required],
			mode: 'HappyClient'
		});
	}
	ngOnInit(): void {
		this.getHappyClient();
		this.setTitle.setTitle('WHS-Happy Client');
	}
	getHappyClient() {
		this.mode = 'HappyClient';
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((res) => {
			this.dataSource.data = res.data;
			this.dataSource.paginator = this.paginator;
			const happyClientData = res.data[0].subModules;
			happyClientData.forEach((element, index) => {
				element.index = index + 1; //adding index
			});
			this.ELEMENTS_DATA = happyClientData;
			this.dataSources = new MatTableDataSource(this.ELEMENTS_DATA);
			this.dataSources.paginator = this.paginator;
			this.dataSources.sort = this.sort;
		});
	}

	editForm(id, name: boolean, i?: any) {
		void this.spinner.show();

		this.myId = id;
		this.isEdit = true;
		this.mode = 'HappyClient';
		this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
			this.happyClientData = data.data[0];
			const dialogRef = this.dialog.open(AddHappyClientComponent, {
				data: {
					action: 'edit',
					EditData: this.happyClientData,
					index: i,
					moduleName: name
				},

				width: '800px',
				height: '600px'
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
			console.log('HappyClient=>', data);
			this.happyClientData = data.data[0];
			console.log('', this.happyClientData);
			const dialogRef = this.dialog.open(AddClientInfoComponent, {
				data: {
					action: 'new',
					ID: id,
					EditData: this.happyClientData._id
				},
				width: '800px',
				height: '500px'
			});
			dialogRef.afterClosed().subscribe((result) => {
				console.log('openDialog->result', result);
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
			text: `Do you want to delete "this Client"?`,
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

						this.getHappyClient();
						this.ngOnInit();
						void this.spinner.hide();
					});
			}
		});
	}
}
