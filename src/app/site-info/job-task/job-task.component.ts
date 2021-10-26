import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-job-task',
  templateUrl: './job-task.component.html',
  styleUrls: ['./job-task.component.scss']
})
export class JobTaskComponent implements OnInit {
  JobTaskDetail!: FormGroup;
  toppings = new FormControl();
  PPE = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  jobTask = [
    { label: 'Activities Involving chemicals', value: '' },
    { label: 'Assess Hazards', value: '' },
    { label: 'Cable installation into cables tray', value: '' },
    { label: 'Cable Support installation', value: '' },
    { label: 'Camera Installation', value: '' },
    { label: 'conduit Installation in ceiling or walls', value: '' },
    { label: 'Conduit installation in trench', value: '' },
    { label: 'conduit installation prior to concreate Pour', value: '' },
    { label: 'Control Panel Installation', value: '' },
    { label: 'Heat Shrinking cable joints', value: '' },
    { label: 'Hot Works', value: '' },
    { label: 'Installation of cables', value: '' },
    { label: 'Leaving Site', value: '' },
    { label: 'Maual Handling', value: '' },
    { label: 'Site establishment', value: '' },
    { label: 'Terminination of fibre optic cables', value: '' },
    { label: 'Use of Elevated Work Platform', value: '' },
    { label: 'Use of EWP', value: '' },
    { label: 'Use of Ladders', value: '' },
    { label: 'Use of Plant & Equipment', value: '' },
    { label: 'Use of plant Equipment', value: '' },
    { label: 'Working false ceilings', value: '' },
    { label: 'Working in communication pits less than 1.5m deep', value: '' },
    { label: 'Working near around Pedistrians', value: '' },
    { label: 'Working near Asbestos', value: '' },
    { label: 'Working near Lead containing materials', value: '' },
    { label: 'Working outdoors', value: '' },
    { label: 'Working with hand and power tools', value: '' },
  ];

  highRiskConstruction =[ 
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
  ) { 
    this.JobTaskDetail=this.fb.group({
      arrObj: this.fb.array([]),
    });
  }


  ngOnInit(): void {
    this.addAction();
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
  
}
