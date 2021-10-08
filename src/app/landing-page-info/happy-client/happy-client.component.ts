import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from './../../utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from './../../utils/services/upload-file-service.service';
@Component({
  selector: 'app-happy-client',
  templateUrl: './happy-client.component.html',
  styleUrls: ['./happy-client.component.scss'],
})
export class HappyClientComponent implements OnInit {
  clientDetail: FormGroup;
  happyClientData: any;
  selectedImage: any;
  constructor(
    private fb: FormBuilder,
    private landingPageInfo: LandingPageInfoServiceService,
    public upload: UploadFileServiceService
  ) {
    this.clientDetail = fb.group({
      clientArr: this.fb.array([]),
      heading: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.addHappyClient();
  }

  onFormSubmit() {
    console.log(this.clientDetail.value);

    let happyData = {
      ' title': this.clientDetail.get('title').value,
      description: '',

      arrObj: [
        {
          fileUrl: this.clientDetail.value.clientArr[0].fileUrl,
          title: '',
          description: '',
          subTitle: '',
        },
      ],
    };
    console.log('file: ~ onFormSubmit ~ data', happyData);

    this.landingPageInfo.addAppService(happyData).subscribe((data) => {
      console.log('data=>', data);
      this.happyClientData = data;
    });
  }
  addHappyClient() {
    this.clientArr().push(this.clientForm());
    console.log(this.clientDetail.value);
  }
  clientArr(): FormArray {
    return this.clientDetail.get('clientArr') as FormArray;
  }
  clientForm(): FormGroup {
    return this.fb.group({
      UploadImage: [],
    });
  }
  removeHappyClient(i) {
    const item = <FormArray>this.clientDetail.controls['clientArr'];
    if (item.length > 1) item.removeAt(i);
  }
  browser(event) {
    console.log(event);
    const files = event.target.files[0];
    const formData = new FormData();
    formData.append('', files);
    this.upload.upload(formData).subscribe((res) => {
      console.log(' browser -> res', res);
      this.clientDetail.patchValue({
        filePath: res.filePath,
      });
      this.selectedImage = res.files;
      console.log('browse -> this.selectedImage', this.selectedImage);
    });
  }
}
