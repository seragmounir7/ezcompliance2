import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';

@Component({
  selector: 'app-ppe-select',
  templateUrl: './ppe-select.component.html',
  styleUrls: ['./ppe-select.component.scss']
})
export class PpeSelectComponent implements OnInit {
  PPEselect: FormGroup;
  formData: any;

  constructor(
    private fb: FormBuilder,
    private LandingPageInfoService:LandingPageInfoServiceService
  ) { 
    this.PPEselect=this.fb.group({
      mode:"PPE",
      arrObj: this.fb.array([]),
    });
    console.log('jobTaskDetails=>', this.PPEselect);
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
    return this.PPEselect.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
     
      title: ['', Validators.required],
    });
  }
  
  removeSafetyModule(i) {
    const item = <FormArray>this.PPEselect.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
    
    }
  }
  onFormSubmit() {
    console.log(this.PPEselect);
    this.LandingPageInfoService.addFormData(this.PPEselect.getRawValue()).subscribe((data) => {
      console.log('teamData=>', data);
      this.formData = data;
    });
  }
}
