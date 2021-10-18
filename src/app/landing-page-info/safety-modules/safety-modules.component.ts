import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AddSafetyModuleComponent } from './add-safety-module/add-safety-module.component';
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

  mode:any;
  myId: any;
  isEdit = false;
  hide=false;
  safetyData: any=[''];
  constructor(
    private fb: FormBuilder,
    private landingPageInfo: LandingPageInfoServiceService,
    public upload: UploadFileServiceService,
    private modalService: NgbModal,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router,
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
  }
  getSafety() {
    this.mode = 'Safety';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      this.safetyData = data.data[0];
      console.log('ssss', this.safetyData);
    });
  }
  editForm(id,name:boolean, i?:any) {
    console.log("sakshi",id)
    this.myId=id;
    this.isEdit=true;
     this.mode = 'Safety';
      this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
        this.safetyData = data.data[0];
        console.log('ssss', this.safetyData);
      let dialogRef = this.dialog.open(AddSafetyModuleComponent, {
      data: {
        
        action: "edit",
   
         EditData: this.safetyData,
          index:i,
          moduleName:name,
      },
      
        width: '800px',
       height:'600px'
        
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("-> openDialog -> result", result);

      if ((result = "true")) {
        this.ngOnInit();
       
      }
      console.log("The dialog was closed");
    });
  });
  }
  
  addForm(id){
  
    let dialogRef = this.dialog.open(AddSafetyModuleComponent, {
     data:{
      action:"new",
      ID: id,
     },

     width: '800px',
     height:'600px'
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("openDialog->result", result)
      if ((result = "true")) {
        this.ngOnInit();
      }
      });
  }
  close() {
    this.hide = false;
  }
}
