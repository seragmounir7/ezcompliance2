import { Component, OnInit,Inject } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-add-safety-module',
  templateUrl: './add-safety-module.component.html',
  styleUrls: ['./add-safety-module.component.scss']
})
export class AddSafetyModuleComponent implements OnInit {
  safetyDetail: FormGroup;
  selectedImage: any;
  myId: boolean;
  Is_subMod:boolean;
  isEdit = false;
  // data: any;
  enum: any;
  subId: any;
  safetyData: any;
  Is_Mod: any;
  Edit = false;
  Add = false;
  type: string = '';
  Update = false;
  module=false;
  subModule=false;
  moduleName:string;
  constructor(private fb: FormBuilder,
    private landingPageInfo: LandingPageInfoServiceService,
    public upload: UploadFileServiceService,
    public router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    public dialogRef: MatDialogRef<AddSafetyModuleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)  
    { this.Is_Mod = data.moduleName;
      this.safetyDetail = fb.group({
        mode: 'Safety',
        arrObj: this.fb.array([]),
        title: ['', Validators.required],
        description: ['', Validators.required],
      });
    }
  ngOnInit(): void {
   
    if (this.Is_Mod == true) {
      
      
      this.subModule=true;
      this.module=false;
    }
    if (this.Is_Mod == false)  {
      this.module=true;
      this.subModule=false;
     


    }
    this.addSafetyModule();
    if (this.data.action == "edit") {
      this.Update = true;
      console.log("data to patch=>", this.data)
      this.safetyDetail.patchValue({
        "mode": 'Safety',
     
        "title":this.data.EditData.title,
        "description": this.data.EditData.description,
      })
      this.safetyImgArr().at(0).patchValue({
        "title": this.data.EditData.subModules[this.data.index].title,
      })
      this.selectedImage = this.data.EditData.subModules[this.data.index].fileUrl,
        console.log("img", this.selectedImage);

  }
  let index = this.data.index
  this.subId = this.data.EditData.subModules[index]._id;

  console.log("aaaaaaa", this.subId);
  }
  onFormSubmit() {

    let value = this.selectedImage[0];
    console.log('value', value);
    console.log(this.safetyDetail.value);
    let arrlength = this.safetyImgArr().length;
    for (let i = 0; i < arrlength; i++) {
      this.safetyImgArr()
        .at(i)
        .get('fileUrl')
        ?.setValue(this.selectedImage[i].toString());
    }
    console.log(this.safetyDetail.value);
    let safetyData = {
      //  "title": this.safetyDetail.get('title').value,
      // "description": this.safetyDetail.get('description').value,
      // "arrObj": ({ })
    };

    console.log('file: ~ onFormSubmit ~ data', safetyData);

    // this.landingPageInfo
    //   .addAppService(this.safetyDetail.value)
    //   .subscribe((data) => {
    //     console.log('data=>', data);
    //     this.safetyData = data;
    //   });
  }
  addSafetyModule() {
    this.safetyImgArr().push(this.safetyForm());
    console.log(this.safetyDetail.value);
  }
  safetyImgArr(): FormArray {
    return this.safetyDetail.get('arrObj') as FormArray;
  }
  safetyForm(): FormGroup {
    return this.fb.group({
      fileUrl: [],
      title: [],
      subtitle: '',
      description: '',
    });
  }
  removeSafetyModule(i) {
    const item = <FormArray>this.safetyDetail.controls['arrObj'];
    if (item.length > 1) {item.removeAt(i);
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

        this.selectedImage = res.files[0];
      });
    } else {
      this.upload.upload(formData).subscribe((res) => {
        console.log(' browser -> res', res);
        this.safetyDetail.patchValue({
          filePath: res.filePath,
        });
        this.selectedImage.push(res.files[0]);

        console.log('browse -> this.selectedImage', this.selectedImage);
      });
    }
  }
  editModule(){
 
    if (this.data.action == "edit") {
  
      let SafetyData = {
       
        "title": this.safetyDetail.controls.title.value,
        "description": this.safetyDetail.controls.description.value,
        "mode": "Safety",
        }
      console.log("asdfgh", SafetyData);
      console.log("this.EditData", this.data.EditData._id);
      this.landingPageInfo.editModule(SafetyData,this.data.EditData._id).subscribe((resData) => {
        console.log("editModule", resData)
  
        this.dialogRef.close("true");
        this.safetyDetail.reset();
      })
    }
  
     else {
        let data = {
          mode: 'Safety',
  
          title: this.safetyDetail.controls.title.value,
          description: this.safetyDetail.controls.description.value,
          arrObj: this.fb.array([]),
  
        }
        console.log(data);
        this.landingPageInfo
          .addAppService(this.safetyDetail.value)
          .subscribe((data) => {
            console.log('data=>', data);
            this.safetyData = data;
          });
  
       }
      
       
   
  }
  editSubModule(){
      console.log("index",this.data.index)
      console.log("",this.safetyDetail.value)
    if (this.data.action == "edit" ) {
      let submodulesData = {
        "moduleId": this.data.EditData._id,
        "title": this.safetyImgArr().at(0).get('title')?.value,
        "fileUrl": this.selectedImage,
       // "description": this.safetyImgArr().at(this.data.index).get('description')?.value,
        
      }
      console.log("wqwertyuytrewsdfg", submodulesData);
      console.log("selectedImage", this.selectedImage)
  
  
      console.log("this.EditData", this.data.EditData._id);
      this.landingPageInfo.editsubModule(submodulesData,this.subId).subscribe((resData) => {
        console.log("submodulesData", resData)
  
        this.dialogRef.close("true");

      })
    }
    else {
      let data = {
        mode: 'Safety',
  
        title: this.safetyDetail.controls.title.value,
        description: this.safetyDetail.controls.description.value,
        arrObj: this.fb.array([]),
  
      }
      console.log(data);
      this.landingPageInfo
        .addAppService(this.safetyDetail.value)
        .subscribe((data) => {
          console.log('data=>', data);
          this.safetyData = data;
        });
  
     }
  
    }
}
