import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from './../../utils/services/upload-file-service.service';
import { AddCustomerTestimonailComponent } from './add-customer-testimonail/add-customer-testimonail.component';
import { EditCustomerTestimonailComponent } from './edit-customer-testimonail/edit-customer-testimonail.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-customertestimonials',
  templateUrl: './customertestimonials.component.html',
  styleUrls: ['./customertestimonials.component.scss'],
})
export class CustomertestimonialsComponent implements OnInit {
  testiomnial: FormGroup;
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
  testimonialData: any = [];
  Service: any = [];
  mode: any;
  collectionSize = 10;
  hide = false;
  closeResult: string;
  ELEMENT_DATA = [];
  displayedColumns: string[] = ['heading', 'description', 'actions'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  ELEMENTS_DATA = [];
  displayedColumnss: string[] = ['index', 'images', 'subTitle', 'descrip', 'action'];
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
    this.testiomnial = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      mode: 'Testimonial',
      arrObj: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.getTestimonal();
    this.setTitle.setTitle('WHS-Customer Testiomnial');
  }
  getTestimonal() {
    this.mode = 'Testimonial';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((res) => {
      this.dataSource.data = res.data
      this.dataSource.paginator = this.paginator
      let testimonialData = res.data[0].subModules;
      testimonialData.forEach((element, index) => {
        element.index = index + 1; //adding index
      });
      this.ELEMENTS_DATA = testimonialData;
      this.dataSources = new MatTableDataSource(this.ELEMENTS_DATA);
      this.dataSources.paginator = this.paginator;
      this.dataSources.sort=this.sort;
    });
  }
  editForm(element, name: boolean, i?: any) {
    this.spinner.show();

    this.myId = element._id;
    this.isEdit = true;
    this.mode = 'Testimonial';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {

      this.testimonialData = data.data[0];


      let dialogRef = this.dialog.open(EditCustomerTestimonailComponent, {
        data: {
          action: 'edit',

          EditData: this.testimonialData,
          index: i,
          moduleName: name,
        },

        width: '1000px',
        height: '500px',
      });
      dialogRef.afterClosed().subscribe((result) => {

        if ((result = 'true')) {
          this.getTestimonal();
        }

      });
      this.spinner.hide();
    });
  }

  addForm(id) {
    this.spinner.show();
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {

      this.testimonialData = data.data[0];

      let dialogRef = this.dialog.open(AddCustomerTestimonailComponent, {
        data: {
          action: 'new',
          ID: id,
          EditData: this.testimonialData._id,
        },
        width: '800px',
        height: '500px',
      });
      dialogRef.afterClosed().subscribe((result) => {

        if ((result = 'true')) {
          this.getTestimonal();
        }
      });
      this.spinner.hide();
    });
  }
  close() {
    this.hide = false;
  }
  delete(item) {

    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${item.subTitle}"?`,
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
           this.getTestimonal();
          this.ngOnInit();
          this.spinner.hide()
        })
      }
    });
  }

}
