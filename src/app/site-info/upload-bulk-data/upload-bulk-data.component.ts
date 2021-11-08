import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload-bulk-data',
  templateUrl: './upload-bulk-data.component.html',
  styleUrls: ['./upload-bulk-data.component.scss'],
})
export class UploadBulkDataComponent implements OnInit {
  uploadData!: FormGroup;
  formData: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private logicalFormInfo: LogicalFormInfoService
  ) {
    this.uploadData = this.fb.group({
      // mode:"JobTask",
      arrObj: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.addAction();
    }
  }
  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.uploadData.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
      task: [''],
      highRisk: [''],
      ppe: [''],
      licence: [''],
      identifyHaz: [''],
      contrlAct: [''],
    });
  }

  removeSafetyModule() {
    const item = <FormArray>this.uploadData.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(item.length - 1);
    }
  }
  uploadAllData() {
    const item = <FormArray>this.uploadData.controls['arrObj'];
    let taskData = {
      arrObj: []
    };
    let riskData = {
      arrObj: []
    };
    let ppeData = {
      arrObj: []
    };
    let licenceData = {
      arrObj: []
    };
    let identifyHazData = {
      arrObj: []
    };
    let contrlActData = {
      arrObj: []
    };
    for (let i = 0; i < item.length; i++) {
      if(item.controls[i].get('task').value){
        taskData.arrObj.push(item.controls[i].get('task').value)
      }
      if(item.controls[i].get('highRisk').value){
        riskData.arrObj.push(item.controls[i].get('highRisk').value)
      }
      if(item.controls[i].get('ppe').value){
        ppeData.arrObj.push(item.controls[i].get('ppe').value)
      }
      if(item.controls[i].get('licence').value){
        licenceData.arrObj.push(item.controls[i].get('licence').value)
      }
      if(item.controls[i].get('identifyHaz').value){
        identifyHazData.arrObj.push(item.controls[i].get('identifyHaz').value)
      }
      if(item.controls[i].get('contrlAct').value){
        contrlActData.arrObj.push(item.controls[i].get('contrlAct').value)
      }

      // console.log(item.controls[i].get('highRisk').value);
      // console.log(item.controls[i].get('ppe').value);
      // console.log(item.controls[i].get('licence').value);
      // console.log(item.controls[i].get('identifyHaz').value);
      // console.log(item.controls[i].get('contrlAct').value);
    }
    
    console.log(taskData,
      riskData,
      ppeData,
      licenceData,
      identifyHazData,
      contrlActData);
  }
}
