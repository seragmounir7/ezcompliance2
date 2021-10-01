import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  
} from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-hazard-report',
  templateUrl: './hazard-report.component.html',
  styleUrls: ['./hazard-report.component.scss'],
})
export class HazardReportComponent implements OnInit {
  title = 'hazardReport';
  hazardReport: FormGroup;
 @ViewChild(SignaturePad) signaturePad: SignaturePad;

  constructor(private fb: FormBuilder) {
    this.hazardReport = this.fb.group({
      siteAction: this.fb.array([]),
      employeeFulltime: ['', Validators.required],
      employeeParttime: ['', Validators.required],
      employeeCasual: ['', Validators.required],
      employeeContractor: ['', Validators.required],
      fullName: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      position: ['', Validators.required],
      projectName: ['', Validators.required],
      managerSupervisor: ['', Validators.required],
      managerSupervisorEmail: ['', Validators.required],
      whsManager: ['', Validators.required],
      whsManagerEmail: ['', Validators.required],
      describeHazard: ['', Validators.required],
      dateHazardReport: ['', Validators.required],
      locationHazard: ['', Validators.required],
      dateHazardIdentify: ['', Validators.required],
      jobNumber: ['', Validators.required],
      actionimmediate: ['', Validators.required],
      actionToday: ['', Validators.required],
      actionweek: ['', Validators.required],
      actionMonth: ['', Validators.required],
      eliminateHazard: ['', Validators.required],
      eliminateCorrect: ['', Validators.required],
      elliminateAction: ['', Validators.required],
      eliminateWhen: ['', Validators.required],
      substitute: ['', Validators.required],
      substituteCorrect: ['', Validators.required],
      substituteAction: ['', Validators.required],
      substituteWhen: ['', Validators.required],
      isolated: ['', Validators.required],
      isolatedCorrect: ['', Validators.required],
      isolatedAction: ['', Validators.required],
      isolatedWhen: ['', Validators.required],
      solution: ['', Validators.required],
      solutionCorrect: ['', Validators.required],
      solutionAction: ['', Validators.required],
      solutionWhen: ['', Validators.required],
      procedureRemove: ['', Validators.required],
      procedureRemoveCorrect: ['', Validators.required],
      procedureRemoveAction: ['', Validators.required],
      procedureRemoveWhen: ['', Validators.required],
      PPE: ['', Validators.required],
      PPEcorrect: ['', Validators.required],
      PPEaction: ['', Validators.required],
      PPEwhen: ['', Validators.required],
      name: ['', Validators.required],
      compilePosition: ['', Validators.required],
      compileDepartment: ['', Validators.required],
      fileUpload: ['', Validators.required],
      date: ['', Validators.required],
      signature: ['', Validators.required],
    });
  }
  ngOnInit() {}

  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': 500,
    'canvasHeight': 100,
  };




  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
   this.signaturePad.set('dotSize', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }
clear(){
  this.signaturePad.clear();
}
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
}
