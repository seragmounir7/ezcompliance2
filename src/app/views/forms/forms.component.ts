import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { FormName } from 'src/app/side-nav-access.enum';
import { RoleManagementService } from 'src/app/utils/services/role-management.service';
import { AccessObj } from 'src/app/utils/types/AccessResponceTypes';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { AuthService } from 'src/app/utils/services/auth.service';
import { Designation } from 'src/app/utils/types/Designation.enum';

@Component({
	selector: 'app-forms',
	templateUrl: './forms.component.html',
	styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
	@ViewChild(MatSort) sort: MatSort;
	closeResult: string;
	page = 1;
	pageSize = 10;
	collectionSize = 10;
	ELEMENT_DATA = [
		{
			index: 1,
			title: 'Hazards Reported',
			link: ['/admin/forms/hazardRep/' + 'form']
		},

		{
			index: 2,
			title: 'Accident Report',
			link: ['/admin/forms/incidentRep/' + 'Form']
		},
		{
			index: 3,
			title: 'Toolbox Talk',
			link: ['/admin/forms/toolboxTalk/' + 'form']
		},
		{
			index: 4,
			title: 'Site Inspection',
			link: ['/admin/forms/siteInspect/' + 'form']
		},
		{
			index: 5,
			title: 'Risk Assessment and SWMS',
			link: ['/admin/forms/riskAssessSWMS/' + 'form']
		}
	];
	formName = '';
	addForm: FormGroup;
	// formName =[] ;
	@Input() displayedColumns: string[] = [
		'index',
		'formName',
		'formFrequency',
		'Disable/Enable'
	];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	url: any;
	accessObj: AccessObj;

	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
		// this.dataSource.sort = this.sort;
	}

	constructor(
		public dialog: MatDialog,
		private spinner: NgxSpinnerService,
		public router: Router,
		private setTitle: SetTitleService,
		private activatedRoute: ActivatedRoute,
		private logical: LogicalFormInfoService,
		private role: RoleManagementService,
		private authService: AuthService
	) {}
	goTo(title: string) {
		console.log('title', title);
		switch (title) {
			case 'Toolbox Talk': {
				this.router.navigate(['/admin/forms/tableData']);
				break;
			}
			case 'Site Inspection': {
				this.router.navigate(['/admin/forms/siteinspectiontable']);
				break;
			}
			case 'Hazards Reported': {
				this.router.navigate(['/admin/forms/hazardTable']);
				break;
			}
			case 'Accident Report': {
				this.router.navigate(['/admin/forms/incidentsTable']);
				break;
			}
			case 'Risk Assessment and SWMS': {
				this.router.navigate(['/admin/forms/riskAssessTable']);
				break;
			}
			default: {
				console.log('No such Title exists!');
				break;
			}
		}
	}

	ngOnInit(): void {
		this.authService.loginData$.subscribe((res) => {
			if (res.designation === Designation.user)
				this.displayedColumns = ['index', 'formName', 'edit'];
		});

		this.logical.getLogicalFormFrequency().subscribe((res: any) => {
			console.log(res);
			res.data.forEach((resObj) => {
				this.ELEMENT_DATA = this.ELEMENT_DATA.map((localObj) => {
					if (resObj.formName === localObj.title) {
						const { frequency, enable } = resObj;
						// localObj['frequency'] = resObj.frequency
						// localObj['enable'] = resObj.enable
						localObj = {
							...localObj,
							...resObj
						};
						console.log(localObj);
					}
					return localObj;
				});
			});
			console.log(this.ELEMENT_DATA);
			this.dataSource.data = this.ELEMENT_DATA;
		});
		this.accessObj = this.role.getAccessObj(FormName.WHSForms);
		this.url = this.activatedRoute.snapshot.url;
		this.setTitle.setTitle('WHS-Forms List');
	}

	slideChanged(e, form) {
		this.logical
			.enableDisableLogicalForm(form._id, e.checked)
			.subscribe((res) => {
				if (e.checked) {
					Swal.fire({
						title: 'Form Enabled successfully',
						showConfirmButton: false,
						timer: 1200
					});
				} else {
					Swal.fire({
						title: 'Form Disable successfully',
						showConfirmButton: false,
						timer: 1200
					});
				}
			});
	}

	frequencyChange(e, element) {
		console.log(e.target.value);

		this.logical
			.updateLogicalFormFrequency(element._id, e.target.value)
			.subscribe((res) => {
				Swal.fire('Form Frequency Changed successfully');
			});
	}
}
