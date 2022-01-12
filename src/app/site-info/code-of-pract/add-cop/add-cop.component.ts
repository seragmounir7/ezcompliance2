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
  selector: 'app-add-cop',
  templateUrl: './add-cop.component.html',
  styleUrls: ['./add-cop.component.scss']
})
export class AddCOPComponent implements OnInit {

  codeOfPractFG!: FormGroup;
  formData: any; numberOfLineBreaks: any;
  ;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private logicalFormInfo: LogicalFormInfoService
  ) {
    this.codeOfPractFG = this.fb.group({
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
    return this.codeOfPractFG.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({

      title: ['', Validators.required],
    });
  }

  removeSafetyModule(i) {
    const item = <FormArray>this.codeOfPractFG.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);

    }
  }
  onFormSubmit() {
    let data = {
      arrObj: this.codeOfPractFG.get('arrObj').value
    }
    this.logicalFormInfo.addMultipleCOP(data).subscribe((data) => {
      console.log('codeOfPractice=>', data);

      this.router.navigate(['/admin/siteInfo/codeOfpract']);
    }, (err) => { console.error(err); }

    );

  }
  calcHeight(value) {
    this.numberOfLineBreaks = (value.match(/\n/g) || []).length + 1;
    console.log("numberOfLineBreaks", this.numberOfLineBreaks)
  }
}
