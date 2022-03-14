import { SetTitleService } from '../../../utils/services/set-title.service';
import {
	AfterViewInit,
	Component,
	ElementRef,
	HostListener,
	OnDestroy,
	OnInit,
	QueryList,
	Renderer2,
	ViewChild,
	ViewChildren
} from '@angular/core';
import { field, value } from '../global.model';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { SignaturePad } from 'angular2-signaturepad';
import Swal from 'sweetalert2';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { error } from 'protractor';
import { templateJitUrl } from '@angular/compiler';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';

import { UntilDestroy } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';
import { ModifiedJobNumber } from 'src/app/utils/types/JobNumberResponceTypes';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-saved-dynamic-form-data',
	templateUrl: './saved-dynamic-form-data.component.html',
	styleUrls: ['./saved-dynamic-form-data.component.scss']
})
export class SavedDynamicFormDataComponent
	implements OnInit, AfterViewInit, OnDestroy {
	@ViewChildren('Signature') SignaturePad: QueryList<SignaturePad>;
	@ViewChild('projectManager') projectManager: ElementRef;
	@HostListener('window:afterprint', [])
	function(): void {
		this.renderer.removeClass(document.querySelector('app-main'), 'hidden');
		this.shared.printNext(false);
		if (this.router.url.includes('/admin/savedForms')) {
			void this.router.navigateByUrl('/admin/savedForms');
			return;
		}
		void this.router.navigateByUrl('/admin/dynamic/savedDynamicFormTable');
	}
	projectMang: any;
	isHidden = false;
	check = false;
	configData: any;
	public signaturePadOptions: Object = {
		// passed through to szimek/signature_pad constructor
		minWidth: 1,
		canvasWidth: 500,
		canvasHeight: 100
	};
	value: value = {
		label: '',
		value: ''
	};
	bgTheme = {
		bgColor: '#ffffff',
		textColor: '#555555',
		bannerImage: ''
	};
	submitBtn = false;
	success = false;
	show = false;
	enableForm: boolean;
	formCategories: any;
	frequency: any;
	fieldModels: Array<field> = [
		{
			type: 'text',
			icon: 'fa-font',
			label: 'Text',
			description: 'Enter your name',
			placeholder: 'Enter your name',
			className: 'form-control',
			subtype: 'text',
			regex: '',
			handle: true
		},
		{
			type: 'email',
			icon: 'fa-envelope',
			required: true,
			label: 'Email',
			description: 'Enter your email',
			placeholder: 'Enter your email',
			className: 'form-control',
			subtype: 'text',
			regex: '^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+).([a-zA-Z]{2,5})$',
			errorText: 'Please enter a valid email',
			handle: true
		},
		{
			type: 'phone',
			icon: 'fa-phone',
			label: 'Phone',
			description: 'Enter your phone',
			placeholder: 'Enter your phone',
			className: 'form-control',
			subtype: 'text',
			regex: '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$',
			errorText: 'Please enter a valid phone number',
			handle: true
		},
		{
			type: 'number',
			label: 'Number',
			icon: 'fas fa-sort-numeric-up',
			description: 'Age',
			placeholder: 'Enter your age',
			className: 'form-control',
			value: '',
			min: null,
			max: null
		},
		{
			type: 'date',
			icon: 'fa-calendar',
			label: 'Date',
			placeholder: 'Date',
			className: 'form-control'
		},
		{
			type: 'datetime-local',
			icon: 'fa-calendar',
			label: 'DateTime',
			placeholder: 'Date Time',
			className: 'form-control'
		},
		{
			type: 'textarea',
			icon: 'fa-text-width',
			label: 'Textarea'
		},
		{
			type: 'externalLink',
			icon: 'fa-link',
			label: 'Add link',
			linkAddr: ''
		},
		{
			type: 'heading',
			icon: 'fa-heading',
			label: 'Heading',
			placeholder: 'This is Heading'
		},
		{
			type: 'paragraph',
			icon: 'fa-paragraph',
			label: 'Paragraph',
			placeholder: 'This is paragraph'
		},
		{
			type: 'addRemove',
			icon: 'fa-minus-circle',
			label: 'Add Remove'
		},
		{
			type: 'checkbox',
			required: true,
			label: 'Checkbox',
			icon: 'fa-list',
			description: 'Checkbox',
			inline: true,
			values: [
				{
					label: 'Option1',
					value: 'option-1'
				},
				{
					label: 'Option2',
					value: 'option-2'
				}
			]
		},
		{
			type: 'radio',
			icon: 'fa-list-ul',
			label: 'Radio',
			description: 'Radio boxes',
			values: [
				{
					label: 'Option1',
					value: 'option-1'
				},
				{
					label: 'Option2',
					value: 'option-2'
				}
			]
		},

		{
			type: 'autocomplete',
			icon: 'fa-bars',
			label: 'Select',
			description: 'Select',
			placeholder: 'Select',
			className: 'form-control',
			values: [
				{
					label: 'Option 1',
					value: 'option-1'
				},
				{
					label: 'Option 2',
					value: 'option-2'
				},
				{
					label: 'Option 3',
					value: 'option-3'
				}
			]
		},
		{
			type: 'file',
			icon: 'fa-file',
			label: 'File Upload',
			className: 'form-control',
			subtype: 'file'
		},
		{
			type: 'signature',
			icon: 'fas fa-file-signature',
			label: 'Signature'
		},
		{
			type: 'table',
			icon: 'fas fa-table',
			label: 'Table',
			tableHeading: [' ', ' ', ' ', ' '],
			tableRows: [
				['', '', '', ''],
				['', '', '', ''],
				['', '', '', ''],
				['', '', '', '']
			]
		}
	];
	type: string = '';
	formIdRec = '';
	rows = [];
	formData = [];
	tableIndexMap = new Map();

	model: any = [];
	totalModels = ['', '', '', '', ''];
	report = false;
	reports: any = [];
	riskAssessmentFb!: FormGroup;
	previewform: FormGroup;
	allJobNumbers: ModifiedJobNumber[];
	formNameRecieved = '';
	states: any;
	savedFormData: any;
	mainFormId: any;
	sub: Subscription;
	constructor(
		public router: Router,
		private spinner: NgxSpinnerService,
		private logicalFormInfo: LogicalFormInfoService,
		private dynamicFormsService: DynamicFormsService,
		private setTitle: SetTitleService,
		private fb: FormBuilder,
		private activatedRoute: ActivatedRoute,
		private shared: RoleManagementSharedServiceService,
		private renderer: Renderer2
	) {
		this.riskAssessmentFb = this.fb.group({
			siteName: [''],
			customerName: [''],
			streetNo: [''],
			streetAddr: [''],
			subUrb: [''],
			postcode: [''],
			statesSWMS: [''],
			custConct: [''],
			custConctPh: [''],
			custEmail: [''],
			jobNumber: ['']
		});
		this.previewform = this.fb.group({
			siteName: [''],
			customerName: [''],
			streetNo: [''],
			streetAddr: [''],
			subUrb: [''],
			postcode: [''],
			statesSWMS: [''],
			custConct: [''],
			custConctPh: [''],
			custEmail: [''],
			jobNumber: ['']
		});
	}
	ngOnDestroy(): void {
		this.sub.unsubscribe();
	}
	onChange2(eve) {
		this.isHidden = eve.target.checked;
	}
	ngOnInit() {
		this.activatedRoute.queryParams.subscribe((params) => {
			this.savedFormData = params;
		});
		this.getAllProjectMang();
		this.getAllState();

		this.setTitle.setTitle('WHS-Saved Dynamic Forms');
		this.getAllJobNumber();
		if (this.savedFormData.type == 'add') {
			this.type = 'add';
			this.formNameRecieved = sessionStorage.getItem('formTitle');
			for (let i = 0; i < this.totalModels.length; i++) {
				const modelFields: Array<field> = [];
				const modelRow = {
					attributes: modelFields
				};
				this.model.push(modelRow);
			}
		}
		if (this.savedFormData.type == 'add') {
			this.type = 'add';

			this.formIdRec = this.savedFormData.id;
			void this.spinner.show();
			this.dynamicFormsService
				.getFormById(this.formIdRec)
				.subscribe((res) => {
					this.model = [];
					this.formNameRecieved = res.data.title;
					this.enableForm = res.data.enable;
					this.frequency = res.data.frequency;
					this.formCategories = res.data.formCategoryId;
					this.isHidden = res.data.check;
					this.mainFormId = res.data._id;
					// this.configData=res.data.configure[0];
					this.previewform.patchValue(res.data.configure[0]);
					res.data.htmlObject.forEach((item) => {
						this.model.push(item);
					});

					void this.spinner.hide();
				});
		}
		if (this.savedFormData.type == 'edit') {
			this.report = true;

			this.type = 'edit';

			this.formIdRec = this.savedFormData.id;
			void this.spinner.show();
			this.dynamicFormsService
				.savedFormGetById(this.formIdRec)
				.subscribe((res: any) => {
					this.formNameRecieved = res.data.title;
					this.model = res.data.htmlObject;

					this.previewform.patchValue(res.data.configure[0]);
					this.formCategories = res.data.formCategoryId;
					this.isHidden = res.data.check;
					this.mainFormId = res.data.formId._id;

					void this.spinner.hide();
				});
		}
	}
	addDragAndDropRow(position, index) {
		const modelFields: Array<field> = [];
		const modelRow = {
			attributes: modelFields
		};
		if (position == 'inTheEnd') {
			this.model.push(modelRow);
		}
		if (position == 'inBetween') {
			this.model.splice(index + 1, 0, modelRow);
		}
	}
	removeDragAndDropRow(j) {
		if (this.model.length > 1) {
			Swal.fire({
				title: 'Are you sure?',
				text: `Do you want to remove this Row?`,
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#00B96F',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, remove!'
			}).then((result) => {
				if (result.value) {
					this.model.splice(j, 1);
				}
			});
		}
	}
	getAllProjectMang() {
		this.logicalFormInfo.getAllProjectMang().subscribe((res: any) => {
			this.projectMang = res.data;
			//
		});
	}
	onDragStart(event: DragEvent) {}

	onDragEnd(event: DragEvent) {}

	onDraggableCopied(event: DragEvent) {}

	onDraggableLinked(event: DragEvent) {}

	onDragged(item: any, list: any[], effect: DropEffect) {
		if (effect === 'move') {
			const index = list.indexOf(item);
			list.splice(index, 1);
		}
	}

	onDragCanceled(event: DragEvent) {}

	onDragover(event: DragEvent) {}

	onDrop(event: DndDropEvent, list?: any[]) {
		if (
			list &&
			(event.dropEffect === 'copy' || event.dropEffect === 'move')
		) {
			if (event.dropEffect === 'copy')
				event.data.name = event.data.type + '-' + new Date().getTime();
			let index = event.index;
			if (typeof index === 'undefined') {
				index = list.length;
			}
			list.splice(index, 0, event.data);

			//
		}
	}

	addValue(values) {
		values.push(this.value);
		this.value = { label: '', value: '' };
	}
	deleteItem() {}
	removeField(j, i, item) {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to remove "${item}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, remove!'
		}).then((result) => {
			if (result.value) {
				if (this.model[j].attributes[i].type == 'table') {
					const index = this.tableIndexMap.get(i);

					this.rows.splice(index, 1);
				}
				this.model[j].attributes.splice(i, 1);
			}
		});
	}
	getAllJobNumber() {
		this.logicalFormInfo.getAllJobNumber().subscribe((res) => {
			this.allJobNumbers = res.data as ModifiedJobNumber[];
		});
	}
	jobNoSel() {
		this.allJobNumbers.forEach((item) => {
			if (this.riskAssessmentFb.get('jobNumber').value === item._id) {
				// this.configData=item;
				this.riskAssessmentFb.patchValue({
					siteName: item.siteName,
					customerName: item.customerName,
					streetAddr: item.streetAddress,
					subUrb: item.suburb,
					statesSWMS: item.stateId._id,
					custConct: item.customerContact,
					custConctPh: item.contacts[0].phone,
					custEmail: item.contacts[0].email,
					jobNumber: this.riskAssessmentFb.get('jobNumber').value
				});
			}
		});
		this.riskAssessmentFb.get('jobNumber').updateValueAndValidity();
	}

	jobNoSel1() {
		this.allJobNumbers.forEach((item) => {
			if (this.previewform.get('jobNumber').value === item._id) {
				// this.configData=item;
				this.previewform.patchValue({
					siteName: item.siteName,
					customerName: item.customerName,
					postcode: item.postcode,
					subUrb: item.suburb,
					statesSWMS: item.stateId._id,
					custConct: item.customerContact,
					custConctPh: item.contacts[0].phone,
					custEmail: item.contacts[0].email,
					jobNumber: this.previewform.get('jobNumber').value
				});
			}
		});
		this.previewform.get('jobNumber').updateValueAndValidity();
	}
	updateForm() {
		const input = new FormData();
		input.append('attributes', JSON.stringify(this.model.attributes));
	}

	initReport() {
		//
		this.configData = { ...this.riskAssessmentFb.value };

		if (this.configData && this.isHidden) {
			if (this.type == 'add') {
				this.previewform.patchValue({
					siteName: this.configData.siteName,
					customerName: this.configData.customerName,
					streetNo: this.configData.streetNo,
					streetAddr: this.configData.streetAddr,
					subUrb: this.configData.subUrb,
					statesSWMS: this.configData.statesSWMS,
					custConct: this.configData.custConct,
					custConctPh: this.configData.custConctPh,
					custEmail: this.configData.custEmail,
					jobNumber: this.configData.jobNumber
				});
			} else {
				this.previewform.patchValue({
					siteName: this.configData.siteName,
					customerName: this.configData.customerName,
					streetNo: this.configData.streetNo,
					streetAddr: this.configData.streetAddr,
					subUrb: this.configData.subUrb,
					statesSWMS: this.configData.statesSWMS,
					custConct: this.configData.custConct,
					custConctPh: this.configData.custConctPh,
					custEmail: this.configData.custEmail,
					jobNumber: this.configData.jobNumber
				});
			}
		}
		this.check = true;
		// this.isHidden=true;
		this.report = true;
		this.formData = [];
		for (let j = 0; j < this.model[0].attributes.length; j++) {
			const temp = [];
			for (let i = 0; i < this.model.length; i++) {
				temp.push(this.model[i].attributes[j]);
			}
			this.formData.push(temp);
		}
	}

	toggleValue(item) {
		item.selected = !item.selected;
	}
	showData() {
		this.show = !this.show;
	}
	regexErr = [];
	submit() {
		const allTableHeadings = Array.from(
			document.querySelectorAll('.tableHeadings')
		);
		const allTableRows = Array.from(
			document.querySelectorAll('.tableRows')
		);
		allTableHeadings.forEach((element: any) => {});
		allTableRows.forEach((element: any) => {});
		//

		this.regexErr = [];

		this.submitBtn = true;
		const valid = true;
		/* commenting for future use

    let validationArray = JSON.parse(JSON.stringify(this.model.attributes));
    validationArray.reverse().forEach((field, index) => {

      // if(field.required && !field.value && field.type != 'checkbox'){
      //
      //
      //

      //   Swal.fire('Error','Please enter '+field.label,'error');
      //   valid = false;
      //   return false;
      // }
            if (field.required && field.regex) {
        let regex = new RegExp(field.regex);
        if (regex.test(field.value) == false) {
          // Swal.fire('Error',field.errorText,'error');
          // valid = false;
          // return false;
          this.regexErr[index] = true;
        }
      } else {
        this.regexErr[index] = false;
      }
      if (field.required && field.type == 'checkbox') {
        if (field.values.filter((r) => r.selected).length == 0) {
          Swal.fire('Error', 'Please enterrr ' + field.label, 'error');
          valid = false;
          return false;
        }
      }
    });


    if (!valid) {
      return false;
    }

    let input = new FormData();
    input.append('formId', this.model._id);
    input.append('attributes', JSON.stringify(this.model.attributes));*/
		//////////////////upto this//////////
		// this.us.postDataApi('/user/formFill',input).subscribe(r=>{
		//
		//   Swal.fire('Success','You have contact sucessfully','success');
		//   this.success = true;
		// },error=>{
		//   Swal.fire('Error',error.message,'error');
		// });
	}

	ngAfterViewInit() {
		const indexOfSignature = new Map();
		let index = 0;
		this.SignaturePad.changes.subscribe((item: QueryList<SignaturePad>) => {
			this.model[0].attributes.forEach((element, i) => {
				if (element.type == 'signature') {
					const myIndex = i.toString();
					indexOfSignature.set(index, myIndex);
					index++;
				}
				if (index == item.toArray().length) {
					item.toArray().forEach((x, i) => {
						const m = indexOfSignature.get(i);
						x.fromDataURL(this.model[0].attributes[m].value);
					});
				}
				//
			});
		});
		this.sub = this.shared.printObs$.subscribe((res) => {
			if (res) {
				setTimeout(function () {
					window.print();
				}, 3000);
				localStorage.setItem('key', ' ');
			}
		});
	}
	drawComplete(j, i) {
		// will be notified of szimek/signature_pad's onEnd event

		const indexOfSignature = new Map();
		let index = 0;

		this.model.forEach((modelRow, k) => {
			modelRow.attributes.forEach((element, l) => {
				if (element.type == 'signature') {
					const myIndex = k.toString() + l.toString();
					indexOfSignature.set(myIndex, index);
					index++;
				}
			});
		});

		const temp = i.toString() + j.toString(); //making unique code

		const m = indexOfSignature.get(temp);

		this.model[0].attributes[j].value = this.SignaturePad.toArray()[
			m
		].toDataURL();
	}
	clear(i, j) {
		const indexOfSignature = new Map();
		let index = 0;

		this.model.forEach((modelRow, k) => {
			modelRow.attributes.forEach((element, l) => {
				if (element.type == 'signature') {
					const myIndex = k.toString() + l.toString();
					indexOfSignature.set(myIndex, index);
					index++;
				}
			});
		});

		const temp = i.toString() + j.toString(); //making unique code

		const m = indexOfSignature.get(temp);

		this.SignaturePad.toArray()[m].clear();
		this.model[0].attributes[j].value = '';
	}
	drawStart() {
		// will be notified of szimek/signature_pad's onBegin event
	}

	////table//add row column
	addCol(j, i) {
		this.model[j].attributes[i].tableHeading.push('');
		this.model[j].attributes[i].tableRows.forEach((item) => {
			item.push('');
		});
	}
	removeCol(j, i) {
		if (
			this.model[j].attributes[i].tableHeading.length > 1 &&
			this.model[j].attributes[i].tableRows[0].length > 1
		) {
			this.model[j].attributes[i].tableHeading.pop();
			this.model[j].attributes[i].tableRows.forEach((item) => {
				item.pop();
			});
		}
	}
	addRow(j, i) {
		const arr = [];
		for (
			let k = 0;
			k < this.model[j].attributes[i].tableRows[0].length;
			k++
		) {
			arr.push('');
		}
		this.model[j].attributes[i].tableRows.push(arr);
	}
	removeRow(j, i) {
		if (this.model[j].attributes[i].tableRows.length > 1)
			this.model[j].attributes[i].tableRows.pop();
	}
	setProjectManager(value, e) {
		if (value === 'projectManagerSWMS') {
			this.riskAssessmentFb
				.get('projectManager')
				.setValue(e.target.value);
		}
		if (value === 'projectManager') {
			this.riskAssessmentFb
				.get('projectManagerSWMS')
				.setValue(e.target.value);
		}
	}
	getAllState() {
		this.logicalFormInfo.getAllStates().subscribe((res: any) => {
			this.states = res.data;
		});
	}
	changeValueTH(e, i, j, l) {
		this.model[i].attributes[j].tableHeading[l] = e.target.value;
	}
	addForm() {
		if (!this.isHidden) {
			this.previewform.reset();
		}
		if (this.type == 'add') {
			const tempModel = [];
			this.model.forEach((element) => {
				if (element.attributes.length) {
					tempModel.push(element);
				}
			});

			if (tempModel.length) {
				const d = [];
				d.push(this.previewform.value);

				const data = {
					title: this.formNameRecieved,
					frequency: this.frequency,
					htmlObject: tempModel,
					configure: d,
					check: this.isHidden,
					formId: this.mainFormId,
					formCategoryId: this.formCategories._id
				};

				this.dynamicFormsService
					.savedFormPost(data)
					.subscribe((res) => {
						Swal.fire('Form Submit successfully');
						this.router.navigate([
							'/admin/forms/fillConfigForm/' + 1
						]);
						this.previewform.reset();
					});
			} else {
				Swal.fire('Please Add Atleast One Field');
			}
		}
		if (this.type == 'edit') {
			const tempModel = [];
			this.model.forEach((element) => {
				if (element.attributes.length) {
					tempModel.push(element);
				}
			});

			if (tempModel.length) {
				const d = [];
				d.push(this.previewform.value);

				const data = {
					title: this.formNameRecieved,
					htmlObject: tempModel,
					enable: this.enableForm,
					frequency: this.frequency,
					configure: d,
					check: this.isHidden,
					formId: this.mainFormId,
					formCategoryId: this.formCategories._id
				};

				this.dynamicFormsService
					.savedFormPut(this.formIdRec, data)
					.subscribe((res) => {
						Swal.fire('Form Update successfully');
						this.router.navigate([
							'/admin/dynamic/savedDynamicFormTable/' +
								this.mainFormId
						]);
						this.previewform.reset();
					});
			} else {
				Swal.fire('Please Add Atleast One Field');
			}
		}
	}
	duplicate(i, j) {
		const modelFields: Array<field> = [];
		const modelRow = {
			attributes: modelFields
		};

		this.model[i].attributes.forEach((element) => {
			this.fieldModels.forEach((field) => {
				if (element.type == field.type) {
					field.label = element.label;
					const temp = Object.assign({}, element);
					modelFields.push(temp);
				}
			});
		});

		this.model.splice(i + 1, 0, modelRow);
	}
	removeDuplicate(i, j) {
		this.model.splice(i, 1);

		for (let k = 0; k < this.model.length; k++) {
			if (this.model[i].length == this.model[k].length && i != k) {
				let notMatch = false;
				for (let l = 0; l < this.model[k].attributes.length; l++) {
					if (
						this.model[k].attributes[l].type ==
							this.model[i].attributes[j].type &&
						this.model[k].attributes[l].label ==
							this.model[i].attributes[j].label
					) {
					} else {
						notMatch = true;
						break;
					}
				}
				if (!notMatch) {
				}
			}
		}
	}
}
