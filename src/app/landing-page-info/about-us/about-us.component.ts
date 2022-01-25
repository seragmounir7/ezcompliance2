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
		console.log('companyDetail=>', this.companyDetail);
	}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-About Us');
		this.getTeam();
	}
	/////////////////////// 61767ab18031f2102a69ef71 it is aboutusId and it never  be change so plz do not remove from this //////////////////
	getTeam() {
		this.Id = '61767ab18031f2102a69ef71';
		this.landingPageInfo.getAboutUsById(this.Id).subscribe((res) => {
			this.dataSource.data = res.data;
			this.dataSource.paginator = this.paginator;
			let teamData = res.data[0].team;
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
		console.log('sakshi', id);
		this.myId = id;
		this.isEdit = true;
		this.Id = '61767ab18031f2102a69ef71';
		this.landingPageInfo.getAboutUsById(this.Id).subscribe((data) => {
			this.teamData = data.data[0];
			let dialogRef = this.dialog.open(EditTeamInfoComponent, {
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
				console.log('-> openDialog -> result', result);

				if ((result = 'true')) {
					this.ngOnInit();
				}
				console.log('The dialog was closed');
			});
		});
	}

	addForm(id) {
		this.landingPageInfo.getAboutUsById(this.Id).subscribe((data) => {
			console.log('teamData=>', data);
			this.teamData = data.data[0];
			console.log('', this.teamData);
			let dialogRef = this.dialog.open(AddTeamInfoComponent, {
				data: {
					action: 'new',
					ID: id,
					EditData: this.teamData._id
				},
				width: '600px',
				height: '500px'
			});
			dialogRef.afterClosed().subscribe((result) => {
				console.log('openDialog->result', result);
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
	// deleteopen(content, id) {
	//   console.log("deleteopen close id=>",id);
	//   this.Is_id = id;
	//   this.modalService
	//     .open(content, { ariaLabelledBy: 'modal-basic-title' })
	//     .result.then(
	//       (result) => {
	//         this.closeResult = `Closed with: ${result}`;

	//         this.landingPageInfo.deleteTeam(this.Is_id).subscribe((res) => {
	//           console.log('deleted res', res);
	//           this.getTeam();
	//         });
	//       },
	//       (reason) => {

	//         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
	//         console.log('dismissed');
	//       }
	//     );

	// }
	// delete(item) {
	//   Swal.fire({
	//     title: 'Are you sure?',
	//     text: `Do you want to delete "${item}"?`,
	//     icon: 'warning',
	//     showCancelButton: true,
	//     confirmButtonColor: '#00B96F',
	//     cancelButtonColor: '#d33',
	//     confirmButtonText: 'Yes, Delete!',
	//   }).then((result) => {
	//     if (result.value) {
	//       // this.model.attributes.splice(i,1);
	//     }
	//   });
	// }
	// private getDismissReason(reason: any): string {
	//   if (reason === ModalDismissReasons.ESC) {
	//     return 'by pressing ESC';
	//   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
	//     return 'by clicking on a backdrop';
	//   } else {
	//     return `with: ${reason}`;
	//   }
	// }
}
