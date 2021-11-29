import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-edit-sub-work',
  templateUrl: './add-edit-sub-work.component.html',
  styleUrls: ['./add-edit-sub-work.component.scss']
})
export class AddEditSubWorkComponent implements OnInit {
  SubWorkDetail!: FormGroup;
  selectedImage: any = [];
  myId: boolean;
  Is_subMod: boolean;
  isEdit = false;
  // data: any;
  enum: any;
  subId: any;
  testimonailData: any;
  Is_Mod: any;
  Edit = false;
  Add = false;
  module = false;
  subModule = false;
  moduleName: boolean;
  type: string = '';
  Update = false;
  hide = false;
  constructor(private fb: FormBuilder,
    private upload: UploadFileServiceService,
    private url: LandingPageInfoServiceService,
    public dialogRef: MatDialogRef<AddEditSubWorkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      console.log(data)
      this.Is_Mod = data.moduleName;
      this.Is_subMod = data.modulename;
     
       console.log( this.Is_Mod)
    
    this.SubWorkDetail = this.fb.group({
      subTitle: ['', Validators.required],
      mode: 'SYSTEM',
      content: this.fb.array([]),
      // mode:'SCREENSHOT',
      //  mode:'DIFFERENT'
    });
  }

 
  ngOnInit(): void {
    this.addAction();
    this.Eddit();
  this.Added();

  if (this.Is_Mod == true) {
    this.subModule = true;
    this.module = false;
  }
  if (this.Is_Mod == false) {
    this.module = true;
    this.subModule = false;
  }
  
  if (this.data.action == 'edit') {
    this.Update = true;
    console.log(" subTitle",this.data)
    this.SubWorkDetail.patchValue({
    mode: 'SYSTEM',
    subTitle: this.data.EditData[0].subTitle,
   });
  
    this.add().at(0).patchValue({
      
     title: this.data.EditData[0].content[this.data.index].title,

      description: this.data.EditData[0].content[this.data.index].description,
    });
    
    (this.selectedImage = this.data.EditData[0].content[
      this.data.index
    ].image),
      console.log('img', this.selectedImage);
     
  }
  
  let index = this.data.index;
  console.log(index,"index")
  this.subId = this.data.EditData[0].content[index]._id;
  console.log(this.subId,"subId")

  
}
Added() {
  if (this.Edit == true) {
    this.Edit = false;
    this.Add = true;
  } else {
    this.Add = true;
  }
}

Eddit() {
  if (this.Add == true) {
    this.Add = false;
    this.Edit = true;
  } else {
    this.Edit = true;
  }
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
       image: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
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
    let value = this.selectedImage;
    console.log('vvvvvv', value);

    if (value) {
      this.upload.upload(formData).subscribe((res) => {
        console.log(' browser -> res', res);

        this.selectedImage = res.files[0];
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
  onFormSubmit() {
    let value = this.selectedImage;
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

    // this.url.addSubWork(this.SubWorkDetail.value).subscribe((res) => {
    //   console.log('AddProductComponent -> browser -> res', res);
    
    //   console.log(
    //     'AddProductComponent -> browse -> this.selectedImage',
    //     this.selectedImage
    //   );
    // });
  }
  editModule() {
    if (this.data.action == 'edit') {
      let ServiceData = {
        subTitle: this.SubWorkDetail.controls.subTitle.value,
       //  mode: 'SYSTEM',
      };
      console.log('asdfgh', ServiceData);
      console.log('this.EditData', this.data.EditData[0]._id);
      this.url
        .editSubWorK(this.data.EditData[0]._id,ServiceData)
        .subscribe((resData) => {
          Swal.fire('Edited Successfully')
          console.log('editModule', resData);

          this.dialogRef.close('true');
          this.SubWorkDetail.reset();
        });
    }
  }
  editSubModule() {
    if (this.data.action == 'edit') {
      let submodulesData = {
        // subTitle: this.SubWorkDetail.controls.subTitle.value,
        mode: 'SYSTEM',
        title: this.add().at(0).get('title')?.value,
        image: this.selectedImage,
        description: this.add().at(0).get('description')?.value,
      };
  console.log(" submodulesData", submodulesData)
  
      this.url
        .editSubWorK(this.subId,submodulesData)
        .subscribe((resData) => {
          Swal.fire('Edited Successfully')
          console.log('submodulesData', resData);

          this.dialogRef.close('true');
          this.SubWorkDetail.reset();
        });
    } 
    
  }
  close() {
   this.dialogRef.close();
  }
}


