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
  selector: 'app-add-team-info',
  templateUrl: './add-team-info.component.html',
  styleUrls: ['./add-team-info.component.scss'],
})
export class AddTeamInfoComponent implements OnInit {
  companyDetail: FormGroup;
  selectedImage: any = [];
  teamData: any;
  ID: any;
  hide: boolean = true;
  constructor(
    private landingPageInfo: LandingPageInfoServiceService,
    private fb: FormBuilder,
    public upload: UploadFileServiceService,
    public dialogRef: MatDialogRef<AddTeamInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.companyDetail = this.fb.group({
      aboutUsId: this.data.EditData,
      imageUrl: ['', Validators.required],
      title: ['', Validators.required],
    });
    console.log('addd', data);
    console.log('aboutiddd', this.data.EditData);
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
    this.companyDetail
      .get('imageUrl')
      ?.setValue(this.selectedImage[0].toString());
    console.log(this.companyDetail.value);

    console.log(this.companyDetail.value);
    this.landingPageInfo.addTeam(this.companyDetail.value).subscribe((data) => {
      console.log('data=>', data);
      this.teamData = data;
      this.dialogRef.close('true');
    });
  }
}
