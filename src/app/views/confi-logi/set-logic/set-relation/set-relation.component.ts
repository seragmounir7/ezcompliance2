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
  jobTaskId = null;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private router: Router,
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((id) => {
      console.log(id);
      this.jobTaskId = id.id;
      this.logicalFormInfo.getJobtaskById(id.id).subscribe((res: any) => {
        console.log(res);
        this.jobTask = res.data;
        this.getLicenceByTradeCat(this.jobTask.tradeCategoryId);
        if (this.jobTask.set == true) {
          this.JobTaskDetail.patchValue({
            highRiskConstr: this.jobTask.risk,
            PPE: this.jobTask.PPE,
            // LicenceCat: this.jobTask
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
    this.JobTaskDetail = this.fb.group({
      highRiskConstr: [''],
      PPE: [''],
      LicenceCat: [''],
      identifyHazrds: [''],
      contrActReq: [''],
      riskLevel: [''],
      residualRiskL: [''],
      personResp: [''],
      chemical: [],
    });
    this.getAllHighRisk();
    this.getAllLicence();
    this.getAllPPE();
    this.getAllHazard();
    this.getAllContrActReq();
    this.getAllStaff();
    this.getAllResidualRiskLevel();
    this.getAllRiskLevel();
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

  getAllLicence() {
    this.logicalFormInfo.getAllLicence().subscribe((res) => {
      console.log('Licence=>', res);
      this.licenseAndQual = res.data;
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
     // this.licenceCatAll = res.data;
    });
  }
  setRelation() {
    console.log(this.JobTaskDetail.value);
    let data = {
      title: this.jobTask.title,
      risk: this.JobTaskDetail.get('highRiskConstr').value,
      PPE: this.JobTaskDetail.get('PPE').value,
      tradeCategoryId: this.JobTaskDetail.get('LicenceCat').value,
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
  openDialogBox(element) {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '550px',
      // height:'50%',
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      switch (result) {
        case 'highRisk': {
          let data =this.JobTaskDetail.get('highRiskConstr').value;
          this.getAllHighRisk();
          this.JobTaskDetail.get('highRiskConstr').patchValue(data)
          break;
        }
        // case 'ppe': {
        //   this.openDialogBox(type);
        //   break;
        // }
        // case 'licence': {
        //   this.openDialogBox(type);
        //   break;
        // }
        // case 'identifyHazards': {
        //   this.openDialogBox(type);
        //   break;
        // }
        // case 'riskLevel': {
        //   this.openDialogBox(type);
        //   break;
        // }
        // case 'ctrlActreq': {
        //   this.openDialogBox(type);
        //   break;
        // }
        // case 'resRiskLevel': {
        //   this.openDialogBox(type);
        //   break;
        // }
        // case 'perResbl': {
        //   this.openDialogBox(type);
        //   break;
        // }
      
      }
      console.log('The dialog was closed');
    });
  }
  addItem(type) {
    switch (type) {
      case 'highRisk': {
        this.openDialogBox(type);
        break;
      }
      case 'ppe': {
        this.openDialogBox(type);
        break;
      }
      case 'licence': {
        this.openDialogBox(type);
        break;
      }
      case 'identifyHazards': {
        this.openDialogBox(type);
        break;
      }
      case 'riskLevel': {
        this.openDialogBox(type);
        break;
      }
      case 'ctrlActreq': {
        this.openDialogBox(type);
        break;
      }
      case 'resRiskLevel': {
        this.openDialogBox(type);
        break;
      }
      case 'perResbl': {
        this.openDialogBox(type);
        break;
      }
    
    }
  }
}
