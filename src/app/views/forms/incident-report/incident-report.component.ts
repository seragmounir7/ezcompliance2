import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.component.html',
  styleUrls: ['./incident-report.component.scss'],
})
export class IncidentReportComponent implements OnInit {
  SiteIncident: FormGroup;
  fileData: any;
  @ViewChild('signature1') signaturePad: SignaturePad;
  @ViewChild('signature2') signaturePad1: SignaturePad;

  constructor(private fb: FormBuilder) {
    this.SiteIncident = this.fb.group({
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
      abestosDetection: ['', Validators.required],
      nearMiss: ['', Validators.required],
      lossInjuiry: ['', Validators.required],
      propertyDamage: ['', Validators.required],
      firstAidTreatment: ['', Validators.required],
      medicalTreatment: ['', Validators.required],
      death: ['', Validators.required],
      name: ['', Validators.required],
      department: ['', Validators.required],
      position: ['', Validators.required],
      abrasion: ['', Validators.required],
      bruise: ['', Validators.required],
      cuts: ['', Validators.required],
      illness: ['', Validators.required],
      amputation: ['', Validators.required],
      burn: ['', Validators.required],
      hernia: ['', Validators.required],
      brokenBone: ['', Validators.required],
      other: ['', Validators.required],
      crushingInjuiry: ['', Validators.required],
      headinjury: ['', Validators.required],
      locationOfTheIncident: ['', Validators.required],
      dateOfTheIncident: ['', Validators.required],
      timeOfTheIncident: ['', Validators.required],
      whyDidtheUnsafeConditonExist: ['', Validators.required],
      disposalDustMask: ['', Validators.required],
      halfFaceRespirator: ['', Validators.required],
      longSLeeve: ['', Validators.required],
      safetyGlasses: ['', Validators.required],
      dustMask: ['', Validators.required],
      hardHat: ['', Validators.required],
      faceShield: ['', Validators.required],
      outOfService: ['', Validators.required],
      sun: ['', Validators.required],
      hearing: ['', Validators.required],
      protectiveGloves: ['', Validators.required],
      torch: ['', Validators.required],
      fullFaceRespirator: ['', Validators.required],
      highVisClothing: ['', Validators.required],
      rescueKit: ['', Validators.required],
      gattors: ['', Validators.required],
      lockOutTags: ['', Validators.required],
      safetyBoots: ['', Validators.required],
      insufficentGuard: ['', Validators.required],
      fualtyPPE: ['', Validators.required],
      defectiveSafety: ['', Validators.required],
      notWearingCorrectPPE: ['', Validators.required],
      poorLiftingtechnic: ['', Validators.required],
      defectiveEquipment: ['', Validators.required],
      incorrectTools: ['', Validators.required],
      horsePlay: ['', Validators.required],
      poorLighting: ['', Validators.required],
      lackOfTraining: ['', Validators.required],
      rootCauseOther: ['', Validators.required],
      lack: ['', Validators.required],
      unauthorisedOperation: ['', Validators.required],
      incorrectOperation: ['', Validators.required],
      stopTheActivity: ['', Validators.required],
      SOP: ['', Validators.required],
      supervisorTraining: ['', Validators.required],
      enforceCurrentPolicy: ['', Validators.required],
      wearPPE: ['', Validators.required],
      changesOther: ['', Validators.required],
      reassessTheTasks: ['', Validators.required],
      employeeTraining: ['', Validators.required],
      CompletedName: ['', Validators.required],
      CompletedPosition: ['', Validators.required],
      CompletedDepartment: ['', Validators.required],
      CompletedDate: ['', Validators.required],
      reviewedName: ['', Validators.required],
      reviewedPosition: ['', Validators.required],
      reviewedDepartment: ['', Validators.required],
      reviewedDate: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
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
    'canvasWidth': 1200,
    'canvasHeight': 100,
  };
  public signaturePadOptions1: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': 1200,
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
clear(){
  this.signaturePad.clear();
}
clear1(){
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
}
