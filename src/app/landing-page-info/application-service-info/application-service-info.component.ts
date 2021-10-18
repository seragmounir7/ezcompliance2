import { Component, OnInit , ViewChild} from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from './../../utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AddApplicationServiceInfoComponent } from './add-application-service-info/add-application-service-info.component';
@Component({
  selector: 'app-application-service-info',
  templateUrl: './application-service-info.component.html',
  styleUrls: ['./application-service-info.component.scss'],
})
export class ApplicationServiceInfoComponent implements OnInit {
  serviceDetail: FormGroup;
  selectedImage: any ;
  myId: any;
  isEdit = false;
  data: any=[];
  enum: any;
  serviceData: any;
  Is_id: any;
  Edit = false;
  Add = false;
  page = 1;
  pageSize = 10;
  ServiceData: any=[];
  Service: any=[];
  mode:any;
  collectionSize = 10;
  hide=false;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(
    private fb: FormBuilder,
    private landingPageInfo: LandingPageInfoServiceService,
    public upload: UploadFileServiceService,
    private modalService: NgbModal,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router,
  ) {
    this.serviceDetail = fb.group({
      arrObj: this.fb.array([]),
      title: ['', Validators.required],
      description: ['', Validators.required],
      mode: 'Service',
    });
  }

  ngOnInit(): void {
    this.getServiceData();
   
  }
 
  service:any
  getServiceData() {
    this.mode = 'Service';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      console.log('ApplicationServiceData=>', data);
     
      this.ServiceData = data.data[0];
   
      console.log('sakshiiiii',this.Service);
    });
  }
  

  editForm(id,name:boolean, i?:any) {
    console.log("sakshi",id)
    this.myId=id;
    this.isEdit=true;
     this.mode = 'Service';
    this.landingPageInfo.getAppServiceById(this.mode).subscribe((data) => {
      console.log('serviceData=>', data);
      this.ServiceData = data.data[0];
      console.log("",this.ServiceData);
      
   
   
    let dialogRef = this.dialog.open(AddApplicationServiceInfoComponent, {
      data: {
        
        action: "edit",
   
         EditData: this.ServiceData,
          index:i,
          moduleName:name,
      },
      
      width: '1000px',
      height:'500px'
       
        
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
  
    let dialogRef = this.dialog.open(AddApplicationServiceInfoComponent, {
     data:{
      action:"new",
      ID: id,
     },
     width: '800px',
     height:'500px'
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
