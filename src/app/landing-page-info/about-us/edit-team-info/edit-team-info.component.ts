import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
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
  selector: 'app-edit-team-info',
  templateUrl: './edit-team-info.component.html',
  styleUrls: ['./edit-team-info.component.scss'],
})
export class EditTeamInfoComponent implements OnInit {
  companyDetail!: FormGroup;
  selectedImage: any;
  Image: any;
  Image1: any;
  myId: boolean;
  Is_subMod: boolean;
  isEdit = false;
  enum: any;
  subId: any;
  teamData: any;
  Is_Mod: any;
  Edit = false;
  Add = false;
  type: string = '';
  Update = false;
  module = false;
  subModule = false;
  moduleName: boolean;
  constructor(
    private landingPageInfo: LandingPageInfoServiceService,
    private fb: FormBuilder,
    public upload: UploadFileServiceService,
    public router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    public dialogRef: MatDialogRef<EditTeamInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.Is_Mod = data.moduleName;
    this.Is_subMod = data.modulename;
    console.log('this.Is_Mod', this.Is_Mod);
    console.log('this.Is_subMod', this.Is_subMod);

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
    console.log('data action=>', this.data.action);
    if (this.data.action == 'edit') {
      this.Update = true;
      console.log('data to patch=>', this.data);
      // this.Image1 = this.data.EditData.imageUrl,
      this.Image = this.data.EditData.fileUrl;
      console.log('1', this.Image);
      console.log('1', this.Image1);

      this.companyDetail.patchValue({
        desc: this.data.EditData.desc,
        subTitle: this.data.EditData.subTitle,
        title: this.data.EditData.title,
        description: this.data.EditData.description,
      });
      this.add().at(0).patchValue({
        title: this.data.EditData.team[this.data.index].title,
      });
      (this.selectedImage = this.data.EditData.team[this.data.index].imageUrl),
        console.log('img', this.selectedImage);
    }

    let index = this.data.index;
    this.subId = this.data.EditData.team[index]._id;

    console.log('aaaaaaa', this.subId);
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
    return this.companyDetail.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
      imageUrl: ['', Validators.required],
      title: ['', Validators.required],
    });
  }
  onFormSubmit() {
    console.log('data action=>', this.data.action);
    this.editModule();
    this.editSubModule();
    this.companyDetail.get('fileUrl')?.setValue(this.Image);
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

      this.Image = res.files[0];

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

      this.Image1 = res.files[0];

      console.log('AddProductComponent -> browse -> this.Image', this.Image);
    });
  }
  editModule() {
    if (this.data.action == 'edit') {
      let AboutUsData = {
        title: this.companyDetail.controls.title.value,
        description: this.companyDetail.controls.description.value,
        //  imageUrl: this.Image1 ,
        desc: this.companyDetail.controls.desc.value,
        fileUrl: this.Image,
        subTitle: this.companyDetail.controls.subTitle.value,
      };
      console.log('asdfgh', AboutUsData);
      console.log('this.EditData', this.data.EditData._id);
      this.landingPageInfo
        .editAboutUs(AboutUsData, this.data.EditData._id)
        .subscribe((resData) => {
          console.log('editAboutUs=>', resData);

          this.dialogRef.close('true');
          this.companyDetail.reset();
        });
    }
  }
  editSubModule() {
    if (this.data.action == 'edit') {
      let teamData = {
        aboutUsId: this.data.EditData._id,

        imageUrl: this.selectedImage,
        title: this.add().at(0).get('title')?.value,
      };
      console.log('wqwertyuytrewsdfg', teamData);
      console.log('selectedImage', this.selectedImage);
      console.log('this.EditData', this.data.EditData._id);
      this.landingPageInfo
        .editTeam(teamData, this.subId)
        .subscribe((resData) => {
          console.log('teamData', resData);

          this.dialogRef.close('true');
          this.companyDetail.reset();
        });
    }
  }
  close() {
    this.dialogRef.close();
}
}
