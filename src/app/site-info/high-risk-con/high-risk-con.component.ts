import { Component, OnInit } from '@angular/core';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';

import { UploadFileServiceService } from './../../utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { AddHighRiskConstructionComponent } from './add-high-risk-construction/add-high-risk-construction.component';
import { EditHighRiskConstructionComponent } from './edit-high-risk-construction/edit-high-risk-construction.component';
import { AfterViewInit, ViewChild } from '@angular/core';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort, Sort } from '@angular/material/sort';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-high-risk-con',
	templateUrl: './high-risk-con.component.html',
	styleUrls: ['./high-risk-con.component.scss']
})
export class HighRiskConComponent implements AfterViewInit, OnInit {
	formData: any;
	mode: any;
	highRiskConstructionData: any = [];
	myId: any;
	isEdit = false;
	Is_id: any;
	Edit = false;
	Add = false;
	collectionSize = 10;
	hide = false;
	closeResult: string;
	componentId = '';
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	displayedColumns: string[] = ['index', 'title', 'action'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	constructor(
		private logicalFormInfo: LogicalFormInfoService,
		public dialog: MatDialog,
		private spinner: NgxSpinnerService,
		public router: Router,
		private setTitle: SetTitleService
	) {}

	ngOnInit(): void {
		this.getAllHighRisk();
		this.setTitle.setTitle('WHS-High Risk Construction List');
	}

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}

	// onFormSubmit() {
	//
	//   this.logicalFormInfo
	//     .addFormData(this.riskDetails.getRawValue())
	//     .subscribe((data) => {
	//
	//       this.formData = data;
	//     });
	// }
	// getAllHighRisk() {
	//   this.mode = 'Risk';
	//   this.logicalFormInfo.getFormDataById(this.mode).subscribe((res) => {
	//
	//     this.componentId = res.data[0]._id;
	//     this.highRiskConstructionData = res.data[0];
	//
	//   });
	// }
	// editTask(title,id, i) {
	//
	//   this.myId = id;
	//   this.isEdit = true;
	//   this.mode = 'Risk';

	//   let dialogRef = this.dialog.open(EditHighRiskConstructionComponent, {
	//     data: {
	//       EditData: id,
	//       componentId: this.componentId,
	//       index: i,
	//       title:title
	//       // moduleName: name,
	//     },

	//     width: '1000px',
	//     height: '500px',
	//   });
	//   dialogRef.afterClosed().subscribe((result) => {
	//

	//     if ((result = 'true')) {
	//       this.getAllHighRisk();
	//     }
	//
	//   });
	// }

	// addTask() {
	//   let dialogRef = this.dialog.open(AddHighRiskConstructionComponent, {
	//     data: {
	//       action: 'new',
	//       EditData: this.componentId,
	//     },
	//     width: '600px',
	//     height: '400px',
	//   });
	//   dialogRef.afterClosed().subscribe((result) => {
	//
	//     if ((result = 'true')) {
	//       this.getAllHighRisk();
	//     }
	//   });

	// }
	// deleteopen(content, id) {
	//
	//   this.Is_id = id;
	//   this.modalService
	//     .open(content, { ariaLabelledBy: 'modal-basic-title' })
	//     .result.then(
	//       (result) => {
	//         this.closeResult = `Closed with: ${result}`;
	//
	//         this.logicalFormInfo
	//           .deleteSubComponent(this.Is_id)
	//           .subscribe((res) => {
	//             Swal.fire('Deleted Successfully');
	//
	//             this.getAllHighRisk();
	//           });
	//       },
	//       (reason) => {
	//         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
	//
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
	getAllHighRisk(field = '', value = '') {
		this.logicalFormInfo.getAllRisk(field, value).subscribe((res: any) => {
			// this.jobTaskData = res.data[0].subComponents;
			const data = res.data;
			data.forEach((element, index) => {
				element.index = index + 1; //adding index
			});

			this.ELEMENT_DATA = data;
			this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
			this.dataSource.paginator = this.paginator;
			//this.dataSource.sort = this.sort;
			//  this.task = res.data.subComponents;
		});
	}
	edit(element) {
		const dialogRef = this.dialog.open(EditHighRiskConstructionComponent, {
			width: '550px',
			data: element
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.getAllHighRisk();
			}
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
				this.logicalFormInfo.deleteRisk(item._id).subscribe((res) => {
					Swal.fire({
						title: 'Parameter Deleted successfully',
						showConfirmButton: false,
						timer: 1200
					});

					this.getAllHighRisk();
				});
			}
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	sortData(sort: Sort) {
		this.getAllHighRisk(sort.active, sort.direction);
	}
}
