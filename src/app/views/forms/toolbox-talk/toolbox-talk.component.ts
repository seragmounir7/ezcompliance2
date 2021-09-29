import { Component, OnInit, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { ViewChild,QueryList  } from '@angular/core';

@Component({
  selector: 'app-toolbox-talk',
  templateUrl: './toolbox-talk.component.html',
  styleUrls: ['./toolbox-talk.component.scss'],
})
export class ToolboxTalkComponent implements OnInit {
  toolBox: FormGroup;
//  @ViewChild('Signature1') signaturePad: any;
  @ViewChild('Signature1') signaturePad2: SignaturePad;
  @ViewChildren('Signature') SignaturePad:QueryList<SignaturePad>;

  constructor(private fb: FormBuilder) {
    this.toolBox = this.fb.group({
      issues: this.fb.array([]),
      corrAction: this.fb.array([]),
      attendees: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addIssues();
    this.addCorrectAct();
    this.addAttendee();
    this.addAttendee();
    this.addAttendee();
    this.addAttendee();
  }
  addIssues() {
    this.issues().push(this.issuesForm());
  }
  issues(): FormArray {
    return this.toolBox.get('issues') as FormArray;
  }
  issuesForm(): FormGroup {
    return this.fb.group({
      index: [],
      topicDisc: [],
      topicRes: [],
    });
  }
  removeIssues(i) {
    const item = <FormArray>this.toolBox.controls['issues'];
    if (item.length > 1) item.removeAt(i);
  }
  addCorrectAct() {
    this.correctAct().push(this.correctActForm());
  }
  correctAct(): FormArray {
    return this.toolBox.get('corrAction') as FormArray;
  }
  correctActForm(): FormGroup {
    return this.fb.group({
      action: [],
      personRes: [],
      complete: [],
    });
  }
  removeCorrectAct(i) {
    const item = <FormArray>this.toolBox.controls['corrAction'];
    if (item.length > 1) item.removeAt(i);
  }
  addAttendee() {
    this.attendee().push(this.attendeeForm());
  }
  attendee(): FormArray {
    return this.toolBox.get('attendees') as FormArray;
  }
  attendeeForm(): FormGroup {
    return this.fb.group({
      employee: [],
      signature: [],
    });
  }
  removeAttendee(i) {
    const item = <FormArray>this.toolBox.controls['attendees'];
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

  ngAfterViewInit() {
    // this.signaturePad is now available
    // this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
    // this.signaturePad2.set('minWidth', 1); // set szimek/signature_pad options at runtime
    // this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API
    // this.signaturePad2.clear(); // invoke functions from szimek/signature_pad API
   // console.log(this.signaturePad);
   console.log(this.SignaturePad.toArray());
   console.log(this.SignaturePad.toArray()[0]);
  }

  drawComplete1() {
    // will be notified of szimek/signature_pad's onEnd event
   // console.log(this.signaturePad1.toDataURL());
  }
  clear1() {
   // this.signaturePad1.clear();
  }
  drawStart1() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
  drawComplete2() {
    // will be notified of szimek/signature_pad's onEnd event
   // console.log(this.signaturePad2.toDataURL());
  }
  clear2(i) {
    this.SignaturePad.toArray()[i].clear();
  //  this.signaturePad2.clear();
  }
  drawStart2() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
}
