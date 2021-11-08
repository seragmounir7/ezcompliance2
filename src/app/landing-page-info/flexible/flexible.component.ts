import { LandingPageInfoServiceService } from './../../utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from './../../utils/services/upload-file-service.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AddFlexibleInfoComponent } from './add-flexible-info/add-flexible-info.component';
import { EditFlexibleInfoComponent } from './edit-flexible-info/edit-flexible-info.component';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
@Component({
  selector: 'app-flexible',
  templateUrl: './flexible.component.html',
  styleUrls: ['./flexible.component.scss'],
})
export class FlexibleComponent implements OnInit {
  flexibleDetail!: FormGroup;
  selectedImage: any;
  myId: any;
  isEdit = false;
  data: any = [];
  enum: any;
  flexibleData: any = [];
  Is_id: any;
  Edit = false;
  Add = false;
  hide = false;
  closeResult: string;
  FlexibleData: any = [];
  flexible?: any;
  mode: any;
  constructor(
    private fb: FormBuilder,
    private upload: UploadFileServiceService,
    private landingPageInfo: LandingPageInfoServiceService,
    private modalService: NgbModal,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router,
    private setTitle: SetTitleService
  ) {
    this.flexibleDetail = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      mode: 'Flexible',
      arrObj: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    //  this.addAction();
    this.getFlexible();
    this.setTitle.setTitle('WHS-Flexible Complience');
  }

  getFlexible() {
    this.mode = 'Flexible';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      console.log('flexibleData=>', data);
      this.flexibleData = data.data[0];
      this.flexible = this.flexibleData.subModules[0].title;
      console.log('newwww', this.flexibleData);
      console.log('wwww', this.flexible);
    });
  }
  editForm(id, name: boolean, i?: any) {
    this.spinner.show();
    console.log('sakshi', id);
    this.myId = id;
    this.isEdit = true;
    this.mode = 'Flexible';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      console.log('flexibleData=>', data);
      this.flexibleData = data.data[0];
      console.log('', this.flexibleData);

      let dialogRef = this.dialog.open(EditFlexibleInfoComponent, {
        data: {
          action: 'edit',

          EditData: this.flexibleData,
          index: i,
          moduleName: name,
        },

        width: '1000px',
        height: '500px',
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log('-> openDialog -> result', result);

        if ((result = 'true')) {
          this.ngOnInit();
        }
        console.log('The dialog was closed');
      });
      this.spinner.hide();
    });
  }

  addForm(id) {
    this.spinner.show();
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      console.log('flexibleData=>', data);
      this.flexibleData = data.data[0];
      console.log('', this.flexibleData);
      let dialogRef = this.dialog.open(AddFlexibleInfoComponent, {
        data: {
          action: 'new',
          ID: id,
          EditData: this.flexibleData._id,
        },
        width: '800px',
        height: '500px',
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log('openDialog->result', result);
        if ((result = 'true')) {
          this.ngOnInit();
        }
      });
      this.spinner.hide();
    });
  }
  close() {
    this.hide = false;
  }

  deleteopen(content, id) {
    this.Is_id = id;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;

          this.landingPageInfo.deletesubModule(this.Is_id).subscribe((res) => {
            Swal.fire('Deleted Successfully')
            console.log('deleted res', res);
            this.getFlexible();
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
