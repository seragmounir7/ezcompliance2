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
import { EditWorkComponent } from './edit-work/edit-work.component';
import { AddEditSubWorkComponent } from './add-edit-sub-work/add-edit-sub-work.component';
import { AddSubWorkComponent } from './add-sub-work/add-sub-work.component';
@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {

  workData: any = [''];
  SystemData: any = [''];
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
  displayedColumnss: string[] = ['index', 'images', 'title', 'description', 'action'];
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
  ) { }

  ngOnInit(): void {
    this.getWork();
    this.setTitle.setTitle('WHS-OurWork');
    this.getSystemWork();
  }
  getWork() {
    this.myId = "61a20b0cdba3f562225fba01"
    this.landingPageInfo.getWorkById(this.myId).subscribe((res) => {
      console.log("sakshi", res.data)
      this.workData = res.data;
    });
  }

  editWork(id) {
    console.log("work", id)
    this.spinner.show();
    this.myId = id;
    this.isEdit = true;
    let dialogRef = this.dialog.open(EditWorkComponent, {
      data: {
        action: 'edit',
        EditData: this.workData,
      },

      width: '800px',
      height: '600px',
    });
    dialogRef.afterClosed().subscribe((result) => {

      if ((result = 'true')) {
        this.ngOnInit();
      }

    });
    this.spinner.hide();

  }

  getSystemWork() {
    this.mode = 'System'
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((res) => {
      console.log("System", res.data)
      this.dataSource.data = res.data
      // this.SystemData = res.data;
      let SystemData = res.data[0].subModules;
      SystemData.forEach((element, index) => {
        element.index = index + 1;
      });
      this.ELEMENTS_DATA = SystemData;
      this.dataSources = new MatTableDataSource(this.ELEMENTS_DATA);

    });
  }
  close() {
    this.hide = false;
  }
  editSubWork(id, name: boolean, i?: any) {
    this.spinner.show();
    this.myId = id;
    this.isEdit = true;
    this.mode = 'System';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      this.SystemData = data.data[0];
      let dialogRef = this.dialog.open(AddEditSubWorkComponent, {
        data: {
          action: 'edit',
          EditData: this.SystemData,
          index: i,
          moduleName: name,
        },


        width: '800px',
        height: '500px',
      });
      dialogRef.afterClosed().subscribe((result) => {


        if ((result = 'true')) {
          this.getSystemWork()
        }
      });
      this.spinner.hide();
    });
  }


  addForm(id) {
    this.spinner.show();
    this.mode = 'System';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      this.SystemData = data.data[0];
      console.log(this.SystemData)
      let dialogRef = this.dialog.open(AddSubWorkComponent, {
        data: {
          action: 'new',
          ID: id,
          EditData: this.SystemData._id,
        },
        width: '800px',
        height: '500px',
      });
      dialogRef.afterClosed().subscribe((result) => {

        if ((result = 'true')) {
          this.getSystemWork();
        }
      });
      this.spinner.hide();
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
      confirmButtonText: 'Yes, Delete!',
    }).then((result) => {
      if (result.value) {
        this.spinner.show()
        this.landingPageInfo.deletesubModule(item._id).subscribe((res) => {
          Swal.fire('Deleted Successfully')
          this.getSystemWork();
          this.ngOnInit();
          this.spinner.hide()
        })
      }
    });
  }
}
