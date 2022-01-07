import { Component, OnInit, Inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import Swal from 'sweetalert2';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-add-screen-shot',
  templateUrl: './add-screen-shot.component.html',
  styleUrls: ['./add-screen-shot.component.scss']
})
export class AddScreenShotComponent implements OnInit {
  selectedImage: any = [];
  addWork!: FormGroup;
  addWorkData: any;
  ID: any;
  hide: boolean = true;
  constructor(
    private landingPageInfo: LandingPageInfoServiceService,
    private fb: FormBuilder,
    public upload: UploadFileServiceService,
    public dialogRef: MatDialogRef<AddScreenShotComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addWork = this.fb.group({
      moduleId: this.data.EditData,
      title: ['', Validators.required],
      description: ['', Validators.required],
      fileUrl: ['', Validators.required],

    });
    console.log('data', data);
  }


  ngOnInit(): void {
  }
  browser(event) {
    const files = event.target.files[0];
    const formdata = new FormData();
    formdata.append('', files);


    this.upload.upload(formdata).subscribe((res) => {
      this.selectedImage.push(res.files[0]);

    });
  }
  onSubmit() {
    console.log("this.addWork.value", this.addWork.value)
    this.addWork
      .get('fileUrl')
      ?.setValue(this.selectedImage[0].toString());

    this.landingPageInfo
      .addSubModule(this.addWork.value)
      .subscribe((data) => {
        Swal.fire('Added Successfully')
        this.addWorkData = data;
        this.dialogRef.close('true');
      });
  }

  close() {
    this.dialogRef.close();
  }
}
