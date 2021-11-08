import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
@Component({
  selector: 'app-edit-cont-act',
  templateUrl: './edit-cont-act.component.html',
  styleUrls: ['./edit-cont-act.component.scss'],
})
export class EditContActComponent implements OnInit {
  editTitle: FormGroup;
  dataRec: any;

  constructor(
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    public dialogRef: MatDialogRef<EditContActComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataRec = data;
  }

  ngOnInit(): void {
    console.log('this.dataRec', this.dataRec);

    this.editTitle = this.fb.group({
      title: [this.dataRec.title, Validators.required],
    });
  }
  onFormSubmit() {
    let data = {
      title: this.editTitle.get('title').value,
    };
    this.logicalFormInfo
      .updateRisk(data, this.dataRec._id)
      .subscribe((resData) => {
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
