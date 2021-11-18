import { AddItemComponent } from './add-item/add-item.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-set-relation',
  templateUrl: './set-relation.component.html',
  styleUrls: ['./set-relation.component.scss'],
})
export class SetRelationComponent implements OnInit {
  JobTaskDetail!: FormGroup;
  jobTask = null;
  highRiskConstructionData = [];
  PPESelectionData = [];
  licenseAndQual = [];
  allHazards = [];
  allContrlActReq = [];
  licenceByTradecat = [];
  resiRiskLevelData = [];
  riskLevelData = [];
  staff = [];
  allCodeOfPract = [];
  isLinear = false;
  jobTaskId = null;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService
  ) {}

  ngOnInit(): void {
    this.JobTaskDetail = this.fb.group({
      highRiskConstr: [''],
      PPE: [''],
      codeOfPract: [''],
      LicenceCat: [''],
      identifyHazrds: [''],
      contrActReq: [''],
      riskLevel: [''],
      residualRiskL: [''],
      personResp: [''],
      chemical: [],
    });

    this.route.queryParams.subscribe((id) => {
      console.log(id);
      this.jobTaskId = id.id;
      this.logicalFormInfo.getJobtaskById(id.id).subscribe((res: any) => {
        this.jobTask = res.data;
        console.log(
          'this.jobTask ',
          this.jobTask 
        );
        this.getLicenceByTradeCat(this.jobTask.tradeCategoryId);

        if (this.jobTask.set == true) {
          this.JobTaskDetail.patchValue({
            highRiskConstr: this.jobTask.risk,
            PPE: this.jobTask.PPE,
            codeOfPract: this.jobTask.PPE,
           LicenceCat: this.jobTask.licence,
            identifyHazrds: this.jobTask.identifyHazard,
            contrActReq: this.jobTask.controlActionRequired,
            riskLevel: this.jobTask.riskLevel,
            residualRiskL: this.jobTask.residualRisk,
            personResp: this.jobTask.staffId,
            chemical: this.jobTask.chemical,
          });
        }
        if (this.jobTask?.chemical === 'YES')
          this.JobTaskDetail.get('chemical').setValue('YES');
        else this.JobTaskDetail.get('chemical').setValue('NO');
      });
    });

    this.getAllHighRisk();
    this.getAllPPE();
    this.getAllHazard();
    this.getAllContrActReq();
    this.getAllStaff();
    this.getAllResidualRiskLevel();
    this.getAllRiskLevel();
    this.getAllCodeOfPractice();
  }

  getAllResidualRiskLevel() {
    this.logicalFormInfo.getAllResidual().subscribe((res: any) => {
      console.log('this.resiRiskLevelData', res.data);
      this.resiRiskLevelData = res.data;
    });
  }
  getAllRiskLevel() {
    this.logicalFormInfo.getAllRiskLevel().subscribe((res: any) => {
      console.log('this.riskLevelData', res.data);
      this.riskLevelData = res.data;
    });
  }
  getAllStaff() {
    this.logicalFormInfo.getAllStaff().subscribe((res: any) => {
      console.log(res);
      this.staff = res.data;
    });
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
  getAllCodeOfPractice() {
   
    this.logicalFormInfo.getAllCOP().subscribe((res:any) => {
      console.log('codeOfPractice=>', res);
   this.allCodeOfPract=res.data;
    });
 
  }

  getAllHazard() {
    this.logicalFormInfo.getAllHazards().subscribe((res: any) => {
      console.log('getAllHazards=>', res);
      this.allHazards = res.data;
    });
  }
  getAllContrActReq() {
    this.logicalFormInfo.getAllContrlActReq().subscribe((res: any) => {
      console.log('getAllHazards=>', res);
      this.allContrlActReq = res.data;
    });
  }
  getLicenceByTradeCat(id) {
    console.log('getLicenceByTradeCat', id);

    this.logicalFormInfo.getLicenceByTradeCat(id).subscribe((res) => {
      console.log('getAllLicenceCat=>', res);
      this.licenceByTradecat = res.data.licenceData;
    });
  }
  setRelation() {
    console.log(this.JobTaskDetail.value);
    let allContrlActReqTitle=[];
    let temp1=this.JobTaskDetail.get('contrActReq').value;
    this.allContrlActReq.forEach(element1 => {
      temp1.forEach(element2 => {
        if(element1._id===element2){
          allContrlActReqTitle.push(element1.title)
        }
      });
    });
    let allHazardsTitle=[];
    let temp2=this.JobTaskDetail.get('identifyHazrds').value;
    this.allHazards.forEach(element1 => {
      temp2.forEach(element2 => {
        if(element1._id===element2){
          allHazardsTitle.push(element1.title)
        }
      });
    });
    let allCOPTitle=[];
    let temp3=this.JobTaskDetail.get('codeOfPract').value;
    this.allCodeOfPract.forEach(element1 => {
      temp3.forEach(element2 => {
        if(element1._id===element2){
          allCOPTitle.push(element1.title)
        }
      });
    });
    let data = {
      title: this.jobTask.title,
      risk: this.JobTaskDetail.get('highRiskConstr').value,
      PPE: this.JobTaskDetail.get('PPE').value,
      tradeCategoryId:this.jobTask.tradeCategoryId,
      licence: this.JobTaskDetail.get('LicenceCat').value,
      identifyHazard: this.JobTaskDetail.get('identifyHazrds').value,
      controlActionRequired: this.JobTaskDetail.get('contrActReq').value,
      riskLevel: this.JobTaskDetail.get('riskLevel').value,
      residualRisk: this.JobTaskDetail.get('residualRiskL').value,
      staffId: this.JobTaskDetail.get('personResp').value,
      chemical: this.JobTaskDetail.get('chemical').value,
      set: true,
    };

    console.log('send data', data);

    this.logicalFormInfo
      .updateJobTask(data, this.jobTaskId)
      .subscribe((res) => {
        console.log('resJob Task=>', res);

        Swal.fire({
          title: 'Relation set successfully',
          showConfirmButton: false,
          timer: 1200,
        });
        this.router.navigate(['/admin/confiLogi/setLogic']);
      });
  }
  addItem(type) {
    let temp = {
      type: type,
      tradeCategoryId: this.jobTask.tradeCategoryId,
    };
    if (type === 'licence') {
      temp = {
        type: type,
        tradeCategoryId: this.jobTask.tradeCategoryId,
      };
    } else {
      temp = {
        type: type,
        tradeCategoryId: '',
      };
    }

    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '550px',
      // height:'50%',
      data: temp,
    });

    dialogRef.afterClosed().subscribe((result) => {
      switch (result) {
        case 'highRisk': {
          let data = this.JobTaskDetail.get('highRiskConstr').value;
          this.getAllHighRisk();
          this.JobTaskDetail.get('highRiskConstr').patchValue(data);
          break;
        }
        case 'ppe': {
          let data = this.JobTaskDetail.get('PPE').value;
          this.getAllPPE();
          this.JobTaskDetail.get('PPE').patchValue(data);
          break;
        }
        case 'codeOfPract': {
          let data = this.JobTaskDetail.get('codeOfPract').value;
          this.getAllCodeOfPractice();
          this.JobTaskDetail.get('codeOfPract').patchValue(data);
          break;
        }
        case 'licence': {
          let data = this.JobTaskDetail.get('LicenceCat').value;
          this.getLicenceByTradeCat(this.jobTask.tradeCategoryId);
          this.JobTaskDetail.get('LicenceCat').patchValue(data);
          break;
        }
        case 'identifyHazards': {
          let data = this.JobTaskDetail.get('identifyHazrds').value;
          this.getAllHazard();
          this.JobTaskDetail.get('identifyHazrds').patchValue(data);
          break;
        }
        case 'riskLevel': {
          let data = this.JobTaskDetail.get('riskLevel').value;
          this.getAllRiskLevel();
          this.JobTaskDetail.get('riskLevel').patchValue(data);
          break;
        }
        case 'ctrlActreq': {
          let data = this.JobTaskDetail.get('contrActReq').value;
          this.getAllContrActReq();
          this.JobTaskDetail.get('contrActReq').patchValue(data);
          break;
        }
        case 'resRiskLevel': {
          let data = this.JobTaskDetail.get('residualRiskL').value;
          this.getAllResidualRiskLevel();
          this.JobTaskDetail.get('residualRiskL').patchValue(data);
          break;
        }
        case 'perResbl': {
          let data = this.JobTaskDetail.get('personResp').value;
          this.getAllStaff();
          this.JobTaskDetail.get('personResp').patchValue(data);
          break;
        }
      }
      console.log('The dialog was closed');
    });
  }
  // addItem(type) {
  //   switch (type) {
  //     case 'highRisk': {
  //       this.openDialogBox(type);
  //       break;
  //     }
  //     case 'ppe': {
  //       this.openDialogBox(type);
  //       break;
  //     }
  //     case 'licence': {
  //       this.openDialogBox(type);
  //       break;
  //     }
  //     case 'identifyHazards': {
  //       this.openDialogBox(type);
  //       break;
  //     }
  //     case 'riskLevel': {
  //       this.openDialogBox(type);
  //       break;
  //     }
  //     case 'ctrlActreq': {
  //       this.openDialogBox(type);
  //       break;
  //     }
  //     case 'resRiskLevel': {
  //       this.openDialogBox(type);
  //       break;
  //     }
  //     case 'perResbl': {
  //       this.openDialogBox(type);
  //       break;
  //     }

  //   }
  // }
}
