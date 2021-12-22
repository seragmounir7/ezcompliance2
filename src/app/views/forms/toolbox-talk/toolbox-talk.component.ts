import { Component, OnInit, AfterViewInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, } from '@angular/forms';
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
export class ToolboxTalkComponent implements OnInit,AfterViewInit {
  toolBox: FormGroup;
  allJobNumbers = [];
  sign=[];
  staff:any;
  id:any;
  maxDate = new Date();
  minDate = new Date();
  signature:SignaturePad;
  @ViewChild('Signature1') signaturePad1: SignaturePad;
  dataUrl: any;
  singRequired: any;
  sing2Required=[]
 @ViewChildren('Signature2') signaturePad2: QueryList<SignaturePad>;
  constructor(
    private fb: FormBuilder,
    private dynamicFormsService: DynamicFormsService,
    private setTitle:SetTitleService,
    private logicalFormInfo: LogicalFormInfoService,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.toolBox = this.fb.group({
      siteName: ['',Validators.required],
      customerName: ['',Validators.required],
      streetAddr:['',Validators.required],
      custConct: ['',Validators.required],
      custConctPh: ['',Validators.required],
      custEmail: ['',Validators.required],
      jobNumberId: ['',Validators.required],
      meetingBy:['',Validators.required],
      date:['',Validators.required],
      signaturePad1:['',Validators.required],
      issues: this.fb.array([]),
      corrAction: this.fb.array([]),
      attendees: this.fb.array([])
    });
  }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params.id;
    this.getAllJobNumber();
    this.getAllStaff();
    this.dynamicFormsService.homebarTitle.next('ToolBox Talk Form');
    this.setTitle.setTitle('WHS-ToolBox Talk Form');
    if(this.id!=='form')
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
      //this.pushissues(res.data.issues);
     // this.pushCorrective(res.data.corrAction);
     // this.pushattendee(res.data.attendees);
      this.toolBox.patchValue({
        siteName:res.data.siteName,
        customerName: res.data.customerName,
        streetAddr:res.data.streetAddr,
        custConct: res.data.custConct,
        custConctPh: res.data.custConctPh,
        custEmail: res.data.custEmail,
        jobNumberId: res.data.jobNumberId,
        meetingBy:res.data.meetingBy,
        date:res.data.date
      })
      this.dataUrl = res.data.signaturePad1;
      let check =async () => { this.signaturePad1 != null }
      check().then(() => {

        this.signaturePad1.fromDataURL(res.data.signaturePad1)
      })
      console.log("this.signaturePad1",this.signaturePad1);
      
      let check2 =async () => { this.signaturePad2 != null }
      check2().then(() => {
        console.log( this.signaturePad2);
        setTimeout(() => {
          let signaturePadArr=this.signaturePad2.toArray()
          res.data.attendees.forEach((x,i) => {
            signaturePadArr[i].fromDataURL(x.signature)
          });
        }, 2000); 
      })
      this.toolBox.patchValue({
        signaturePad1: res.data.signaturePad1
      })
      for (let i = 0; i <  res.data.attendees.length; i++) {
        this.addAttendee()
        this.attendee().controls[i].get("employee").patchValue(res.data.attendees[i].employee)
         this.attendee().controls[i].get("signature").patchValue(res.data.attendees[i].signature)
        
      }for (let x = 0; x < res.data.corrAction.length; x++) {
       this. addCorrectAct()
      this.correctAct().controls[x].get("action").patchValue( res.data.corrAction[x].action)
      this.correctAct().controls[x].get("complete").patchValue( res.data.corrAction[x].complete)
      this.correctAct().controls[x].get("personRes").patchValue( res.data.corrAction[x].personRes)
      }
      for (let i = 0; i < res.data.issues.length; i++) {
        this.addIssues()
        this.issues().controls[i].get("index").patchValue( res.data.issues[i].index)
        this.issues().controls[i].get("topicDisc").patchValue( res.data.issues[i].topicDisc)
        this.issues().controls[i].get("topicRes").patchValue( res.data.issues[i].topicRes)
      }
    })
  }
  getAllJobNumber() {
    this.logicalFormInfo.getAllJobNumber().subscribe((res: any) => {
    
      this.allJobNumbers = res.data;
    });
  }
  jobNoSel(){
    this.allJobNumbers.forEach((item) => {
      if (this.toolBox.get('jobNumberId').value === item._id) {
        console.log('Id found', item);
        this.toolBox.patchValue({
          siteName: item.siteName,
          customerName: item.customerName,
          streetAddr: item.streetAddress,
           custConct: item.customerContact,
          custConctPh: item.customerContactPhone,
          custEmail: item.customerEmail,
          jobNumber: this.toolBox.get('jobNumberId').value,
        });
      }
    });
         this.toolBox.get('jobNumberId').updateValueAndValidity();

  }
  addIssues() {
    this.issues().push(this.issuesForm());
  }
  // getissues(D): FormGroup {
  //   return this.fb.group({
  //     index: D.index,
  //     topicDisc: D.topicDisc,
  //     topicRes: D.topicRes,
  //   });
  // }
  // pushissues(D) {
  //   console.log("D",D);
  //   D.forEach((element) => {
  //    this.issues().push(this.getissues(element));
  //   });
  // }
  // getCorrective(D): FormGroup {
  //   return this.fb.group({
  //     action: D.action,
  //     personRes: D.personRes,
  //     complete: D.complete,
  //   });
  // }
  // pushCorrective(D) {
  //   console.log("D",D);
  //   D.forEach((element) => {
  //    this.correctAct().push(this.getCorrective(element));
  //   });
  // }
  // getattendee(D): FormGroup {
  //   return this.fb.group({
  //     employee: D.employee,
  //     signature:D.signature,
  //   });
  // }
  // pushattendee(D) {
  //   console.log("D",D);
  //   D.forEach((element) => {
  //    this.attendee().push(this.getattendee(element));
  //   });
  // }
  issues(): FormArray {
    return this.toolBox.get('issues') as FormArray;
  }
  issuesForm(): FormGroup {
    return this.fb.group({
      index: ['',Validators.required],
      topicDisc: ['',Validators.required],
      topicRes: ['',Validators.required],
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
      action: ['',Validators.required],
      personRes: ['',Validators.required],
      complete: ['',Validators.required],
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
      employee: ['',Validators.required],
      signature: ['',Validators.required],
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
    console.log(this.signaturePad1,this.dataUrl)
    this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
    
    this.signaturePad1.fromDataURL(this.dataUrl);
    // this.signaturePad2.set('minWidth', 1); // set szimek/signature_pad options at runtime
    // this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API
    // this.signaturePad2.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete1() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log("signnn",this.signaturePad1);
    this.toolBox.controls['signaturePad1'].setValue(this.signaturePad1.toDataURL());
    console.log("signaturePad1 control",this.toolBox.controls['signaturePad1'].value);
    this.singRequired = this.toolBox.controls['signaturePad1'].invalid

  }
  clear1() {
    this.signaturePad1.clear();
    this.toolBox.controls['signaturePad1'].setValue("");
    this.singRequired = this.toolBox.controls['signaturePad1'].untouched
  }
  drawStart1() {
    // will be notified of szimek/signature_pad's onBegin event
    // this.signaturePad2=null;
    console.log('begin drawing');
    //this.singRequired = this.toolBox.controls['signaturePad1'].invalid
  }
  drawComplete2(index,sign) {
    console.log("sign",sign);
    
    //this.sing2Required[index]=this.attendee().controls[index].get('signature').invalid
  this.attendee().controls[index].get('signature').setValue(sign.toDataURL());
    // will be notified of szimek/signature_pad's onEnd event
  }
  clear2(i) {
    this.attendee().controls[i].get('signature').setValue("");
    this.sing2Required[i]=this.attendee().controls[i].get('signature').untouched

   
    // this.signaturePad2.clear();
  }
  drawStart2(index) {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
    this.sing2Required[index]=this.attendee().controls[index].get('signature').invalid
    console.log(" this.sing2Required", this.sing2Required[index]);
    
  }
  onSave()
  {
    for (let index = 0; index <  this.attendee().length; index++) {
      this.sing2Required[index]=this.attendee().controls[index].get('signature').invalid
      
    }
   
    this.singRequired = this.toolBox.controls['signaturePad1'].invalid

    console.log("form data",this.toolBox.value);
    if(this.id!=='form')
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
  getAllStaff(){
    this.logicalFormInfo.getAllStaff().subscribe((res:any)=> {
      this.staff=res.data;
      console.log("res",this.staff);
   })
  }
}
