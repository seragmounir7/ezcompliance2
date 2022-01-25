import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
@Component({
	selector: 'app-contact-us',
	templateUrl: './contact-us.component.html',
	styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
	ContactUsDetail!: FormGroup;

	serviceDetail: any;
	flexibleData: any;
	selectedImage: any = [];
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	displayedColumns: string[] = [
		'index',
		'fullName',
		'phoneNumber',
		'Email',
		'query',
		'action'
	];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	//
	mode: any;
	myId: string;
	dataContact: any = [];
	Is_id: any;
	closeResult: string;
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	constructor(
		private fb: FormBuilder,
		private url: LandingPageInfoServiceService,
		public upload: UploadFileServiceService,
		private modalService: NgbModal,
		public dialog: MatDialog,
		private setTitle: SetTitleService,
		private spinner: NgxSpinnerService
	) {}

	ngOnInit(): void {
		this.getContact();
		this.setTitle.setTitle('WHS-Contact Us');
	}
	view(data) {
		console.log('dataView', data);
		let dialogRef = this.dialog.open(ViewContactComponent, {
			width: '800px',
			data: data
		});

		dialogRef.afterClosed().subscribe((result) => {
			console.log(
				'ExpensesInfoComponent -> openDialog -> result',
				result
			);

			console.log('The dialog was closed');
		});
	}

	getContact() {
		this.url.getContact().subscribe((res) => {
			console.log('mode=>', res);
			let dataContact = res.data;
			dataContact.forEach((element, index) => {
				element.index = index + 1; //adding index
			});
			this.ELEMENT_DATA = dataContact;
			this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
			this.dataSource.paginator = this.paginator;
			this.dataSource.sort = this.sort;
		});
	}

	delete(item) {
		console.log(item);
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete "${item.fullName}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				console.log(result);
				void this.spinner.show();
				this.url.deleteContactUs(item._id).subscribe((res) => {
					Swal.fire('Deleted Successfully');
					console.log('deleted res', res);
					this.getContact();
					this.ngOnInit();
					void this.spinner.hide();
				});
			}
		});
	}
}
