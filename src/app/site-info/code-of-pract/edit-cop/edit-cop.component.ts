import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
@Component({
  selector: 'app-edit-cop',
  templateUrl: './edit-cop.component.html',
  styleUrls: ['./edit-cop.component.scss']
})
export class EditCOPComponent implements OnInit {

  editTitle: FormGroup;
  dataRec: any;



  constructor(
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    public dialogRef: MatDialogRef<EditCOPComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataRec = data;
  }

  ngOnInit(): void {
    this.editTitle = this.fb.group({
      title: [this.dataRec.title, Validators.required],
    });
  }
  onFormSubmit() {

    let data = {
      title: this.editTitle.get('title').value,
    }
    this.logicalFormInfo
      .updateCOP(data, this.dataRec._id)
      .subscribe((resData) => {
        console.log('resData', resData);

        this.dialogRef.close('true');
        Swal.fire({
          title: 'Parameter Edited successfully',
          showConfirmButton: false,
          timer: 1200,
        });
      });
  }
  closeDialog() {
    this.dialogRef.close('false');

  }
}
