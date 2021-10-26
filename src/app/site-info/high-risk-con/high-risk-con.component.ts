import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms'
@Component({
  selector: 'app-high-risk-con',
  templateUrl: './high-risk-con.component.html',
  styleUrls: ['./high-risk-con.component.scss']
})
export class HighRiskConComponent implements OnInit {
  riskDetails!: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { 
    this.riskDetails=this.fb.group({
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
    return this.riskDetails.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
     
      title: ['', Validators.required],
    });
  }
  
  removeSafetyModule(i) {
    const item = <FormArray>this.riskDetails.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
    
    }
  }
  onFormSubmit() {
    console.log(this.riskDetails);
    
  }

}
