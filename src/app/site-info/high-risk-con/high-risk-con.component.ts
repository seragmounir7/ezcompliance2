import { Component, OnInit } from '@angular/core';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';

import { UploadFileServiceService } from './../../utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms'
import { AddHighRiskConstructionComponent } from './add-high-risk-construction/add-high-risk-construction.component';
import { EditHighRiskConstructionComponent } from './edit-high-risk-construction/edit-high-risk-construction.component';
@Component({
  selector: 'app-high-risk-con',
  templateUrl: './high-risk-con.component.html',
  styleUrls: ['./high-risk-con.component.scss']
})
export class HighRiskConComponent implements OnInit {
  riskDetails!: FormGroup;
  formData: any;
  mode:any;
  highRiskConstructionData:any=[];
  myId: any;
  isEdit = false;
  Is_id: any;
  Edit = false;
  Add = false;
  collectionSize = 10;
  hide = false;
  closeResult: string;
  constructor(
    private fb: FormBuilder,
    private LandingPageInfoService:LandingPageInfoServiceService,
    public upload: UploadFileServiceService,
    private modalService: NgbModal,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router
  ) { 
    this.riskDetails=this.fb.group({
      mode:"Risk",
      arrObj: this.fb.array([]),
    });
    console.log('riskDetails=>', this.riskDetails);
  }

  ngOnInit(): void {
    this.addAction();
    this.getHighRiskById();
  }
  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.riskDetails.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
     
      title: ['', Validators.required],
    });
  }
  
  removeSafetyModule(i) {
    const item = <FormArray>this.riskDetails.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
    
    }
  }
  onFormSubmit() {
    console.log(this.riskDetails);
    this.LandingPageInfoService.addFormData(this.riskDetails.getRawValue()).subscribe((data) => {
      console.log('risk=>', data);
      this.formData = data;
    });
  }
  getHighRiskById(){
    this.mode = 'Risk';
    this.LandingPageInfoService.getFormDataById(this.mode).subscribe((data) => {
      console.log('riskDetails=>', data);
        this.highRiskConstructionData = data.data[0];
       console.log('highRiskConstructionData', this.highRiskConstructionData);
    });
  }
  editTask(id, i?: any) {
    this.spinner.show();
    console.log('sakshi', id);
    this.myId = id;
    this.isEdit = true;
    this.mode = 'Risk';
    this.LandingPageInfoService.getFormDataById(this.mode).subscribe((data) => {
      console.log('riskDetails=>', data);
        this.highRiskConstructionData = data.data[0];
       console.log('highRiskConstructionData', this.highRiskConstructionData);

      let dialogRef = this.dialog.open(EditHighRiskConstructionComponent, {
        data: {
          action: 'edit',

          EditData: this.highRiskConstructionData,
          index: i,
         // moduleName: name,
        },

        width: '1000px',
        height: '500px',
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log('-> openDialog -> result', result);

        if ((result = 'true')) {
          this. getHighRiskById();
        }
        console.log('The dialog was closed');
      });
      
      this.spinner.hide();
    });
  }


  addTask(id) {
    this.spinner.show();
    this.LandingPageInfoService.getFormDataById(this.mode).subscribe((data) => {
      console.log('riskDetails=>', data);
      this.highRiskConstructionData = data.data[0];
      console.log('', this.highRiskConstructionData);
      let dialogRef = this.dialog.open(AddHighRiskConstructionComponent, {
        data: {
          action: 'new',
          ID: id,
          EditData: this.highRiskConstructionData._id,
        },
        width: '600px',
        height: '500px',
      });
      dialogRef.afterClosed().subscribe((result) => {
        console.log('openDialog->result', result);
        if ((result = 'true')) {
          this.getHighRiskById();
        }
      });
      
      this.spinner.hide();
    });
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
          this.LandingPageInfoService.deleteSubComponent
          (this.Is_id).subscribe((res) => {
            Swal.fire('Deleted Successfully')
            console.log('deleted res', res);
            this.getHighRiskById();
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

