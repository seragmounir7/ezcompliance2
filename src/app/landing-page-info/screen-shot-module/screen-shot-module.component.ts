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
import { EditScreenShotComponent } from './edit-screen-shot/edit-screen-shot.component';
import { AddScreenShotComponent } from './add-screen-shot/add-screen-shot.component';

@Component({
  selector: 'app-screen-shot-module',
  templateUrl: './screen-shot-module.component.html',
  styleUrls: ['./screen-shot-module.component.scss']
})
export class ScreenShotModuleComponent implements OnInit {
  workData: any = [''];
  ScreenData: any = [''];
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
  constructor(private fb: FormBuilder,
    private landingPageInfo: LandingPageInfoServiceService,
    public upload: UploadFileServiceService,
    private modalService: NgbModal,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router,
    private setTitle: SetTitleService) { }

  ngOnInit(): void {
    this.setTitle.setTitle('WHS-OurWork');
    this.getScreenWork();
  }

  getScreenWork() {
    this.mode = 'Screenshot'
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((res) => {
      console.log("Screenshot", res.data)
      this.dataSource.data = res.data
      // this.ScreenData = res.data;
      let ScreenData = res.data[0].subModules;
      ScreenData.forEach((element, index) => {
        element.index = index + 1;
      });
      this.ELEMENTS_DATA = ScreenData;
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
    this.mode = 'Screenshot';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      this.ScreenData = data.data[0];
      let dialogRef = this.dialog.open(EditScreenShotComponent, {
        data: {
          action: 'edit',
          EditData: this.ScreenData,
          index: i,
          moduleName: name,
        },


        width: '800px',
        height: '500px',
      });
      dialogRef.afterClosed().subscribe((result) => {


        if ((result = 'true')) {
          this.getScreenWork()
        }
      });
      this.spinner.hide();
    });
  }


  addForm(id) {
    this.spinner.show();
    this.mode = 'Screenshot';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      this.ScreenData = data.data[0];
      console.log(this.ScreenData)
      let dialogRef = this.dialog.open(AddScreenShotComponent, {
        data: {
          action: 'new',
          ID: id,
          EditData: this.ScreenData._id,
        },
        width: '800px',
        height: '500px',
      });
      dialogRef.afterClosed().subscribe((result) => {

        if ((result = 'true')) {
          this.getScreenWork();
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
          this.getScreenWork();
          this.ngOnInit();
          this.spinner.hide()
        })
      }
    });
  }
}

