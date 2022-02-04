import {
	Component,
	OnInit,
	QueryList,
	ViewChild,
	ViewChildren
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import Swal from 'sweetalert2';
@Component({
	selector: 'app-set-state-relation',
	templateUrl: './set-state-relation.component.html',
	styleUrls: ['./set-state-relation.component.scss']
})
export class SetStateRelationComponent implements OnInit {
	setStatesDetail!: FormGroup;
	// allContrlActReq=[];
	// highRiskData: any = [];
	// codeOfPract: any = [];
	// licenseAndQualificationData: any = [];
	// licenceCatAll: any = [];

	StatesData: any = [];
	Jurisdiction: any = [];
	COP: any = [];
	SafetyData: any = [];
	regulator = [];
	// task: any = [];
	// riskLevel='';
	// residuleRiskL='';
	// PPEselection = [
	//   { label: 'Disposable dust mask', value: '' },
	//   { label: 'Dust Mas', value: '' },
	//   { label: 'Face shield', value: '' },
	//   { label: 'Full face respirator', value: '' },
	//   { label: 'Gttors', value: '' },
	//   { label: 'Half face respirator', value: '' },
	//   { label: 'Hard Hat', value: '' },
	//   { label: 'Hearing protection', value: '' },
	//   { label: 'High-Vis Clothing', value: '' },
	//   { label: 'Lock Out Tags', value: '' },
	//   { label: 'Long sleeve/Long pants', value: '' },
	//   { label: 'Out of Service Tags', value: '' },
	//   { label: 'Protective gloves', value: '' },
	//   { label: 'Rescue kit', value: '' },
	//   { label: 'Safety boots', value: '' },
	//   { label: 'Safety glasses', value: '' },
	//   { label: 'Sun Screen', value: '' },
	//   { label: 'torch', value: '' },
	//   { label: 'Wide Brim Hat', value: '' },
	// ];

	// licenseAndQualification = [
	//   { label: 'Open Cable Licence', value: '' },
	//   { label: 'White Card', value: '' },
	//   { label: 'EWP Licence', value: '' },
	//   { label: 'Working At Heights', value: '' },
	//   { label: 'Security Licence', value: '' },
	//   { label: 'Asbestos Awarness', value: '' },
	//   { label: 'Working In Confined Space', value: '' },
	// ];

	// highRiskConstruction2 = [
	//   {
	//     label: 'Working in or near trenches or shafts deeper than 1.5metres',
	//     value: '',
	//   },
	//   { label: 'Work in or near a confined space', value: '' },
	//   {
	//     label:
	//       'Work in an area that may have a contaminated or flammable atmosphere',
	//     value: '',
	//   },
	//   { label: 'Working around or near mobile plant', value: '' },
	//   { label: 'Work with near or near asbestos', value: '' },
	//   { label: 'Working with hazardous substances', value: '' },
	//   { label: 'Working with or near tilt-up/precast concrete', value: '' },
	//   { label: 'Risk of falls higher than 2 metres', value: '' },
	//   {
	//     label: 'Working near on or adjacent to a road or rail corridor',
	//     value: '',
	//   },
	//   { label: 'Working on or near telecommunication tower', value: '' },
	//   { label: 'Working on or near telecommunication tower', value: '' },
	//   { label: 'Work near explosives', value: '' },
	//   {
	//     label:
	//       'Work in or near water or other liquid that involves a risk of drowning',
	//     value: '',
	//   },
	//   { label: 'Demolition of load-bearing structure', value: '' },
	//   { label: 'Diving work', value: '' },
	// ];

	// PPEselection2 = [
	//   { label: 'Disposable dust mask', value: '' },
	//   { label: 'Dust Mas', value: '' },
	//   { label: 'Face shield', value: '' },
	//   { label: 'Full face respirator', value: '' },
	//   { label: 'Gttors', value: '' },
	//   { label: 'Half face respirator', value: '' },
	//   { label: 'Hard Hat', value: '' },
	//   { label: 'Hearing protection', value: '' },
	//   { label: 'High-Vis Clothing', value: '' },
	//   { label: 'Lock Out Tags', value: '' },
	//   { label: 'Long sleeve/Long pants', value: '' },
	//   { label: 'Out of Service Tags', value: '' },
	//   { label: 'Protective gloves', value: '' },
	//   { label: 'Rescue kit', value: '' },
	//   { label: 'Safety boots', value: '' },
	//   { label: 'Safety glasses', value: '' },
	//   { label: 'Sun Screen', value: '' },
	//   { label: 'torch', value: '' },
	//   { label: 'Wide Brim Hat', value: '' },
	// ];
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	displayedColumns: string[] = ['index', 'title', 'edit'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	// @ViewChild('risk') risk: any;
	@ViewChildren('risk') Risk: QueryList<any>;

	constructor(
		private fb: FormBuilder,
		private logicalFormInfo: LogicalFormInfoService,
		private setTitle: SetTitleService,
		public router: Router
	) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-Set States Relation');

		this.setStatesDetail = this.fb.group({
			jurisdiction: this.fb.array([]),
			safe: this.fb.array([]),
			COP: this.fb.array([]),
			regulator: this.fb.array([])
			// contrActReq: this.fb.array([]),
			// riskLevel: this.fb.array([]),
			// residualRisk: this.fb.array([]),
		});

		this.getStates();
		// this.getAllHighRisk();
		// this.getAllLicence();
		// this.getAllCategories();
		// this.getAllPPE();
		// this.getAllHazard();
		// this.getAllContrActReq();
	}

	addActionJurisdiction() {
		{
			this.jurisdictionFA().push(this.jurisdictionFG());
		}
	}
	addActionCOP() {
		{
			this.COP_FA().push(this.COP_FG());
		}
	}
	addActionSafety() {
		{
			this.safetyFA().push(this.safetyFG());
		}
	}
	addActionRegulator() {
		{
			this.regulatorFA().push(this.regulatorFG());
		}
	}
	// addActionIdentifyHazrds() {
	//   {
	//     this.identifyHazrdsFA().push(this.identifyHazrdsFG());
	//   }
	// }
	// addActionRiskLevel() {
	//   {
	//     this.riskLevelFA().push(this.riskLevelFG());
	//   }
	// }
	// addActionResiRiskLevel() {
	//   {
	//     this.residlRiskLevelFA().push(this.residlRiskLevelFG());
	//   }
	// }
	// addActionCOP() {
	//   {
	//     this.addCOP().push(this.newActionCOP());
	//   }
	// }
	jurisdictionFA(): FormArray {
		return this.setStatesDetail.get('jurisdiction') as FormArray;
	}
	COP_FA(): FormArray {
		return this.setStatesDetail.get(' COP') as FormArray;
	}
	safetyFA(): FormArray {
		return this.setStatesDetail.get('safety') as FormArray;
	}
	regulatorFA(): FormArray {
		return this.setStatesDetail.get('regulator') as FormArray;
	}
	// identifyHazrdsFA(): FormArray {
	//   return this.setStatesDetail.get('identifyHazrds') as FormArray;
	// }

	// addCOP(): FormArray {
	//   return this.setStatesDetail.get('codeOfPract') as FormArray;
	// }
	// riskLevelFA(): FormArray {
	//   return this.setStatesDetail.get('riskLevel') as FormArray;
	// }
	// residlRiskLevelFA(): FormArray {
	//   return this.setStatesDetail.get('residualRisk') as FormArray;
	// }
	jurisdictionFG(): FormGroup {
		return this.fb.group({
			jurisdictionkArr: ['']
		});
	}
	COP_FG(): FormGroup {
		return this.fb.group({
			ppeArr: ['']
		});
	}
	safetyFG(): FormGroup {
		return this.fb.group({
			licenceArr: ['']
		});
	}
	regulatorFG(): FormGroup {
		return this.fb.group({
			contrActReqArr: ['']
		});
	}
	// identifyHazrdsFG(): FormGroup {
	//   return this.fb.group({
	//     hazardsArr: [''],
	//   });
	// }

	// riskLevelFG(): FormGroup {
	//   return this.fb.group({
	//     riskLevel: [''],
	//   });
	// }
	// residlRiskLevelFG(): FormGroup {
	//   return this.fb.group({
	//     resiRiskLevel: [''],
	//   });
	// }
	// newActionCOP(): FormGroup {
	//   return this.fb.group({
	//     copArr: [''],
	//   });
	// }

	onFormSubmit() {
		console.log(this.setStatesDetail);
	}
	getStates() {
		this.logicalFormInfo.getAllStates().subscribe((res: any) => {
			console.log('setStatesDetails=>', res);
			this.StatesData = res.data;

			this.StatesData.forEach((element, index) => {
				element.index = index + 1; //adding index
			});

			this.ELEMENT_DATA = this.StatesData;
			this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
			this.dataSource.paginator = this.paginator;
			// this.dataSource.sort = this.sort;
		});
	}
	getJurisdiction() {
		this.logicalFormInfo.getAllJurisdiction().subscribe((res: any) => {
			console.log('Jurisdiction=>', res);
			this.Jurisdiction = res.data;
		});
	}
	getSafety() {
		this.logicalFormInfo.getAllSafety().subscribe((res: any) => {
			console.log('Safety=>', res);
			this.SafetyData = res.data;
		});
	}

	getCode() {
		this.logicalFormInfo.getAllCode().subscribe((res) => {
			console.log('COP=>', res);
			this.COP = res.data;
		});
	}
	getRegulator() {
		this.logicalFormInfo.getAllRegulator().subscribe((res: any) => {
			console.log('Regulator=>', res);
			this.regulator = res.data;
		});
	}
	// getAllContrActReq()  {
	//   this.logicalFormInfo.getAllContrlActReq().subscribe((res:any) => {
	//     console.log('getAllHazards=>', res);
	//     this.allContrlActReq = res.data;
	//   });
	// }
	// getAllCategories() {
	//   this.logicalFormInfo.getAllLicenceCat().subscribe((res) => {
	//     console.log('getAllLicenceCat=>', res);
	//     this.licenceCatAll = res.data;
	//   });
	// }
	setRelation_2(id) {
		this.router.navigate(
			['/admin/stateRel/addState'],

			{ queryParams: { id: id } }
		);
	}
	setRelation(title, id, i) {
		console.log('index', title);
		console.log('id', id);
		console.log('id', i);
		let risk = [],
			ppe = [],
			licence = [],
			identifyHazard = [],
			controlActionRequired = [];
		if (this.jurisdictionFA().controls[i].get('jurisdictionArr').value) {
			this.jurisdictionFA()
				.controls[i].get('jurisdictionArr')
				.value.forEach((element) => {
					risk.push(element._id);
				});
		}
		if (this.COP_FA().controls[i].get('COPArr').value) {
			this.COP_FA()
				.controls[i].get('COPArr')
				.value.forEach((element) => {
					ppe.push(element._id);
				});
		}
		if (this.safetyFA().controls[i].get('safetyArr').value) {
			this.safetyFA()
				.controls[i].get('safetyArr')
				.value.forEach((element) => {
					licence.push(element._id);
				});
		}
		if (this.regulatorFA().controls[i].get('contrActReqArr').value) {
			this.regulatorFA()
				.controls[i].get('contrActReqArr')
				.value.forEach((element) => {
					controlActionRequired.push(element._id);
				});
		}

		let data = {
			title: title,
			jurisdiction: this.jurisdictionFA().controls[i].get(
				'jurisdictionArr'
			).value,
			COP: this.COP_FA().controls[i].get('COPArr').value,
			safety: this.safetyFA().controls[i].get('safetyArr').value,
			regulator: this.regulatorFA().controls[i].get('regulatorArr').value,

			set: true
		};
		console.log(data);

		this.logicalFormInfo.updateStates(data, id).subscribe((res) => {
			console.log('resStates Task=>', res);
			this.getStates();

			Swal.fire({
				title: 'States Relation set successfully',
				showConfirmButton: false,
				timer: 1200
			});
		});
	}
	// categorySel(catArr) {
	//   this.licenseAndQualificationData = [];

	//   console.log(catArr);
	//   catArr.forEach((element) => {
	//     this.licenseAndQual.forEach((item) => {
	//       if (element === item.licenceCategoryId._id) {
	//         this.licenseAndQualificationData.push(item);
	//       }
	//     });
	//   });
	//   console.log(
	//     ' this.licenseAndQualificationData',
	//     this.licenseAndQualificationData
	//   );
	// }
}
