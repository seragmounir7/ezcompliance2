import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

@Component({
  selector: 'app-add-state-relation',
  templateUrl: './add-state-relation.component.html',
  styleUrls: ['./add-state-relation.component.scss']
})
export class AddStateRelationComponent implements OnInit {
  SetState!: FormGroup;
  states = null;
  // PPESelectionData: [];
  // licenseAndQual: [];
  // allHazards: [];
  // allContrlActReq: [];
  // licenceCatAll: [];


  JurisdictionData: [];
  safety: [];
  codeData: [];
  regulatorData: [];
  isLinear = false;


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private logicalFormInfo: LogicalFormInfoService,) { }

  ngOnInit(): void {

    this.route
      .queryParams
      .subscribe((id) => {
        console.log(id);
        this.logicalFormInfo.getstatesById(id.id).subscribe((res: any) => {
          console.log(res);
          this.states = res.data;
          console.log("state=>",res.data);
          
        })
      });
    this.SetState = this.fb.group({
      jurisdiction: [''],
      safe: [''],
      COP: [''],
      regulator: [''],
      // contrActReq: [''],
      // riskLevel: [''],
      // residualRiskL: [''],
      // personResp: [''],
      // chemicalTask:['']
    });
    // this.getAllHighRisk();
    // this.getAllLicence();
    // this.getAllCategories();
    // this.getAllPPE();
    // this.getAllHazard();

    this.getAllJurisdiction();
    this.getAllSafe();
    this.getAllRegulator();
    this.getAllCOP();
  }

  getAllRegulator() {
    this.logicalFormInfo.getAllRegulator().subscribe((res: any) => {
      console.log("this.regulatorData", res.data)
      this.regulatorData = res.data;

    })
  }
  getAllCOP() {
    this.logicalFormInfo.getAllCode().subscribe((res: any) => {
      console.log("this.codeData", res.data)
      this.codeData = res.data;

    })
  }
  getAllSafe() {
    this.logicalFormInfo.getAllSafety().subscribe((res: any) => {
      console.log("this.safety", res)
      this.safety = res.data
    })
  }
  getAllJurisdiction() {
    this.logicalFormInfo.getAllJurisdiction().subscribe((res: any) => {
      console.log('JurisdictionData=>', res);
      this.JurisdictionData = res.data;
    });
  }
 setRelation(){

 }

}
