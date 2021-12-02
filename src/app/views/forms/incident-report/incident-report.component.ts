import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.component.html',
  styleUrls: ['./incident-report.component.scss'],
})
export class IncidentReportComponent implements OnInit {
  SiteIncident: FormGroup;
  fileData: any;
  fileArr = [];
  imgArr = [];
  fileObj = [];
  allJobNumbers = [];
  @ViewChild('signature1') signaturePad: SignaturePad;
  @ViewChild('signature2') signaturePad1: SignaturePad;
  projMan: any;
  projectMang: any;

  constructor(
    private fb: FormBuilder,
    private dynamicFormsService: DynamicFormsService,
    private logicalFormInfo: LogicalFormInfoService,
    private setTitle:SetTitleService
  ) {
    this.SiteIncident = this.fb.group({
      incidents: this.fb.array([]),
      natureOFIncidents: this.fb.array([]),
      PPE: this.fb.array([]),
      rootCauseIncident: this.fb.array([]),
      changes: this.fb.array([]),
      arrObj: this.fb.array([]),
      correctAction: ['', Validators.required],
      personResp: ['', Validators.required],
      complete: ['', Validators.required],
      jobNumber: ['', Validators.required],
      projectName: ['', Validators.required],
      siteName: ['', Validators.required],
      customerName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      customerContact: ['', Validators.required],
      projectManager: ['', Validators.required],
      personCompletingForm: ['', Validators.required],
      customerContactPhone: ['', Validators.required],
      customerEmail: ['', Validators.required],
      dateOfFormCompletion: ['', Validators.required],
      name: ['', Validators.required],
      department: ['', Validators.required],
      position: ['', Validators.required],
      locationOfTheIncident: ['', Validators.required],
      dateOfTheIncident: ['', Validators.required],
      timeOfTheIncident: ['', Validators.required],
      whyDidtheUnsafeConditonExist: ['', Validators.required],
      CompletedName: ['', Validators.required],
      CompletedPosition: ['', Validators.required],
      CompletedDepartment: ['', Validators.required],
      CompletedDate: ['', Validators.required],
      reviewedName: ['', Validators.required],
      reviewedPosition: ['', Validators.required],
      reviewedDepartment: ['', Validators.required],
      reviewedDate: ['', Validators.required],
      typeofIncident: ['', Validators.required],
      file: ['', Validators.required],
    });
   
  }

  ngOnInit(): void {
    this.dynamicFormsService.homebarTitle.next('Incident Report Form');
    this.setTitle.setTitle('WHS-Hazard Report Form');
    this.addAction();
    this.getAllJobNumber();
    this.getAllProjectMang();
  }

  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.SiteIncident.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
      correctAction: [],
      personResp: [],
      complete: [],
    });
  }
  
  removeIncident(i) {
    const item = <FormArray>this.SiteIncident.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
    
    }
  }
  jobNoSel() {
    this.allJobNumbers.forEach((item) => {
      if (this.SiteIncident.get('jobNumber').value === item._id) {
        console.log('Id found', item);
        this.SiteIncident.patchValue({
          jobNumber: this.SiteIncident.get('jobNumber').value,
          projectName: item.projectName,
          siteName: item.siteName,
          customerName: item.customerName,
          streetAddress: item.streetAddress,
          projectManager: item.projectManager,
          customerContact: item.customerContact,
          personCompletingForm: item.personCompletingForm,
          customerContactPhone: item.customerContactPhone,
          customerEmail: item.customerEmail,
        });
      }
    });
    this.SiteIncident.get('jobNumber').updateValueAndValidity();
  }
  getAllJobNumber() {
    this.logicalFormInfo.getAllJobNumber().subscribe((res: any) => {
      this.allJobNumbers = res.data;
    });
  }
  getAllProjectMang() {
    this.logicalFormInfo.getAllProjectMang().subscribe((res: any) => {
      this.projectMang = res.data;
      // console.log('getAllProjectMang=>', this.projectMang);
    });
  }
  selectFile(event: any) {
    this.fileData = event.target.files[0];

    if (
      this.fileData.type == 'image/jpeg' ||
      this.fileData.type == 'application/pdf'
    ) {
    } else {
      alert('file type should be image of pdf');
      return;
    }
  }

  submit() {
    console.log(this.SiteIncident.value);
  }

  public signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 480,
    canvasHeight: 100,
  };
  public signaturePadOptions1: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 480,
    canvasHeight: 100,
  };

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.set('dotSize', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }
  drawComplete1() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad1.toDataURL());
  }
  clear() {
    this.signaturePad.clear();
  }
  clear1() {
    console.log('cl1');

    this.signaturePad1.clear();
  }
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
  drawStart1() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
  incidents: Array<any> = [
    { name: 'Near Miss', value: 'nearMiss' },
    { name: 'Loss Injuiry', value: 'lossInjuiry' },
    { name: 'Property Damage', value: 'propertyDamage' },
    { name: 'First Aid Treatment', value: 'firstAidTreatment' },
    { name: 'Medical Treatment', value: 'medicalTreatment' },
    { name: 'Abestos Detection', value: 'abestosDetection' },
    { name: 'Death', value: 'death' },
  ];

  onChangeIncident(e: any) {
    const checkArray: FormArray = this.SiteIncident.get(
      'incidents'
    ) as FormArray;
    let item = e.target.value;
    if (e.target.checked) {
      checkArray.push(new FormControl(item));
      console.log(item);
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
        }
      });
    }
  }
  natureOFIncidents: Array<any> = [
    { name: 'Abrasion', value: 'abrasion' },
    { name: 'Bruise', value: 'bruise' },
    { name: 'Cuts', value: 'cuts' },
    { name: 'Illness', value: 'illness' },
    { name: 'Amputation', value: 'amputation' },
    { name: 'Burn', value: 'burn' },
    { name: 'Hernia', value: 'Hernia' },
    { name: 'Broken Bone', value: 'brokenBone' },
    { name: 'Other', value: 'other' },
    { name: 'Crushing Injuiry', value: 'crushingInjuiry' },
    { name: 'Head Injury', value: 'headinjury' },
  ];
  onNatureOFIncidents(e: any) {
    const NatureArray: FormArray = this.SiteIncident.get(
      'natureOFIncidents'
    ) as FormArray;
    let item = e.target.value;
    if (e.target.checked) {
      NatureArray.push(new FormControl(item));
      console.log(item);
    } else {
      let i: number = 0;
      NatureArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          NatureArray.removeAt(i);
        }
      });
    }
  }

  PPE: Array<any> = [
    { name: 'Disposal Dust Mask', value: 'disposalDustMask' },
    { name: 'Half Face Respirator', value: 'halfFaceRespirator' },
    { name: 'Longs leeve/Long pants', value: 'longSLeeve' },
    { name: 'Safety Glasses', value: 'safetyGlasses' },
    { name: 'Dust Mask', value: 'dustMask' },
    { name: 'Hard Hat', value: 'hardHat' },
    { name: 'Out Of Service', value: 'outOfService' },
    { name: 'Sun Screen', value: 'sun' },
    { name: 'Face Shield', value: 'faceShield' },
    { name: 'Hearing Protection', value: 'hearing' },
    { name: 'Protective Gloves', value: 'protectiveGloves' },
    { name: 'Torch', value: 'torch' },
    { name: 'Full Face Respirator', value: 'fullFaceRespirator' },
    { name: 'High Vis Clothing', value: 'highVisClothing' },
    { name: 'Rescue Kit', value: 'rescueKit' },
    { name: 'Gattors', value: 'gattors' },
    { name: 'Lock Out Tags', value: 'lockOutTags' },
    { name: 'Safety Boots', value: 'safetyBoots' },
  ];
  onPPE(e: any) {
    const PPEArray: FormArray = this.SiteIncident.get('PPE') as FormArray;
    let item = e.target.value;
    if (e.target.checked) {
      PPEArray.push(new FormControl(item));
      console.log(item);
    } else {
      let i: number = 0;
      PPEArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          PPEArray.removeAt(i);
        }
      });
    }
  }
  rootCauseIncident: Array<any> = [
    { name: 'Insufficent Guard', value: 'insufficentGuard' },
    { name: 'Fualty PPE', value: 'fualtyPPE' },
    { name: 'Defective Safety', value: 'defectiveSafety' },
    { name: 'Not Wearing Correct PPE', value: 'notWearingCorrectPPE' },
    { name: 'Poor Lifting Technic', value: 'poorLiftingtechnic' },
    { name: 'Defective Equipment', value: 'defectiveEquipment' },
    { name: 'Incorrect Tools', value: 'incorrectTools' },
    { name: 'Horse Play', value: 'horsePlay' },
    { name: 'Poor Lighting', value: 'poorLighting' },
    { name: 'Lack Of Training', value: 'lackOfTraining' },
    { name: 'Other', value: 'rootCauseOther' },
    { name: 'Lack Of Ventilation', value: 'lack' },
    { name: 'Unauthorised operation', value: 'unauthorisedOperation' },
    // { name: 'IncorrectOperationOfPlantorEqiupment', value: 'incorrectOperation' },
    { name: 'Incorrect Operation Plant or Eqiupment', value: 'incorrectOperation' },
  ];
  onRootCauseIncident(e: any) {
    const IncidentArray: FormArray = this.SiteIncident.get(
      'rootCauseIncident'
    ) as FormArray;
    let item = e.target.value;
    if (e.target.checked) {
      IncidentArray.push(new FormControl(item));
      console.log(item);
    } else {
      let i: number = 0;
      IncidentArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          IncidentArray.removeAt(i);
        }
      });
    }
  }

  changes: Array<any> = [
    { name: 'Stop The Activity', value: 'stopTheActivity' },
    { name: 'Write The New SOP or Process', value: 'SOP' },
    { name: 'Supervisor Training', value: 'supervisorTraining' },
    { name: 'Enforce Current Policy', value: 'enforceCurrentPolicy' },
    { name: 'Wear PPE', value: 'wearPPE' },
    { name: 'Changes Other', value: 'changesOther' },
    { name: 'Reassess The Tasks', value: 'reassessTheTasks' },
    { name: 'Employee Training', value: 'employeeTraining' },
    { name: 'Lack Of Ventilation', value: 'lack' },
    { name: 'Lack Of Ventilation', value: 'lack' },
  ];
  onChanges(e: any) {
    const ChangeArray: FormArray = this.SiteIncident.get(
      'changes'
    ) as FormArray;
    let item = e.target.value;
    if (e.target.checked) {
      ChangeArray.push(new FormControl(item));
      console.log(item);
    } else {
      let i: number = 0;
      ChangeArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          ChangeArray.removeAt(i);
        }
      });
    }
  }
  // upload(e) {
  //   const fileListAsArray = Array.from(e);
  //   fileListAsArray.forEach((item, i) => {
  //     const file = (e as HTMLInputElement);
  //     const url = URL.createObjectURL(file[i]);
  //     this.imgArr.push(url);
  //     this.fileArr.push({ item, url: url });
  //   })

  //   this.fileArr.forEach((item) => {
  //     this.fileObj.push(item.item)
  //   })

  //   // Set files form control
  //   this.SiteIncident.patchValue({
  //     avatar: this.fileObj
  //   })

  //   this.SiteIncident.get('avatar').updateValueAndValidity()
  // }
}
