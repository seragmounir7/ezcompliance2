import { Component, OnInit, ViewChild } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators,
	FormArray,
	FormControl
} from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
import { EditTeamInfoComponent } from './edit-team-info/edit-team-info.component';
import { AddTeamInfoComponent } from './add-team-info/add-team-info.component';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-about-us',
	templateUrl: './about-us.component.html',
	styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
	companyDetail!: FormGroup;
	selectedImage: any = [];
	teamData: any = [''];
	Image: any;
	Image1: any;
	isEdit = false;
	hide = false;
	Is_id: any;
	closeResult: string;
	mode: any;
	myId: any;
	Id: any;
	ELEMENT_DATA = [];
	displayedColumns: string[] = ['image', 'heading', 'subTitle', 'actions'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	ELEMENTS_DATA = [];
	displayedColumnss: string[] = ['index', 'images', 'title', 'action'];
	dataSources = new MatTableDataSource(this.ELEMENTS_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	constructor(
		private landingPageInfo: LandingPageInfoServiceService,
		private fb: FormBuilder,
		public upload: UploadFileServiceService,
		private modalService: NgbModal,
		public dialog: MatDialog,
		private spinner: NgxSpinnerService,
		public router: Router,
		private setTitle: SetTitleService
	) {
		this.companyDetail = this.fb.group({
			imageUrl: ['', Validators.required],
			description: ['', Validators.required],
			title: ['', Validators.required],
			desc: ['', Validators.required],
			fileUrl: ['', Validators.required],
			subTitle: ['', Validators.required],
			arrObj: this.fb.array([])
		});
	}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-About Us');
		this.getTeam();
	}
	/////////////////////// 61767ab18031f2102a69ef71 it is aboutusId and it never  be change so plz do not remove from this //////////////////
	getTeam() {
		this.Id = '61767ab18031f2102a69ef71';
		this.landingPageInfo.getAboutUsById().subscribe((res) => {
			this.dataSource.data = res.data;
			this.dataSource.paginator = this.paginator;
			const teamData = res.data[0].team;
			teamData.forEach((element, index) => {
				element.index = index + 1; //adding index
			});
			this.ELEMENTS_DATA = teamData;
			this.dataSources = new MatTableDataSource(this.ELEMENTS_DATA);
			this.dataSources.paginator = this.paginator;
			this.dataSources.sort = this.sort;
			// this.teamData = data.data[0];
		});
	}

	editForm(id, name: boolean, i?: any) {
		this.myId = id;
		this.isEdit = true;
		this.Id = '61767ab18031f2102a69ef71';
		this.landingPageInfo.getAboutUsById().subscribe((data) => {
			this.teamData = data.data[0];
			const dialogRef = this.dialog.open(EditTeamInfoComponent, {
				data: {
					action: 'edit',

					EditData: this.teamData,
					index: i,
					moduleName: name
				},

				width: '900px',
				height: '700px'
			});
			dialogRef.afterClosed().subscribe((result) => {
				if ((result = 'true')) {
					this.ngOnInit();
				}
			});
		});
	}

	addForm(id) {
		this.landingPageInfo.getAboutUsById().subscribe((data) => {
			this.teamData = data.data[0];

			const dialogRef = this.dialog.open(AddTeamInfoComponent, {
				data: {
					action: 'new',
					ID: id,
					EditData: this.teamData._id
				},
				width: '600px',
				height: '500px'
			});
			dialogRef.afterClosed().subscribe((result) => {
				if ((result = 'true')) {
					this.ngOnInit();
				}
			});
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
				this.landingPageInfo.deleteTeam(item._id).subscribe((res) => {
					Swal.fire('Deleted Successfully');

					this.getTeam();
					this.ngOnInit();
					void this.spinner.hide();
				});
			}
		});
	}
}
