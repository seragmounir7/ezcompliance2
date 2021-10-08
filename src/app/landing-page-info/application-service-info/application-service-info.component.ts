// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-application-service-info',
//   templateUrl: './application-service-info.component.html',
//   styleUrls: ['./application-service-info.component.scss']
// })
// export class ApplicationServiceInfoComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
@Component({
  selector: 'app-application-service-info',
  templateUrl: './application-service-info.component.html',
  styleUrls: ['./application-service-info.component.scss'],
})
export class ApplicationServiceInfoComponent implements OnInit {
  serviceDetail: FormGroup;
  selectedImage: any;
  myId: any;
  isEdit = false;
  data: any;
  enum: any;
  serviceData: any;
  constructor(
    private fb: FormBuilder,
    private landingPageInfo: LandingPageInfoServiceService,
    public upload: UploadFileServiceService
  ) {
    this.serviceDetail = fb.group({
      appService: this.fb.array([]),
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.addAppService();
  }
  onFormSubmit() {
    console.log(this.serviceDetail.value);

    let serviceData = {
      ' title': this.serviceDetail.get('title').value,
      'description': this.serviceDetail.get('description').value,

      'arrObj': [
        {
          'fileUrl': this.serviceDetail.value.appService[0].fileUrl,
          'title': this.serviceDetail.value.appService[0].title,
          'description': this.serviceDetail.value.appService[0].description,
          'subTitle': '',
        },
      ],
    };

    console.log('file: ~ onFormSubmit ~ data', serviceData);

    this.landingPageInfo.addAppService(serviceData).subscribe((data) => {
      console.log('data=>', data);
      this.serviceData = data;
    });
  }

  addAppService() {
    this.appService().push(this.serviceForm());
    console.log(this.serviceDetail.value);
  }
  appService(): FormArray {
    return this.serviceDetail.get('appService') as FormArray;
  }
  serviceForm(): FormGroup {
    return this.fb.group({
      title: [],
      description: [],
      fileUrl: [],
    });
  }
  removeAppService(i) {
    const item = <FormArray>this.serviceDetail.controls['appService'];
    if (item.length > 1) item.removeAt(i);
  }
  browser(event) {
    console.log(event);
    const files = event.target.files[0];
    const formData = new FormData();
    formData.append('', files);
    this.upload.upload(formData).subscribe((res) => {
      console.log(' browser -> res', res);
      this.serviceDetail.patchValue({
        filePath: res.filePath,
      });
      this.selectedImage = res.files;
      console.log('browse -> this.selectedImage', this.selectedImage);
    });
  }
  editService(id) {
    console.log(id);
    this.myId = id;
    this.isEdit = true;
    this.landingPageInfo.getAppServiceById(id).subscribe((res) => {
      console.log('Data Set response' + res);
      this.data = res.data;
      console.log('new response' + this.data);
    });
  }
}