import { SetTitleService } from '../../../utils/services/set-title.service';
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

@Component({
  selector: 'app-saved-dynamic-form-data',
  templateUrl: './saved-dynamic-form-data.component.html',
  styleUrls: ['./saved-dynamic-form-data.component.scss']
})
export class SavedDynamicFormDataComponent implements OnInit {

  @ViewChildren('Signature') SignaturePad: QueryList<SignaturePad>;
  @ViewChild('projectManager') projectManager: ElementRef;
  projectMang:any;
  isHidden=false;
  check=false;
  configData:any;
  public signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 500,
    canvasHeight: 100,
  };
  value: value = {
    label: '',
    value: '',
  };
  bgTheme = {
    bgColor: '#ffffff',
    textColor: '#555555',
    bannerImage: '',
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
      handle: true,
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
      handle: true,
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
      handle: true,
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
      max: null,
    },
    {
      type: 'date',
      icon: 'fa-calendar',
      label: 'Date',
      placeholder: 'Date',
      className: 'form-control',
    },
    {
      type: 'datetime-local',
      icon: 'fa-calendar',
      label: 'DateTime',
      placeholder: 'Date Time',
      className: 'form-control',
    },
    {
      type: 'textarea',
      icon: 'fa-text-width',
      label: 'Textarea',
    },
    {
      type: 'externalLink',
      icon: 'fa-link',
      label: 'Add link',
      linkAddr: '',
    },
    {
      type: 'heading',
      icon: 'fa-heading',
      label: 'Heading',
      placeholder: 'This is Heading',
    },
    {
      type: 'paragraph',
      icon: 'fa-paragraph',
      label: 'Paragraph',
      placeholder: 'This is paragraph',
    },
    {
      type: 'addRemove',
      icon: 'fa-minus-circle',
      label: 'Add Remove',
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
          value: 'option-1',
        },
        {
          label: 'Option2',
          value: 'option-2',
        },
      ],
    },
    {
      type: 'radio',
      icon: 'fa-list-ul',
      label: 'Radio',
      description: 'Radio boxes',
      values: [
        {
          label: 'Option1',
          value: 'option-1',
        },
        {
          label: 'Option2',
          value: 'option-2',
        },
      ],
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
          value: 'option-1',
        },
        {
          label: 'Option 2',
          value: 'option-2',
        },
        {
          label: 'Option 3',
          value: 'option-3',
        },
      ],
    },
    {
      type: 'file',
      icon: 'fa-file',
      label: 'File Upload',
      className: 'form-control',
      subtype: 'file',
    },
    {
      type: 'signature',
      icon: 'fas fa-file-signature',
      label: 'Signature',
      // "className": "form-control",
      // "subtype": "file"
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
        ['', '', '', ''],
      ],
    },
    // {
    //   type: 'button',
    //   icon: 'fa-paper-plane',
    //   subtype: 'submit',
    //   label: 'Submit',
    // },
  ];
  type: string = '';
  formIdRec = '';
  rows = [];
  formData = [];
  tableIndexMap = new Map();
  //   modelFields:Array<field>=[];
  //  modelFields:Array<field>=[];

  model: any = [
    // {
    //   name: '',
    //   description: '',
    //   theme: {
    //     bgColor: '#ffffff',
    //     textColor: '#555555',
    //     bannerImage: '',
    //   },
    //   attributes: this.modelFields0,
    // },
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
  previewform:FormGroup;
  allJobNumbers:any;
  formNameRecieved = '';
  states:any;
  savedFormData:any
  constructor(
    public router: Router,
    private spinner: NgxSpinnerService,
    private logicalFormInfo: LogicalFormInfoService,
    private dynamicFormsService: DynamicFormsService,
    private setTitle: SetTitleService,
    private fb: FormBuilder,
    private activatedRoute:ActivatedRoute
  ) {
    this.riskAssessmentFb = this.fb.group({
      siteName:[''],
      customerName: [''],
      streetNo: [''],
      streetAddr: [''],
      subUrb: [''],
      statesSWMS: [''],
      custConct: [''],
      custConctPh:[''],
      custEmail: [''],
      jobNumber: ['']
    });
    this.previewform= this.fb.group({
      siteName:[''],
      customerName: [''],
      streetNo: [''],
      streetAddr: [''],
      subUrb: [''],
      statesSWMS: [''],
      custConct: [''],
      custConctPh:[''],
      custEmail: [''],
      jobNumber: ['']
    });
   }
   onChange2(eve)
   { 
     this.isHidden=eve.target.checked;
     console.log("eve",eve.target.checked);
   }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params =>{
      console.log("params",params)
      this.savedFormData=params
    })
    this.getAllProjectMang();
    this.getAllState();
    console.log(
      "sessionStorage.getItem('type')",
      sessionStorage.getItem('type')
    );
    this.setTitle.setTitle('WHS-Dynamic Forms');
    // this.dynamicFormsService.homebarTitle.next('Dynamic Forms');
    this.getAllJobNumber();
    if (this.savedFormData.type == 'add') {
      this.type = 'add';
      // if(this.dynamicFormsService.formType =='add'){
      // this.formNameRecieved = this.dynamicFormsService.formTitle;
      this.formNameRecieved = sessionStorage.getItem('formTitle');
      for (let i = 0; i < this.totalModels.length; i++) {
        let modelFields: Array<field> = [];
        let modelRow = {
          attributes: modelFields,
        };
        this.model.push(modelRow);
        console.log("model",this.model);
      }
    }
    if (this.savedFormData.type == 'edit') {
      // if(this.dynamicFormsService.formType =='edit'){
      // this.formNameRecieved = this.dynamicFormsService.formTitle;
      this.type = 'edit';

      // this.formIdRec=this.dynamicFormsService.formIdEdit;
      this.formIdRec = this.savedFormData.id;
      this.spinner.show();
      this.dynamicFormsService.getFormById(this.formIdRec).subscribe((res) => {
        console.log('form=>', res);
        this.model = [];
        this.formNameRecieved =res.data.title
        this.enableForm = res.data.enable;
        this.frequency = res.data.frequency;
        this.isHidden=res.data.check;
        // this.configData=res.data.configure[0];
        this.previewform.patchValue(res.data.configure[0]);
        res.data.htmlObject.forEach((item) => {
          this.model.push(item);
        });

        // this.formNameRecieved = res.data.title;
        // this.model.attributes = res.data.htmlObject;
        this.spinner.hide();
      });
    }
    if (this.savedFormData.type == 'view') {
      this.report = true;
      // if(this.dynamicFormsService.formType =='view'){
      // this.formNameRecieved = this.dynamicFormsService.formTitle;
      this.type = 'view';
      // this.formIdRec=this.dynamicFormsService.formIdEdit;
      this.formIdRec = this.savedFormData.id;
      this.spinner.show();
      this.dynamicFormsService.getFormById(this.formIdRec).subscribe((res) => {
        console.log('formView=>', res);
        this.formNameRecieved = res.data.title;
        this.model = res.data.htmlObject;
        // this.riskAssessmentFb.patchValue(res.data.configure[0])
        this.previewform.patchValue(res.data.configure[0])
        this.isHidden=res.data.check;
        console.log("is hidden",this.isHidden);
        this.spinner.hide();
      });
    }

    // this.route
    // .queryParams
    // .subscribe(params => {
    //   console.log("params",params['data'].type);

    //   if(params['type']=='add'){
    //     this.type = 'add';
    //     this.formNameRecieved = params['formName'];

    //     console.log( this.formNameRecieved);
    //   }
    //  if(params['type']=='edit'){
    //   this.type = 'edit';
    //   this.formIdRec=params['formId'];
    //   this.spinner.show();
    //    this.dynamicFormsService.getFormById(params['formId']).subscribe(res=>{
    //      console.log("form=>",res);
    //      this.formNameRecieved = res.data.title;
    //      this.model.attributes = res.data.htmlObject;
    //      this.spinner.hide();
    //    })
    //  }
    //  if(params['type']=='view'){
    //   this.type = 'view';
    //   this.spinner.show();
    //    this.dynamicFormsService.getFormById(params['formId']).subscribe(res=>{
    //      console.log("form=>",res);
    //      this.report = true;
    //      this.model.attributes = res.data.htmlObject;
    //      this.spinner.hide();
    //    })
    //  }

    // });
    //  this.formNameRecieved= this.dynamicFormsService.formNameRecieved;

    // this.route.params.subscribe( params =>{
    //   console.log(params);
    //   this.us.getDataApi('/admin/getFormById',{id:params.id}).subscribe(r=>{
    //     console.log(r);
    //     this.model = r['data'];
    //   });
    // });

    // this.model = this.cs.data;
    // console.log(this.model.data);
  }
  addDragAndDropRow(position, index) {
    let modelFields: Array<field> = [];
    let modelRow = {
      attributes: modelFields,
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
        confirmButtonText: 'Yes, remove!',
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

    if (list && (event.dropEffect === 'copy' || event.dropEffect === 'move')) {
      if (event.dropEffect === 'copy')
        event.data.name = event.data.type + '-' + new Date().getTime();
      let index = event.index;
      if (typeof index === 'undefined') {
        index = list.length;
      }
      list.splice(index, 0, event.data);

      console.log('event.data.type ', event.data.type);

      // if (event.data.type == 'table') {
      //   let tablendex = 0;
      //   this.tableIndexMap.clear();

      //   this.model.attributes.forEach((element, i) => {
      //     console.log(element.type);

      //     if (element.type == 'table') {
      //       console.log(element.type);

      //       this.tableIndexMap.set(i, tablendex);
      //       tablendex++;
      //     }
      //   });

      //   let tempRow = [
      //     ['', '', '', ''],
      //     ['', '', '', ''],
      //     ['', '', '', ''],
      //     ['', '', '', ''],
      //   ];

      //   this.rows.splice(this.tableIndexMap.get(event.index), 0, tempRow);
      // }

      console.log(this.rows);

      // if(event.data.type =="table"){

      // this.rows.push(tempRows)

      // }
      // let tablendex=0;
      // this.tableIndexMap.clear();
      //     this.model.attributes.forEach((element,i )=> {
      //   if(element.type == 'table'){
      //     index++;
      //     this.tableIndexMap.set(i,index);
      //     ///this.rows.push(tempRows)
      //   }
      // });

      // console.log('table Map', this.tableIndexMap);
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
      confirmButtonText: 'Yes, remove!',
    }).then((result) => {
      if (result.value) {
        console.log('this.model.attributes[i]', this.model[j].attributes[i]);

        if (this.model[j].attributes[i].type == 'table') {
          console.log('table found', i);
          let index = this.tableIndexMap.get(i);

          this.rows.splice(index, 1);
        }
        this.model[j].attributes.splice(i, 1);

        // let index = this.tableIndexMap.get(i);
        // this.rows.splice();
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
    console.log("this.riskAssessmentFb.get('jobNumber').value",this.riskAssessmentFb.get('jobNumber').value);
    
    this.allJobNumbers.forEach((item) => {
      if (this.riskAssessmentFb.get('jobNumber').value === item._id) {
        console.log('Id found', item);
        // this.configData=item;
        this.riskAssessmentFb.patchValue({
          siteName: item.siteName,
          customerName: item.customerName,
          streetNo: item.streetNumber,
          streetAddr: item.streetAddress,
          subUrb: item.suburb,
          statesSWMS: item.stateId._id,
          custConct: item.customerContact,
          custConctPh: item.customerContactPhone,
          custEmail: item.customerEmail,
          jobNumber: this.riskAssessmentFb.get('jobNumber').value,
        });
      }
    });
    this.riskAssessmentFb.get('jobNumber').updateValueAndValidity();
  }

  jobNoSel1() {
    console.log("this.riskAssessmentFb.get('jobNumber').value",this.riskAssessmentFb.get('jobNumber').value);
    
    this.allJobNumbers.forEach((item) => {
      if (this.previewform.get('jobNumber').value === item._id) {
        console.log('Id found', item);
        // this.configData=item;
        this.previewform.patchValue({
          siteName: item.siteName,
          customerName: item.customerName,
          streetNo: item.streetNumber,
          streetAddr: item.streetAddress,
          subUrb: item.suburb,
          statesSWMS: item.stateId._id,
          custConct: item.customerContact,
          custConctPh: item.customerContactPhone,
          custEmail: item.customerEmail,
          jobNumber: this.previewform.get('jobNumber').value,
        });
      }
    });
    this.previewform.get('jobNumber').updateValueAndValidity();
  }
  updateForm() {
    let input = new FormData();
    //   input.append('id', this.model._id);
    //  input.append('name', this.model.name);
    //input.append('description', this.model.description);
    //  input.append('bannerImage', this.model.theme.bannerImage);
    //  input.append('bgColor', this.model.theme.bgColor);
    // input.append('textColor', this.model.theme.textColor);
    input.append('attributes', JSON.stringify(this.model.attributes));

    // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
    //   console.log(r);
    //   Swal.fire('Success','App updated successfully','success');
    // });
  }

  initReport() {
    //  console.log('model.attributes=>', this.model);
    this.configData={...this.riskAssessmentFb.value}
    console.log("config",this.configData);
    console.log("hidden",this.isHidden);
    if(this.configData && this.isHidden)
    {
      console.log("check hidden",this.isHidden);
      
      if(this.type=='add')
      {
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
      else
      {
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
    this.check=true;
    // this.isHidden=true;
    this.report = true;
    this.formData = [];
    for (let j = 0; j < this.model[0].attributes.length; j++) {
      let temp = [];
      for (let i = 0; i < this.model.length; i++) {
        temp.push(this.model[i].attributes[j]);
      }
      this.formData.push(temp);

    }
    // console.log('formData', this.formData);

    // let input = {
    //   id:this.model._id
    // }
    // this.us.getDataApi('/admin/allFilledForms',input).subscribe(r=>{
    //   this.reports = r.data;
    //   console.log('reports',this.reports);
    //   this.reports.map(records=>{
    //     return records.attributes.map(record=>{
    //       if(record.type=='checkbox'){
    //         record.value = record.values.filter(r=>r.selected).map(i=>i.value).join(',');
    //       }
    //     })
    //   });
    // });
  }

  toggleValue(item) {
    item.selected = !item.selected;
  }
  showData() {
    this.show = !this.show;
  }
  regexErr = [];
  submit() {
    let allTableHeadings = Array.from(
      document.querySelectorAll('.tableHeadings')
    );
    let allTableRows = Array.from(document.querySelectorAll('.tableRows'));
    allTableHeadings.forEach((element: any) => {
      console.log('allTableHeadings.value', element.value);
    });
    allTableRows.forEach((element: any) => {
      console.log('allTableRows.value', element.value);
    });
    //  console.log("heading=>",t[0]);

    console.log('model', this.model);
    console.log('thsi.riskAssessmentFb', this.riskAssessmentFb.value);
    this.regexErr = [];

    this.submitBtn = true;
    let valid = true;
    /* commenting for future use
    console.log('this.model.attributes', this.model.attributes);
    let validationArray = JSON.parse(JSON.stringify(this.model.attributes));
    validationArray.reverse().forEach((field, index) => {
      console.log(field.label + '=>' + field.required + '=>' + field.value);
      // if(field.required && !field.value && field.type != 'checkbox'){
      //   console.log("field.required ",field.required );
      //   console.log("!field.value",!field.value);
      //   console.log("field",field);

      //   Swal.fire('Error','Please enter '+field.label,'error');
      //   valid = false;
      //   return false;
      // }
      console.log(
        'field.regex',
        field.regex + 'field.label',
        field.label + 'index',
        index
      );

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
    console.log(this.regexErr);

    if (!valid) {
      return false;
    }
    console.log('Save', this.model);
    let input = new FormData();
    input.append('formId', this.model._id);
    input.append('attributes', JSON.stringify(this.model.attributes));*/
    //////////////////upto this//////////
    // this.us.postDataApi('/user/formFill',input).subscribe(r=>{
    //   console.log(r);
    //   Swal.fire('Success','You have contact sucessfully','success');
    //   this.success = true;
    // },error=>{
    //   Swal.fire('Error',error.message,'error');
    // });
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
    let indexOfSignature = new Map();
    let index = 0;

    this.model.forEach((modelRow, k) => {
      modelRow.attributes.forEach((element, l) => {
        if (element.type == 'signature') {
          let myIndex = k.toString() + l.toString();
          indexOfSignature.set(myIndex, index);
          index++;
        }
      });
    });

    let temp = i.toString() + j.toString();//making unique code
    let m = indexOfSignature.get(temp);

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

    // console.log(this.tableIndexMap);

    // console.log('add col', i);
    // let index = this.tableIndexMap.get(i);
    // let tempRow = this.rows[index];
    // tempRow.forEach((row) => {
    //   row.push('');
    // });
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
    // let index = this.tableIndexMap.get(i);

    // console.log('remove col', i);
    // let tempRow = this.rows[index];

    // if (tempRow[0].length > 1) {
    //   tempRow.forEach((row) => {
    //     row.pop();
    //   });
    // }
  }
  addRow(j, i) {
    let arr = [];
    for (let k = 0; k < this.model[j].attributes[i].tableRows[0].length; k++) {
      arr.push('');
    }
    this.model[j].attributes[i].tableRows.push(arr);
    // console.log('add row', i);
    // let index = this.tableIndexMap.get(i);
    // let tempRow = this.rows[index];

    // let arr = [];
    // for (let i = 0; i < tempRow[0].length; i++) {
    //   arr.push('');
    // }
    // this.rows[index].push(arr);
  }
  removeRow(j, i) {
    // let index = this.tableIndexMap.get(i);
    if (this.model[j].attributes[i].tableRows.length > 1)
      this.model[j].attributes[i].tableRows.pop();
  }
  setProjectManager(value,e){
    if(value === 'projectManagerSWMS'){
      this.riskAssessmentFb.get('projectManager').setValue(e.target.value);
    }
    if(value === 'projectManager'){
      console.log('setProjectManager==>',this.projectManager)
      this.riskAssessmentFb.get('projectManagerSWMS').setValue(e.target.value);
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
    console.log("model",this.model);
    
    if(!this.isHidden)
     {
       console.log("isHidden",this.isHidden);
       
       this.previewform.reset();
     }
    if (this.type == 'edit') {
      console.log('add', this.model);
let tempModel=[];
this.model.forEach(element => {
  if(element.attributes.length){
    tempModel.push(element)
  }
});
console.log(tempModel);
if(tempModel.length)
{
       const d=[];
       d.push(this.previewform.value);
       console.log("d",d);
       
      let data = {
        title: this.formNameRecieved,
        frequency:  this.frequency,
        htmlObject:tempModel ,
        configure:d,
        check:this.isHidden,
        formId:this.formIdRec


        // "formId": "61ce9d44fcd37d281059e302"
        // "title": "dynamic form",
        // "htmlObject": [],
        // "configure": [],
        // "frequency": "yearly"

      };
    console.log("data",data);

      this.dynamicFormsService.savedFormPost(data).subscribe((res) => {
        Swal.fire('Form Submit successfully');
        this.router.navigate(['/admin/dynamicFormsList']);
        this.previewform.reset();
      })
    }
    else
    {
      Swal.fire('Please Add Atleast One Field');
    }
    }
  //   if (this.type == 'add') {
  //     console.log('edit');
  //     let tempModel=[];
  //     this.model.forEach(element => {
  //       if(element.attributes.length){
  //         tempModel.push(element)
  //       }
  //     });
  //     console.log(tempModel);
  //     if(tempModel.length)
  //     {
  //     const d=[];
  //     d.push(this.previewform.value);
  //     console.log("d",d);
  //     let data = {
  //       title: this.formNameRecieved,
  //       htmlObject: tempModel,
  //       enable: this.enableForm,
  //       frequency: this.frequency,
  //       configure:d,
  //       check:this.isHidden
  //     };

  //     this.dynamicFormsService
  //       .editForm(data, this.formIdRec)
  //       .subscribe((res) => {
  //         Swal.fire('Form edited successfully');
  //         this.router.navigate(['/admin/dynamicFormsList']);
  //         this.previewform.reset();
  //       });
  //   }
  //   else
  //   {
  //     Swal.fire('Please Add Atleast One Field');
  //   }
  // }
  }
  duplicate(i, j) {
    console.log('duplicate', i, j, this.model[i].attributes);
    let modelFields: Array<field> = [];
    let modelRow = {
      attributes: modelFields,
    };

    this.model[i].attributes.forEach((element) => {
      this.fieldModels.forEach((field) => {
        if (element.type == field.type) {
          console.log('field', field);
          field.label = element.label;
          let temp = Object.assign({}, element);
          modelFields.push(temp);
        }
      });
    });

    this.model.splice(i + 1, 0, modelRow);
  }
  removeDuplicate(i, j) {
    console.log('remove duplicate', i, j);
    console.log(this.model)
    console.log(this.model[i])
    this.model.splice(i, 1);

    for (let k = 0; k < this.model.length; k++) {
      if (this.model[i].length == this.model[k].length && i != k) {
        let notMatch = false;
        for (let l = 0; l < this.model[k].attributes.length; l++) {
          if (this.model[k].attributes[l].type == this.model[i].attributes[j].type
            && this.model[k].attributes[l].label == this.model[i].attributes[j].label) {

          }
          else {
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
