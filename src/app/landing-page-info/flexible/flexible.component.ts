import { LandingPageInfoServiceService } from './../../utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from './../../utils/services/upload-file-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
@Component({
  selector: 'app-flexible',
  templateUrl: './flexible.component.html',
  styleUrls: ['./flexible.component.scss']
})

export class FlexibleComponent implements OnInit {
  flexibleDetail!: FormGroup;
  selectedImage: any;
  constructor(private fb: FormBuilder,private upload :UploadFileServiceService,private url:LandingPageInfoServiceService) { 

    this.flexibleDetail = this.fb.group({
      "title": ['', Validators.required],
      "description": ['', Validators.required],
     // uploadImage: ['', Validators.required],
      "mode": "Flexible",
      "arrObj": this.fb.array([])

    })
   }
  

  ngOnInit(): void {
    this.addAction()
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
      "fileUrl": ['', Validators.required],
      "subTitle": ['', Validators.required],
      "title": ['', Validators.required],
      "description":['', Validators.required],
      
    });
  }
  onFormSubmit(){
    console.log(this.flexibleDetail.value);
    
    let data={
    //   "title": this.flexibleDetail.get("heading").value,
    // "description": this.flexibleDetail.get("description").value,
    // "mode": "Flexible",
    // "arrObj": [
    //     {
    //         "title": this.flexibleDetail.get("subheading").value,
    //         "subTitle":this.flexibleDetail.value.flrxibleImgArr[0].name,
    //         "description": "",
    //         "fileUrl":this.flexibleDetail.value.flrxibleImgArr[0].UploadImage,
    //     }
    //   ]
    }
          this.url
          .addAppService(this.flexibleDetail.value)
          .subscribe((res) => {
            console.log("AddProductComponent -> browser -> res", res);
            // this.studDetail.patchValue({
            //   filePath: res.filePath,
            // });
            this.selectedImage = res.files;
            console.log(
              "AddProductComponent -> browse -> this.selectedImage",
              this.selectedImage
            );
          })
         

  }

  removeSafetyModule(i){
    this.add().removeAt(i);
  }
  browser(event){
    const files = event.target.files[0];
    console.log(event);
    const formdata= new FormData()
    formdata.append("",files) 
    
    this.upload
      .upload(formdata)
      .subscribe((res) => {
        console.log("AddProductComponent -> browser -> res", res);
        // this.studDetail.patchValue({
        //   filePath: res.filePath,
        // });
        this.selectedImage = res.files;
        console.log(
          "AddProductComponent -> browse -> this.selectedImage",
          this.selectedImage
        );
      })
      
  }

}
