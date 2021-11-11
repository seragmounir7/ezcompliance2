import { element } from 'protractor';
import { MatSelect } from '@angular/material/select';
import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
@Component({
  selector: 'app-set-logic',
  templateUrl: './set-logic.component.html',
  styleUrls: ['./set-logic.component.scss'],
})
export class SetLogicComponent implements AfterViewInit, OnInit {
  JobTaskDetail!: FormGroup;
  allHazards=[];
  allContrlActReq=[];
  jobTaskData: any = [];
  highRiskData: any = [];
  PPESelectionData: any = [];
  codeOfPract: any = [];
  licenseAndQual: any = [];
  licenseAndQualificationData: any = [];
  licenceCatAll: any = [];
  highRiskConstructionData: any = [];
  task: any = [];
  riskLevel='';
  residuleRiskL='';
  PPEselection = [
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

  licenseAndQualification = [
    { label: 'Open Cable Licence', value: '' },
    { label: 'White Card', value: '' },
    { label: 'EWP Licence', value: '' },
    { label: 'Working At Heights', value: '' },
    { label: 'Security Licence', value: '' },
    { label: 'Asbestos Awarness', value: '' },
    { label: 'Working In Confined Space', value: '' },
  ];

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
  // @ViewChild('risk') risk: any;
  @ViewChildren('risk') Risk: QueryList<any>;

  constructor(
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    private setTitle: SetTitleService
  ) {}

  ngOnInit(): void {
    this.setTitle.setTitle('WHS-Set Relation');

    this.JobTaskDetail = this.fb.group({
      highRiskConstr: this.fb.array([]),
      PPE: this.fb.array([]),
      LicenceCat: this.fb.array([]),
      identifyHazrds: this.fb.array([]),
      contrActReq: this.fb.array([]),
      riskLevel: this.fb.array([]),
      residualRisk: this.fb.array([]),
    //  codeOfPract: this.fb.array([]),
    });

    this.getJobTask();
    this.getAllHighRisk();
    this.getAllLicence();
    this.getAllCategories();
    this.getAllPPE();
    this.getAllHazard();
    this.getAllContrActReq();
    //  this.getCodOfCond();
  }

  ngAfterViewInit() {}

  addActionHighRisk() {
    {
      this.highRiskFA().push(this.highRiskFG());
    }
  }
  addActionPPE() {
    {
      this.PPE_FA().push(this.PPE_FG());
    }
  }
  addActionLicnCat() {
    {
      this.licenceCatFA().push(this.licenceCatFG());
    }
  }
  addActionContrActReq() {
    {
      this.contrActReqFA().push(this.contrActReqFG());
    }
  }
  addActionIdentifyHazrds() {
    {
      this.identifyHazrdsFA().push(this.identifyHazrdsFG());
    }
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
  addActionCOP() {
    {
      this.addCOP().push(this.newActionCOP());
    }
  }
  highRiskFA(): FormArray {
    return this.JobTaskDetail.get('highRiskConstr') as FormArray;
  }
  PPE_FA(): FormArray {
    return this.JobTaskDetail.get('PPE') as FormArray;
  }
  licenceCatFA(): FormArray {
    return this.JobTaskDetail.get('LicenceCat') as FormArray;
  }
  identifyHazrdsFA(): FormArray {
    return this.JobTaskDetail.get('identifyHazrds') as FormArray;
  }
  contrActReqFA(): FormArray {
    return this.JobTaskDetail.get('contrActReq') as FormArray;
  }
  addCOP(): FormArray {
    return this.JobTaskDetail.get('codeOfPract') as FormArray;
  }
  riskLevelFA(): FormArray {
    return this.JobTaskDetail.get('riskLevel') as FormArray;
  }
  residlRiskLevelFA(): FormArray {
    return this.JobTaskDetail.get('residualRisk') as FormArray;
  }
  highRiskFG(): FormGroup {
    return this.fb.group({
      highRiskArr: [''],
    });
  }
  PPE_FG(): FormGroup {
    return this.fb.group({
      ppeArr: [''],
    });
  }
  licenceCatFG(): FormGroup {
    return this.fb.group({
      licenceArr: [''],
    });
  }
  identifyHazrdsFG(): FormGroup {
    return this.fb.group({
      hazardsArr: [''],
    });
  }
  contrActReqFG(): FormGroup {
    return this.fb.group({
      contrActReqArr: [''],
    });
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
  newActionCOP(): FormGroup {
    //code of practice
    return this.fb.group({
      copArr: [''],
    });
  }

  onFormSubmit() {
    console.log(this.JobTaskDetail);
  }
  getJobTask() {
    this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
      console.log('jobTaskDetails=>', res);
      this.jobTaskData = res.data;
      this.jobTaskData.forEach((item,i) => {
        this.addActionHighRisk();
        this.addActionPPE();
        this.addActionLicnCat();
        this.addActionContrActReq();
        this.addActionIdentifyHazrds(); 
        this.addActionRiskLevel(); 
        this.addActionResiRiskLevel();   
        this.highRiskFA().controls[i].get('highRiskArr').setValue(item.risk);
        this.PPE_FA().controls[i].get('ppeArr').setValue(item.PPE);
        this.licenceCatFA().controls[i].get('licenceArr').setValue(item.licence);
        // console.log("item.identifyHazard",item.identifyHazard+"i",i);
        // console.log("item.controlActionRequired",item.controlActionRequired+"i",i);
        
        
        this.identifyHazrdsFA().controls[i].get('hazardsArr').setValue(item.identifyHazard);
        this.contrActReqFA().controls[i].get('contrActReqArr').setValue(item.controlActionRequired);
        this.riskLevelFA().controls[i].get('riskLevel').setValue(item.riskLevel);
        this.residlRiskLevelFA().controls[i].get('resiRiskLevel').setValue(item.residualRisk);

        });
console.log("this.identifyHazrdsFA()", this.identifyHazrdsFA().value);

    });
  }
  getAllHighRisk() {
    this.logicalFormInfo.getAllRisk().subscribe((res: any) => {
      console.log('Risk=>', res);
      this.highRiskConstructionData = res.data;
    });
  }
  getAllPPE() {
    this.logicalFormInfo.getAllPPE().subscribe((res: any) => {
      console.log('PPE=>', res);
      this.PPESelectionData = res.data;
    });
  }
  // getCodOfCond() {
  //   this.mode = 'codeOfPractice';
  //   this.logicalFormInfo.getFormDataById(this.mode).subscribe((data) => {
  //     console.log('codeOfPractice=>', data);
  //     this.codeOfPract = data.data[0];
  //   });
  // }
  getAllLicence() {
    this.logicalFormInfo.getAllLicence().subscribe((res) => {
      console.log('Licence=>', res);
      this.licenseAndQual = res.data;
    });
  }
  getAllHazard() {
    this.logicalFormInfo.getAllHazards().subscribe((res:any) => {
      console.log('getAllHazards=>', res);
      this.allHazards = res.data;
    });
  }
  getAllContrActReq()  {
    this.logicalFormInfo.getAllContrlActReq().subscribe((res:any) => {
      console.log('getAllHazards=>', res);
      this.allContrlActReq = res.data;
    });
  }
  getAllCategories() {
    this.logicalFormInfo.getAllLicenceCat().subscribe((res) => {
      console.log('getAllLicenceCat=>', res);
      this.licenceCatAll = res.data;
    });
  }

  // setRelation(riskIds, ppeIDs, codOfPractIds, title, id) {
  setRelation(title, id,i) {
    // console.log('risk', riskIds);

    // console.log('ppe', ppeIDs);
    /// console.log('licence', licenceIds);
    // console.log('codOfPract', codOfPractIds);
    console.log('index', title);
    console.log('id', id);
    console.log('id', i);
let risk = [],
ppe=[],
licence=[],
identifyHazard=[],
controlActionRequired=[];
  if(this.highRiskFA().controls[i].get('highRiskArr').value){
    this.highRiskFA().controls[i].get('highRiskArr').value.forEach(element => {
      risk.push(element._id)
    });
  }
  if(this.PPE_FA().controls[i].get('ppeArr').value){
    this.PPE_FA().controls[i].get('ppeArr').value.forEach(element => {
      ppe.push(element._id)
    });
  }
  if(this.licenceCatFA().controls[i].get('licenceArr').value){
    this.licenceCatFA().controls[i].get('licenceArr').value.forEach(element => {
      licence.push(element._id)
    });
  }
  if(this.identifyHazrdsFA().controls[i].get('hazardsArr').value){
    this.identifyHazrdsFA().controls[i].get('hazardsArr').value.forEach(element => {
      identifyHazard.push(element._id)
    });
  }
  if(this.contrActReqFA().controls[i].get('contrActReqArr').value){
    this.contrActReqFA().controls[i].get('contrActReqArr').value.forEach(element => {
      controlActionRequired.push(element._id)
    });
  }

    let data = {
      title: title,
      risk: this.highRiskFA().controls[i].get('highRiskArr').value,
      PPE: this.PPE_FA().controls[i].get('ppeArr').value,
      licence: this.licenceCatFA().controls[i].get('licenceArr').value,
      identifyHazard:this.identifyHazrdsFA().controls[i].get('hazardsArr').value,
      controlActionRequired: this.contrActReqFA().controls[i].get('contrActReqArr').value,
      riskLevel:this.riskLevelFA().controls[i].get('riskLevel').value ,
      residualRisk: this.residlRiskLevelFA().controls[i].get('resiRiskLevel').value,
      set:true      
    };
    console.log(data);

    this.logicalFormInfo.updateJobTask(data,id).subscribe((res) => {
      console.log('resJob Task=>', res);
      this.getJobTask();

      Swal.fire({
        title: 'Relation set successfully',
        showConfirmButton: false,
        timer: 1200,
      });
    });
  }
  categorySel(catArr) {
    this.licenseAndQualificationData = [];

    console.log(catArr);
    catArr.forEach((element) => {
      this.licenseAndQual.forEach((item) => {
        if (element === item.licenceCategoryId._id) {
          this.licenseAndQualificationData.push(item);
        }
      });
    });
    console.log(
      ' this.licenseAndQualificationData',
      this.licenseAndQualificationData
    );
  }
}
