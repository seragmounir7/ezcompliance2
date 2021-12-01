import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { ViewChild } from '@angular/core';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-toolbox-talk',
  templateUrl: './toolbox-talk.component.html',
  styleUrls: ['./toolbox-talk.component.scss'],
})
export class ToolboxTalkComponent implements OnInit {
  toolBox: FormGroup;
  allJobNumbers = [];
  sign=[];
  id:any;
  @ViewChild('Signature1') signaturePad1: SignaturePad;
  @ViewChild('Signature2') signaturePad2: SignaturePad;

  constructor(
    private fb: FormBuilder,
    private dynamicFormsService: DynamicFormsService,
    private setTitle:SetTitleService,
    private logicalFormInfo: LogicalFormInfoService,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.toolBox = this.fb.group({
      siteName: [''],
      customerName: [''],
      streetAddr:[''],
      custConct: [''],
      custConctPh: [''],
      custEmail: [''],
      JobNumberId: [''],
      signaturePad1:[''],
      // date:[''],
      issues: this.fb.array([]),
      corrAction: this.fb.array([]),
      attendees: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params.id;
    this.getAllJobNumber();
    this.dynamicFormsService.homebarTitle.next('ToolBox Talk Form');
    this.setTitle.setTitle('WHS-ToolBox Talk Form');
    if(this.id!=='null')
    {
      console.log("id",this.id);
      this.getToolboxByid(this.id);
    }
    else
    {
      this.addIssues();
      this.addCorrectAct();
      this.addAttendee();
    }
  }
  getToolboxByid(id)
  {
    this.logicalFormInfo.getToolboxById(id).subscribe((res:any)=>{
      console.log(res);
      this.pushissues(res.data.issues);
      this.pushCorrective(res.data.corrAction);
      this.pushattendee(res.data.attendees);
      this.toolBox.patchValue({
        siteName:res.data.siteName,
        customerName: res.data.customerName,
        streetAddr:res.data.streetAddr,
        custConct: res.data.custConct,
        custConctPh: res.data.custConctPh,
        custEmail: res.data.custEmail,
        jobNumber: res.data.JobNumberId
      })
    })
  }
  getAllJobNumber() {
    this.logicalFormInfo.getAllJobNumber().subscribe((res: any) => {
    
      this.allJobNumbers = res.data;
    });
  }
  jobNoSel(){
    this.allJobNumbers.forEach((item) => {
      if (this.toolBox.get('JobNumberId').value === item._id) {
        console.log('Id found', item);
        this.toolBox.patchValue({
          siteName: item.siteName,
          customerName: item.customerName,
          streetAddr: item.streetAddress,
           custConct: item.customerContact,
          custConctPh: item.customerContactPhone,
          custEmail: item.customerEmail,
          jobNumber: this.toolBox.get('JobNumberId').value,
        });
      }
    });
         this.toolBox.get('JobNumberId').updateValueAndValidity();

  }
  addIssues() {
    this.issues().push(this.issuesForm());
  }
  getissues(D): FormGroup {
    return this.fb.group({
      index: D.index,
      topicDisc: D.topicDisc,
      topicRes: D.topicRes,
    });
  }
  pushissues(D) {
    console.log("D",D);
    D.forEach((element) => {
     this.issues().push(this.getissues(element));
    });
  }
  getCorrective(D): FormGroup {
    return this.fb.group({
      action: D.action,
      personRes: D.personRes,
      complete: D.complete,
    });
  }
  pushCorrective(D) {
    console.log("D",D);
    D.forEach((element) => {
     this.correctAct().push(this.getCorrective(element));
    });
  }
  getattendee(D): FormGroup {
    return this.fb.group({
      employee: D.employee,
      signature:D.signature,
    });
  }
  pushattendee(D) {
    console.log("D",D);
    D.forEach((element) => {
     this.attendee().push(this.getattendee(element));
    });
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
      signature:[],
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
    this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad2.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API
    this.signaturePad2.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete1() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log("signnn",this.signaturePad1);
    this.toolBox.controls['signaturePad1'].setValue(this.signaturePad1.toDataURL());
    console.log("signaturePad1 control",this.toolBox.controls['signaturePad1'].value);

  }
  clear1() {
    this.signaturePad1.clear();
  }
  drawStart1() {
    // will be notified of szimek/signature_pad's onBegin event
    this.signaturePad2=null;
    console.log('begin drawing');
  }
  drawComplete2(index,sign) {

  this.attendee().controls[index].get('signature').setValue(sign.toDataURL());
    // will be notified of szimek/signature_pad's onEnd event
    console.log("signature value at index no."+index,this.attendee().controls[index].get('signature').value); 
  }
  clear2() {
    console.log('ggg');

    this.signaturePad2.clear();
  }
  drawStart2() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
  onSave()
  {
    console.log("form data",this.toolBox.value);
    if(this.id!=='null')
    {
      const data={
        ...this.toolBox.value
      }
       this.logicalFormInfo.editToolBox(this.id,data).subscribe((res)=>
       {
         console.log("res",res);
         this.router.navigate(["/admin/forms/tableData"]);
       })
    }
    else
    {
      const data={
        ...this.toolBox.value
      }
       this.logicalFormInfo.addtoolBox(data).subscribe((res)=>
       {
         console.log("res",res);
         this.router.navigate(["/admin/forms/tableData"]);
       })
    }
    this.toolBox.reset();
  }
}
