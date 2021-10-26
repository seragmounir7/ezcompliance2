import { Component, OnInit } from '@angular/core';
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
  constructor(
    private fb: FormBuilder,
    private landingPageInfo: LandingPageInfoServiceService,
    public upload: UploadFileServiceService,
    private modalService: NgbModal,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router
  ) {
    this.testiomnial = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      // uploadImage: ['', Validators.required],
      mode: 'Testimonial',
      arrObj: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.getTestimonal();
  }
  getTestimonal() {
    this.mode = 'Testimonial';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      console.log('getTestimonal=>', data);
      this.testimonialData = data.data[0];
    });
  }
  editForm(id, name: boolean, i?: any) {
    console.log('sakshi', id);
    this.myId = id;
    this.isEdit = true;
    this.mode = 'Testimonial';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      console.log('Testimonial=>', data);
      this.testimonialData = data.data[0];
      console.log('testimonialData', this.testimonialData);

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
        console.log('-> openDialog -> result', result);

        if ((result = 'true')) {
          this.getTestimonal();
        }
        console.log('The dialog was closed');
      });
    });
  }

  addForm(id) {
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      console.log('Testimonial=>', data);
      this.testimonialData = data.data[0];
      console.log('', this.testimonialData);
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
        console.log('openDialog->result', result);
        if ((result = 'true')) {
          this.getTestimonal();
        }
      });
    });
  }
  close() {
    this.hide = false;
  }

  deleteopen(content, id) {
    console.log('deleteopen close id=>', id);
    this.Is_id = id;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          console.log('deleting');
          this.landingPageInfo.deletesubModule(this.Is_id).subscribe((res) => {
            console.log('deleted res', res);
            this.getTestimonal();
          });
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          console.log('dismissed');
        }
      );
  }
  delete(item) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${item}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!',
    }).then((result) => {
      if (result.value) {
        // this.model.attributes.splice(i,1);
      }
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
