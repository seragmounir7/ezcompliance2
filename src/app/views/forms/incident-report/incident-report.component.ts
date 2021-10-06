import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { format } from 'devextreme/ui/widget/ui.widget';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';

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
  @ViewChild('signature1') signaturePad: SignaturePad;
  @ViewChild('signature2') signaturePad1: SignaturePad;

  constructor(private fb: FormBuilder,private dynamicFormsService: DynamicFormsService) {
    this.SiteIncident = this.fb.group({
      incidents: this.fb.array([]),
      natureOFIncidents: this.fb.array([]),
      PPE: this.fb.array([]),
      rootCauseIncident: this.fb.array([]),
      changes: this.fb.array([]),
      projectNumber: ['', Validators.required],
      projectName: ['', Validators.required],
      siteName: ['', Validators.required],
      customerName: ['', Validators.required],
      siteAddress: ['', Validators.required],
      customerContact: ['', Validators.required],
      projectManager: ['', Validators.required],
      personCompletingForm: ['', Validators.required],
      customerContactPhone: ['', Validators.required],
      customerContactEmail: ['', Validators.required],
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

  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': 480,
    'canvasHeight': 100,
  };
  public signaturePadOptions1: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': 480,
    'canvasHeight': 100,
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
    console.log("cl1");

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
    { name: 'NearMiss', value: 'nearMiss' },
    { name: 'LossInjuiry', value: 'lossInjuiry' },
    { name: 'PropertyDamage', value: 'propertyDamage' },
    { name: 'FirstAidTreatment', value: 'firstAidTreatment' },
    { name: 'MedicalTreatment', value: 'medicalTreatment' },
    { name: 'AbestosDetection', value: 'abestosDetection' },
    { name: 'Death', value: 'death' },
  ]

  onChangeIncident(e: any) {
    const checkArray: FormArray = this.SiteIncident.get('incidents') as FormArray
    let item = e.target.value;
    if (e.target.checked) {
      checkArray.push(new FormControl(item));
      console.log(item)
    }

    else {
      let i: number = 0;
      checkArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i)
        }
      })
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
    { name: 'BrokenBone', value: 'brokenBone' },
    { name: 'Other', value: 'other' },
    { name: 'CrushingInjuiry', value: 'crushingInjuiry' },
    { name: 'Headinjury', value: 'headinjury' },

  ]
  onNatureOFIncidents(e: any) {
    const NatureArray: FormArray = this.SiteIncident.get('natureOFIncidents') as FormArray
    let item = e.target.value;
    if (e.target.checked) {
      NatureArray.push(new FormControl(item));
      console.log(item)
    }

    else {
      let i: number = 0;
      NatureArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          NatureArray.removeAt(i)
        }
      })
    }


  }

  PPE: Array<any> = [
    { name: 'DisposalDustMask', value: 'disposalDustMask' },
    { name: 'HalfFaceRespirator', value: 'halfFaceRespirator' },
    { name: 'Longsleeve/Long pants', value: 'longSLeeve' },
    { name: 'SafetyGlasses', value: 'safetyGlasses' },
    { name: 'DustMask', value: 'dustMask' },
    { name: 'Hard Hat', value: 'hardHat' },
    { name: 'OutOfService', value: 'outOfService' },
    { name: 'SunScreen', value: 'sun' },
    { name: 'FaceShield', value: 'faceShield' },
    { name: 'HearingProtection', value: 'hearing' },
    { name: 'ProtectiveGloves', value: 'protectiveGloves' },
    { name: 'Torch', value: 'torch' },
    { name: 'FullFaceRespirator', value: 'fullFaceRespirator' },
    { name: 'HighVisClothing', value: 'highVisClothing' },
    { name: 'RescueKit', value: 'rescueKit' },
    { name: 'Gattors', value: 'gattors' },
    { name: 'LockOutTags', value: 'lockOutTags' },
    { name: 'safetyBoots', value: 'safetyBoots' },
  ]
  onPPE(e: any) {
    const PPEArray: FormArray = this.SiteIncident.get('PPE') as FormArray
    let item = e.target.value;
    if (e.target.checked) {
      PPEArray.push(new FormControl(item));
      console.log(item)
    }

    else {
      let i: number = 0;
      PPEArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          PPEArray.removeAt(i)
        }
      })
    }


  }
  rootCauseIncident: Array<any> = [

    { name: 'InsufficentGuard', value: 'insufficentGuard' },
    { name: 'FualtyPPE', value: 'fualtyPPE' },
    { name: 'DefectiveSafety', value: 'defectiveSafety' },
    { name: 'NotWearingCorrectPPE', value: 'notWearingCorrectPPE' },
    { name: 'PoorLiftingtechnic', value: 'poorLiftingtechnic' },
    { name: 'DefectiveEquipment', value: 'defectiveEquipment' },
    { name: 'IncorrectTools', value: 'incorrectTools' },
    { name: 'HorsePlay', value: 'horsePlay' },
    { name: 'PoorLighting', value: 'poorLighting' },
    { name: 'LackOfTraining', value: 'lackOfTraining' },
    { name: 'Other', value: 'rootCauseOther' },
    { name: 'LackOfVentilation', value: 'lack' },
    { name: 'Unauthorised operation', value: 'unauthorisedOperation' },
    // { name: 'IncorrectOperationOfPlantorEqiupment', value: 'incorrectOperation' },
    { name: 'IncorrectOperationPlantorEqiupment', value: 'incorrectOperation' },
  ]
  onRootCauseIncident(e: any) {
    const IncidentArray: FormArray = this.SiteIncident.get('rootCauseIncident') as FormArray
    let item = e.target.value;
    if (e.target.checked) {
      IncidentArray.push(new FormControl(item));
      console.log(item)
    }

    else {
      let i: number = 0;
      IncidentArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          IncidentArray.removeAt(i)
        }
      })
    }


  }

  changes: Array<any> = [
    { name: 'StopTheActivity', value: 'stopTheActivity' },
    { name: 'WriteTheNewSOPorProcess', value: 'SOP' },
    { name: 'SupervisorTraining', value: 'supervisorTraining' },
    { name: 'EnforceCurrentPolicy', value: 'enforceCurrentPolicy' },
    { name: 'WearPPE', value: 'wearPPE' },
    { name: 'ChangesOther', value: 'changesOther' },
    { name: 'ReassessTheTasks', value: 'reassessTheTasks' },
    { name: 'EmployeeTraining', value: 'employeeTraining' },
    { name: 'LackOfVentilation', value: 'lack' },
    { name: 'LackOfVentilation', value: 'lack' },
  ]
  onChanges(e: any) {
    const ChangeArray: FormArray = this.SiteIncident.get('changes') as FormArray
    let item = e.target.value;
    if (e.target.checked) {
      ChangeArray.push(new FormControl(item));
      console.log(item)
    }

    else {
      let i: number = 0;
      ChangeArray.controls.forEach((item) => {
        if (item.value == e.target.value) {
          ChangeArray.removeAt(i)
        }
      })
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