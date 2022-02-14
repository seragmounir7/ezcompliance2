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

	StatesData: any = [];
	Jurisdiction: any = [];
	COP: any = [];
	SafetyData: any = [];
	regulator = [];
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	displayedColumns: string[] = ['index', 'title', 'edit'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
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
		});

		this.getStates();
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
	setRelation_2(id) {
		this.router.navigate(
			['/admin/stateRel/addState'],

			{ queryParams: { id } }
		);
	}
	setRelation(title, id, i) {
		console.log('index', title);
		console.log('id', id);
		console.log('id', i);
		const risk = [];
		const ppe = [];
		const licence = [];
		const identifyHazard = [];
		const controlActionRequired = [];
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

		const data = {
			title,
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
}
