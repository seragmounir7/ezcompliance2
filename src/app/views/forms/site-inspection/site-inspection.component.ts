import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

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
  itemvalue: any;
  item_values: any = ['In Progress', 'Completed', 'Closed'];
  jobTaskData: any;
  allJobNumbers = [];
  projectMang = [];
  constructor(
    private fb: FormBuilder,
    private dynamicFormsService: DynamicFormsService,
    private setTitle: SetTitleService,
    private logicalFormInfo: LogicalFormInfoService
  ) {
    this.sidePreview = this.fb.group({

      jobNumber: [''],
      siteName: [''],
      customerName: [''],
      streetNo: [''],
      streetAddr: [''],
      subUrb: [''],
      custConct: [''],
      custConctPh: [''],
      custEmail: [''],
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

  ngOnInit(): void {
    this.dynamicFormsService.homebarTitle.next('Site Inspection Form');
    this.setTitle.setTitle('WHS-Site Inspection Form');
    this.getAllJobNumber();
    this.getAllProjectMang();
  }
  jobNoSel() {
    this.allJobNumbers.forEach((item) => {
      if (this.sidePreview.get('jobNumber').value === item._id) {
        console.log('Id found', item);
        this.sidePreview.patchValue({
          siteName: item.siteName,
          customerName: item.customerName,
          streetAddr: item.streetAddress,
          custConct: item.customerContact,
          custConctPh: item.customerContactPhone,
          custEmail: item.customerEmail,
          jobNumber: this.sidePreview.get('jobNumber').value,
        });
      }
    });
    this.sidePreview.get('jobNumber').updateValueAndValidity();

  }
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
    console.log(this.sidePreview);
  }
  showAction() {
    this.siteAction = true;
    this.siteshow = false;
    this.add().clear();
    let key = Object.keys(this.sidePreview.value);
    for (let i = 0; i < key.length - 2; i++) {
      let tempValue = this.sidePreview.controls[key[i]].value;
      if (tempValue != '') {
        if (tempValue != 'yes') {
          let index = this.add().length;
          this.addAction();
          this.add().controls[index].get('item').setValue(tempValue);
        }
      }
    }
  }
  removeAction() {
    let index = this.add().length;
    this.add().removeAt(index - 1);
  }
  addAcionTab(event) {
    let b = Object.keys(this.sidePreview.value);
    //   let index =this.add().length
    //   this.addAction()
    // this.add().controls[index].get("item").setValue(event.target.value)

    //  console.log(this.sidePreview.controls[b[0]].value);
  }

  getAllJobTask() {
    this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
      this.jobTaskData = res.data;
      console.log('jobTaskDetails=>', this.jobTaskData);
    });
  }
  getAllProjectMang() {
    this.logicalFormInfo.getAllProjectMang().subscribe((res: any) => {
      this.projectMang = res.data;
     
    });
  }
  getAllJobNumber() {
    this.logicalFormInfo.getAllJobNumber().subscribe((res: any) => {
     
      this.allJobNumbers = res.data;
    });
  }
  tabClick(eve)
  {
    console.log("tab changed",eve);
    if(eve.index==1)
    {
      this.sidePreview.updateValueAndValidity();
      this.showAction();
    }
  }
}
