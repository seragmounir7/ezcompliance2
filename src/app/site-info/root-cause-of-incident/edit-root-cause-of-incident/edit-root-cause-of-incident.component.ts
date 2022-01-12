import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-root-cause-of-incident',
  templateUrl: './edit-root-cause-of-incident.component.html',
  styleUrls: ['./edit-root-cause-of-incident.component.scss']
})
export class EditRootCauseOfIncidentComponent implements OnInit {
  editTitle!: FormGroup;
  dataRec: any;
  constructor(
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    public dialogRef: MatDialogRef<EditRootCauseOfIncidentComponent>,
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
      title: this.editTitle.get('title').value
    }
    this.logicalFormInfo
      .updateRootCause(data, this.dataRec._id)
      .subscribe((resData) => {
        console.log('resData', resData);

        this.dialogRef.close('true');
        Swal.fire({
          title: 'Parameter Updated successfully',
          showConfirmButton: false,
          timer: 1200,
        });
      });
  }
  closeDialog() {
    this.dialogRef.close('false');

  }

}
