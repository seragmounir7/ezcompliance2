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
  selector: 'app-add-terms-and-condtions',
  templateUrl: './add-terms-and-condtions.component.html',
  styleUrls: ['./add-terms-and-condtions.component.scss']
})
export class AddTermsAndCondtionsComponent implements OnInit {

  termsDetail!: FormGroup;
  safetyData: any;
  ID: any;
  hide: boolean = true;
  constructor(
    private landingPageInfo: LandingPageInfoServiceService,
    private fb: FormBuilder,
    public upload: UploadFileServiceService,
    public dialogRef: MatDialogRef<AddTermsAndCondtionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.termsDetail = this.fb.group({
      moduleId: this.data.EditData,
      title: ['', Validators.required],
      description: ['', Validators.required],
      fileUrl: ['', Validators.required],
    });

  }

  ngOnInit(): void { }

  onSubmit() {

    this.landingPageInfo
      .addSubModule(this.termsDetail.value)
      .subscribe((data) => {
        Swal.fire('Updated Successfully')

        this.safetyData = data;
        this.dialogRef.close('true');
        this.termsDetail.reset();
      });
  }
  close() {
    this.dialogRef.close();
  }

}
