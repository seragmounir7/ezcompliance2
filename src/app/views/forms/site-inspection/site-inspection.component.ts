import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-site-inspection',
  templateUrl: './site-inspection.component.html',
  styleUrls: ['./site-inspection.component.scss'],
})
export class SiteInspectionComponent implements OnInit {
  sidePreview!: FormGroup;
  SiteControl!: FormArray;
  siteshow = true;
  siteAction = false;
  constructor(private fb: FormBuilder) {
    this.sidePreview = this.fb.group({
      Hazard: ['', Validators.required],
      documentation: ['', Validators.required],
      workeronsite: ['', Validators.required],
      SWMS: ['', Validators.required],
      tooboxtalk: ['', Validators.required],
      WHSManual: ['', Validators.required],
      IncidentReport: ['', Validators.required],
      HazardReport: ['', Validators.required],
      EmergrncyEvacuation: ['', Validators.required],
      TrainingRecords: ['', Validators.required],
      WHSPolicy: ['', Validators.required],
      ReturnToWork: ['', Validators.required],
      DisplayHazardReport: ['', Validators.required],
      DisplayEmergrncyEvacuation: ['', Validators.required],
      NoSmoking: ['', Validators.required],
      PPESignage: ['', Validators.required],
      ReportHazardsigns: ['', Validators.required],
      ManualHandlingSigns: ['', Validators.required],
      NoticeBoard: ['', Validators.required],
      AccessEgrassHazards: ['', Validators.required],
      Walkways: ['', Validators.required],
      Walkwaysfree: ['', Validators.required],
      StairsConditionGood: ['', Validators.required],
      HoardingsFenceGates: ['', Validators.required],
      LosseMatrialSecure: ['', Validators.required],
      BinsSkipsLocated: ['', Validators.required],
      BinsSkipsOverflowing: ['', Validators.required],
      ElectricalMainboardLock: ['', Validators.required],
      PowerleadsTested: ['', Validators.required],
      EquipmentGiards: ['', Validators.required],
      EquipmentCondition: ['', Validators.required],
      LeadsSafety: ['', Validators.required],
      SDSavailable: ['', Validators.required],
      ChemicalsStoredSDS: ['', Validators.required],
      SDSRegisterAvailables: ['', Validators.required],
      CorrectPPHand: ['', Validators.required],
      FirstAidavailable: ['', Validators.required],
      FirstKitContentsList: ['', Validators.required],
      KitAccessableWorkers: ['', Validators.required],
      AwarefirstKitLocation: ['', Validators.required],
      Extinguishers: ['', Validators.required],
      ExtinguishersClearlyMaked: ['', Validators.required],
      ExtinguishersSevicedUpdate: ['', Validators.required],
      ExitSingsCondition: ['', Validators.required],
      ExitDoorsBlocked: ['', Validators.required],
      ExitDoorsOpened: ['', Validators.required],
      FireAlarmTested: ['', Validators.required],
      EvacuationPlans: ['', Validators.required],
      EmergencyDrillConduct: ['', Validators.required],
      RiskAssessmentSWMS: ['', Validators.required],
      PlantValidService: ['', Validators.required],
      OpertionProceduresSOPs: ['', Validators.required],
      PPEAvailable: ['', Validators.required],
      EmergencyPlan: ['', Validators.required],
      PlantGoodCondition: ['', Validators.required],
      AppropriateGuards: ['', Validators.required],
      siteAction: this.fb.array([]),
    });
  }

  ngOnInit(): void {}
  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.sidePreview.get('siteAction') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
      item: ['', Validators.required],
      action: ['', Validators.required],
      PersonResponsible: ['', Validators.required],
      complete: ['', Validators.required],
    });
  }
  showsite() {
    this.siteshow = true;
    this.siteAction = false;
  }
  showAction() {
    this.siteAction = true;
    this.siteshow = false;
  }
  removeAction() {
    let index = this.add().length;
    this.add().removeAt(index - 1);
  }
}
