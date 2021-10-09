import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from './../../utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from './../../utils/services/upload-file-service.service';
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
  safetyData: any;
  constructor(
    private fb: FormBuilder,
    private landingPageInfo: LandingPageInfoServiceService,
    public upload: UploadFileServiceService
  ) {
    this.safetyDetail = fb.group({
      safetyImgArr: this.fb.array([]),
      heading: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.addSafetyModule();
  }
  onFormSubmit() {
    console.log(this.safetyDetail.value);

    let safetyData = {
      ' title': this.safetyDetail.get('title').value,
      description: this.safetyDetail.get('description').value,

      arrObj: [
        {
          fileUrl: this.safetyDetail.value.safetyImgArr[0].fileUrl,
          title: this.safetyDetail.value.safetyImgArr[0].title,
          description: '',
          subTitle: '',
        },
      ],
    };

    console.log('file: ~ onFormSubmit ~ data', safetyData);

    this.landingPageInfo.addAppService(safetyData).subscribe((data) => {
      console.log('data=>', data);
      this.safetyData = data;
    });
  }
  addSafetyModule() {
    this.safetyImgArr().push(this.safetyForm());
    console.log(this.safetyDetail.value);
  }
  safetyImgArr(): FormArray {
    return this.safetyDetail.get('safetyImgArr') as FormArray;
  }
  safetyForm(): FormGroup {
    return this.fb.group({
      UploadImage: [],
      name: [],
    });
  }
  removeSafetyModule(i) {
    const item = <FormArray>this.safetyDetail.controls['appService'];
    if (item.length > 1) item.removeAt(i);
  }
  browser(event) {
    console.log(event);
    const files = event.target.files[0];
    const formData = new FormData();
    formData.append('', files);
    this.upload.upload(formData).subscribe((res) => {
      console.log(' browser -> res', res);
      this.safetyDetail.patchValue({
        filePath: res.filePath,
      });
      this.selectedImage = res.files;
      console.log('browse -> this.selectedImage', this.selectedImage);
    });
  }
}
