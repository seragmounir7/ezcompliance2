import { value } from './../../dynamic-form/global.model';
import { element } from 'protractor';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { ViewChild } from '@angular/core';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-risk-assessment-swms',
  templateUrl: './risk-assessment-swms.component.html',
  styleUrls: ['./risk-assessment-swms.component.scss'],
})
export class RiskAssessmentSWMSComponent implements OnInit {
  riskAssessmentFb!: FormGroup;
  SWMSTab!: FormArray;
  RiskAssessment = true;
  SWMSShow = false;
  //checkboxes array
  jobTask = [];
  highRiskConstruction = [];
  PPEselection = [];
  licenseAndQualification = [];
  checkArray = [];
  allJobNumbers = [];
  // riskLevel = [];
  // resdRiskLevel = [];
  statesData = [
    {
      states: 'NSW',
      juridiction: {
        act: 'Act: Work Health and Safety Act 2011 (NSW)',
        regulation: 'Regulation: Work Health and Safety Regulation 2017 (NSW)',
      },
      safetyLegislation: {
        regulator: 'Regulator: SafeWork NSW',
        codes: 'Codes: NSW Codes of Practice',
      },
    },
    {
      states: 'ACT',
      juridiction: {
        act: 'Act: Work Health and Safety Act 2011 (ACT)',
        regulation: 'Regulation: Work Health and Safety Regulation 2011 (ACT)',
      },
      safetyLegislation: {
        regulator: 'Regulator: WorkSafe ACT',
        codes: 'Codes: ACT Codes of Practice',
      },
    },

    {
      states: 'QLD',
      juridiction: {
        act: 'Act: Work Health and Safety Act 2011 (Qld)',
        regulation: 'Regulation: Work Health and Safety Regulation 2011 (Qld)',
      },
      safetyLegislation: {
        regulator: 'Regulator: Workplace Health and Safety Queensland',
        codes: 'Codes: Qld Codes of Practice ',
      },
    },
    {
      states: 'NT',
      juridiction: {
        act:
          'Act: Work Health and Safety (National Uniform Legislation) Act 2011 (NT) ',
        regulation:
          'Regulation: Work Health and Safety (National Uniform Legislation) Regulations (NT)',
      },
      safetyLegislation: {
        regulator: 'Regulator: NT WorkSafe',
        codes: 'Codes: NT Codes of Practice',
      },
    },
    {
      states: 'SA',
      juridiction: {
        act: 'Act: Work Health and Safety Act 2012 (SA)',
        regulation: 'Regulation: Work Health and Safety Regulation 2012 (SA) ',
      },
      safetyLegislation: {
        regulator: 'Regulator: SafeWork SA',
        codes: 'Codes: SA Codes of Practice',
      },
    },
    {
      states: 'TAS',
      juridiction: {
        act: 'Act: Work Health and Safety Act 2012 (Tas) ',
        regulation: 'Regulation: Work Health and Safety Regulation 2012 (Tas) ',
      },
      safetyLegislation: {
        regulator: 'Regulator: WorkSafe Tasmania',
        codes: 'Codes: Tas Codes of Practice',
      },
    },
    {
      states: 'NZ',
      juridiction: {
        act: 'Act: Health and Safety at Work Act 2015 (NZ)',
        regulation: '',
      },
      safetyLegislation: {
        regulator: 'Regulator: WorkSafe New Zealand',
        codes: 'Codes: NZ Codes of Practice',
      },
    },
    {
      states: 'VIC',
      juridiction: {
        act: 'Act: Occupational Health and Safety Act 2004 (Vic) ',
        regulation:
          'Regulation: Occupational Health and Safety Regulations 2017 (Vic)',
      },
      safetyLegislation: {
        regulator: 'Regulator: WorkSafe Victoria',
        codes: 'Codes: Vic Compliance Codes',
      },
    },
    {
      states: 'WA',
      juridiction: {
        act: 'Act: Occupational Safety and Health Act 1984 (WA)',
        regulation:
          'Regulation: Occupational Safety and Health Regulations 1996 (WA)',
      },
      safetyLegislation: {
        regulator: 'Regulator: WorkSafe WA',
        codes: 'Codes: WA Codes of Practice',
      },
    },
  ];
  // jobTask = [
  //   { label: 'Activities Involving chemicals', value: '' },
  //   { label: 'Assess Hazards', value: '' },
  //   { label: 'Cable installation into cables tray', value: '' },
  //   { label: 'Cable Support installation', value: '' },
  //   { label: 'Camera Installation', value: '' },
  //   { label: 'conduit Installation in ceiling or walls', value: '' },
  //   { label: 'Conduit installation in trench', value: '' },
  //   { label: 'conduit installation prior to concreate Pour', value: '' },
  //   { label: 'Control Panel Installation', value: '' },
  //   { label: 'Heat Shrinking cable joints', value: '' },
  //   { label: 'Hot Works', value: '' },
  //   { label: 'Installation of cables', value: '' },
  //   { label: 'Leaving Site', value: '' },
  //   { label: 'Maual Handling', value: '' },
  //   { label: 'Site establishment', value: '' },
  //   { label: 'Terminination of fibre optic cables', value: '' },
  //   { label: 'Use of Elevated Work Platform', value: '' },
  //   { label: 'Use of EWP', value: '' },
  //   { label: 'Use of Ladders', value: '' },
  //   { label: 'Use of Plant & Equipment', value: '' },
  //   { label: 'Use of plant Equipment', value: '' },
  //   { label: 'Working false ceilings', value: '' },
  //   { label: 'Working in communication pits less than 1.5m deep', value: '' },
  //   { label: 'Working near around Pedistrians', value: '' },
  //   { label: 'Working near Asbestos', value: '' },
  //   { label: 'Working near Lead containing materials', value: '' },
  //   { label: 'Working outdoors', value: '' },
  //   { label: 'Working with hand and power tools', value: '' },
  // ];

  // highRiskConstruction = [
  //   {
  //     label: 'Working in or near trenches or shafts deeper than 1.5metres',
  //     value: '',
  //   },
  //   { label: 'Work in or near a confined space', value: '' },
  //   {
  //     label:
  //       'Work in an area that may have a contaminated or flammable atmosphere',
  //     value: '',
  //   },
  //   { label: 'Working around or near mobile plant', value: '' },
  //   { label: 'Work with near or near asbestos', value: '' },
  //   { label: 'Working with hazardous substances', value: '' },
  //   { label: 'Working with or near tilt-up/precast concrete', value: '' },
  //   { label: 'Risk of falls higher than 2 metres', value: '' },
  //   {
  //     label: 'Working near on or adjacent to a road or rail corridor',
  //     value: '',
  //   },
  //   { label: 'Working on or near telecommunication tower', value: '' },
  //   { label: 'Working on or near telecommunication tower', value: '' },
  //   { label: 'Work near explosives', value: '' },
  //   {
  //     label:
  //       'Work in or near water or other liquid that involves a risk of drowning',
  //     value: '',
  //   },
  //   { label: 'Demolition of load-bearing structure', value: '' },
  //   { label: 'Diving work', value: '' },
  // ];

  // PPEselection = [
  //   { label: 'Disposable dust mask', value: '' },
  //   { label: 'Dust Mas', value: '' },
  //   { label: 'Face shield', value: '' },
  //   { label: 'Full face respirator', value: '' },
  //   { label: 'Gttors', value: '' },
  //   { label: 'Half face respirator', value: '' },
  //   { label: 'Hard Hat', value: '' },
  //   { label: 'Hearing protection', value: '' },
  //   { label: 'High-Vis Clothing', value: '' },
  //   { label: 'Lock Out Tags', value: '' },
  //   { label: 'Long sleeve/Long pants', value: '' },
  //   { label: 'Out of Service Tags', value: '' },
  //   { label: 'Protective gloves', value: '' },
  //   { label: 'Rescue kit', value: '' },
  //   { label: 'Safety boots', value: '' },
  //   { label: 'Safety glasses', value: '' },
  //   { label: 'Sun Screen', value: '' },
  //   { label: 'torch', value: '' },
  //   { label: 'Wide Brim Hat', value: '' },
  // ];

  // licenseAndQualification = [
  //   { label: 'Open Cable Licence', value: '' },
  //   { label: 'White Card', value: '' },
  //   { label: 'EWP Licence', value: '' },
  //   { label: 'Working At Heights', value: '' },
  //   { label: 'Security Licence', value: '' },
  //   { label: 'Asbestos Awarness', value: '' },
  //   { label: 'Working In Confined Space', value: '' },
  // ];

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
  ppeArr = [];
  licenceArr = [];
  jobTaskData = [];
  jobTaskSelected = [];
  projectMang = [];
  @ViewChild('Signature1') signaturePad1: SignaturePad;
  @ViewChild('Signature2') signaturePad2: SignaturePad;
  constructor(
    private fb: FormBuilder,
    private dynamicFormsService: DynamicFormsService,
    private logicalFormInfo: LogicalFormInfoService,
    private setTitle: SetTitleService
  ) {
    this.riskAssessmentFb = this.fb.group({
      SWMSTab: this.fb.array([]),

      jobNumber: [''],
      // jobNumberDupl: [''],
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
      jurisdiction: [''],
      safetyLeg: [''],
      regulator: [''],
      CodeOfPract: [''],
      SDSRegister: this.fb.array([]),
      riskLevel: this.fb.array([]),
      residualRisk: this.fb.array([]),
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

        switch (res) {
          case 'NSW':
            this.riskAssessmentFb.get('jurisdiction').setValue('NSW');
            this.riskAssessmentFb.get('safetyLeg').setValue('NSW_Act');
            this.riskAssessmentFb.get('regulator').setValue('Reg_NSW');
            this.riskAssessmentFb.get('CodeOfPract').setValue('code_NSW');
            break;
          case 'ACT':
            this.riskAssessmentFb.get('jurisdiction').setValue('ACT');
            this.riskAssessmentFb.get('safetyLeg').setValue('ACT_Act');
            this.riskAssessmentFb.get('regulator').setValue('Reg_ACT');
            this.riskAssessmentFb.get('CodeOfPract').setValue('code_ACT');

            break;
          case 'QLD':
            this.riskAssessmentFb.get('jurisdiction').setValue('QLD');
            this.riskAssessmentFb.get('safetyLeg').setValue('QLD_Act');
            this.riskAssessmentFb.get('regulator').setValue('Reg_QLD');
            this.riskAssessmentFb.get('CodeOfPract').setValue('code_QLD');

            break;
          case 'NT':
            this.riskAssessmentFb.get('jurisdiction').setValue('NT');
            this.riskAssessmentFb.get('safetyLeg').setValue('NT_Act');
            this.riskAssessmentFb.get('regulator').setValue('Reg_NT');
            this.riskAssessmentFb.get('CodeOfPract').setValue('code_NT');

            break;
          case 'SA':
            this.riskAssessmentFb.get('jurisdiction').setValue('SA');
            this.riskAssessmentFb.get('safetyLeg').setValue('SA_Act');
            this.riskAssessmentFb.get('regulator').setValue('Reg_SA');
            this.riskAssessmentFb.get('CodeOfPract').setValue('code_SA');

            break;
          case 'NZ':
            this.riskAssessmentFb.get('jurisdiction').setValue('NZ');
            this.riskAssessmentFb.get('safetyLeg').setValue('NZ_Act');
            this.riskAssessmentFb.get('regulator').setValue('Reg_NZ');
            this.riskAssessmentFb.get('CodeOfPract').setValue('code_NZ');

            break;
          case 'TAS':
            this.riskAssessmentFb.get('jurisdiction').setValue('TAS');
            this.riskAssessmentFb.get('safetyLeg').setValue('TAS_Act');
            this.riskAssessmentFb.get('regulator').setValue('Reg_TAS');
            this.riskAssessmentFb.get('CodeOfPract').setValue('code_TAS');

            break;
          case 'VIC':
            this.riskAssessmentFb.get('jurisdiction').setValue('VIC');
            this.riskAssessmentFb.get('safetyLeg').setValue('VIC_Act');
            this.riskAssessmentFb.get('regulator').setValue('Reg_VIC');
            this.riskAssessmentFb.get('CodeOfPract').setValue('code_VIC');

            break;
          case 'WA':
            this.riskAssessmentFb.get('jurisdiction').setValue('WA');
            this.riskAssessmentFb.get('safetyLeg').setValue('WA_Act');
            this.riskAssessmentFb.get('regulator').setValue('Reg_WA');
            this.riskAssessmentFb.get('CodeOfPract').setValue('code_WA');

            break;
        }
      }
    });
  }
  jobNoSel(){
    this.allJobNumbers.forEach((item) => {
      if (this.riskAssessmentFb.get('jobNumber').value === item._id) {
        console.log('Id found', item);
        this.riskAssessmentFb.patchValue({
          siteName: item.siteName,
          customerName: item.customerName,
          streetNo: item.streetNumber,
          streetAddr: item.streetAddress,
          subUrb: item.suburb,
          statesSWMS: item.state,
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
      console.log('PPE=>', res);
      this.PPEselection = res.data;
      for (let i = 0; i < this.PPEselection.length; i++) {
        this.ppeArr[i] = 0;
      }
    });
  }
  getAllProjectMang() {
    this.logicalFormInfo.getAllProjectMang().subscribe((res: any) => {
      this.projectMang = res.data;
      console.log('getAllProjectMang=>', this.projectMang);
    });
  }
  getAllHighRisk() {
    this.logicalFormInfo.getAllRisk().subscribe((res: any) => {
      console.log('Risk=>', res);
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
      console.log(' this.highRiskConstruction=>', this.highRiskConstruction);
      for (let i = 0; i < this.highRiskConstruction.length; i++) {
        this.riskArr[i] = 0;
      }
    });
  }
  getAllLicence() {
    this.logicalFormInfo.getAllLicence().subscribe((res) => {
      this.licenseAndQualification = res.data;
      console.log(
        'this.licenseAndQualification=>',
        this.licenseAndQualification
      );
      for (let i = 0; i < this.licenseAndQualification.length; i++) {
        this.licenceArr[i] = 0;
      }
    });
  }
  onJobtaskSelect(e, jobTaskRecd) {
    // this.jobTaskSelected=[];

    console.log('event', e.target.value, jobTaskRecd);
    let item = e.target.value;
    if (e.target.checked) {
      this.checkArray.push(item);
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
    // console.log(this.checkArray);
    this.checkArray.forEach((id) => {
      this.jobTaskData.forEach((element) => {
        if (id === element._id) {
          element.risk.forEach((riskItem) => {
            this.highRiskConstruction.forEach((highRisk, riskIndex) => {

              if (highRisk._id === riskItem) {
                this.riskArr[riskIndex] = 1;
              }
            });
          });
          element.PPE.forEach((riskItem) => {
            this.PPEselection.forEach((highRisk, index) => {
              if (highRisk._id === riskItem) {
                this.ppeArr[index] = 1;
              }
            });
          });
          element.licence.forEach((riskItem) => {
            this.licenseAndQualification.forEach((highRisk, index) => {
              if (highRisk.licenceCategoryId._id === riskItem) {
                this.licenceArr[index] = 1;
              }
            });
          });
        }
      });
    });

    while (this.riskLevelFA().length) {
      this.riskLevelFA().removeAt(0);
    }
    while (this.residlRiskLevelFA().length) {
      this.residlRiskLevelFA().removeAt(0);
    }
    this.jobTaskSelected.forEach((data, i) => {
      this.addActionRiskLevel();
      this.addActionResiRiskLevel();
      this.riskLevelFA().controls[i].get('riskLevel').setValue(data.riskLevel);
      this.residlRiskLevelFA()
        .controls[i].get('resiRiskLevel')
        .setValue(data.residualRisk);
    });

    console.log('jobTaskSelected', this.jobTaskSelected);
    console.log(this.residlRiskLevelFA().value);
  }
  getAllJobNumber() {
    this.logicalFormInfo.getAllJobNumber().subscribe((res: any) => {
      console.log(res);
      console.log('getAllJobNumber', res.data);
      this.allJobNumbers = res.data;
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
    this.jobTaskSelected.forEach((data, i) => {
      this.addActionRiskLevel();
      this.addActionResiRiskLevel();
      this.riskLevelFA().controls[i].get('riskLevel').setValue(data.riskLevel);
      this.residlRiskLevelFA()
        .controls[i].get('resiRiskLevel')
        .setValue(data.residualRisk);
    });
    console.log(this.residlRiskLevelFA().value);
  }
}
