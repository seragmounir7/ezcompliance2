import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ParamMap } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-add-application-service-info',
  templateUrl: './add-application-service-info.component.html',
  styleUrls: ['./add-application-service-info.component.scss'],
})
export class AddApplicationServiceInfoComponent implements OnInit {
  serviceDetail: FormGroup;
  selectedImage: any;
  myId: boolean;
  Is_subMod: boolean;
  isEdit = false;
  // data: any;
  enum: any;
  subId: any;
  serviceData: any;
  Is_Mod: any;
  Edit = false;
  Add = false;
  type: string = '';
  Update = false;
  module = false;
  subModule = false;
  moduleName: boolean;

  constructor(
    private fb: FormBuilder,
    private landingPageInfo: LandingPageInfoServiceService,
    public upload: UploadFileServiceService,
    public router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    public dialogRef: MatDialogRef<AddApplicationServiceInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.Is_Mod = data.moduleName;
    this.Is_subMod = data.modulename;

    this.serviceDetail = fb.group({
      arrObj: this.fb.array([]),
      title: ['', Validators.required],
      description: ['', Validators.required],
      mode: 'Service',
    });


  }

  ngOnInit(): void {
    this.addAppService();

    this.Eddit();
    this.Added();

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

      this.serviceDetail.patchValue({
        mode: 'Service',
        title: this.data.EditData.title,
        description: this.data.EditData.description,
      });
      this.appService().at(0).patchValue({
        title: this.data.EditData.subModules[this.data.index].title,
        description: this.data.EditData.subModules[this.data.index].description,
      });
      (this.selectedImage = this.data.EditData.subModules[
        this.data.index
      ].fileUrl),
        console.log('img', this.selectedImage);
    }

    let index = this.data.index;
    this.subId = this.data.EditData.subModules[index]._id;

  }

  Added() {
    if (this.Edit == true) {
      this.Edit = false;
      this.Add = true;
    } else {
      this.Add = true;
    }
  }

  Eddit() {
    if (this.Add == true) {
      this.Add = false;
      this.Edit = true;
    } else {
      this.Edit = true;
    }
  }

  onFormSubmit() {


    this.editModule();
    this.editSubModule();
    let value = this.selectedImage;



    let arrlength = this.appService().length;
    for (let i = 0; i < arrlength; i++) {
      this.appService()
        .at(i)
        .get('fileUrl')
        ?.setValue(this.selectedImage[i].toString());
    }



  }

  addAppService() {
    this.appService().push(this.serviceForm());

  }
  appService(): FormArray {
    return this.serviceDetail.get('arrObj') as FormArray;
  }
  serviceForm(): FormGroup {
    return this.fb.group({
      title: [],
      description: [],
      fileUrl: ['', Validators.required],
      subTitle: '',
    });
  }
  removeAppService(i) {
    const item = <FormArray>this.serviceDetail.controls['arrObj'];
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

        this.serviceDetail.patchValue({
          filePath: res.filePath,
        });
        this.selectedImage.push(res.files[0]);

      });
    }
  }

  editModule() {
    if (this.data.action == 'edit') {
      let ServiceData = {
        title: this.serviceDetail.controls.title.value,
        description: this.serviceDetail.controls.description.value,
        mode: 'Service',
      };

      this.landingPageInfo
        .editModule(ServiceData, this.data.EditData._id)
        .subscribe((resData) => {
          Swal.fire('Edited Successfully')


          this.dialogRef.close('true');
          this.serviceDetail.reset();
        });
    }
  }
  editSubModule() {
    if (this.data.action == 'edit') {
      let submodulesData = {
        moduleId: this.data.EditData._id,
        title: this.appService().at(0).get('title')?.value,
        fileUrl: this.selectedImage,
        description: this.appService().at(0).get('description')?.value,
      };
      this.landingPageInfo
        .editsubModule(submodulesData, this.subId)
        .subscribe((resData) => {
          Swal.fire('Edited Successfully')
          this.dialogRef.close('true');
          this.serviceDetail.reset();
        });
    } else {
      let data = {
        mode: 'Service',

        title: this.serviceDetail.controls.title.value,
        description: this.serviceDetail.controls.description.value,
        arrObj: this.fb.array([]),
      };

      this.landingPageInfo
        .addAppService(this.serviceDetail.value)
        .subscribe((data) => {

          this.serviceData = data;
        });
    }
  }
  close() {
    this.dialogRef.close();
  }
}
