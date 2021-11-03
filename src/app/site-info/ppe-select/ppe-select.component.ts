import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { AddPPEselectComponent } from './add-ppeselect/add-ppeselect.component';
import { EditPPEselectComponent } from './edit-ppeselect/edit-ppeselect.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ppe-select',
  templateUrl: './ppe-select.component.html',
  styleUrls: ['./ppe-select.component.scss']
})
export class PpeSelectComponent implements OnInit {
  PPEselect: FormGroup;
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
    this.PPEselect=this.fb.group({
      mode:"Risk",
      arrObj: this.fb.array([]),
    });
    console.log('PPEselect=>', this.PPEselect);
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
    return this.PPEselect.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
     
      title: ['', Validators.required],
    });
  }
  
  removeSafetyModule(i) {
    const item = <FormArray>this.PPEselect.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
    
    }
  }
  onFormSubmit() {
    console.log(this.PPEselect);
    this.LandingPageInfoService.addFormData(this.PPEselect.getRawValue()).subscribe((data) => {
      console.log('risk=>', data);
      this.formData = data;
    });
  }
  getHighRiskById(){
    this.mode = 'Risk';
    this.LandingPageInfoService.getFormDataById(this.mode).subscribe((data) => {
      console.log('PPEselect=>', data);
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
      console.log('PPEselect=>', data);
        this.highRiskConstructionData = data.data[0];
       console.log('highRiskConstructionData', this.highRiskConstructionData);

      let dialogRef = this.dialog.open(EditPPEselectComponent, {
        data: {
          action: 'edit',

          EditData: this.highRiskConstructionData,
          index: i,
         // moduleName: name,
        },

        width: '600px',
        height: '330px',
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
      console.log('PPEselect=>', data);
      this.highRiskConstructionData = data.data[0];
      console.log('', this.highRiskConstructionData);
      let dialogRef = this.dialog.open(AddPPEselectComponent, {
        data: {
          action: 'new',
          ID: id,
          EditData: this.highRiskConstructionData._id,
        },
        width: '600px',
        height: '340px',
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
