import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  
} from '@angular/forms';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-job-task',
  templateUrl: './add-job-task.component.html',
  styleUrls: ['./add-job-task.component.scss']
})
export class AddJobTaskComponent implements OnInit {

  jobTaskDetails!: FormGroup;
  formData: any;;
  licenceCatAll=[];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private logicalFormInfo:LogicalFormInfoService,
    private dialogRef: MatDialogRef<AddJobTaskComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
  ) { 
    this.jobTaskDetails=this.fb.group({
      title:['',Validators.required],
      tradeCategoryId: ['', Validators.required],      
    });
  }

  ngOnInit(): void {
    this.getAllCategories();
  }
  getAllCategories() {
    this.logicalFormInfo.getAllLicenceCat().subscribe((res) => {
      console.log('getAllLicenceCat=>', res);
      this.licenceCatAll = res.data;
    });
  }
  onFormSubmit() {
    console.log(this.jobTaskDetails.get('title').value);
   
    this.logicalFormInfo.addJobTask(this.jobTaskDetails.value).subscribe((data) => {
      console.log('JOBTask=>', data);
      this.dialogRef.close('true');
      Swal.fire({
        title: 'Parameter Added successfully',
        showConfirmButton: false,
        timer: 1200,
      }); 
          
    },(err)=>{console.error(err);} 
  
    );
    
  }
}
