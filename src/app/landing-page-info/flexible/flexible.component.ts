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
    public router: Router
  ) {
    this.flexibleDetail = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      // uploadImage: ['', Validators.required],
      mode: 'Flexible',
      arrObj: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    //  this.addAction();
    this.getFlexible();
  }

  // addAction() {
  //   {
  //     this.add().push(this.newAction());
  //   }
  // }
  // add(): FormArray {
  //   return this.flexibleDetail.get('arrObj') as FormArray;
  // }
  // newAction(): FormGroup {
  //   return this.fb.group({
  //     fileUrl: ['', Validators.required],
  //     subTitle: ['', Validators.required],
  //     title: ['', Validators.required],
  //     description: ['', Validators.required],
  //   });
  // }
  onFormSubmit() {
    console.log(this.flexibleDetail.value);

    let data = {
      //   "title": this.flexibleDetail.get("heading").value,
      // "description": this.flexibleDetail.get("description").value,
      // "mode": "Flexible",
      // "arrObj": [
      //     {
      //         "title": this.flexibleDetail.get("subheading").value,
      //         "subTitle":this.flexibleDetail.value.flrxibleImgArr[0].name,
      //         "description": "",
      //         "fileUrl":this.flexibleDetail.value.flrxibleImgArr[0].UploadImage,
      //     }
      //   ]
    };
    this.landingPageInfo
      .addAppService(this.flexibleDetail.value)
      .subscribe((res) => {
        console.log('AddProductComponent -> browser -> res', res);
        // this.studDetail.patchValue({
        //   filePath: res.filePath,
        // });
        this.selectedImage = res.files;
        console.log(
          'AddProductComponent -> browse -> this.selectedImage',
          this.selectedImage
        );
      });
  }

  // removeSafetyModule(i) {
  //   this.add().removeAt(i);
  // }
  browser(event) {
    const files = event.target.files[0];
    console.log(event);
    const formdata = new FormData();
    formdata.append('', files);

    this.upload.upload(formdata).subscribe((res) => {
      console.log('AddProductComponent -> browser -> res', res);
      // this.studDetail.patchValue({
      //   filePath: res.filePath,
      // });
      this.selectedImage = res.files;
      console.log(
        'AddProductComponent -> browse -> this.selectedImage',
        this.selectedImage
      );
    });
  }
  getFlexible() {
    this.mode = 'Flexible';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      console.log('flexibleData=>', data);
      this.flexibleData = data.data[0];
      this.flexible = this.flexibleData.subModules[0].title;
    });
  }
  editForm(id, name: boolean, i?: any) {
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
    });
  }

  addForm(id) {
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
    });
  }
  close() {
    this.hide = false;
  }

  deleteopen(content, id) {
    console.log(id);
    this.Is_id = id;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;

          this.landingPageInfo.deletesubModule(this.Is_id).subscribe((res) => {
            console.log('deleted res', res);
            this.ngOnInit();
          });
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          console.log('dismissed');
        }
      );
    this.landingPageInfo.deletesubModule(this.Is_id).subscribe((res) => {
      console.log('deleted res', res);
      this.ngOnInit();
    });
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
