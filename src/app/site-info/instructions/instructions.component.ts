import { element } from 'protractor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormControl } from '@angular/forms';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-instructions',
	templateUrl: './instructions.component.html',
	styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {
	isDisabled: boolean = true;
	instructionControl: FormControl = new FormControl();
	public Editor = ClassicEditor;
	jobTaskData: any = [];
	ELEMENT_DATA = [];
	/////////////mat table////////////////
	displayedColumns: string[] = ['index', 'title', 'action'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);

	url: any;
	addBtn = false;

	/////////////mat table end////////////////

	constructor(
		private logicalFormInfo: LogicalFormInfoService,
		private dialog: MatDialog,
		private setTitle: SetTitleService,
		private activatedRoute: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.instructionControl.disable();
		this.setTitle.setTitle('WHS-Accident Instruction');
		this.url = this.activatedRoute.snapshot.url[1]?.path || null;

		if (this.router.url.includes('notifiableAccident')) {
			this.getInstructions();
		}
		if (this.router.url.includes('riskAssessmentSetting')) {
			this.getRiskInstructions();
		}
	}

	getInstructions() {
		this.logicalFormInfo.getInstruction().subscribe(
			(res: any) => {
				const data = res.data;
				data.forEach((element, index) => {
					element.index = index + 1; //adding index
				});
				if (data.length > 0) {
					this.addBtn = false;
				} else {
					this.addBtn = true;
				}
				this.instructionControl.setValue(data[0].instruction || '');
				this.ELEMENT_DATA = data;
				this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
				// this.dataSource.sort = this.sort;

				//  this.task = res.data.subComponents;
			},
			(err) => (this.addBtn = false)
		);
	}

	getRiskInstructions() {
		this.logicalFormInfo.getRiskInstruction().subscribe(
			(res: any) => {
				const data = res.data;
				data.forEach((element, index) => {
					element.index = index + 1; //adding index
				});
				if (data.length > 0) {
					this.addBtn = false;
				} else {
					this.addBtn = true;
				}
				this.instructionControl.setValue(data[0].instruction || '');
				this.ELEMENT_DATA = data;

				this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
				// this.dataSource.sort = this.sort;

				//  this.task = res.data.subComponents;
			},
			(err) => (this.addBtn = false)
		);
	}

	edit(element) {
		this.isDisabled = !this.isDisabled;
		if (this.isDisabled) this.instructionControl.disable();
		if (!this.isDisabled) this.instructionControl.enable();
		if (!this.isDisabled) return;
		this.addBtn = false;
		if (this.router.url.includes('notifiableAccident')) {
			this.logicalFormInfo
				.postInstruction({ instruction: this.instructionControl.value })
				.subscribe(
					(data) => {
						Swal.fire({
							title: 'Saved Successfully!',
							showConfirmButton: false,
							timer: 1200
						});

						this.getInstructions();
					},
					(err) => {
						console.error(err);
					}
				);
		}
		if (this.router.url.includes('riskAssessmentSetting')) {
			this.logicalFormInfo
				.postRiskInstruction({
					instruction: this.instructionControl.value
				})
				.subscribe(
					(data) => {
						Swal.fire({
							title: 'Saved Successfully!',
							showConfirmButton: false,
							timer: 1200
						});
						this.getRiskInstructions();
					},
					(err) => {
						console.error(err);
					}
				);
		}
	}
	delete(item) {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete "${item.title}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				this.logicalFormInfo
					.deleteNatOfInc(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Parameter Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});

						this.getInstructions();
					});
			}
		});
	}
}
