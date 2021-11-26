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
  selector: 'app-add-edit-sub-work',
  templateUrl: './add-edit-sub-work.component.html',
  styleUrls: ['./add-edit-sub-work.component.scss']
})
export class AddEditSubWorkComponent implements OnInit {
  SubWorkDetail!: FormGroup;
  selectedImage: any = [];
  constructor(private fb: FormBuilder,
    private upload: UploadFileServiceService,
    private url: LandingPageInfoServiceService) {
       this.SubWorkDetail = this.fb.group({
        subTitle: ['', Validators.required],
          mode: 'DIFFERENT',
          content: this.fb.array([]),
                // mode:'SCREENSHOT',
    //  mode:'DIFFERENT'
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
    return this.SubWorkDetail.get('content') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
     // image: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  onFormSubmit() {
    let value = this.selectedImage[0];
    console.log('vvvvvv', value);

    console.log(this.SubWorkDetail.value);
    let arrlength = this.add().length;
    for (let i = 0; i < arrlength; i++) {
      this.add()
        .at(i)
        .get('image')
        ?.setValue(this.selectedImage[i].toString());
    }
    console.log(this.SubWorkDetail.value);
  
    this.url.addSubWork(this.SubWorkDetail.value).subscribe((res) => {
      console.log('AddProductComponent -> browser -> res', res);
      // this.studDetail.patchValue({
      //   filePath: res.filePath,
      // });
      //       this.selectedImage.push(res.files[0]);
      console.log(
        'AddProductComponent -> browse -> this.selectedImage',
        this.selectedImage
      );
    });
  }

  removeSafetyModule(i) {
    const item = <FormArray>this.SubWorkDetail.controls['content'];
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
        this.SubWorkDetail.patchValue({
          filePath: res.filePath,
        });
        this.selectedImage.push(res.files[0]);

        console.log('browse -> this.selectedImage', this.selectedImage);
      });
    }
  }
}


