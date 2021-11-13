import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit {

  editTitle!: FormGroup;
  dataRec: any;
  constructor(
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    public dialogRef: MatDialogRef<EditStaffComponent>,
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
     
    let data={
      title :this.editTitle.get('title').value
    }
    this.logicalFormInfo
      .updateStaff(this.dataRec._id,data)
      .subscribe((resData) => {
        console.log('resData', resData);

        this.dialogRef.close('true');
        Swal.fire({
          title: 'Staff  Updated successfully',
          showConfirmButton: false,
          timer: 1200,
        });     
       });
  }
  closeDialog(){
    this.dialogRef.close('false');

  }

}




