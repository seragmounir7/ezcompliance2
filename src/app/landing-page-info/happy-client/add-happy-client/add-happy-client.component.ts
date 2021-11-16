import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-add-happy-client',
  templateUrl: './add-happy-client.component.html',
  styleUrls: ['./add-happy-client.component.scss'],
})
export class AddHappyClientComponent implements OnInit {
  clientDetail: FormGroup;
  happyClientData: any = [];
  selectedImage: any;
  myId: boolean;
  enum: any;
  module = false;
  subModule = false;
  Update = false;
  moduleName: string;
  subId: any;
  Is_Mod: any;
  constructor(
    private fb: FormBuilder,
    private landingPageInfo: LandingPageInfoServiceService,
    public upload: UploadFileServiceService,
    public router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    public dialogRef: MatDialogRef<AddHappyClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.Is_Mod = data.moduleName;
    this.clientDetail = fb.group({
      arrObj: this.fb.array([]),
      title: ['', Validators.required],
      mode: 'HappyClient',
    });
    
  }

  ngOnInit(): void {
    this.addHappyClient();
    if (this.Is_Mod == true) {
      this.subModule = true;
      this.module = false;
    }
    if (this.Is_Mod == false) {
      this.module = true;
      this.subModule = false;
    }
    if (this.data.action == 'edit') {
      this.Update = true;
     
      this.clientDetail.patchValue({
        mode: 'HappyClient',
        title: this.data.EditData.title,
      });
      (this.selectedImage = this.data.EditData.subModules[
        this.data.index
      ].fileUrl),
        console.log('img', this.selectedImage);
    }

    let index = this.data.index;
    this.subId = this.data.EditData.subModules[index]._id;


  }
  onFormSubmit() {
    let value = this.selectedImage[0];
  
    let arrlength = this.clientArr().length;
    for (let i = 0; i < arrlength; i++) {
      this.clientArr()
        .at(i)
        .get('fileUrl')
        ?.setValue(this.selectedImage[i].toString());
    }
  
  }
  addHappyClient() {
    this.clientArr().push(this.clientForm());
  
  }
  clientArr(): FormArray {
    return this.clientDetail.get('arrObj') as FormArray;
  }
  clientForm(): FormGroup {
    return this.fb.group({
      fileUrl: ['', Validators.required],
      title: [],
      description: '',
      subTitle: '',
    });
  }
  removeHappyClient(i) {
    const item = <FormArray>this.clientDetail.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
      this.selectedImage.splice(i, 1);
    }
  }

  browser(event, i) {

    const files = event.target.files[0];
    const formData = new FormData();
    formData.append('', files);
    let value = this.selectedImage;

    if (value) {
      this.upload.upload(formData).subscribe((res) => {

        this.selectedImage = res.files[0];
      });
    } else {
      this.upload.upload(formData).subscribe((res) => {
     
        this.happyClientData.patchValue({
          filePath: res.filePath,
        });
        this.selectedImage.push(res.files[0]);

      });
    }
  }
  editModule() {
    if (this.data.action == 'edit') {
      let ServiceData = {
        title: this.clientDetail.controls.title.value,
        mode: 'HappyClient',
      };


      this.landingPageInfo
        .editModule(ServiceData, this.data.EditData._id)
        .subscribe((resData) => {
          Swal.fire('Edited Successfully')
          this.dialogRef.close('true');
          this.clientDetail.reset();
        });
    } else {
      let data = {
        mode: 'HappyClient',

        title: this.clientDetail.controls.title.value,
        arrObj: this.fb.array([]),
      };
    
      this.landingPageInfo
        .addAppService(this.clientDetail.value)
        .subscribe((data) => {

          this.happyClientData = data;
        });
    }
  }
  editSubModule() {
    if (this.data.action == 'edit') {
      let submodulesData = {
        moduleId: this.data.EditData._id,
        fileUrl: this.selectedImage,
      };
      this.landingPageInfo
        .editsubModule(submodulesData, this.subId)
        .subscribe((resData) => {
          Swal.fire('Edited Successfully')


          this.dialogRef.close('true');
          this.clientDetail.reset();
        });
    } else {
      let data = {
        mode: 'HappyClient',
        title: this.clientDetail.controls.title.value,
        arrObj: this.fb.array([]),
      };
      console.log(data);
      this.landingPageInfo
        .addAppService(this.clientDetail.value)
        .subscribe((data) => {
          console.log('data=>', data);
          this.happyClientData = data;
        });
    }
  }
  close() {
    this.dialogRef.close();
}
}
