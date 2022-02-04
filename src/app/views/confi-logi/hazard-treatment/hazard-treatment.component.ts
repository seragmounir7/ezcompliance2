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
	selector: 'app-hazard-treatment',
	templateUrl: './hazard-treatment.component.html',
	styleUrls: ['./hazard-treatment.component.scss']
})
export class HazardTreatmentComponent implements OnInit {
	setStatesDetail!: FormGroup;
	hazardData: any = [];

	ELEMENT_DATA = [];
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
		this.setTitle.setTitle('WHS-Set Hazard Relation');
		this.getAllHazardTreatmentRelation();
	}
	onFormSubmit() {
		console.log(this.setStatesDetail);
	}
	getAllHazardTreatmentRelation() {
		this.logicalFormInfo
			.getAllHazardTreatmentRelation()
			.subscribe((res: any) => {
				console.log('getAllHazardTreatmentRelation=>', res);
				this.hazardData = res.data;

				this.hazardData.forEach((element, index) => {
					element.index = index + 1; //adding index
				});

				this.ELEMENT_DATA = this.hazardData;
				this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
				this.dataSource.paginator = this.paginator;
				// this.dataSource.sort = this.sort;
			});
	}
	setRelation_2(id) {
		this.router.navigate(
			['/admin/confiLogi/setHazardRelation'],

			{ queryParams: { id: id } }
		);
	}
}
