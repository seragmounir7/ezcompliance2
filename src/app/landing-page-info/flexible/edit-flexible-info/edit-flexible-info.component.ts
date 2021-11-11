import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-edit-flexible-info',
  templateUrl: './edit-flexible-info.component.html',
  styleUrls: ['./edit-flexible-info.component.scss'],
})
export class EditFlexibleInfoComponent implements OnInit {
  flexibleDetail: FormGroup;
  selectedImage: any;
  myId: boolean;
  Is_subMod: boolean;
  isEdit = false;
  // data: any;
  enum: any;
  subId: any;
  flexibleData: any;
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
    public dialogRef: MatDialogRef<EditFlexibleInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.Is_Mod = data.moduleName;
    this.Is_subMod = data.modulename;
    console.log('this.Is_Mod', this.Is_Mod);
    console.log('this.Is_subMod', this.Is_subMod);
    this.flexibleDetail = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      // uploadImage: ['', Validators.required],
      mode: 'Flexible',
      arrObj: this.fb.array([]),
    });

    console.log('data action=>', this.data.action);
  }

  ngOnInit(): void {
    this.addAction();
    if (this.Is_Mod == true) {
      this.subModule = true;
      this.module = false;
    }
    if (this.Is_Mod == false) {
      this.module = true;
      this.subModule = false;
    }
    console.log('data action=>', this.data.action);
    if (this.data.action == 'edit') {
      this.Update = true;
      console.log('data to patch=>', this.data);
      this.flexibleDetail.patchValue({
        mode: 'Flexible',
        title: this.data.EditData.title,
        description: this.data.EditData.description,
      });
      this.add().at(0).patchValue({
        title: this.data.EditData.subModules[this.data.index].title,
        subTitle: this.data.EditData.subModules[this.data.index].subTitle,
      });
      (this.selectedImage = this.data.EditData.subModules[
        this.data.index
      ].fileUrl),
        console.log('img', this.selectedImage);
    }

    let index = this.data.index;
    this.subId = this.data.EditData.subModules[index]._id;

    console.log('aaaaaaa', this.subId);
  }

  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.flexibleDetail.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
      fileUrl: ['', Validators.required],
      subTitle: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  removeSafetyModule(i) {
    this.add().removeAt(i);
  }
  onFormSubmit() {
    console.log('data action=>', this.data.action);

    this.editModule();
    this.editSubModule();
    let value = this.selectedImage;
    console.log('value', value);

    console.log(this.flexibleDetail.value);
    let arrlength = this.add().length;
    for (let i = 0; i < arrlength; i++) {
      this.add()
        .at(i)
        .get('fileUrl')
        ?.setValue(this.selectedImage[i].toString());
    }
    console.log(this.flexibleDetail.value);

    let serviceData = {};

    console.log('file: ~ onFormSubmit ~ data', serviceData);
  }
  browser(event, i) {
    console.log(event, i);
    const files = event.target.files[0];
    const formData = new FormData();
    formData.append('', files);
    let value = this.selectedImage;
    console.log('vvvvvv', value);

    if (value) {
      this.upload.upload(formData).subscribe((res) => {
        console.log(' browser -> res', res);

        this.selectedImage = res.files[0];
      });
    } else {
      this.upload.upload(formData).subscribe((res) => {
        console.log(' browser -> res', res);
        this.flexibleDetail.patchValue({
          filePath: res.filePath,
        });
        this.selectedImage.push(res.files[0]);

        console.log('browse -> this.selectedImage', this.selectedImage);
      });
    }
  }

  editModule() {
    if (this.data.action == 'edit') {
      let flexibleData = {
        title: this.flexibleDetail.controls.title.value,
        description: this.flexibleDetail.controls.description.value,
        mode: 'Flexible',
      };
      console.log('flexibleData=>', flexibleData);
      console.log('this.EditData', this.data.EditData._id);
      this.landingPageInfo
        .editModule(flexibleData, this.data.EditData._id)
        .subscribe((resData) => {
          console.log('editModule', resData);

          this.dialogRef.close('true');
          this.flexibleDetail.reset();
        });
    }
  }
  editSubModule() {
    if (this.data.action == 'edit') {
      let submodulesData = {
        moduleId: this.data.EditData._id,
        title: this.add().at(0).get('title')?.value,
        fileUrl: this.selectedImage,
        subTitle: this.add().at(0).get('subTitle')?.value,
      };
      console.log('wqwertyuytrewsdfg', submodulesData);
      console.log('selectedImage', this.selectedImage);

      console.log('this.EditData', this.data.EditData._id);
      this.landingPageInfo
        .editsubModule(submodulesData, this.subId)
        .subscribe((resData) => {
          console.log('submodulesData', resData);

          this.dialogRef.close('true');
          this.flexibleDetail.reset();
        });
    } else {
      let data = {
        mode: 'Flexible',

        title: this.flexibleDetail.controls.title.value,
        description: this.flexibleDetail.controls.description.value,
        arrObj: this.fb.array([]),
      };
      console.log(data);
      this.landingPageInfo
        .addAppService(this.flexibleDetail.value)
        .subscribe((data) => {
          console.log('data=>', data);
          this.flexibleData = data;
        });
    }
  }
  close() {
    this.dialogRef.close();
}
}
