import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';

@Component({
  selector: 'app-licence-and-qual',
  templateUrl: './licence-and-qual.component.html',
  styleUrls: ['./licence-and-qual.component.scss']
})
export class LicenceAndQualComponent implements OnInit {
  licenceAndQual: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dynamicFormsService: DynamicFormsService
  ) { 
    this.licenceAndQual = this.fb.group({
      issues: this.fb.array([]),
      corrAction: this.fb.array([]),
      attendees: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addIssues();
    this.addCorrectAct();
    this.addAttendee();
    this.dynamicFormsService.homebarTitle.next('ToolBox Talk Form');
  }
  addIssues() {
    this.issues().push(this.issuesForm());
  }
  issues(): FormArray {
    return this.licenceAndQual.get('issues') as FormArray;
  }
  issuesForm(): FormGroup {
    return this.fb.group({
      index: [],
      topicDisc: [],
      topicRes: [],
    });
  }
  removeIssues(i) {
    const item = <FormArray>this.licenceAndQual.controls['issues'];
    if (item.length > 1) item.removeAt(i);
  }
  addCorrectAct() {
    this.correctAct().push(this.correctActForm());
  }
  correctAct(): FormArray {
    return this.licenceAndQual.get('corrAction') as FormArray;
  }
  correctActForm(): FormGroup {
    return this.fb.group({
      action: [],
      personRes: [],
      complete: [],
    });
  }
  removeCorrectAct(i) {
    const item = <FormArray>this.licenceAndQual.controls['corrAction'];
    if (item.length > 1) item.removeAt(i);
  }
  addAttendee() {
    this.attendee().push(this.attendeeForm());
  }
  attendee(): FormArray {
    return this.licenceAndQual.get('attendees') as FormArray;
  }
  attendeeForm(): FormGroup {
    return this.fb.group({
      employee: [],
      signature: [],
    });
  }
  removeAttendee(i) {
    const item = <FormArray>this.licenceAndQual.controls['attendees'];
    if (item.length > 1) item.removeAt(i);
  }
  public signaturePadOptions1: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 550,
    canvasHeight: 100,
  };
  public signaturePadOptions2: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 450,
    canvasHeight: 100,
  };

  
  drawStart2() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
 
}
