import { LandingPageInfoServiceService } from './../../../utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from './../../../utils/services/upload-file-service.service';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormGroup,
  Validators,

} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-work',
  templateUrl: './edit-work.component.html',
  styleUrls: ['./edit-work.component.scss']
})
export class EditWorkComponent implements OnInit {
  selectedImage: any;
  workDetail!: FormGroup;
  workData: any;
  ID: any;
  hide: boolean = true;
  myId: any;
  isEdit = false;
  constructor(
    private landingPageInfo: LandingPageInfoServiceService,
    private fb: FormBuilder,
    public upload: UploadFileServiceService,
    private dialogRef: MatDialogRef<EditWorkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.workData = data.EditData;
    console.log("editData", this.workData)
  }
  ngOnInit(): void {
    this.workDetail = this.fb.group({
        title: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });; if (this.data.action == "edit") {
      this.selectedImage = this.workData.image,
        this.workDetail.patchValue({
          description: this.workData.description,
          title: this.workData.title,
        })
    }
  }
  browser(event) {
    const files = event.target.files[0];
    const formdata = new FormData();
    formdata.append('', files);


    this.upload.upload(formdata).subscribe((res) => {

      this.selectedImage= res.files[0];

    });
  }
  onSubmit() {
    this.workDetail
      .get('image')
      ?.setValue(this.selectedImage[0].toString());

    this.landingPageInfo
      .addWork(this.workDetail.value)
      .subscribe((data) => {
        Swal.fire('Added Successfully')




      });
  }
  editHeaderInfo(id) {
    console.log("id=>", id);
    this.myId = this.workData._id;
    this.workDetail.get("image").setValue(this.selectedImage);
    console.log("form", this.workDetail.value);

    this.isEdit = true;
    this.landingPageInfo.editWorK(this.myId, this.workDetail.value).subscribe((res) => {
      Swal.fire(' Edited Successfully')
      console.log('Data Set response' + res);
      this.data = res.data;
      console.log('new response' + this.data);
      this.dialogRef.close("true");

    });
  }
}
