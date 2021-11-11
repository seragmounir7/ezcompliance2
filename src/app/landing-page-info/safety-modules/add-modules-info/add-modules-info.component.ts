import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-modules-info',
  templateUrl: './add-modules-info.component.html',
  styleUrls: ['./add-modules-info.component.scss'],
})
export class AddModulesInfoComponent implements OnInit {
  selectedImage: any = [];
  safetyDetail!: FormGroup;
  safetyData: any;
  ID: any;
  hide: boolean = true;
  constructor(
    private landingPageInfo: LandingPageInfoServiceService,
    private fb: FormBuilder,
    public upload: UploadFileServiceService,
    public dialogRef: MatDialogRef<AddModulesInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.safetyDetail = this.fb.group({
      moduleId: this.data.EditData,
      title: ['', Validators.required],
      description: ['', Validators.required],
      fileUrl: ['', Validators.required],
    });
    console.log('', data);
  }

  ngOnInit(): void {}
  browser(event) {
    const files = event.target.files[0];
    const formdata = new FormData();
    formdata.append('', files);
    console.log(files);

    this.upload.upload(formdata).subscribe((res) => {
      console.log('AddProductComponent -> browser -> res', res);
      this.selectedImage.push(res.files[0]);
      console.log(
        'AddProductComponent -> browse -> this.selectedImage',
        this.selectedImage
      );
    });
  }
  onSubmit() {
    this.safetyDetail
      .get('fileUrl')
      ?.setValue(this.selectedImage[0].toString());
    console.log(this.safetyDetail.value);

    console.log(this.safetyDetail.value);
    this.landingPageInfo
      .addSubModule(this.safetyDetail.value)
      .subscribe((data) => {
        console.log('data=>', data);
        this.safetyData = data;
        this.dialogRef.close('true');
        this.safetyDetail.reset();
      });
  }
  close() {
    this.dialogRef.close();
}
}
