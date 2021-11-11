import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AddHappyClientComponent } from './add-happy-client/add-happy-client.component';
import { AddClientInfoComponent } from './add-client-info/add-client-info.component';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
@Component({
  selector: 'app-happy-client',
  templateUrl: './happy-client.component.html',
  styleUrls: ['./happy-client.component.scss'],
})
export class HappyClientComponent implements OnInit {
  clientDetail: FormGroup;
  happyClientData: any = [''];
  selectedImage: any;
  mode: any;
  myId: any;
  isEdit = false;
  hide = false;
  Is_id: any;
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
    this.clientDetail = fb.group({
      arrObj: this.fb.array([]),
      title: ['', Validators.required],
      mode: 'HappyClient',
    });
  }
  ngOnInit(): void {
    this.getHappyClient();
    this.setTitle.setTitle('WHS-Happy Client');
  }
  getHappyClient() {
    this.mode = 'HappyClient';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      console.log('happyClientData=>', data);
      this.happyClientData = data.data[0];
      console.log('happy', this.happyClientData);
    });
  }

  editForm(id, name: boolean, i?: any) {
    this.spinner.show();
    console.log('sakshi', id);
    this.myId = id;
    this.isEdit = true;
    this.mode = 'HappyClient';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {

      console.log('HappyClient=>', data);
      this.happyClientData = data.data[0];
      console.log('', this.happyClientData);

      let dialogRef = this.dialog.open(AddHappyClientComponent, {
        data: {
          action: 'edit',

          EditData: this.happyClientData,
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
      console.log('HappyClient=>', data);
      this.happyClientData = data.data[0];
      console.log('', this.happyClientData);
      let dialogRef = this.dialog.open(AddClientInfoComponent, {
        data: {
          action: 'new',
          ID: id,
          EditData: this.happyClientData._id,
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
    console.log("deleteopen close id=>",id);
    this.Is_id = id;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
console.log("deleting")
          this.landingPageInfo.deletesubModule(this.Is_id).subscribe((res) => {
            console.log('deleted res', res);
            this.getHappyClient();
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
