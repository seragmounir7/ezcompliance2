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
  styleUrls: ['./set-logic.component.scss']
})
export class SetLogicComponent implements OnInit {

  JobTaskDetail!: FormGroup;
  highRiskConstr = new FormControl();
  PPE = new FormControl();
  Licence = new FormControl();
  codeOfPract = new FormControl();
  mode:any;
  jobTaskData:any=[];
  highRiskData:any=[];
  PPESelectionData: any=[];
  licenseAndQualificationData: any=[];
  highRiskConstructionData: any=[];
  task:any=[];
  
  
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
    private logicalFormInfo:LogicalFormInfoService
  ) { 
    this.JobTaskDetail=this.fb.group({
      arrObj: this.fb.array([]),
    });
  }


  ngOnInit(): void {
    //this.addAction();
    this.addAction();
   this.getJobTaskById();
   this.getHighRiskById()
   this.getLicenceById();
   this.getPPEById();
  }
  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.JobTaskDetail.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
     
      title: ['', Validators.required],
    });
  }
  
  removeSafetyModule(i) {
    const item = <FormArray>this.JobTaskDetail.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
    
    }
  }
  onFormSubmit() {
    console.log(this.JobTaskDetail);
    
  }

  getJobTaskById(){
    this.mode = 'JOBTask';
    this.logicalFormInfo.getFormDataById(this.mode).subscribe((data) => {
      console.log('jobTaskDetails=>', data);
        this.jobTaskData = data.data[0];
      this.task = data.data.subComponents;
      console.log('jobTaskData', this.jobTaskData);
    });
  }
  getHighRiskById(){
    this.mode = 'Risk';
    this.logicalFormInfo.getFormDataById(this.mode).subscribe((data) => {
      console.log('Risk=>', data);
     this.highRiskConstructionData = data.data[0];
    console.log('risk', this.highRiskConstructionData);
    });
  }
  getPPEById(){
    this.mode = 'PPE';
    this.logicalFormInfo.getFormDataById(this.mode).subscribe((data) => {
      console.log('PPE=>', data);
       this.PPESelectionData = data.data[0];
      console.log('PPE', this.PPESelectionData);
    });
  }
  getLicenceById(){
    this.mode = 'Licence';
    this.logicalFormInfo.getFormDataById(this.mode).subscribe((data) => {
      console.log('Licence=>', data);
       this.licenseAndQualificationData = data.data[0];
     console.log('Licence', this.licenseAndQualificationData);
    });
  }



}
