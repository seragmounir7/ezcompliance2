
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { ViewChild } from '@angular/core';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AddItemComponent } from './add-item/add-item.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-risk-assessment-swms',
  templateUrl: './risk-assessment-swms.component.html',
  styleUrls: ['./risk-assessment-swms.component.scss'],
})
export class RiskAssessmentSWMSComponent implements OnInit,AfterViewInit {
  @ViewChild('projectManager') projectManager: ElementRef;
  @ViewChild('signaturePad1Div') signaturePad1Div: ElementRef;

  public Editor = ClassicEditor;

  riskAssessmentFb!: FormGroup;
  SWMSTab!: FormArray;
  RiskAssessment = true;
  SWMSShow = false;
  chemicalTask = false;
  //checkboxes array
  jobTask = [];
  staff = [];
  resiRiskLevel = [];
  riskLevel = [];
  highRiskConstruction = [];
  PPEselection = [];
  licenseAndQualification = [];
  checkArray = [];
  allJobNumbers = [];
  allHazards = [];
  allContrlActReq = [];
  id:any;
  isSelected=[];
  isHazardous=[];
  hasJuridiction=false;
  hasLegist=false;
  hasRegulation=false;
  highRiskConstruction2 = [
    {
      label: 'Working in or near trenches or shafts deeper than 1.5metres',
      value: '',
    },
    { label: 'Work in or near a confined space', value: '' },
    {
      label:
        'Work in an area that may have a contaminated or flammable atmosphere',
      value: '',
    },
    { label: 'Working around or near mobile plant', value: '' },
    { label: 'Work with near or near asbestos', value: '' },
    { label: 'Working with hazardous substances', value: '' },
    { label: 'Working with or near tilt-up/precast concrete', value: '' },
    { label: 'Risk of falls higher than 2 metres', value: '' },
    {
      label: 'Working near on or adjacent to a road or rail corridor',
      value: '',
    },
    { label: 'Working on or near telecommunication tower', value: '' },
    { label: 'Working on or near telecommunication tower', value: '' },
    { label: 'Work near explosives', value: '' },
    {
      label:
        'Work in or near water or other liquid that involves a risk of drowning',
      value: '',
    },
    { label: 'Demolition of load-bearing structure', value: '' },
    { label: 'Diving work', value: '' },
  ];

  PPEselection2 = [
    { label: 'Disposable dust mask', value: '' },
    { label: 'Dust Mas', value: '' },
    { label: 'Face shield', value: '' },
    { label: 'Full face respirator', value: '' },
    { label: 'Gttors', value: '' },
    { label: 'Half face respirator', value: '' },
    { label: 'Hard Hat', value: '' },
    { label: 'Hearing protection', value: '' },
    { label: 'High-Vis Clothing', value: '' },
    { label: 'Lock Out Tags', value: '' },
    { label: 'Long sleeve/Long pants', value: '' },
    { label: 'Out of Service Tags', value: '' },
    { label: 'Protective gloves', value: '' },
    { label: 'Rescue kit', value: '' },
    { label: 'Safety boots', value: '' },
    { label: 'Safety glasses', value: '' },
    { label: 'Sun Screen', value: '' },
    { label: 'torch', value: '' },
    { label: 'Wide Brim Hat', value: '' },
  ];
  secondEditor = `
  <h1 class='form-control' >
  <strong>Worker consultation, instruction, training, toolbox talks, review,
  acceptance record:</strong>
  </h1>
  <br /><br />
  
  <h3 class='txt_1'>
    Only persons who have completed the singoff are authorised to work
    on the relevent tasks covered by this document. <br />
    Note: Work must be performed in accordance with this SWMS, any Risk
    Assessment prepared in relation to this work and any <br />
    relevent Safe WorkProcedures.<br />
    This SWMS must be accessible for inspection untill the energised
    electrical work to which this SWMS relates is completed. If the
    <br />
    SWMS is revised, all version should be kept.<br />
    If a Notifiable incident occurs in relation to the high-risk
    construction work in this SWMS, the SWMS must be kept for at least 2
    years<br />
    from the date of the Notifiable incident.<br /><br />
    If Changes are made to the work practice and the content of the SWMS
    workers will need sign to confirm that they haverecieved an<br />
    updated briefing, undestand the content and will comply with the
    requirements.<br /><br />
    Where there are other parties working adjascent to the contractor
    and the work activity that could impact upon the safety and
    welfare<br />
    of others not directly employed, SWMS will make references to how
    they will coordinate the work activity and where applicable<br />
    communicate to the other parties.<br /><br />
  </h3>`
  riskArr = [];
  COPArr = [];
  ppeArr = [];
  taskArr=[];
  licenceArr = [];
  jobTaskData = [];
  jobTaskSelected = [];
  hazard=[];
  projectMang = [];
  allChemicals = [];
  allCOPSelected = [];
  singRequired: any;
  signRequired: any;
  @ViewChild('Signature1') signaturePad1: SignaturePad;
  @ViewChild('Signature2') signaturePad2: SignaturePad;
  regulatorData: any=[];
  safety: any=[];
  JurisdictionData: any=[];
  states: any=[];
  constructor(
    public router: Router,
    private dialog: MatDialog,
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    private activatedRoute: ActivatedRoute,
    private setTitle: SetTitleService
  ) {
    this.id=this.activatedRoute.snapshot.params.id;
    console.log("id",this.id)
    this.riskAssessmentFb = this.fb.group({
      SWMSTab: this.fb.array([]),
      jobNumber: ['',Validators.required],
      siteName: ['', Validators.required],
      customerName: ['',Validators.required],
      streetNo: ['',Validators.required],
      streetAddr: ['',Validators.required],
      suburb: ['',Validators.required],
      town:['',Validators.required],
      custConct: ['',Validators.required],
      custConctPh: ['',Validators.required],
      custEmail: ['',Validators.required],
      employee1: ['',Validators.required],
      employee2: ['',Validators.required],
      dateTime: ['',Validators.required],
      statesSWMS: ['',Validators.required],
      projectManager: ['',Validators.required],
      date: ['',Validators.required],
      projectManagerSWMS: ['',Validators.required],
      jurisdiction: ['',Validators.required],
      safetyLeg: ['',Validators.required],
      regulator: ['',Validators.required],
      location: ['',Validators.required],
      qty: [],
      expiryDate: ['',Validators.required],
      hazardous: this.fb.array([]),
      ppeSelection: this.fb.array([]),
      file: this.fb.array([]),
      SDSRegister: this.fb.array([]),
      riskLevel: this.fb.array([]),
      residualRisk: this.fb.array([]),
      persResp: this.fb.array([]),
      jobTask:this.fb.array([]),
      riskConstruction:this.fb.array([]),
      riskConstruction2:this.fb.array([]),
      PPEselection:this.fb.array([]),
      PPESelection2:this.fb.array([]),
      licence:this.fb.array([]),
      editor:["",Validators.required],
      signaturePad1:["",Validators.required],
      signaturePad2:["",Validators.required]
    });
  }
  ngOnInit(): void {
    this.getAllJobTask();
    this.getAllPPE();
    this.getAllHighRisk();
    this.getAllLicence();
    this.getAllProjectMang();
    this.addActionSDSRegister();
    this.getAllJobNumber();
    this.getAllResidualRiskLevel();
    this.getAllStaff();
    this.getAllRiskLevel();
    this.getAllChemical();
    this.getAllHazard();
    this.getAllContrActReq();
    this.getAllRegulator();
    this.getAllSafe();
    this.getAllState();
    this.getAllJurisdiction();
    if(this.id!="form")
    {
      this.getAssessmentByid(this.id);
    }
    this.setTitle.setTitle('WHS-Risk Assesment Form');
    // this.riskAssessmentFb.get('jobNumber').valueChanges.subscribe((res) => {
    //   if (res) {
    //     console.log('jobNumberres', res);
    //     this.allJobNumbers.forEach((item) => {
    //       if (res === item._id) {
    //         console.log('Id found', item);
    //         this.riskAssessmentFb.patchValue({
    //           siteName: item.siteName,
    //           customerName: item.customerName,
    //           streetNo: item.streetNumber,
    //           streetAddr: item.streetAddress,
    //           subUrb: item.suburb,
    //           statesSWMS: item.state,
    //           custConct: item.customerContact,
    //           custConctPh: item.customerContactPhone,
    //           custEmail: item.customerEmail,
    //           jobNumberDupl: this.riskAssessmentFb.get('jobNumber').value,
    //         });
    //       }
    //     });
    //   }
    //  // this.riskAssessmentFb.get('jobNumber').updateValueAndValidity();
    // });

    this.riskAssessmentFb.get('statesSWMS').valueChanges.subscribe((res) => {
      if (res) {
        console.log(res);
        
      for(let i=0;i<this.states.length;i++){
        if(res===this.states[i]._id){
          console.log("id found");        
          
          this.riskAssessmentFb.get('jurisdiction').setValue(this.states[i].jurisdictionId._id);
          this.riskAssessmentFb.get('safetyLeg').setValue(this.states[i].safetyLegislationId._id);
          this.riskAssessmentFb.get('regulator').setValue(this.states[i].regulatorId._id);
          break;
        }
      }

        
      }
    });
  }
  getAssessmentByid(id)
  {
    console.log("iddd",id);
    this.logicalFormInfo.getAssessmentbyId(id).subscribe((res:any)=>
    {
      this.allCOPSelected=[];
      console.log("assesment by id",res.data);
      let check =async () => { this.signaturePad1 != null }
      check().then(() => {

        this.signaturePad1.fromDataURL(res.data.signaturePad1)
      })
      let check1 =async () => { this.signaturePad2 != null }
      check1().then(() => {

        this.signaturePad2.fromDataURL(res.data.signaturePad2)
      })
     if( res?.data.jurisdiction!="")
     {
       this.hasJuridiction=true;
     }
     if( res?.data.safetyLeg!="")
     {
       this.hasLegist=true;
     }
     if( res?.data.regulator!="")
     {
       this.hasRegulation=true;
     }
      this.riskAssessmentFb.patchValue({
        ...res.data
      })
      const item = <FormArray>this.riskAssessmentFb.controls['SDSRegister'];
      while(item.length>0)
      {
        item.removeAt(0);
      }
      res?.data?.SDSRegister.forEach((element,index) => {
        this.chemicalTask=true;
        if(element?.chemicalName!="")
        {
          this.isSelected[index]=true;
        }
        if(element?.hazardous!="")
        {
          this.isHazardous[index]=true;
        }
        this.PushActionSDSRegister(element)
      });
      res.data.riskLevel.forEach(element => {
        console.log("riskLevel",element.riskLevel);
        this.PushActionRiskLevel(element);
      });
      res.data.residualRisk.forEach(element => {
       this.PushActionResiRiskLevel(element);
      });
      res.data.riskLevel.forEach(element => {
       this.PushActionPersonRes(element);
      });
     res.data.codeOfPract.forEach(element => {
       console.log("eleee",element);
       this.allCOPSelected.push(element);
     });
     res.data.identifyHazards.forEach((element,index) => {
       console.log("eleeeme",element);
       this.checkHazards(element,index);
      //  element.allHazardsTitle.forEach(ele => { 
      //   this.checkHazards(ele,index);
      //  });
     });
      res.data.jobTask.forEach((element,index) => {
        this.checkJobtask(element,index);
        // this.checkCOP(element,index);
      });
      res.data.PPEselection.forEach((element,index) => {
        this.checkPPE(element,index);
      });
      res.data.PPESelection2.forEach((element,index) => {
        this.checkPPE(element,index);
      });
      res.data.riskConstruction.forEach((element,index) => {
        this.checkRisk(element,index);
      });
      res.data.licence.forEach((element,index) => {
        this.checkLicense(element,index);
      });
    })
  }
  checkHazards(data,i)
  {
    for(let j=0;j<this.jobTaskData.length;j++)
    {
        if(this.jobTaskData[j]._id==data._id)
        {
          this.jobTaskData[j].allHazardsTitle=[];
          this.jobTaskData[j].allContrlActReqTitle=[];
          this.jobTaskData[j].allHazardsTitle=data.allHazardsTitle;
          this.jobTaskData[j].allContrlActReqTitle=data.allContrlActReqTitle;
          console.log("allHazardsTitle",this.jobTaskData[j].allHazardsTitle);
          console.log("allHazardsTitle",this.jobTaskData[j].allContrlActReqTitle);
          
        }
    }
  }
checkJobtask(element,index)
{
  let z=this.jobTaskData[index]._id;
  console.log("z",z);
  console.log("ele",element[z]);
  let c= this.riskAssessmentFb.controls['jobTask'] as FormArray
  let d=c.controls[index] as FormGroup
  if(element[z])
  {
    d.controls[z].setValue(element[z]);
    this.jobTaskSelected.push(this.jobTaskData[index])
    console.log("job selected",this.jobTaskSelected);
  }
}
checkRisk(element,index)
{
  let z=this.highRiskConstruction[index]._id;
  console.log("ele",element[z]);
  let c= this.riskAssessmentFb.controls['riskConstruction'] as FormArray
  let d=c.controls[index] as FormGroup
  if(element[z])
  {
    d.controls[z].setValue(element[z]);
  }
}
checkPPE(element,index)
{
  let z=this.PPEselection[index]._id;
  console.log("ele",element[z]);
  let c= this.riskAssessmentFb.controls['PPEselection'] as FormArray
  let d=c.controls[index] as FormGroup
  if(element[z])
  {
    d.controls[z].setValue(element[z]);
  }
}
checkLicense(element,index)
{
  let z=this.licenseAndQualification[index]._id;
  console.log("ele",element[z]);
  let c= this.riskAssessmentFb.controls['licence'] as FormArray
  let d=c.controls[index] as FormGroup
  if(element[z])
  {
    d.controls[z].setValue(element[z]);
  }
}
  jobNoSel() {
    this.allJobNumbers.forEach((item) => {
      if (this.riskAssessmentFb.get('jobNumber').value === item._id) {
        console.log('Id found', item);
        this.riskAssessmentFb.patchValue({
          siteName: item.siteName,
          customerName: item.customerName,
          streetNo: item.streetNumber,
          streetAddr: item.streetAddress,
          subUrb: item.suburb,
          statesSWMS: item.stateId._id,
          custConct: item.customerContact,
          custConctPh: item.customerContactPhone,
          custEmail: item.customerEmail,
          jobNumber: this.riskAssessmentFb.get('jobNumber').value,
        });
      }
    });
    this.riskAssessmentFb.get('jobNumber').updateValueAndValidity();
  }

  addActionRiskLevel() {
    {
      this.riskLevelFA().push(this.riskLevelFG());
    }
  }
  PushActionRiskLevel(data) {
    {
      this.riskLevelFA().push(this.GetriskLevelFG(data));
    }
  }
  addActionResiRiskLevel() {
    {
      this.residlRiskLevelFA().push(this.residlRiskLevelFG());
    }
  }
  PushActionResiRiskLevel(data) {
    {
      this.residlRiskLevelFA().push(this.GetresidlRiskLevelFG(data));
    }
  }
  addActionPersonRes() {
    {
      this.personResFA().push(this.personResFG());
    }
  }
  PushActionPersonRes(data) {
    {
      this.personResFA().push(this.GetpersonResFG(data));
    }
  }
  addActionSDSRegister() {
    {
      this.sdsRegisterFA().push(this.sdsRegisterFG());
    }
  }
  PushActionSDSRegister(data) {
    {
      this.sdsRegisterFA().push(this.GetsdsRegisterFG(data));
    }
  }
  jobtask(): FormArray {
    return this.riskAssessmentFb.get('jobTask') as FormArray;
  }
  COP(): FormArray {
    return this.riskAssessmentFb.get('CodeOfPract') as FormArray;
  }
  riskConstruct(): FormArray {
    return this.riskAssessmentFb.get('riskConstruction') as FormArray;
  }
  riskConstruct2(): FormArray {
    return this.riskAssessmentFb.get('riskConstruction2') as FormArray;
  }
  ppe(): FormArray {
    return this.riskAssessmentFb.get('PPEselection') as FormArray;
  }
  ppe2(): FormArray {
    return this.riskAssessmentFb.get('PPESelection2') as FormArray;
  }
  Licence(): FormArray {
    return this.riskAssessmentFb.get('licence') as FormArray;
  }
  riskLevelFA(): FormArray {
    return this.riskAssessmentFb.get('riskLevel') as FormArray;
  }
  residlRiskLevelFA(): FormArray {
    return this.riskAssessmentFb.get('residualRisk') as FormArray;
  }
  sdsRegisterFA(): FormArray {
    return this.riskAssessmentFb.get('SDSRegister') as FormArray;
  }
  personResFA(): FormArray {
    return this.riskAssessmentFb.get('persResp') as FormArray;
  }
  riskLevelFG(): FormGroup {
    return this.fb.group({
      riskLevel: [''],
    });
  }
  GetriskLevelFG(data): FormGroup {
    return this.fb.group({
      riskLevel:data.riskLevel
    });
  }
  residlRiskLevelFG(): FormGroup {
    return this.fb.group({
      resiRiskLevel: [''],
    });
  }
  GetresidlRiskLevelFG(data): FormGroup {
    return this.fb.group({
      resiRiskLevel:data.resiRiskLevel
    });
  }
  personResFG(): FormGroup {
    return this.fb.group({
      personRes: [''],
    });
  }
  GetpersonResFG(data): FormGroup {
    return this.fb.group({
      personRes: [''],
    });
  }
  jobtaskk(index): FormGroup {
    return this.fb.group({
      [this.jobTaskData[index]._id]: ['']
    });
  }
  codeOfPrac(index): FormGroup {
    return this.fb.group({
     cop:['']
    });
  }
  riskCons(index): FormGroup {
    return this.fb.group({
      [this.highRiskConstruction[index]._id]: ['']
    });
  }
  ppeSelect(index): FormGroup {
    return this.fb.group({
      [this.PPEselection[index]._id]: ['']
    });
  }
  license(index): FormGroup {
    return this.fb.group({
      [this.licenseAndQualification[index]._id]: ['']
    });
  }

  sdsRegisterFG(): FormGroup {
    return this.fb.group({
      chemicalName: [''],
      location: [''],
      hazardous: [''],
      quantity: [''],
      expDate: [''],
      file:['']
    });
  }
  GetsdsRegisterFG(data): FormGroup {
    return this.fb.group({
      chemicalName:data.chemicalName,
      location: data.location,
      hazardous:data.hazardous ,
      quantity:data.quantity ,
      expDate: data.expDate,
      file:data.file
    });
  }
  removeSDSRegister(i) {
    const item = <FormArray>this.riskAssessmentFb.controls['SDSRegister'];
    if (item.length > 1) {
      item.removeAt(i);
    }
  }
  showsite() {
    this.RiskAssessment = true;
    this.SWMSShow = false;
  }
  showAction() {
    this.SWMSShow = true;
    this.RiskAssessment = false;
  }
  public signaturePadOptions1: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 450,
    canvasHeight: 100,
  };
  public signaturePadOptions2: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 430,
    canvasHeight: 100,
  };

  ngAfterViewInit() {
    // this.signaturePad is now available
    //this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
    // this.signaturePad2.set('minWidth', 1); // set szimek/signature_pad options at runtime
    //this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API
    // this.signaturePad2.clear(); // invoke functions from szimek/signature_pad API
    console.log('clear1 &2');
    console.log(this.signaturePad1Div)
  }

  drawComplete1() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad1.toDataURL());
    this.riskAssessmentFb.controls["signaturePad1"].setValue(this.signaturePad1.toDataURL());
  }
  clear1() {
    console.log('clear1');
    this.signaturePad1.clear();
    
    this.singRequired = this.riskAssessmentFb.controls['signaturePad1'].untouched
  }
  drawStart1() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
    
    this.singRequired = this.riskAssessmentFb.controls['signaturePad1'].invalid
  }
  drawComplete2() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad2.toDataURL());
    this.riskAssessmentFb.controls["signaturePad2"].setValue(this.signaturePad2.toDataURL());
  }
  clear2() {
    console.log('clear2');
    this.signaturePad2.clear();
    
    this.signRequired = this.riskAssessmentFb.controls['signaturePad2'].untouched
  }
  drawStart2() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
    
    this.signRequired = this.riskAssessmentFb.controls['signaturePad2'].invalid
  }

  getAllJobTask() {
    this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
      this.jobTaskData = res.data;
      console.log('jobTaskDetails=>', this.jobTaskData);
      for (let i = 0; i < this.jobTaskData.length; i++) {
        // this.taskArr[i] = 0;
        this.jobtask().push(this.jobtaskk(i));
      }
    });
  }

  getAllPPE() {
    this.logicalFormInfo.getAllPPE().subscribe((res: any) => {
      // console.log('PPE=>', res);
      this.PPEselection = res.data;
      for (let i = 0; i < this.PPEselection.length; i++) {
        this.ppeArr[i] = 0;
        this.ppe().push(this.ppeSelect(i));
        this.ppe2().push(this.ppeSelect(i));
      }
    });
  }
  getAllProjectMang() {
    this.logicalFormInfo.getAllProjectMang().subscribe((res: any) => {
      this.projectMang = res.data;
      // console.log('getAllProjectMang=>', this.projectMang);
    });
  }
  getAllHighRisk() {
    this.logicalFormInfo.getAllRisk().subscribe((res: any) => {
      // console.log('Risk=>', res);
      this.highRiskConstruction = res.data;
      for (let i = 0; i < this.highRiskConstruction.length; i++) {
        this.riskArr[i] = 0;
        this.riskConstruct().push(this.riskCons(i))
        this.riskConstruct2().push(this.riskCons(i))
      }
    });
  }
  getHighRiskById() {
    let mode = 'Risk';
    this.logicalFormInfo.getFormDataById(mode).subscribe((res) => {
      this.highRiskConstruction = res.data[0].subComponents;
      // console.log(' this.highRiskConstruction=>', this.highRiskConstruction);
      for (let i = 0; i < this.highRiskConstruction.length; i++) {
        this.riskArr[i] = 0;
      }
    });
  }
  getAllLicence() {
    this.logicalFormInfo.getAllLicence().subscribe((res) => {
      this.licenseAndQualification = res.data;
      // console.log(
      //   'this.licenseAndQualification=>',
      //   this.licenseAndQualification
      // );
      for (let i = 0; i < this.licenseAndQualification.length; i++) {
        this.licenceArr[i] = 0;
        this.Licence().push(this.license(i))
      }
    });
  }
  getAllHazard() {
    this.logicalFormInfo.getAllHazards().subscribe((res: any) => {
      // console.log('getAllHazards=>', res);
      this.allHazards = res.data;
    });
  }
  getAllContrActReq() {
    this.logicalFormInfo.getAllContrlActReq().subscribe((res: any) => {
      // console.log('getAllHazards=>', res);
      this.allContrlActReq = res.data;
    });
  }

 
  deleteHazrds(type,title,i,j){
    console.log('type=>',type,title,i);
    console.log(this.jobTaskSelected[i]);
    
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${title}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!',
    }).then((result) => {
      if (result.value) {
        if (type === 'identifyHazards') {
          this.jobTaskSelected[i].allHazardsTitle.splice(j,1);
        }
        if (type === 'ctrlActreq') {
          this.jobTaskSelected[i].allContrlActReqTitle.splice(j,1);
        }
      }
    });
  }
  onLicenseChange(e,license,i)
  {
     console.log("e",e.target.checked);
     let c= this.riskAssessmentFb.controls['licence'] as FormArray
     let d=c.controls[i] as FormGroup
    if(e.target.checked)
    {
      d.controls[license].setValue("Open Cable Licence")
    }
    else
    {
      d.controls[license].reset()
    }
  }
  onRiskChange(e,risk,i)
  {
     console.log("e",e.target.checked);
     let c= this.riskAssessmentFb.controls['riskConstruction'] as FormArray
      let d=c.controls[i] as FormGroup
    if(e.target.checked)
    {
      d.controls[risk].setValue("Working in or near trenches or shafts deeper than 1.5metres")
    }
    else
    {
      d.controls[risk].reset()
    }
  }
  onPPEChange(e,ppe,i)
  {
     console.log("e",e.target.checked);
     let c= this.riskAssessmentFb.controls['PPEselection'] as FormArray
     let d=c.controls[i] as FormGroup
    if(e.target.checked)
    {
      d.controls[ppe].setValue("Disposable dust mask")
    }
    else
    {
      d.controls[ppe].reset()
    }
  }
  onRiskChange2(e,risk,i)
  {
     console.log("e",e.target.checked);
     let c= this.riskAssessmentFb.controls['riskConstruction2'] as FormArray
      let d=c.controls[i] as FormGroup
    if(e.target.checked)
    {
      d.controls[risk].setValue("Working in or near trenches or shafts deeper than 1.5metres")
    }
    else
    {
      d.controls[risk].reset()
    }
  }
  onPPEChange2(e,ppe,i)
  {
     console.log("e",e.target.checked);
     let c= this.riskAssessmentFb.controls['PPESelection2'] as FormArray
     let d=c.controls[i] as FormGroup
    if(e.target.checked)
    {
      d.controls[ppe].setValue("Disposable dust mask")
    }
    else
    {
      d.controls[ppe].reset()
    }
  }
  onJobtaskSelect(e, jobTaskRecd) {
    // this.jobTaskSelected=[];
  
    console.log('event', e.target.value, jobTaskRecd);
    let item = e.target.value;
    if (e.target.checked) {
      this.checkArray.push(item);
      console.log('jobTaskRecd', jobTaskRecd);

      this.jobTaskSelected.push(jobTaskRecd);
    } else {
      this.checkArray.forEach((item, j) => {
        if (item == e.target.value) {
          this.checkArray.splice(j, 1);
          this.jobTaskSelected.splice(j, 1);
          return;
        }
      });
    }

    for (let k = 0; k < this.riskArr.length; k++) {
      this.riskArr[k] = 0;
      let c= this.riskAssessmentFb.controls['riskConstruction'] as FormArray
      let c1= this.riskAssessmentFb.controls['riskConstruction2'] as FormArray
      let d=c.controls[k] as FormGroup
      let d1=c1.controls[k] as FormGroup
      d.controls[this.highRiskConstruction[k]._id].reset();
      d1.controls[this.highRiskConstruction[k]._id].reset();
    }
    for (let k = 0; k < this.ppeArr.length; k++) {
      this.ppeArr[k] = 0;
      let c= this.riskAssessmentFb.controls['PPEselection'] as FormArray
      let d=c.controls[k] as FormGroup
      d.controls[this.PPEselection[k]._id].reset();
      let c1= this.riskAssessmentFb.controls['PPESelection2'] as FormArray
      let d1=c1.controls[k] as FormGroup
      d1.controls[this.PPEselection[k]._id].reset();
    }
    for (let k = 0; k < this.licenceArr.length; k++) {
      this.licenceArr[k] = 0;
      let c= this.riskAssessmentFb.controls['licence'] as FormArray
      let d=c.controls[k] as FormGroup
      d.controls[this.licenseAndQualification[k]._id].reset();
    }
    this.chemicalTask = false;
    console.log('jobTaskSelected', this.jobTaskSelected);

    this.jobTaskSelected.forEach((element) => {
      //looking for chemical task

      if (element.chemical == 'YES') {
        this.chemicalTask = true;
      }

      element.risk.forEach((item) => {
        this.highRiskConstruction.forEach((highRisk, index) => {
          if (highRisk._id === item) {
            this.riskArr[index] = 1;
           let c= this.riskAssessmentFb.controls['riskConstruction'] as FormArray
           let d=c.controls[index] as FormGroup
           d.controls[this.highRiskConstruction[index]._id].setValue("Working in or near trenches or shafts deeper than 1.5metres")
           let c1= this.riskAssessmentFb.controls['riskConstruction2'] as FormArray
           let d1=c1.controls[index] as FormGroup
           d1.controls[this.highRiskConstruction[index]._id].setValue("Working in or near trenches or shafts deeper than 1.5metres")
          // //  c.controls[highRisk._id].value
          console.log("x",d.controls[this.highRiskConstruction[index]._id].value);
          }
        });
      });
      element.PPE.forEach((item) => {
        this.PPEselection.forEach((ppeItem, index) => {
          if (ppeItem._id === item) {
            this.ppeArr[index] = 1;
            let c= this.riskAssessmentFb.controls['PPEselection'] as FormArray
            let d=c.controls[index] as FormGroup
            d.controls[this.PPEselection[index]._id].setValue("Disposable dust mask");
            let c1= this.riskAssessmentFb.controls['PPESelection2'] as FormArray
            let d1=c1.controls[index] as FormGroup
            d1.controls[this.PPEselection[index]._id].setValue("Disposable dust mask");
          }
        });
      });
element.licence.forEach(ele => {
  this.licenseAndQualification.forEach((item, index) => {
    if (item._id === ele) {
      console.log("item",item);
    console.log("ele",ele);
      this.licenceArr[index] = 1;
      let c= this.riskAssessmentFb.controls['licence'] as FormArray
      let d=c.controls[index] as FormGroup
      d.controls[this.licenseAndQualification[index]._id].setValue("Open Cable Licence");
    }
  });
});
    });
    // this.checkArray.forEach((id) => {

    //   this.jobTaskData.forEach((element) => {
    //     //looking for chemical task

    //     if(id === element._id && element.chemical == "YES"){
    //       this.chemicalTask=true;
    //     }
    //     if (id === element._id) {
    //       element.risk.forEach((riskItem) => {
    //         this.highRiskConstruction.forEach((highRisk, riskIndex) => {

    //           if (highRisk._id === riskItem) {
    //             this.riskArr[riskIndex] = 1;
    //           }
    //         });
    //       });
    //       element.PPE.forEach((riskItem) => {
    //         this.PPEselection.forEach((highRisk, index) => {
    //           if (highRisk._id === riskItem) {
    //             this.ppeArr[index] = 1;
    //           }
    //         });
    //       });
    //       // element.tradeCategoryId.forEach((riskItem) => {
    //       //   this.licenseAndQualification.forEach((highRisk, index) => {
    //       //     if (highRisk.tradeCategoryId._id === riskItem) {
    //       //       this.licenceArr[index] = 1;
    //       //     }
    //       //   });
    //       // });
    //       this.licenseAndQualification.forEach((highRisk, index) => {

    //         if (highRisk.tradeCategoryId._id === element.tradeCategoryId._id) {
    //           this.licenceArr[index] = 1;
    //         }
    //       });

    //     }
    //   });
    // });

    while (this.riskLevelFA().length) {
      this.riskLevelFA().removeAt(0);
    }
    while (this.residlRiskLevelFA().length) {
      this.residlRiskLevelFA().removeAt(0);
    }
    while (this.personResFA().length) {
      this.personResFA().removeAt(0);
    }
    this.allCOPSelected = [];
    this.jobTaskSelected.forEach((data, i) => {
      this.addActionRiskLevel();
      this.addActionResiRiskLevel();
      this.addActionPersonRes();
      this.personResFA()
        .controls[i].get('personRes')
        .setValue(data?.staff);
      this.riskLevelFA().controls[i].get('riskLevel').setValue(data.riskLevel);
      this.residlRiskLevelFA()
        .controls[i].get('resiRiskLevel')
        .setValue(data.residualRisk);
     console.log("data",data);
      data.allCOPTitle.forEach((element,index) => {
        this.allCOPSelected.push(element);
        // this.COP().push(this.codeOfPrac(index));
      });
      
      console.log('allCOPSelected', this.allCOPSelected);
     let myMap = new Map()
     this.allCOPSelected.forEach((item)=>{
       if(myMap.has(item)){
         myMap.set(item,myMap.get(item)+1);
       }else{
         myMap.set(item,1);
       }
     })
     this.allCOPSelected = Array.from(new Set(this.allCOPSelected.map(x => JSON.stringify(x)))).map(y => JSON.parse(y));
     console.log('allCOPSelected', this.allCOPSelected,myMap);
    });
  }
  getAllJobNumber() {
    this.logicalFormInfo.getAllJobNumber().subscribe((res: any) => {
      this.allJobNumbers = res.data;
    });
  }
  getAllStaff() {
    this.logicalFormInfo.getAllStaff().subscribe((res: any) => {
      this.staff = res.data;
    });
  }
  getAllResidualRiskLevel() {
    this.logicalFormInfo.getAllResidual().subscribe((res: any) => {
      this.resiRiskLevel = res.data;
    });
  }
  getAllRiskLevel() {
    this.logicalFormInfo.getAllRiskLevel().subscribe((res: any) => {
      this.riskLevel = res.data;
    });
  }
  getAllChemical() {
    this.logicalFormInfo.getAllChemical().subscribe((res: any) => {
      this.allChemicals = res.data;
    });
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.jobTaskSelected,
      event.previousIndex,
      event.currentIndex
    );
    while (this.riskLevelFA().length) {
      this.riskLevelFA().removeAt(0);
    }
    while (this.residlRiskLevelFA().length) {
      this.residlRiskLevelFA().removeAt(0);
    }
    while (this.personResFA().length) {
      this.personResFA().removeAt(0);
    }
    this.allCOPSelected = [];
    this.jobTaskSelected.forEach((data, i) => {
      this.addActionRiskLevel();
      this.addActionResiRiskLevel();
      this.addActionPersonRes();
      this.personResFA()
        .controls[i].get('personRes')
        .setValue(data?.staffId?._id);
      this.riskLevelFA().controls[i].get('riskLevel').setValue(data.riskLevel);
      this.residlRiskLevelFA()
        .controls[i].get('resiRiskLevel')
        .setValue(data.residualRisk);
      console.log('data', data);

      data.allCOPTitle.forEach((element) => {
        this.allCOPSelected.push(element);
      });
    });
    console.log('allCOPSelected', this.allCOPSelected);
  }
  addItem(type, i) {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '550px',
      // height:'50%',
      data:{
        type:type,
        title:''
      } ,
    });

    dialogRef.afterClosed().subscribe((result) => {
      let data={
        title:result,
        id:''
      }
      if (type === 'identifyHazards' && result !='false') {

        this.jobTaskSelected[i].allHazardsTitle.push(data);
      }
      if (type === 'ctrlActreq'  && result !='false') {
        this.jobTaskSelected[i].allContrlActReqTitle.push(data);
      }

      console.log('The dialog was closed');
    });
  }
  editHazrds(type,title, i) {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '550px',
      // height:'50%',
      data:{
        type:type,
        title:title
      } ,
    });

    dialogRef.afterClosed().subscribe((result) => {
      let data={
        title:result,
        id:''
      }
      if (type === 'editIdentifyHazards' && result !='false') {

        this.jobTaskSelected[i].allHazardsTitle[i]=data;  
      }
      if (type === 'editCtrlActreq'  && result !='false') {
        this.jobTaskSelected[i].allContrlActReqTitle[i]=data;
      }

      console.log('The dialog was closed');

    });
  }
  addChemical() {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '550px',
      // height:'50%',
      data:{
        type:'chemical',
        title:''
      } ,

    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != 'false' && result) {
        let data = {
          title: result,
        };
        this.logicalFormInfo.addChemical(data).subscribe((res: any) => {
          this.getAllChemical();
        });
      }
      console.log('The dialog was closed');
    });
  }
  getAllRegulator() {
    this.logicalFormInfo.getAllRegulator().subscribe((res: any) => {
      console.log("this.regulatorData", res.data)
      this.regulatorData = res.data;

    })
  }

  getAllSafe() {
    this.logicalFormInfo.getAllSafety().subscribe((res: any) => {
      console.log("this.safety", res)
      this.safety = res.data
    })
  }
  getAllJurisdiction() {
    this.logicalFormInfo.getAllJurisdiction().subscribe((res: any) => {
      console.log('JurisdictionData=>', res);
      this.JurisdictionData = res.data;
    });
  }
  getAllState() {
    this.logicalFormInfo.getAllStates().subscribe((res: any) => {
      console.log('getAllStates=>', res);
      this.states = res.data;
    });
  }

  setProjectManager(value,e){
    if(value === 'projectManagerSWMS'){
      this.riskAssessmentFb.get('projectManager').setValue(e.target.value);
    }
    if(value === 'projectManager'){
      console.log('setProjectManager==>',this.projectManager)
      this.riskAssessmentFb.get('projectManagerSWMS').setValue(e.target.value);
    }
  }

  onSubmit(){
    const data={
      ...this.riskAssessmentFb.value,
      codeOfPract:this.allCOPSelected,
      identifyHazards:this.jobTaskSelected
    }
    console.log("data",data);
    if(this.id!=='form')
    {
      this.logicalFormInfo.updateAssessment(this.id,data).subscribe((res)=>{
        console.log("this.riskAssessmentFb updated",res);
        this.router.navigate(["/admin/forms/riskAssessTable"]);
      })

    }
    else
    {
      this.logicalFormInfo.addAssessment(data).subscribe((res)=>{
        this.router.navigate(["/admin/forms/riskAssessTable"]);
        console.log("this.riskAssessmentFb posted",res);
      })
    }
    this.riskAssessmentFb.reset();
    this.allCOPSelected=[];
    this.jobTaskSelected=[];
    this.signaturePad1.clear();
    this.signaturePad2.clear();
  }
}
