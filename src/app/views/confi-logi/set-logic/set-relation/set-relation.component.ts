import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-set-relation',
  templateUrl: './set-relation.component.html',
  styleUrls: ['./set-relation.component.scss']
})
export class SetRelationComponent implements OnInit {
  JobTaskDetail!: FormGroup;
  jobTask=null;
  highRiskConstructionData: [];
  PPESelectionData: [];
  licenseAndQual: [];
  allHazards: [];
  allContrlActReq: [];
  licenceCatAll: [];
  resiRiskLevelData: [];
  riskLevelData: [];
  staff: [];
  isLinear = false;
 

  constructor(private route: ActivatedRoute,    private fb: FormBuilder,  private logicalFormInfo: LogicalFormInfoService,) { }

  ngOnInit(): void {
 
    this.route
    .queryParams
    .subscribe((id)=>{
      console.log(id);
      this.logicalFormInfo.getJobtaskById(id.id).subscribe((res:any)=>{
        console.log(res);
        this.jobTask=res.data;
      })
    });
    this.JobTaskDetail = this.fb.group({
      highRiskConstr: [''],
      PPE: [''],
      LicenceCat: [''],
      identifyHazrds: [''],
      contrActReq: [''],
      riskLevel: [''],
      residualRiskL: [''],
      personResp: [''],
      chemicalTask:['']
    });
    this.getAllHighRisk();
    this.getAllLicence();
    this.getAllCategories();
    this.getAllPPE();
    this.getAllHazard();
    this.getAllContrActReq();
    this.getAllStaff();
    this.getAllResidualRiskLevel();
    this.getAllRiskLevel();
  }

  getAllResidualRiskLevel(){
    this.logicalFormInfo.getAllResidual().subscribe((res:any)=> {
      console.log("this.resiRiskLevelData",res.data)
      this.resiRiskLevelData = res.data;
    
   })
  }
  getAllRiskLevel(){
    this.logicalFormInfo.getAllRiskLevel().subscribe((res:any)=> {
      console.log("this.riskLevelData",res.data)
      this.riskLevelData = res.data;
   
   })
  }
  getAllStaff(){
    this.logicalFormInfo.getAllStaff().subscribe((res:any)=> {
      console.log(res)
 this.staff=res.data
   })
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
}
