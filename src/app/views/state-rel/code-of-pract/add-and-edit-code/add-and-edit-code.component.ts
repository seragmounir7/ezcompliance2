import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-and-edit-code',
  templateUrl: './add-and-edit-code.component.html',
  styleUrls: ['./add-and-edit-code.component.scss']
})
export class AddAndEditCodeComponent implements OnInit {
  editTitle: FormGroup;
  dataRec: any;

  constructor(
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    public dialogRef: MatDialogRef<AddAndEditCodeComponent>,
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
      componentId: this.dataRec.componentId,
    };
    this.logicalFormInfo
      .updateCode(data, this.dataRec._id)
      .subscribe((resData) => {
        console.log('updateCOP', resData);

        this.dialogRef.close('true');
        Swal.fire({
          title: 'COP Edited successfully',
          showConfirmButton: false,
          timer: 1200,
        });
      });
  }
  addForm() {
    let data = {
      title: this.editTitle.get('title').value,
    };
    this.logicalFormInfo.addCode(data).subscribe((resData) => {
      console.log('addCOP', resData);

      this.dialogRef.close('true');
      if (this.dataRec) {
        Swal.fire({
          title: 'COP Edited successfully',
          showConfirmButton: false,
          timer: 1200,
        });
      } else {
        Swal.fire({
          title: 'COP Added successfully',
          showConfirmButton: false,
          timer: 1200,
        });
      }
    });
  }
  closeDialog() {
    this.dialogRef.close('false');
  }


}
