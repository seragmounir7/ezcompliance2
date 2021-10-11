import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';

@Component({
  selector: 'app-customertestimonials',
  templateUrl: './customertestimonials.component.html',
  styleUrls: ['./customertestimonials.component.scss'],
})
export class CustomertestimonialsComponent implements OnInit {
  testiomnial: FormGroup;
  selectedImage: any = [];
  constructor(
    private fb: FormBuilder,
    private upload: UploadFileServiceService,
    private url: LandingPageInfoServiceService
  ) {
    this.testiomnial = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      // uploadImage: ['', Validators.required],
      mode: 'Testimonial',
      arrObj: this.fb.array([]),
    });
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
    return this.testiomnial.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
      fileUrl: ['', Validators.required],
      subTitle: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  onFormSubmit() {
    console.log(this.testiomnial.value);

    // let data={
    //   "title": this.testiomnial.get("heading").value,
    // "description": this.testiomnial.get("description").value,
    // "mode": "Testiomonial",
    // "arrObj": [
    //     {
    //         "title":"",
    //         "subTitle":this.testiomnial.value.flrxibleImgArr[0].name,
    //         "description": this.testiomnial.value.flrxibleImgArr[0].description,
    //         "fileUrl":this.testiomnial.value.flrxibleImgArr[0].UploadImage,
    //     }
    //   ]
    // }
    this.url.addAppService(this.testiomnial.value).subscribe((res) => {
      console.log('AddProductComponent -> browser -> res', res);
      // this.studDetail.patchValue({
      //   filePath: res.filePath,
      // });
      this.selectedImage = res.files;
      console.log(
        'AddProductComponent -> browse -> this.selectedImage',
        this.selectedImage
      );
    });
  }

  removeSafetyModule(i) {
    this.add().removeAt(i);
  }
  browser(event) {
    const files = event.target.files[0];
    console.log(event);
    const formdata = new FormData();
    formdata.append('', files);
    this.upload.upload(formdata).subscribe((res) => {
      console.log('AddProductComponent -> browser -> res', res);
      // this.studDetail.patchValue({
      //   filePath: res.filePath,
      // });
      this.selectedImage.push(res.files);
      console.log(
        'AddProductComponent -> browse -> this.selectedImage',
        this.selectedImage
      );
    });
  }
}
