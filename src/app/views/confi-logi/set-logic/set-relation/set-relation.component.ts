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
	styleUrls: ['./set-relation.component.scss']
})
export class SetRelationComponent implements OnInit {
	JobTaskDetail!: FormGroup;
	jobTask = null;
	highRiskConstructionData = [];
	PPESelectionData = [];
	licenseAndQual = [];
	allHazards = [];
	sendHazards = [];
	hazardInnerText: any[] = [];
	allContrlActReq = [];
	sendContrlActReq = [];
	licenceByTradecat = [];
	resiRiskLevelData = [];
	riskLevelData = [];
	staff = [];
	allCodeOfPract = [];
	isLinear = false;
	jobTaskId = null;
	stepperList: any[] = [
		{
			name: 'HighRisk Construction',
			i: 1,
			code: 'highRisk'
		},
		{
			name: 'PPE',
			i: 0,
			code: 'ppe'
		},
		{
			name: 'Licence',
			i: 0,
			code: 'licence'
		},
		{
			name: 'Identify Hazards',
			i: 0,
			code: 'identifyHazards'
		},
		{
			name: 'Risk Level',
			i: 0,
			code: 'riskLevel'
		},
		{
			name: 'Control Action Required',
			i: 0,
			code: 'ctrlActreq'
		},
		{
			name: 'Code of Practice',
			i: 0,
			code: 'codeOfPract'
		},
		{
			name: 'Residule Risk Level',
			i: 0,
			code: 'resRiskLevel'
		},
		// {
		//   name:'Code of Practice',
		//   i:0,
		//    code:'codeOfPract'
		// },
		{
			name: 'Chemical related Task',
			i: 0,
			code: ''
		},
		{
			name: 'Person Responsible',
			i: 0,
			code: 'perResbl'
		}
	];

	count: number = 0;

	constructor(
		private route: ActivatedRoute,
		private dialog: MatDialog,
		private router: Router,
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService
	) {}

	ngOnInit(): void {
		this.JobTaskDetail = this.fb.group({
			highRiskConstr: [],
			PPE: [],
			codeOfPract: [],
			LicenceCat: [],
			identifyHazrds: [],
			contrActReq: [],
			riskLevel: [],
			residualRiskL: [],
			personResp: [],
			chemical: []
		});

		this.route.queryParams.subscribe((id) => {
			console.log(id);
			this.jobTaskId = id.id;
			this.logicalFormInfo.getJobtaskById(id.id).subscribe((res: any) => {
				this.jobTask = res.data;
				console.log('this.jobTask ', this.jobTask);
				this.getLicenceByTradeCat(this.jobTask.tradeCategoryId);

				if (this.jobTask.set == true) {
					this.JobTaskDetail.patchValue({
						highRiskConstr: this.jobTask.risk,
						PPE: this.jobTask.PPE,
						codeOfPract: this.jobTask.codeOfPractice,
						LicenceCat: this.jobTask.licence,
						identifyHazrds: this.jobTask.identifyHazard,
						contrActReq: this.jobTask.controlActionRequired,
						riskLevel: this.jobTask.riskLevel,
						residualRiskL: this.jobTask.residualRisk,
						personResp: this.jobTask.staff,
						chemical: this.jobTask.chemical
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
			//  console.log('this.resiRiskLevelData', res.data);
			this.resiRiskLevelData = res.data;
		});
	}
	getAllRiskLevel() {
		this.logicalFormInfo.getAllRiskLevel().subscribe((res: any) => {
			//console.log('this.riskLevelData', res.data);
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
			//console.log('Risk=>', res);
			this.highRiskConstructionData = res.data;
		});
	}
	getAllPPE() {
		this.logicalFormInfo.getAllPPE().subscribe((res: any) => {
			//  console.log('PPE=>', res);
			this.PPESelectionData = res.data;
		});
	}
	getAllCodeOfPractice() {
		this.logicalFormInfo.getAllCOP().subscribe((res: any) => {
			//console.log('codeOfPractice=>', res);
			this.allCodeOfPract = res.data;
		});
	}

	getAllHazard() {
		this.logicalFormInfo.getAllHazards().subscribe((res: any) => {
			//   console.log('getAllHazards=>', res);
			this.allHazards = (res.data as any[]).filter(
				(x) => x.jobTaskId === this.jobTaskId || !x.jobTaskId
			);
			this.sendHazards = this.allHazards;
		});
	}
	getAllContrActReq() {
		this.logicalFormInfo.getAllContrlActReq().subscribe((res: any) => {
			//  console.log('getAllHazards=>', res);
			this.allContrlActReq = (res.data as any[]).filter(
				(x) => x.jobTaskId === this.jobTaskId || !x.jobTaskId
			);
			this.sendContrlActReq = this.allContrlActReq;
			// if(!this.allContrlActReq.includes(x => x.jobTaskId == this.jobTaskId)){
			//   this.allContrlActReq = this.allContrlActReq.filter(x => x.jobTaskId == this.jobTaskId)
			// }
			console.log('this.allContrlActReq =>> ', this.allContrlActReq);
		});
	}
	getLicenceByTradeCat(id) {
		console.log('getLicenceByTradeCat', id);

		this.logicalFormInfo.getLicenceByTradeCat(id).subscribe((res) => {
			//   console.log('getAllLicenceCat=>', res);
			this.licenceByTradecat = res.data.licenceData;
		});
	}
	setRelation() {
		console.log(this.JobTaskDetail.value);
		const allContrlActReqTitle = [];
		const temp1 = this.JobTaskDetail.get('contrActReq').value;
		if (temp1 != null) {
			this.allContrlActReq.forEach((element1) => {
				temp1.forEach((element2) => {
					if (element1._id === element2) {
						const data = {
							title: element1.title,
							id: element1._id
						};
						allContrlActReqTitle.push(data);
					}
				});
			});
		}

		const allHazardsTitle = [];
		const temp2 = this.JobTaskDetail.get('identifyHazrds').value;
		if (temp2 != null) {
			this.allHazards.forEach((element1) => {
				temp2.forEach((element2) => {
					if (element1._id === element2) {
						const data = {
							title: element1.title,
							id: element1._id
						};
						allHazardsTitle.push(data);
					}
				});
			});
		}

		const allCOPTitle = [];
		const temp3 = this.JobTaskDetail.get('codeOfPract').value;
		if (temp3 != null) {
			this.allCodeOfPract.forEach((element1) => {
				temp3.forEach((element2) => {
					if (element1._id === element2) {
						const data = {
							title: element1.title,
							id: element1._id
						};
						allCOPTitle.push(data);
					}
				});
			});
		}
		const staffTitle = [];
		const temp4 = this.JobTaskDetail.get('personResp').value;
		if (temp4 != null) {
			console.log(temp4);

			this.staff.forEach((element1) => {
				temp4.forEach((element2) => {
					if (element1._id === element2) {
						const data = {
							title: element1.title,
							id: element1._id
						};
						staffTitle.push(data);
					}
				});
			});
		}
		const data = {
			title: this.jobTask.title,
			risk: this.JobTaskDetail.get('highRiskConstr').value || [],
			codeOfPractice: this.JobTaskDetail.get('codeOfPract').value || [],
			PPE: this.JobTaskDetail.get('PPE').value || [],
			tradeCategoryId: this.jobTask.tradeCategoryId,
			licence: this.JobTaskDetail.get('LicenceCat').value || [],
			identifyHazard:
				this.JobTaskDetail.get('identifyHazrds').value || [],
			controlActionRequired:
				this.JobTaskDetail.get('contrActReq').value || [],
			riskLevel: this.JobTaskDetail.get('riskLevel').value,
			residualRisk: this.JobTaskDetail.get('residualRiskL').value,
			staff: this.JobTaskDetail.get('personResp').value,
			chemical: this.JobTaskDetail.get('chemical').value,
			allHazardsTitle,
			allContrlActReqTitle,
			allCOPTitle,
			staffTitle,
			set: true
		};

		console.log('send data', data);

		this.logicalFormInfo
			.updateJobTask(data, this.jobTaskId)
			.subscribe((res) => {
				this.logicalFormInfo
					.updateAllContrlActReq(
						this.sendContrlActReq,
						this.jobTaskId
					)
					.subscribe((res) => console.log(res));
				this.logicalFormInfo
					.updateAllHazards(this.sendHazards, this.jobTaskId)
					.subscribe((res) => console.log(res));
				console.log('resJob Task=>', res);

				Swal.fire({
					title: 'Relation set successfully',
					showConfirmButton: false,
					timer: 1200
				});
				this.router.navigate(['/admin/confiLogi/setLogic']);
			});
	}
	addItem(type) {
		let temp = {
			type,
			tradeCategoryId: this.jobTask.tradeCategoryId
		};
		if (type === 'licence') {
			temp = {
				type,
				tradeCategoryId: this.jobTask.tradeCategoryId
			};
		} else {
			temp = {
				type,
				tradeCategoryId: ''
			};
		}

		const dialogRef = this.dialog.open(AddItemComponent, {
			width: '550px',
			// height:'50%',
			data: temp
		});

		dialogRef.afterClosed().subscribe((result) => {
			switch (result) {
				case 'highRisk': {
					const data = this.JobTaskDetail.get('highRiskConstr').value;
					this.getAllHighRisk();
					this.JobTaskDetail.get('highRiskConstr').patchValue(data);
					break;
				}
				case 'ppe': {
					const data = this.JobTaskDetail.get('PPE').value;
					this.getAllPPE();
					this.JobTaskDetail.get('PPE').patchValue(data);
					break;
				}
				case 'codeOfPract': {
					const data = this.JobTaskDetail.get('codeOfPract').value;
					this.getAllCodeOfPractice();
					this.JobTaskDetail.get('codeOfPract').patchValue(data);
					break;
				}
				case 'licence': {
					const data = this.JobTaskDetail.get('LicenceCat').value;
					this.getLicenceByTradeCat(this.jobTask.tradeCategoryId);
					this.JobTaskDetail.get('LicenceCat').patchValue(data);
					break;
				}
				case 'identifyHazards': {
					const data = this.JobTaskDetail.get('identifyHazrds').value;
					this.getAllHazard();
					this.JobTaskDetail.get('identifyHazrds').patchValue(data);
					break;
				}
				case 'riskLevel': {
					const data = this.JobTaskDetail.get('riskLevel').value;
					this.getAllRiskLevel();
					this.JobTaskDetail.get('riskLevel').patchValue(data);
					break;
				}
				case 'ctrlActreq': {
					const data = this.JobTaskDetail.get('contrActReq').value;
					this.getAllContrActReq();
					this.JobTaskDetail.get('contrActReq').patchValue(data);
					break;
				}
				case 'resRiskLevel': {
					const data = this.JobTaskDetail.get('residualRiskL').value;
					this.getAllResidualRiskLevel();
					this.JobTaskDetail.get('residualRiskL').patchValue(data);
					break;
				}
				case 'perResbl': {
					const data = this.JobTaskDetail.get('personResp').value;
					this.getAllStaff();
					this.JobTaskDetail.get('personResp').patchValue(data);
					break;
				}
			}
			console.log('The dialog was closed');
		});
	}
	prev() {
		if (this.count != this.stepperList.length + 1 && this.count != 0) {
			this.count--;
			this.stepperList.map((x) => {
				x.i = 0;
			});
			this.stepperList[this.count].i = 1;
		}
	}
	next() {
		if (this.count != this.stepperList.length - 1) {
			this.count++;
			this.stepperList.map((x) => {
				x.i = 0;
			});
			this.stepperList[this.count].i = 1;
		}
	}
	handleClick(index) {
		console.log(index);
		this.count = index;
		this.stepperList.map((x) => {
			x.i = 0;
		});
		this.stepperList[this.count].i = 1;
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

	contrActReqUpdateAll(event, id) {
		console.log(event, id);
		this.sendContrlActReq = this.allContrlActReq.slice().map((item) => {
			if (event.value == item._id) {
				if (event.selected) {
					item.jobTaskId = this.jobTaskId;
				} else {
					item.jobTaskId = '';
				}
			}
			return {
				_id: item._id,
				jobTaskId: item?.jobTaskId
			};
		});
		console.table(this.sendContrlActReq);
	}

	hazardsUpdateAll(event, id) {
		console.log(event, id);
		this.sendHazards = this.allHazards.slice().map((item) => {
			if (event.value == item._id) {
				if (event.selected) {
					item.jobTaskId = this.jobTaskId;
				} else {
					item.jobTaskId = '';
				}
			}
			return { _id: item._id, jobTaskId: item.jobTaskId };
			// return {
			// 	_id: item._id,
			// 	jobTaskId:
			// 		event.value == item._id
			// 			? event.selected
			// 				? this.jobTaskId
			// 				: ''
			// 			: item?.jobTaskId
			// };
		});
		console.table(this.sendHazards);
	}
}
