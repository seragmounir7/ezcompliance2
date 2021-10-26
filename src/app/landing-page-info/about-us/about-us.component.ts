import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EditTeamInfoComponent } from './edit-team-info/edit-team-info.component';
import { AddServiceInfoComponent } from '../application-service-info/add-service-info/add-service-info.component';
import { AddTeamInfoComponent } from './add-team-info/add-team-info.component';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
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
  constructor(
    private landingPageInfo: LandingPageInfoServiceService,
    private fb: FormBuilder,
    public upload: UploadFileServiceService,
    private modalService: NgbModal,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router
  ) {
    this.companyDetail = this.fb.group({
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
      title: ['', Validators.required],
      desc: ['', Validators.required],
      fileUrl: ['', Validators.required],
      subTitle: ['', Validators.required],
      arrObj: this.fb.array([]),
    });
    console.log('companyDetail=>', this.companyDetail);
  }

  ngOnInit(): void {
    this.getTeam();
  }
  /////////////////////// 61767ab18031f2102a69ef71 it is aboutusId and it never  be change so plz do not remove from this //////////////////
  getTeam() {
    this.Id = '61767ab18031f2102a69ef71';
    this.landingPageInfo.getAboutUsById(this.Id).subscribe((data) => {
      console.log('teamData=>', data);
      this.teamData = data.data[0];
      console.log('teammm', this.teamData);
    });
  }

  editForm(id, name: boolean, i?: any) {
    console.log('sakshi', id);
    this.myId = id;
    this.isEdit = true;
    this.Id = '61767ab18031f2102a69ef71';
    this.landingPageInfo.getAboutUsById(this.Id).subscribe((data) => {
      console.log('teamData=>', data);
      this.teamData = data.data[0];
      console.log('', this.teamData);

      let dialogRef = this.dialog.open(EditTeamInfoComponent, {
        data: {
          action: 'edit',

          EditData: this.teamData,
          index: i,
          moduleName: name,
        },

        width: '900px',
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
    this.landingPageInfo.getAboutUsById(this.Id).subscribe((data) => {
      console.log('teamData=>', data);
      this.teamData = data.data[0];
      console.log('', this.teamData);
      let dialogRef = this.dialog.open(AddTeamInfoComponent, {
        data: {
          action: 'new',
          ID: id,
          EditData: this.teamData._id,
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
    console.log('deleteopen close id=>', id);
    this.Is_id = id;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          console.log('deleting');
          this.landingPageInfo.deleteTeam(this.Is_id).subscribe((res) => {
            console.log('deleted res', res);
            this.getTeam();
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
