import { AddJobTaskComponent } from './../../../site-info/job-task/add-job-task/add-job-task.component';

import {
	Component,
	OnInit,
	QueryList,
	ViewChildren,
	AfterViewInit
} from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import Swal from 'sweetalert2';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddItemComponent } from './set-relation/add-item/add-item.component';
import { MatSort } from '@angular/material/sort';
@Component({
	selector: 'app-set-logic',
	templateUrl: './set-logic.component.html',
	styleUrls: ['./set-logic.component.scss']
})
export class SetLogicComponent implements AfterViewInit, OnInit {
	@ViewChild(MatSort) sort: MatSort;
	JobTaskDetail!: FormGroup;
	allHazards = [];
	allContrlActReq = [];
	jobTaskData: any = [];
	highRiskData: any = [];
	PPESelectionData: any = [];
	codeOfPract: any = [];
	licenseAndQual: any = [];
	licenseAndQualificationData: any = [];
	licenceCatAll: any = [];
	highRiskConstructionData: any = [];
	task: any = [];
	riskLevel = '';
	residuleRiskL = '';
	PPEselection = [
		{ label: 'Disposable dust mask', value: '' },
		{ label: 'Dust Mas', value: '' },
		{ label: 'Face shield', value: '' },
		{ label: 'Full face respirator', value: '' },
		{ label: 'Gttors', value: '' },
		{ label: 'Half face respirator', value: '' },
		{ label: 'Hard Hat', value: '' },
		{ label: 'Hearing protection', value: '' },
		{ label: 'High-Vis Clothing', value: '' },
		{ label: 'Lock Out Tags', value: '' },
		{ label: 'Long sleeve/Long pants', value: '' },
		{ label: 'Out of Service Tags', value: '' },
		{ label: 'Protective gloves', value: '' },
		{ label: 'Rescue kit', value: '' },
		{ label: 'Safety boots', value: '' },
		{ label: 'Safety glasses', value: '' },
		{ label: 'Sun Screen', value: '' },
		{ label: 'torch', value: '' },
		{ label: 'Wide Brim Hat', value: '' }
	];

	licenseAndQualification = [
		{ label: 'Open Cable Licence', value: '' },
		{ label: 'White Card', value: '' },
		{ label: 'EWP Licence', value: '' },
		{ label: 'Working At Heights', value: '' },
		{ label: 'Security Licence', value: '' },
		{ label: 'Asbestos Awarness', value: '' },
		{ label: 'Working In Confined Space', value: '' }
	];

	highRiskConstruction2 = [
		{
			label:
				'Working in or near trenches or shafts deeper than 1.5metres',
			value: ''
		},
		{ label: 'Work in or near a confined space', value: '' },
		{
			label:
				'Work in an area that may have a contaminated or flammable atmosphere',
			value: ''
		},
		{ label: 'Working around or near mobile plant', value: '' },
		{ label: 'Work with near or near asbestos', value: '' },
		{ label: 'Working with hazardous substances', value: '' },
		{ label: 'Working with or near tilt-up/precast concrete', value: '' },
		{ label: 'Risk of falls higher than 2 metres', value: '' },
		{
			label: 'Working near on or adjacent to a road or rail corridor',
			value: ''
		},
		{ label: 'Working on or near telecommunication tower', value: '' },
		{ label: 'Working on or near telecommunication tower', value: '' },
		{ label: 'Work near explosives', value: '' },
		{
			label:
				'Work in or near water or other liquid that involves a risk of drowning',
			value: ''
		},
		{ label: 'Demolition of load-bearing structure', value: '' },
		{ label: 'Diving work', value: '' }
	];

	PPEselection2 = [
		{ label: 'Disposable dust mask', value: '' },
		{ label: 'Dust Mas', value: '' },
		{ label: 'Face shield', value: '' },
		{ label: 'Full face respirator', value: '' },
		{ label: 'Gttors', value: '' },
		{ label: 'Half face respirator', value: '' },
		{ label: 'Hard Hat', value: '' },
		{ label: 'Hearing protection', value: '' },
		{ label: 'High-Vis Clothing', value: '' },
		{ label: 'Lock Out Tags', value: '' },
		{ label: 'Long sleeve/Long pants', value: '' },
		{ label: 'Out of Service Tags', value: '' },
		{ label: 'Protective gloves', value: '' },
		{ label: 'Rescue kit', value: '' },
		{ label: 'Safety boots', value: '' },
		{ label: 'Safety glasses', value: '' },
		{ label: 'Sun Screen', value: '' },
		{ label: 'torch', value: '' },
		{ label: 'Wide Brim Hat', value: '' }
	];
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	displayedColumns: string[] = ['index', 'title', 'edit'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	// @ViewChild('risk') risk: any;
	@ViewChildren('risk') Risk: QueryList<any>;

	constructor(
		private fb: FormBuilder,
		private dialog: MatDialog,
		private logicalFormInfo: LogicalFormInfoService,
		private setTitle: SetTitleService,
		public router: Router
	) {}

	ngOnInit(): void {
		this.setTitle.setTitle('WHS-Set Relation');

		this.getJobTask();
	}

	onFormSubmit() {
		console.log(this.JobTaskDetail);
	}
	getJobTask() {
		this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
			console.log('jobTaskDetails=>', res);
			this.jobTaskData = res.data;

			this.jobTaskData.forEach((element, index) => {
				element.index = index + 1; //adding index
			});

			this.ELEMENT_DATA = this.jobTaskData;
			this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
			this.dataSource.paginator = this.paginator;
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
	getAllCategories() {
		this.logicalFormInfo.getAllLicenceCat().subscribe((res) => {
			console.log('getAllLicenceCat=>', res);
			this.licenceCatAll = res.data;
		});
	}
	setRelation_2(id) {
		this.router.navigate(
			['/admin/confiLogi/setRelation'],

			{ queryParams: { id } }
		);
	}
	categorySel(catArr) {
		this.licenseAndQualificationData = [];

		console.log(catArr);
		catArr.forEach((element) => {
			this.licenseAndQual.forEach((item) => {
				if (element === item.licenceCategoryId._id) {
					this.licenseAndQualificationData.push(item);
				}
			});
		});
		console.log(
			' this.licenseAndQualificationData',
			this.licenseAndQualificationData
		);
	}

	addJobTask() {
		const dilog = this.dialog.open(AddJobTaskComponent, {
			width: '70%'
		});
		dilog.afterClosed().subscribe((res) => {
			if (res === 'ok') {
				this.getJobTask();
			}
		});
	}
}
