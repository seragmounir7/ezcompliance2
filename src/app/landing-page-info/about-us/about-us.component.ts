import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  companyDetail!: FormGroup;
  selectedImage: any = [];
  Image: any = [];
  Image1: any = [];
  constructor(
    private landingPageInfo: LandingPageInfoServiceService,
    private fb: FormBuilder,
    public upload: UploadFileServiceService
  ) {
    this.companyDetail = this.fb.group({
      imageUrl: ['', Validators.required],
      description: ['', Validators.required],
      title: ['', Validators.required],
      desc: ['', Validators.required],
      fileUrl: ['', Validators.required],
      subTitle: ['', Validators.required],
      arrObj: this.fb.array([]),
    });
    console.log('companyDetail=>', this.companyDetail);
  }

  ngOnInit(): void {
    this.addAction();
  }
  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.companyDetail.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
      imageUrl: ['', Validators.required],
      title: ['', Validators.required],
    });
  }
  onFormSubmit() {
    this.companyDetail.get('imageUrl')?.setValue(this.Image1[0].toString());
    this.companyDetail.get('fileUrl')?.setValue(this.Image[0].toString());
    console.log(this.companyDetail.value);
    let value = this.selectedImage[0];
    console.log('vvvvvv', value);
    // let value1= this.Image[0];
    // console.log('vvvvvv', value1);
    // let value2 = this.Image1[0];
    // console.log('vvvvvv', value2);

    let arrlength = this.add().length;
    for (let i = 0; i < arrlength; i++) {
      this.add()
        .at(i)
        .get('imageUrl')
        ?.setValue(this.selectedImage[i].toString());
    }
    console.log(this.companyDetail.value);

    this.landingPageInfo
      .addAboutUs(this.companyDetail.value)
      .subscribe((res) => {
        console.log('landingPageInfo -> Api -> res', res);
        console.log(
          'AddProductComponent -> browse -> this.selectedImage',
          this.selectedImage
        );
      });
  }

  removeSafetyModule(i) {
    const item = <FormArray>this.companyDetail.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
      this.selectedImage.splice(i, 1);
    }
  }

  browser(event, i) {
    console.log(event, i);
    const files = event.target.files[0];
    const formData = new FormData();
    formData.append('', files);
    let value = this.selectedImage[0];
    console.log('vvvvvv', value);

    if (value) {
      this.upload.upload(formData).subscribe((res) => {
        console.log(' browser -> res', res);

        this.selectedImage[i] = res.files[0];
      });
    } else {
      this.upload.upload(formData).subscribe((res) => {
        console.log(' browser -> res', res);
        this.companyDetail.patchValue({
          filePath: res.filePath,
        });
        this.selectedImage.push(res.files[0]);

        console.log('browse -> this.selectedImage', this.selectedImage);
      });
    }
  }
  image(event) {
    const files = event.target.files[0];
    const formdata = new FormData();
    formdata.append('', files);
    console.log(files);

    this.upload.upload(formdata).subscribe((res) => {
      console.log('AddProductComponent -> browser -> res', res);

      this.Image.push(res.files[0]);

      console.log('AddProductComponent -> browse -> this.Image', this.Image);
    });
  }
  uploadImage(event) {
    const files = event.target.files[0];
    const formdata = new FormData();
    formdata.append('', files);
    console.log(files);

    this.upload.upload(formdata).subscribe((res) => {
      console.log('AddProductComponent -> browser -> res', res);

      this.Image1.push(res.files[0]);

      console.log('AddProductComponent -> browse -> this.Image', this.Image);
    });
  }
}
