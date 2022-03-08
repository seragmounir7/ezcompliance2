import { debounceTime } from 'rxjs/operators';
import {
	FormControl,
	FormGroup,
	FormBuilder,
	Validators
} from '@angular/forms';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { merge } from 'rxjs';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { SavedformsService } from 'src/app/utils/services/savedforms.service';
import { ConvertService } from 'src/app/utils/services/convert.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import Swal from 'sweetalert2';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { LogicalFormName } from 'src/app/utils/types/logical-form-name.enum';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-saved-forms',
	templateUrl: './saved-forms.component.html',
	styleUrls: ['./saved-forms.component.scss']
})
export class SavedFormsComponent implements OnInit, AfterViewInit {
	@ViewChild(MatPaginator) paginator1: MatPaginator;

	displayedColumns: string[] = [
		'formName',
		'formType',
		'formFrequency',
		'Disable/Enable',
		'createdAt',
		'updatedAt',
		'Action'
	];
	selectArr = [
		{
			title: 'Form Id',
			value: 'formId'
		},
		{
			title: 'Form Type',
			value: 'fileType'
		},
		{
			title: 'Created Date',
			value: 'createdAt'
		},
		{
			title: 'Updated Date',
			value: 'updatedAt'
		}
	];
	showDatas: any;
	tempArray: MatTableDataSource<any>;
	// @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	totalCount: number;
	page: number = 1;
	limit: number = 5;
	searchString: string = '';
	changeState: any;
	searchControl: FormGroup;
	constructor(
		public forms: SavedformsService,
		private convertService: ConvertService,
		private spinner: NgxSpinnerService,
		private shared: RoleManagementSharedServiceService,
		public router: Router,
		private fb: FormBuilder,
		private setTitle: SetTitleService,
		private logical: LogicalFormInfoService,
		private dynamicFormServise: DynamicFormsService
	) {}

	ngAfterViewInit(): void {
		this.sort.sortChange.subscribe(() => (this.paginator1.pageIndex = 0));
		merge(this.sort.sortChange, this.paginator1.page).subscribe(() => {
			this.changeState = {
				field: this.sort.active || '',
				value: this.sort.direction || '',
				page: this.paginator1.pageIndex + 1,
				limit: this.paginator1.pageSize
			};
			this.getSavedforms();
		});
	}

	ngOnInit(): void {
		this.searchControl = this.fb.group({
			searchSelect: ['', Validators.required],
			searchInput: ['']
		});
		this.getSavedforms();

		this.setTitle.setTitle('WHS-All Saved Forms');
	}

	getSavedforms(
		field = this.changeState?.field,
		value = this.changeState?.value,
		page = this.changeState?.page,
		limit = this.changeState?.limit,
		serachField = this.f.searchSelect.value,
		searchString = this.f.searchInput.value
	) {
		if (serachField === 'createdAt' || serachField === 'updatedAt') {
			searchString = this.convertService.inputDateToIso(searchString); //Converting input string date to iso String date
		}
		this.forms
			.getAllSavedForms(
				page,
				limit,
				field,
				value,
				serachField,
				searchString
			)
			.subscribe((res: any) => {
				this.showDatas = res.data;

				this.totalCount = res.totalCount;
				this.showDatas.forEach((element, i) => {
					return (this.showDatas[i].index = i);
				});

				this.tempArray = new MatTableDataSource<any>(this.showDatas);
				// this.tempArray.paginator = this.paginator;
				this.tempArray.sort = this.sort;
			});
	}
	edit(id, type) {
		const navigationExtras: NavigationExtras = {
			queryParams: {
				formType: type.toString()
			}
		};
		if (type == 'Hazard Report') {
			this.router.navigate(
				['/admin/forms/hazardRep/' + id],
				navigationExtras
			);
		} else if (type == 'Notifiable Accident') {
			this.router.navigate(
				['/admin/forms/incidentRep/' + id],
				navigationExtras
			);
		} else if (type == 'Site Inspection') {
			this.router.navigate(
				['/admin/forms/siteInspect/' + id],
				navigationExtras
			);
		} else if (type == 'Tool Box') {
			this.router.navigate(
				['/admin/forms/toolboxTalk/' + id],
				navigationExtras
			);
		} else if (type == 'Risk Assessment') {
			this.router.navigate(
				['/admin/forms/riskAssessSWMS/' + id],
				navigationExtras
			);
		}
	}
	printPage(element, type) {
		this.shared.printNext(true);
		this.shared.sendPrintData({
			...element,
			formName: type.toString()
		});

		localStorage.setItem('key', 'print');

		this.spinner.show('printLoader');
		const navigationExtras: NavigationExtras = {
			queryParams: {
				formType: type.toString()
			}
		};
		switch (type) {
			case LogicalFormName.Hazard:
				this.router.navigate(
					[
						'/',
						{
							outlets: {
								print: ['print', 'hazardRep', element._id]
							}
						}
					],
					navigationExtras
				);
				break;
			case LogicalFormName.Accident:
				this.router.navigate(
					[
						'/',
						{
							outlets: {
								print: ['print', 'incidentRep', element._id]
							}
						}
					],
					navigationExtras
				);
				break;
			case LogicalFormName.SiteInspection:
				this.router.navigate(
					[
						'/',
						{
							outlets: {
								print: ['print', 'siteInspect', element._id]
							}
						}
					],
					navigationExtras
				);
				break;
			case LogicalFormName.ToolBox:
				this.router.navigate(
					[
						'/',
						{
							outlets: {
								print: ['print', 'toolboxTalk', element._id]
							}
						}
					],
					navigationExtras
				);
				break;
			case LogicalFormName.RiskAssessment:
				this.router.navigate(
					[
						'/',
						{
							outlets: {
								print: ['print', 'riskAssessSWMS', element._id]
							}
						}
					],
					navigationExtras
				);
				break;
			default:
				this.router.navigate(
					[
						'/',
						{
							outlets: {
								print: ['print', 'savedDynamicForm']
							}
						}
					],
					{
						queryParams: { id: element._id, type: 'edit' }
					}
				);

				break;
		}
		/* 	if (type == 'Hazard Report') {
			this.router.navigate(
				[
					'/',
					{ outlets: { print: ['print', 'hazardRep', element._id] } }
				],
				navigationExtras
			);
		} else if (type == 'Notifiable Accident') {
			this.router.navigate(
				[
					'/',
					{
						outlets: {
							print: ['print', 'incidentRep', element._id]
						}
					}
				],
				navigationExtras
			);
		} else if (type == 'Site Inspection') {
			this.router.navigate(
				[
					'/',
					{
						outlets: {
							print: ['print', 'siteInspect', element._id]
						}
					}
				],
				navigationExtras
			);
		} else if (type == 'Tool Box') {
			this.router.navigate(
				[
					'/',
					{
						outlets: {
							print: ['print', 'toolboxTalk', element._id]
						}
					}
				],
				navigationExtras
			);
		} else if (type == 'Risk Assessment') {
			this.router.navigate(
				[
					'/',
					{
						outlets: {
							print: ['print', 'riskAssessSWMS', element._id]
						}
					}
				],
				navigationExtras
			);
		} */
	}
	paginator(event: PageEvent) {
		this.page = event.pageIndex;
		this.limit = event.pageSize;
	}

	applyFilter(event: Event) {
		this.searchString = (event.target as HTMLInputElement).value;
	}

	get f() {
		return this.searchControl.controls;
	}
	reset() {
		this.f.searchSelect.setValue('');
		this.f.searchInput.setValue('');
		this.getSavedforms();
	}
	search() {
		this.searchString = this.f.searchInput.value;
		this.searchString = this.f.searchInput.value;
		this.getSavedforms();
	}
	slideChanged(e: MatSlideToggleChange, form) {
		const showPopUp = () => {
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
		};
		form.enable = e.checked;
		switch (form.fileType) {
			case 'Site Inspection':
				this.logical
					.updateSiteInspection(form._id, form)
					.subscribe(() => {
						showPopUp();
					});
				break;
			case 'Hazard Report':
				this.logical
					.updateHazardFormData(form._id, form)
					.subscribe(() => {
						showPopUp();
					});
				break;
			case 'Notifiable Accident':
				this.logical
					.updateIncidentReport(form._id, form)
					.subscribe(() => {
						showPopUp();
					});
				break;
			case 'Tool Box':
				this.logical.editToolBox(form._id, form).subscribe(() => {
					showPopUp();
				});
				break;
			case 'Risk Assessment':
				this.logical.updateAssessment(form._id, form).subscribe(() => {
					showPopUp();
				});
				break;

			default:
				if (form?.isDynamic !== 'Dynamic Form') return;

				this.dynamicFormServise
					.editForm(form, form._id)
					.subscribe((res) => {
						showPopUp();
					});
				break;
		}
		this.getSavedforms();
	}

	frequencyChange(e, form) {
		const showPopUp = () => {
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
		};

		form.frequency = e.target.value;
		switch (form.fileType) {
			case 'Site Inspection':
				this.logical
					.updateSiteInspection(form._id, form)
					.subscribe(() => {
						showPopUp();
					});
				break;
			case 'Hazard Report':
				this.logical
					.updateHazardFormData(form._id, form)
					.subscribe(() => {
						showPopUp();
					});
				break;
			case 'Notifiable Accident':
				this.logical
					.updateIncidentReport(form._id, form)
					.subscribe(() => {
						showPopUp();
					});
				break;
			case 'Tool Box':
				this.logical.editToolBox(form._id, form).subscribe(() => {
					showPopUp();
				});
				break;
			case 'Risk Assessment':
				this.logical.updateAssessment(form._id, form).subscribe(() => {
					showPopUp();
				});
				break;

			default:
				if (form?.isDynamic !== 'Dynamic Form') return;

				this.dynamicFormServise
					.editForm(form, form._id)
					.subscribe((res) => {
						showPopUp();
					});
				break;
		}

		this.getSavedforms();
	}
}
