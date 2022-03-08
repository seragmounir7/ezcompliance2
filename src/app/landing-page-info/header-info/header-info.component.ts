import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { data } from 'jquery';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-header-info',
	templateUrl: './header-info.component.html',
	styleUrls: ['./header-info.component.scss']
})
export class HeaderInfoComponent implements OnInit {
	serviceDetail: FormGroup;
	closeResult: string;
	selectedImage: any = [];
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
	ServiceData: any;
	mode: any;
	collectionSize = 10;
	allHeaderData: any;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	infoData: any;
	constructor(
		private fb: FormBuilder,
		private url: LandingPageInfoServiceService,
		public upload: UploadFileServiceService,
		private modalService: NgbModal,
		public dialog: MatDialog,
		private spinner: NgxSpinnerService,
		public router: Router,
		private setTitle: SetTitleService
	) {
		this.serviceDetail = fb.group({
			title: ['', Validators.required],
			description: ['', Validators.required]
		});
	}

	ngOnInit(): void {
		this.getHeaderById();
		this.setTitle.setTitle('WHS-Header Info');
	}
	Added() {
		if (this.Edit == true) {
			this.Edit = false;
			this.Add = true;
		} else {
			this.Add = true;
		}
	}

	Eddit() {
		if (this.Add == true) {
			this.Add = false;
			this.Edit = true;
		} else {
			this.Edit = true;
		}
	}

	browser(event, i) {
		const files = event.target.files[0];
		const formData = new FormData();
		formData.append('', files);
		const value = this.selectedImage[0];

		if (value) {
			this.upload.upload(formData).subscribe((res) => {
				this.selectedImage[i] = res.files[0];
			});
		} else {
			this.upload.upload(formData).subscribe((res) => {
				this.serviceDetail.patchValue({
					filePath: res.filePath
				});
				this.selectedImage.push(res.files[0]);
			});
		}
	}

	editService(id) {
		this.myId = id;
		this.isEdit = true;
		this.url.editHeader(id, data).subscribe((res) => {
			this.data = res.data;
		});
	}
	openDialog(id): void {
		const dialogRef = this.dialog.open(HeaderComponent, {
			width: '800px',
			data: {
				action: 'new',
				userId: id
			}
		});

		dialogRef.afterClosed().subscribe((result) => {});
	}

	openDialogEdit(serviceDetail) {
		const dialogRef = this.dialog.open(HeaderComponent, {
			data: {
				action: 'edit',
				headerData: this.infoData
			},
			width: '800px'
		});
		dialogRef.afterClosed().subscribe((result) => {
			this.getHeaderById();
		});
	}
	refreshList(): void {
		this.retrieveTutorials({ page: this.page, pageSize: this.pageSize });
	}
	retrieveTutorials(params: any): void {}
	service: any;
	getHeaderById() {
		this.url.getHeaderBYId().subscribe((data) => {
			this.infoData = data.data;
		});
	}
}
