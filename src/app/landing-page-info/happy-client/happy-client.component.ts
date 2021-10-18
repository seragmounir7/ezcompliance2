import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddHappyClientComponent } from './add-happy-client/add-happy-client.component'; 
@Component({
  selector: 'app-happy-client',
  templateUrl: './happy-client.component.html',
  styleUrls: ['./happy-client.component.scss'],
})
export class HappyClientComponent implements OnInit {
  clientDetail: FormGroup;
  happyClientData: any=[''];
  selectedImage: any;
mode:any;
myId: any;
isEdit = false;
hide=false;
  constructor(
    private fb: FormBuilder,
    private landingPageInfo: LandingPageInfoServiceService,
    public upload: UploadFileServiceService,
    private modalService: NgbModal,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router,
  ) {
    this.clientDetail = fb.group({
      arrObj: this.fb.array([]),
      title: ['', Validators.required],
      mode: 'HappyClient',
    });
  }
  ngOnInit(): void {
  this.getHappyClient()
  }
  getHappyClient() {
    this.mode = 'HappyClient';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      console.log('happyClientData=>', data);
      this.happyClientData = data.data[0];
      console.log('happy', this.happyClientData);
    });
  }
  
  editForm(id,name:boolean, i?:any) {
    console.log("sakshi",id)
    this.myId=id;
    this.isEdit=true;
     this.mode = 'HappyClient';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      console.log('HappyClient=>', data);
      this.happyClientData = data.data[0];
      console.log("",this.happyClientData);
      
   
   
    let dialogRef = this.dialog.open(AddHappyClientComponent, {
      data: {
        
        action: "edit",
   
         EditData: this.happyClientData,
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
  
    let dialogRef = this.dialog.open(AddHappyClientComponent, {
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
