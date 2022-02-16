import { SetTitleService } from './../../utils/services/set-title.service';
import {
	Component,
	ElementRef,
	OnInit,
	QueryList,
	ViewChild,
	ViewChildren
} from '@angular/core';
import { field, value } from './global.model';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { SignaturePad } from 'angular2-signaturepad';
import Swal from 'sweetalert2';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { error } from 'protractor';
import { templateJitUrl } from '@angular/compiler';
@Component({
	selector: 'app-dynamic-form',
	templateUrl: './dynamic-form.component.html',
	styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
	@ViewChildren('Signature') SignaturePad: QueryList<SignaturePad>;
	@ViewChild('projectManager') projectManager: ElementRef;
	projectMang: any;
	isHidden = false;
	check = false;
	configData: any;
	public signaturePadOptions: Object = {
		// passed through to szimek/signature_pad constructor
		minWidth: 1,
		canvasWidth: 980,
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
			//  placeholder: 'Type your text to display here only',
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
			label: 'Signature',
			// "className": "form-control",
			// "subtype": "file"
			value: ''
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

	model: any = [
		// {
		//   name: '',
		//   description: '',
		//   theme: {
		//     bgColor: '#ffffff',
		//     textColor: '#555555',
		//     bannerImage: '',
		//   },
		//   attributes: this.modelFields1,
		// },
	];
	totalModels = ['', '', '', '', ''];
	report = false;
	reports: any = [];
	riskAssessmentFb!: FormGroup;
	previewform: FormGroup;
	allJobNumbers: any;
	formNameRecieved = '';
	states: any;
	formCategories: any;
	constructor(
		public router: Router,
		private spinner: NgxSpinnerService,
		private logicalFormInfo: LogicalFormInfoService,
		private dynamicFormsService: DynamicFormsService,
		private setTitle: SetTitleService,
		private fb: FormBuilder
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
	onChange2(eve) {
		this.isHidden = eve.target.checked;
		console.log('eve', eve.target.checked);
	}
	ngOnInit() {
		this.getAllProjectMang();
		this.getAllState();
		console.log(
			"sessionStorage.getItem('type')",
			sessionStorage.getItem('type')
		);
		this.setTitle.setTitle('WHS-Dynamic Forms');
		// this.dynamicFormsService.homebarTitle.next('Dynamic Forms');
		this.getAllJobNumber();
		if (sessionStorage.getItem('type') == 'add') {
			this.type = 'add';
			// if(this.dynamicFormsService.formType =='add'){
			// this.formNameRecieved = this.dynamicFormsService.formTitle;
			this.formNameRecieved = sessionStorage.getItem('formTitle');
			this.formCategories = JSON.parse(
				sessionStorage.getItem('formCategories')
			);
			console.log('formCategories', this.formCategories.title);

			for (let i = 0; i < this.totalModels.length; i++) {
				const modelFields: Array<field> = [];
				const modelRow = {
					attributes: modelFields
				};
				this.model.push(modelRow);
				console.log('model', this.model);
			}
		}
		if (sessionStorage.getItem('type') == 'edit') {
			this.formNameRecieved = sessionStorage.getItem('formTitle');
			this.type = 'edit';

			this.formIdRec = sessionStorage.getItem('formId');
			void this.spinner.show();
			this.dynamicFormsService
				.getFormById(this.formIdRec)
				.subscribe((res) => {
					console.log('form=>', res);
					this.model = [];
					this.enableForm = res.data.enable;
					this.frequency = res.data.frequency;
					this.isHidden = res.data.check;
					this.formCategories = res.data.formCategoryId;
					this.riskAssessmentFb.patchValue(res.data.configure[0]);
					res.data.htmlObject.forEach((item) => {
						this.model.push(item);
					});

					void this.spinner.hide();
				});
		}
		if (sessionStorage.getItem('type') == 'view') {
			this.report = true;
			this.formNameRecieved = sessionStorage.getItem('formTitle');
			this.type = 'view';
			this.formIdRec = sessionStorage.getItem('formId');
			void this.spinner.show();
			this.dynamicFormsService
				.getFormById(this.formIdRec)
				.subscribe((res) => {
					console.log('formView=>', res);
					this.formNameRecieved = res.data.title;
					this.model = res.data.htmlObject;
					this.previewform.patchValue(res.data.configure[0]);
					this.isHidden = res.data.check;
					this.formCategories = res.data.formCategoryId;
					console.log('is hidden', this.isHidden);
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
			// console.log('getAllProjectMang=>', this.projectMang);
		});
	}
	onDragStart(event: DragEvent) {
		//  console.log('drag started', JSON.stringify(event, null, 2));
	}

	onDragEnd(event: DragEvent) {
		// console.log('drag ended', JSON.stringify(event, null, 2));
	}

	onDraggableCopied(event: DragEvent) {
		//  console.log('draggable copied', JSON.stringify(event, null, 2));
	}

	onDraggableLinked(event: DragEvent) {
		// console.log('draggable linked', JSON.stringify(event, null, 2));
	}

	onDragged(item: any, list: any[], effect: DropEffect) {
		if (effect === 'move') {
			const index = list.indexOf(item);
			list.splice(index, 1);
		}
	}

	onDragCanceled(event: DragEvent) {
		//  console.log('drag cancelled', JSON.stringify(event, null, 2));
	}

	onDragover(event: DragEvent) {
		//   console.log('dragover', JSON.stringify(event, null, 2));
	}

	onDrop(event: DndDropEvent, list?: any[]) {
		console.log('event', event);
		console.log('list', list);

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

			console.log('event.data.type ', event.data.type);

			console.log(this.rows);
		}
	}

	addValue(values) {
		values.push(this.value);
		this.value = { label: '', value: '' };
	}
	deleteItem() {
		console.log('delete');
	}
	removeField(j, i, item) {
		console.log('item', item);

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
				console.log(
					'this.model.attributes[i]',
					this.model[j].attributes[i]
				);

				if (this.model[j].attributes[i].type == 'table') {
					console.log('table found', i);
					const index = this.tableIndexMap.get(i);

					this.rows.splice(index, 1);
				}
				this.model[j].attributes.splice(i, 1);
			}
		});

		console.log(i);
	}
	getAllJobNumber() {
		this.logicalFormInfo.getAllJobNumber().subscribe((res: any) => {
			this.allJobNumbers = res.data;
		});
	}
	jobNoSel() {
		console.log(
			"this.riskAssessmentFb.get('jobNumber').value",
			this.riskAssessmentFb.get('jobNumber').value
		);

		this.allJobNumbers.forEach((item) => {
			if (this.riskAssessmentFb.get('jobNumber').value === item._id) {
				console.log('Id found', item);
				this.riskAssessmentFb.patchValue({
					siteName: item.siteName,
					customerName: item.customerName,
					streetNo: item.streetNumber,
					streetAddr: item.streetAddress,
					subUrb: item.suburb,
					postcode: item.postcode,
					statesSWMS: item.stateId._id,
					custConct: item.customerContact,
					custConctPh: item.customerContactPhone,
					custEmail: item.customerEmail,
					jobNumber: this.riskAssessmentFb.get('jobNumber').value
				});
			}
		});
		this.riskAssessmentFb.get('jobNumber').updateValueAndValidity();
	}

	jobNoSel1() {
		console.log(
			"this.riskAssessmentFb.get('jobNumber').value",
			this.riskAssessmentFb.get('jobNumber').value
		);

		this.allJobNumbers.forEach((item) => {
			if (this.previewform.get('jobNumber').value === item._id) {
				console.log('Id found', item);
				this.previewform.patchValue({
					siteName: item.siteName,
					customerName: item.customerName,
					streetNo: item.streetNumber,
					streetAddr: item.streetAddress,
					subUrb: item.suburb,
					postcode: item.postcode,
					statesSWMS: item.stateId._id,
					custConct: item.customerContact,
					custConctPh: item.customerContactPhone,
					custEmail: item.customerEmail,
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
		this.configData = { ...this.riskAssessmentFb.value };
		console.log('config', this.configData);
		console.log('hidden', this.isHidden);
		if (this.configData && this.isHidden) {
			console.log('check hidden', this.isHidden);

			if (this.type == 'add') {
				this.previewform.patchValue({
					siteName: this.configData.siteName,
					customerName: this.configData.customerName,
					streetNo: this.configData.streetNo,
					streetAddr: this.configData.streetAddr,
					subUrb: this.configData.subUrb,
					postcode: this.configData.postcode,
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
					postcode: this.configData.postcode,
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
		// console.log('formData', this.formData);
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
		allTableHeadings.forEach((element: any) => {
			console.log('allTableHeadings.value', element.value);
		});
		allTableRows.forEach((element: any) => {
			console.log('allTableRows.value', element.value);
		});
		//  console.log("heading=>",t[0]);

		console.log('model', this.model);

		this.regexErr = [];

		this.submitBtn = true;
		const valid = true;
	}

	ngAfterViewInit() {
		console.log(this.SignaturePad.toArray());
		console.log(this.SignaturePad.toArray()[0]);
	}
	drawComplete() {
		// will be notified of szimek/signature_pad's onEnd event
		// console.log(this.signaturePad1.toDataURL());
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
	}
	drawStart() {
		// will be notified of szimek/signature_pad's onBegin event
		console.log('begin drawing');
	}

	////table//add row column
	addCol(j, i) {
		console.log(this.model[j].attributes);

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
			console.log('setProjectManager==>', this.projectManager);
			this.riskAssessmentFb
				.get('projectManagerSWMS')
				.setValue(e.target.value);
		}
	}
	getAllState() {
		this.logicalFormInfo.getAllStates().subscribe((res: any) => {
			console.log('getAllStates=>', res);
			this.states = res.data;
		});
	}
	changeValueTH(e, i, j, l) {
		this.model[i].attributes[j].tableHeading[l] = e.target.value;
	}
	addForm() {
		console.log('model', this.model);

		if (!this.isHidden) {
			console.log('isHidden', this.isHidden);

			this.riskAssessmentFb.reset();
		}
		if (this.type == 'add') {
			console.log('add', this.model);
			const tempModel = [];
			this.model.forEach((element) => {
				if (element.attributes.length) {
					tempModel.push(element);
				}
			});
			console.log(tempModel);
			if (tempModel.length) {
				const d = [];
				d.push(this.riskAssessmentFb.value);
				console.log('d', d);

				const data = {
					title: this.formNameRecieved,
					frequency: sessionStorage.getItem('frequency'),
					htmlObject: tempModel,
					configure: d,
					check: this.isHidden,
					formCategoryId: this.formCategories._id
				};
				console.log('data', data);

				this.dynamicFormsService.addForm(data).subscribe((res) => {
					Swal.fire('Form added successfully');
					this.router.navigate(['/admin/dynamic/dynamicFormsList']);
					this.riskAssessmentFb.reset();
				});
			} else {
				Swal.fire('Please Add Atleast One Field');
			}
		}
		if (this.type == 'edit') {
			console.log('edit');
			const tempModel = [];
			this.model.forEach((element, i) => {
				console.log('element', element);
				element.attributes[0].value = '';
				if (element.attributes.length) {
					tempModel.push(element);
				}
			});
			console.log(tempModel);
			if (tempModel.length) {
				const d = [];
				d.push(this.riskAssessmentFb.value);
				console.log('d', d);
				const data = {
					title: this.formNameRecieved,
					htmlObject: tempModel,
					enable: this.enableForm,
					frequency: this.frequency,
					configure: d,
					check: this.isHidden,
					formCategoryId: this.formCategories._id
				};

				this.dynamicFormsService
					.editForm(data, this.formIdRec)
					.subscribe((res) => {
						Swal.fire('Form edited successfully');
						this.router.navigate([
							'/admin/dynamic/dynamicFormsList'
						]);
						this.riskAssessmentFb.reset();
					});
			} else {
				Swal.fire('Please Add Atleast One Field');
			}
		}
	}
	duplicate(i, j) {
		console.log('duplicate', i, j, this.model[i].attributes);
		const modelFields: Array<field> = [];
		const modelRow = {
			attributes: modelFields
		};

		this.model[i].attributes.forEach((element) => {
			this.fieldModels.forEach((field) => {
				if (element.type == field.type) {
					console.log('field', field);
					field.label = element.label;
					const temp = Object.assign({}, element);
					modelFields.push(temp);
				}
			});
		});

		this.model.splice(i + 1, 0, modelRow);
	}
	removeDuplicate(i, j) {
		console.log('remove duplicate', i, j);
		console.log(this.model);
		console.log(this.model[i]);
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
