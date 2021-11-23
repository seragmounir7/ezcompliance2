import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss'],
})
export class EditTaskComponent implements OnInit {
  editTitle: FormGroup;
  dataRec: any;



  constructor(
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataRec = data;
  }

  ngOnInit(): void {
    console.log("this.dataRec",this.dataRec);
    
    this.editTitle = this.fb.group({
      title: [this.dataRec.title, Validators.required],
    });
  }
  onFormSubmit() {
     
    let data={
      title :this.editTitle.get('title').value,
      // PPE:this.dataRec.PPE,
      // codeOfPractice:this.dataRec.codeOfPractice,
      // licence:this.dataRec.licence,
      // risk:this.dataRec.risk,
    }
    this.logicalFormInfo
      .updateJobTask(data, this.dataRec._id)
      .subscribe((resData) => {
        console.log('submodulesData', resData);

        this.dialogRef.close('true');
        Swal.fire({
          title: 'Parameter Edited successfully',
          showConfirmButton: false,
          timer: 1200,
        });  
          });
  }
  closeDialog(){
    this.dialogRef.close('false');

  }
}
