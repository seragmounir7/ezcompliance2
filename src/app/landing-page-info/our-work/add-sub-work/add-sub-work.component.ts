import { Component, OnInit , Inject} from '@angular/core';
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
  selector: 'app-add-sub-work',
  templateUrl: './add-sub-work.component.html',
  styleUrls: ['./add-sub-work.component.scss']
})
export class AddSubWorkComponent implements OnInit {
  selectedImage: any = [];
  addWork!: FormGroup;
  addWorkData: any;
  ID: any;
  hide: boolean = true;
  constructor(
    private landingPageInfo: LandingPageInfoServiceService,
    private fb: FormBuilder,
    public upload: UploadFileServiceService,
    public dialogRef: MatDialogRef<AddSubWorkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addWork = this.fb.group({
       
      // subTitle: ['', Validators.required],
      mode: 'SYSTEM',
      content: this.fb.array([]),
     
    });
    console.log('data', data);
  }


  ngOnInit(): void {
 this.addAction();
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
    console.log("this.addWork.value",this.addWork.value)
    this.addWork
      .get('image')
      ?.setValue(this.selectedImage[0].toString());

    this.landingPageInfo
      .addSubWork(this.addWork.value)
      .subscribe((data) => {
        Swal.fire('Added Successfully')




      });
  }
  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.addWork.get('content') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
       image: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
 removeSafetyModule(i) {
    const item = <FormArray>this.addWork.controls['content'];
    if (item.length > 1) {
      item.removeAt(i);
      this.selectedImage.splice(i, 1);
    }
  }
  close() {
    this.dialogRef.close();
}
}
