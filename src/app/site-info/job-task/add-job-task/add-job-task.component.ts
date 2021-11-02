import { Component, OnInit } from '@angular/core';
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
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private logicalFormInfo:LogicalFormInfoService
  ) { 
    this.jobTaskDetails=this.fb.group({
     // mode:"JobTask",
      arrObj: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addAction();
  }
  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.jobTaskDetails.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({     
      title: ['', Validators.required],
    });
  }
  
  removeSafetyModule(i) {
    const item = <FormArray>this.jobTaskDetails.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
    
    }
  }
  onFormSubmit() {
    console.log(this.jobTaskDetails.value);
    let data={
      arrObj:this.jobTaskDetails.get('arrObj').value
    }
    this.logicalFormInfo.addJobTask(data).subscribe((data) => {
      console.log('JOBTask=>', data);

      this.router.navigate(['/admin/siteInfo/jobTask']);      
    },(err)=>{console.error(err);} 
  
    );
    
  }
 
}
