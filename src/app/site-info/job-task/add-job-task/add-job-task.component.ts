import { Component, OnInit } from '@angular/core';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms'

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
    private LandingPageInfoService:LandingPageInfoServiceService
  ) { 
    this.jobTaskDetails=this.fb.group({
      mode:"JobTask",
      arrObj: this.fb.array([]),
    });
    console.log('jobTaskDetails=>', this.jobTaskDetails);
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
    console.log(this.jobTaskDetails);
    this.LandingPageInfoService.addFormData(this.jobTaskDetails.getRawValue()).subscribe((data) => {
      console.log('teamData=>', data);
      this.formData = data;
    });
  }
}
