import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
@Component({
  selector: 'app-add-edit-proj-mang',
  templateUrl: './add-edit-proj-mang.component.html',
  styleUrls: ['./add-edit-proj-mang.component.scss']
})
export class AddEditProjMangComponent implements OnInit {

  editTitle: FormGroup;
  dataRec: any;

  constructor(
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    public dialogRef: MatDialogRef<AddEditProjMangComponent>,
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
      .updateProjectMang(data, this.dataRec._id)
      .subscribe((resData) => {
        console.log('projectManager', resData);

        this.dialogRef.close('true');
        Swal.fire({
          title: 'Project Manager Edited successfully',
          showConfirmButton: false,
          timer: 1200,
        });
      });
  }
  addForm() {
    let data = {
      title: this.editTitle.get('title').value,
    };
    this.logicalFormInfo.addProjectMang(data).subscribe((resData) => {
      console.log('projectManager', resData);

      this.dialogRef.close('true');
    
        Swal.fire({
          title: 'Project Manager added successfully',
          showConfirmButton: false,
          timer: 1200,
        });
      
    });
  }
  closeDialog() {
    this.dialogRef.close('false');
  }

}
