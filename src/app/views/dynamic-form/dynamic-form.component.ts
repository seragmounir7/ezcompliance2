import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { field, value } from './global.model';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { ActivatedRoute } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad';
import Swal from 'sweetalert2';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  @ViewChildren('Signature') SignaturePad: QueryList<SignaturePad>;
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
      label: 'Click here',
      linkAddr: '',
    },
    {
      type: 'paragraph',
      icon: 'fa-paragraph',
      label: 'Paragraph',
      placeholder: 'Type your text to display here only',
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
          label: 'Option 1',
          value: 'option-1',
        },
        {
          label: 'Option 2',
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
          label: 'Option 1',
          value: 'option-1',
        },
        {
          label: 'Option 2',
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
      type: "table",
      icon:"fas fa-table",
    label: "Table",
      tableHeading:[' ',' ',' ',' '],
      tableRows:[
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', ''],
      ]
    },
    {
      type: 'button',
      icon: 'fa-paper-plane',
      subtype: 'submit',
      label: 'Submit',
    },
  ];
  type:string="";
  formIdRec="";
rows=[];
formData=[];
tableIndexMap= new Map();
//   modelFields:Array<field>=[];
//  modelFields:Array<field>=[];

  model:any =[
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
  totalModels=["","","","","","","","","","",]
  report = false;
  reports: any = [];
  formNameRecieved = '';
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private dynamicFormsService: DynamicFormsService
  ) {}

  ngOnInit() {  


    console.log(
      "sessionStorage.getItem('type')",
      sessionStorage.getItem('type')
    );

    this.dynamicFormsService.homebarTitle.next('Dynamic Forms');

    if (sessionStorage.getItem('type') == 'add') {
      this.type = 'add';
      // if(this.dynamicFormsService.formType =='add'){
      // this.formNameRecieved = this.dynamicFormsService.formTitle;
      this.formNameRecieved = sessionStorage.getItem('formTitle');
      for(let i=0;i<this.totalModels.length;i++){
        let   modelFields:Array<field>=[];
        let modelRow = {
       
          attributes: modelFields,
        };
        this.model.push(modelRow);
      }
    }
    if (sessionStorage.getItem('type') == 'edit') {
      // if(this.dynamicFormsService.formType =='edit'){
      this.formNameRecieved = sessionStorage.getItem('formTitle');
      // this.formNameRecieved = this.dynamicFormsService.formTitle;
      this.type = 'edit';

      // this.formIdRec=this.dynamicFormsService.formIdEdit;
      this.formIdRec = sessionStorage.getItem('formId');
      this.spinner.show();
      this.dynamicFormsService.getFormById(this.formIdRec).subscribe((res) => {
        console.log('form=>', res);
        this.model =[];

       res.data.htmlObject.forEach((item)=>{
        this.model.push(item)
       })
      
        // this.formNameRecieved = res.data.title;
        // this.model.attributes = res.data.htmlObject;
        this.spinner.hide();
      });
    }
    if (sessionStorage.getItem('type') == 'view') {
      this.report = true;
      // if(this.dynamicFormsService.formType =='view'){
      // this.formNameRecieved = this.dynamicFormsService.formTitle;
      this.formNameRecieved = sessionStorage.getItem('formTitle');
      this.type = 'view';
      // this.formIdRec=this.dynamicFormsService.formIdEdit;
      this.formIdRec = sessionStorage.getItem('formId');
      this.spinner.show();
      this.dynamicFormsService.getFormById(this.formIdRec).subscribe((res) => {
        console.log('form=>', res);
        this.formNameRecieved = res.data.title;
        this.model.attributes = res.data.htmlObject;
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
  addDragAndDropRow(position,index){
    let   modelFields:Array<field>=[];
    let modelRow = {
    
      attributes: modelFields,
    };
    if(position =='inTheEnd'){
      this.model.push(modelRow);
    }
    if(position =='inBetween'){
      this.model.splice(index+1,0,modelRow);
    }
    
  }
  removeDragAndDropRow(j){
    if(this.model.length>1)
    this.model.splice(j,1);
  }
  onDragStart(event: DragEvent) {
    console.log('drag started', JSON.stringify(event, null, 2));
  }

  onDragEnd(event: DragEvent) {
    console.log('drag ended', JSON.stringify(event, null, 2));
  }

  onDraggableCopied(event: DragEvent) {
    console.log('draggable copied', JSON.stringify(event, null, 2));
  }

  onDraggableLinked(event: DragEvent) {
    console.log('draggable linked', JSON.stringify(event, null, 2));
  }

  onDragged(item: any, list: any[], effect: DropEffect) {
    if (effect === 'move') {
      const index = list.indexOf(item);
      list.splice(index, 1);
    }
  }

  onDragCanceled(event: DragEvent) {
    console.log('drag cancelled', JSON.stringify(event, null, 2));
  }

  onDragover(event: DragEvent) {
    console.log('dragover', JSON.stringify(event, null, 2));
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


  initReport(){
    console.log("model.attributes=>",this.model);
    console.log("akaksks");
    this.report = true; 
    this.formData = [];
    for(let j=0;j<this.model[0].attributes.length;j++){
      let temp = [];
      for(let i=0;i<this.model.length;i++){
        temp.push( this.model[i].attributes[j]); 
      }
      this.formData.push(temp);
    }
console.log("formData",this.formData);

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
    let allTableHeadings =Array.from(document.querySelectorAll('.tableHeadings'))	;
    let allTableRows =Array.from(document.querySelectorAll('.tableRows'))	;
    allTableHeadings.forEach((element:any) => {
      console.log("allTableHeadings.value",element.value);      
    });
    allTableRows.forEach((element:any) => {
      console.log("allTableRows.value",element.value);      
    });
  //  console.log("heading=>",t[0]);  
    
    console.log("model",this.model);
    
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
  clear(k) {
    // this.SignaturePad.toArray()[i].clear();
    // this.SignaturePad.toArray()[i].clear();
    console.log(this.SignaturePad.toArray());

    let indexOfSignature = new Map();
    let index = 0;

    for (let i = 0; i < this.model.attributes.length; i++) {
      if (this.model.attributes[i].type === 'signature') {
        indexOfSignature.set(i, index);
        index++;
      }
    }

    let j = indexOfSignature.get(k);

    this.SignaturePad.toArray()[j].clear();
  }
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  ////table//add row column
  addCol(j,i) {
    console.log(this.model[j].attributes);
    
    this.model[j].attributes[i].tableHeading.push('');
    this.model[j].attributes[i].tableRows.forEach(item=>{
      item.push('')
    });

    // console.log(this.tableIndexMap);

    // console.log('add col', i);
    // let index = this.tableIndexMap.get(i);
    // let tempRow = this.rows[index];
    // tempRow.forEach((row) => {
    //   row.push('');
    // });
  }
  removeCol(j,i) {
    if(this.model[j].attributes[i].tableHeading.length>1 && this.model[j].attributes[i].tableRows[0].length>1){
      this.model[j].attributes[i].tableHeading.pop();
      this.model[j].attributes[i].tableRows.forEach(item=>{
        item.pop();
      })
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
  addRow(j,i) {
    
    
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
  removeRow(j,i) {
    // let index = this.tableIndexMap.get(i);
    if ( this.model[j].attributes[i].tableRows.length > 1)
    this.model[j].attributes[i].tableRows.pop();
  }

  changeValueTH(e,i,j,l){
console.log("event.target.value",e);
// console.log("event.target.value",e.target.value);
console.log("i",i);
console.log("j",j);
console.log("l",l);
this.model[i].attributes[j].tableHeading[l]=e.target.value;
// console.log("this.model[i].attributes[j].tableHeading",this.model[i].attributes[j].tableHeading);
// console.log("this.model[i].attributes[j].tableHeading[l]",this.model[i].attributes[j].tableHeading[l]);
console.log("model=.",this.model);


  }
  addForm() {


    console.log('formAdded succesfully=>', this.model.attributes);

    let data = {
      title: this.formNameRecieved,
      htmlObject: this.model,
    };

    if (this.type == 'add') {
      console.log('add');

      this.dynamicFormsService.addForm(data).subscribe((res) => {
        console.log(res);
        Swal.fire('Form added successfully');
        this.router.navigate(['/admin/forms']);
      });
    }
    if (this.type == 'edit') {
      console.log('edit');

      let data = {
        title: this.formNameRecieved,
        htmlObject: this.model,
      };
      console.log("edit form data",data);
      
      this.dynamicFormsService
        .editForm(data, this.formIdRec)
        .subscribe((res) => {
          console.log(res);
          Swal.fire('Form edited successfully');
          this.router.navigate(['/admin/forms']);
        });
    }
  }

}




