import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
@Component({
  selector: 'app-set-logic',
  templateUrl: './set-logic.component.html',
  styleUrls: ['./set-logic.component.scss'],
})
export class SetLogicComponent implements OnInit {
  JobTaskDetail!: FormGroup;
  highRiskConstr = new FormControl();
  PPE = new FormControl();
  Licence = new FormControl();
  codeOfPract = new FormControl();
  mode: any;
  jobTaskData: any = [];
  highRiskData: any = [];
  PPESelectionData: any = [];
  codeOfCond: any = [];
  licenseAndQual: any = [];
  licenseAndQualificationData: any = [];
  licenceCatAll: any = [];
  highRiskConstructionData: any = [];
  task: any = [];

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

  constructor(
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService
  ) {}

  ngOnInit(): void {
    this.JobTaskDetail = this.fb.group({
      highRiskConstr: this.fb.array([]),
      // PPE: this.fb.array([]),
      // Licence: this.fb.array([]),
      // codeOfPract: this.fb.array([]),
    });

    //this.addAction();
    // this.addAction();
    this.getJobTask();
    this.getHighRiskById();
    this.getAllLicence();
    this.getAllCategories();
    this.getPPEById();
    this.getCodOfCond();
  }
  addActionHighRisk() {
    {
      this.addHighRisk().push(this.newActionHighRisk());
    }
  }
  addHighRisk(): FormArray {
    return this.JobTaskDetail.get('highRiskConstr') as FormArray;
  }
  newActionHighRisk(): FormGroup {
    return this.fb.group({
      highRiskArr: [],
    });
  }

  onFormSubmit() {
    console.log(this.JobTaskDetail);
  }

  getJobTask() {
    this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
      console.log('jobTaskDetails=>', res);
      this.jobTaskData = res.data;
      console.log('jobTaskData', this.jobTaskData);
      // this.jobTaskData.forEach(element => {
      //   this.addActionHighRisk();
      // });
    });
  }
  getHighRiskById() {
    this.mode = 'Risk';
    this.logicalFormInfo.getFormDataById(this.mode).subscribe((data) => {
      console.log('Risk=>', data);
      this.highRiskConstructionData = data.data[0];
      console.log('risk', this.highRiskConstructionData);
    });
  }
  getPPEById() {
    this.mode = 'PPE';
    this.logicalFormInfo.getFormDataById(this.mode).subscribe((data) => {
      console.log('PPE=>', data);
      this.PPESelectionData = data.data[0];
      console.log('PPE', this.PPESelectionData);
    });
  }
  getCodOfCond() {
    this.mode = 'codeOfPractice';
    this.logicalFormInfo.getFormDataById(this.mode).subscribe((data) => {
      console.log('codeOfPractice=>', data);
      this.codeOfCond = data.data[0];
      console.log('codeOfPractice', this.codeOfCond);
    });
  }
  getAllLicence() {
    this.logicalFormInfo.getAllLicence().subscribe((res) => {
      console.log('Licence=>', res);
      this.licenseAndQual = res.data;
      console.log('Licence', this.licenseAndQual);
    });
  }
  getAllCategories() {
    this.logicalFormInfo.getAllLicenceCat().subscribe((res) => {
      console.log('getAllLicenceCat=>', res);
      this.licenceCatAll = res.data;
      console.log('Licence', this.licenceCatAll);
    });
  }

  setRelation(risk, ppe, licence, codOfCond, index, id) {
    console.log(risk._value);
    console.log(ppe._value);
    console.log(licence._value);
    console.log(codOfCond._value);
    console.log(index);
  }
  categorySel(catArr){
    this.licenseAndQualificationData=[];

    console.log(catArr);
    catArr.forEach((element) => {
      this.licenseAndQual.forEach(item => {
        if(element === item.licenceCategoryId._id){
          this.licenseAndQualificationData.push(item)
        }
      });
    });
  }
}
