import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AddSafetyModuleComponent } from './add-safety-module/add-safety-module.component';
import { AddModulesInfoComponent } from './add-modules-info/add-modules-info.component';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
@Component({
  selector: 'app-safety-modules',
  templateUrl: './safety-modules.component.html',
  styleUrls: ['./safety-modules.component.scss'],
})
export class SafetyModulesComponent implements OnInit {
  safetyDetail: FormGroup;
  selectedImage: any;
  data: any;
  enum: any;
  Is_id: any;
  mode: any;
  myId: any;
  isEdit = false;
  hide = false;
  safetyData: any = [''];
  closeResult: string;
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
    this.safetyDetail = fb.group({
      mode: 'Safety',
      arrObj: this.fb.array([]),
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.getSafety();
    this.setTitle.setTitle('WHS-Safty Module');
  }
  getSafety() {
    this.mode = 'Safety';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      this.safetyData = data.data[0];
      console.log('safety modules', data);
    });
  }
  editForm(id, name: boolean, i?: any) {
    this.spinner.show();
    console.log('sakshi', id);
    this.myId = id;
    this.isEdit = true;
    this.mode = 'Safety';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      this.safetyData = data.data[0];
      console.log('ssss', this.safetyData);
      let dialogRef = this.dialog.open(AddSafetyModuleComponent, {
        data: {
          action: 'edit',

          EditData: this.safetyData,
          index: i,
          moduleName: name,
        },

        width: '800px',
        height: '600px',
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
      Swal.fire('Deleted Successfully')
      this.safetyData = data.data[0];
      console.log('ssss', this.safetyData);
      let dialogRef = this.dialog.open(AddModulesInfoComponent, {
        data: {
          action: 'new',
          ID: id,
          EditData: this.safetyData._id,
        },

        width: '800px',
        height: '600px',
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
  close() {
    this.hide = false;
  }
}
