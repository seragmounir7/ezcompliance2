
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { ViewChild } from '@angular/core';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AddItemComponent } from './add-item/add-item.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-risk-assessment-swms',
  templateUrl: './risk-assessment-swms.component.html',
  styleUrls: ['./risk-assessment-swms.component.scss'],
})
export class RiskAssessmentSWMSComponent implements OnInit,AfterViewInit {
  @ViewChild('projectManager') projectManager: ElementRef;
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
  riskArr = [];
  COPArr = [];
  ppeArr = [];
  licenceArr = [];
  jobTaskData = [];
  jobTaskSelected = [];
  projectMang = [];
  allChemicals = [];
  allCOPSelected = [];
  @ViewChild('Signature1') signaturePad1: SignaturePad;
  @ViewChild('Signature2') signaturePad2: SignaturePad;
  regulatorData: any=[];
  safety: any=[];
  JurisdictionData: any=[];
  states: any=[];
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    private setTitle: SetTitleService
  ) {
    this.riskAssessmentFb = this.fb.group({
      SWMSTab: this.fb.array([]),

      jobNumber: [''],
      siteName: [''],
      customerName: [''],
      streetNo: [''],
      streetAddr: [''],
      subUrb: [''],
      custConct: [''],
      custConctPh: [''],
      custEmail: [''],
      Employee1: [''],
      dateTime: [''],
      statesSWMS: [''],
      projectManager: [''],
      projectManagerSWMS: [''],
      jurisdiction: [''],
      safetyLeg: [''],
      regulator: [''],
      CodeOfPract: [''],
      SDSRegister: this.fb.array([]),
      riskLevel: this.fb.array([]),
      residualRisk: this.fb.array([]),
      persResp: this.fb.array([]),
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
  addActionResiRiskLevel() {
    {
      this.residlRiskLevelFA().push(this.residlRiskLevelFG());
    }
  }
  addActionPersonRes() {
    {
      this.personResFA().push(this.personResFG());
    }
  }
  addActionSDSRegister() {
    {
      this.sdsRegisterFA().push(this.sdsRegisterFG());
    }
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
  residlRiskLevelFG(): FormGroup {
    return this.fb.group({
      resiRiskLevel: [''],
    });
  }
  personResFG(): FormGroup {
    return this.fb.group({
      personRes: [''],
    });
  }
  sdsRegisterFG(): FormGroup {
    return this.fb.group({
      chemicalName: [''],
      location: [''],
      hazardous: [''],
      quantity: [''],
      expDate: [''],
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
  }

  drawComplete1() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad1.toDataURL());
  }
  clear1() {
    console.log('clear1');

    this.signaturePad1.clear();
  }
  drawStart1() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
  drawComplete2() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad2.toDataURL());
  }
  clear2() {
    console.log('clear2');

    this.signaturePad2.clear();
  }
  drawStart2() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  getAllJobTask() {
    this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
      this.jobTaskData = res.data;
      console.log('jobTaskDetails=>', this.jobTaskData);
    });
  }

  getAllPPE() {
    this.logicalFormInfo.getAllPPE().subscribe((res: any) => {
      // console.log('PPE=>', res);
      this.PPEselection = res.data;
      for (let i = 0; i < this.PPEselection.length; i++) {
        this.ppeArr[i] = 0;
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
    }
    for (let k = 0; k < this.ppeArr.length; k++) {
      this.ppeArr[k] = 0;
    }
    for (let k = 0; k < this.licenceArr.length; k++) {
      this.licenceArr[k] = 0;
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
          }
        });
      });
      element.PPE.forEach((item) => {
        this.PPEselection.forEach((ppeItem, index) => {
          if (ppeItem._id === item) {
            this.ppeArr[index] = 1;
          }
        });
      });

      this.licenseAndQualification.forEach((item, index) => {
        if (item.tradeCategoryId._id === element.tradeCategoryId._id) {
          this.licenceArr[index] = 1;
        }
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
        .setValue(data?.staffId?._id);
      this.riskLevelFA().controls[i].get('riskLevel').setValue(data.riskLevel);
      this.residlRiskLevelFA()
        .controls[i].get('resiRiskLevel')
        .setValue(data.residualRisk);

      data.allCOPTitle.forEach((element) => {
        this.allCOPSelected.push(element);
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
}
