import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { field, value } from './global.model';
import { DndDropEvent,DropEffect} from 'ngx-drag-drop';
import { ActivatedRoute } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad';
import Swal from 'sweetalert2'
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @ViewChildren('Signature') SignaturePad:QueryList<SignaturePad>;
  public signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 500,
    canvasHeight: 100,
  };
  value:value={
    label:"",
    value:""
  };
  submitBtn =false;
  success = false;
  show=false;
  fieldModels:Array<field>=[
    {
      "type": "text",
      "icon": "fa-font",
      "label": "Text",
      "description": "Enter your name",
      "placeholder": "Enter your name",
      "className": "form-control",
      "subtype": "text",
      "regex" : "",
      "handle":true
    },
    {
      "type": "email",
      "icon": "fa-envelope",
      "required": true,
      "label": "Email",
      "description": "Enter your email",
      "placeholder": "Enter your email",
      "className": "form-control",
      "subtype": "text",
      "regex" : "^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]{2,5})$",
      "errorText": "Please enter a valid email",
      "handle":true
    },
    {
      "type": "phone",
      "icon": "fa-phone",
      "label": "Phone",
      "description": "Enter your phone",
      "placeholder": "Enter your phone",
      "className": "form-control",
      "subtype": "text",
      "regex" : "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$",
      "errorText": "Please enter a valid phone number",
      "handle":true
    },
    {
      "type": "number",
      "label": "Number",
      "icon": "fas fa-sort-numeric-up",
      "description": "Age",
      "placeholder": "Enter your age",
      "className": "form-control",
      "value": "20",
      "min": 12,
      "max": 90
    },
    {
      "type": "date",
      "icon":"fa-calendar",
      "label": "Date",
      "placeholder": "Date",
      "className": "form-control"
    },
    {
      "type": "datetime-local",
      "icon":"fa-calendar",
      "label": "DateTime",
      "placeholder": "Date Time",
      "className": "form-control"
    },
    {
      "type": "textarea",
      "icon":"fa-text-width",
      "label": "Textarea" 
    },
    {
      "type": "paragraph",
      "icon": "fa-paragraph",
      "label": "Paragraph",
      "placeholder": "Type your text to display here only" 
    },
    {
      "type": "checkbox",
      "required": true,
      "label": "Checkbox",
      "icon":"fa-list",
      "description": "Checkbox",
      "inline": true,
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        }
      ]
    },
    {
      "type": "radio",
      "icon":"fa-list-ul",
      "label": "Radio",
      "description": "Radio boxes",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        }
      ]
    },
    {
      "type": "autocomplete",
      "icon":"fa-bars",
      "label": "Select",
      "description": "Select",
      "placeholder": "Select",
      "className": "form-control",
      "values": [
        {
          "label": "Option 1",
          "value": "option-1"
        },
        {
          "label": "Option 2",
          "value": "option-2"
        },
        {
          "label": "Option 3",
          "value": "option-3"
        }
      ]
    },
    {
      "type": "file",
      "icon":"fa-file",
      "label": "File Upload",
      "className": "form-control",
      "subtype": "file"
    },
    {
      "type": "signature",
      "icon":"fas fa-file-signature",
      "label": "Signature",
     // "className": "form-control",
     // "subtype": "file"
    },
    // {
    //   "type": "table",
    //   "icon":"fas fa-file-signature",
    //   "label": "Table",
    //   "row": 3,
    //   "col": 3,  
    // },
    {
      "type": "button",
      "icon":"fa-paper-plane",
      "subtype": "submit",
      "label": "Submit"
    }
  ];

  modelFields:Array<field>=[];
  model:any = {
    name:'',
    description:'',
    theme:{
      bgColor:"#ffffff",
      textColor:"#555555",
      bannerImage:""
    },
    attributes:this.modelFields
  };

  report = false;
  reports:any = [];
  formNameRecieved="";
  categoryNameRecieved="";
  constructor(
    private route:ActivatedRoute,
    private dynamicFormsService:DynamicFormsService
  ) { }

  ngOnInit() {
 this.formNameRecieved= this.dynamicFormsService.formNameRecieved;
 this.categoryNameRecieved =this.dynamicFormsService.categoryNameRecieved;

    
   
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

  onDragStart(event:DragEvent) {
    console.log("drag started", JSON.stringify(event, null, 2));
  }
  
  onDragEnd(event:DragEvent) {
    console.log("drag ended", JSON.stringify(event, null, 2));
  }
  
  onDraggableCopied(event:DragEvent) {
    console.log("draggable copied", JSON.stringify(event, null, 2));
  }
  
  onDraggableLinked(event:DragEvent) {
    console.log("draggable linked", JSON.stringify(event, null, 2));
  }
    
   onDragged( item:any, list:any[], effect:DropEffect ) {
    if( effect === "move" ) {
      const index = list.indexOf( item );
      list.splice( index, 1 );
    }
  }
      
  onDragCanceled(event:DragEvent) {
    console.log("drag cancelled", JSON.stringify(event, null, 2));
  }
  
  onDragover(event:DragEvent) {
    console.log("dragover", JSON.stringify(event, null, 2));
  }
  
  onDrop( event:DndDropEvent, list?:any[] ) {
    if( list && (event.dropEffect === "copy" || event.dropEffect === "move") ) {
      
      if(event.dropEffect === "copy")
      event.data.name = event.data.type+'-'+new Date().getTime();
      let index = event.index;
      if( typeof index === "undefined" ) {
        index = list.length;
      }
      list.splice( index, 0, event.data );
    }
  }

  addValue(values){
    values.push(this.value);
    this.value={label:"",value:""};
  }
  deleteItem(){
    console.log("dedle");
    
  }
  removeField(i,item){
console.log("item",item);

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
        this.model.attributes.splice(i,1);
      }
    });

    console.log(i);
    
  }

  updateForm(){
    let input = new FormData;
    input.append('id',this.model._id);
    input.append('name',this.model.name);
    input.append('description',this.model.description);
    input.append('bannerImage',this.model.theme.bannerImage);
    input.append('bgColor',this.model.theme.bgColor);
    input.append('textColor',this.model.theme.textColor);
    input.append('attributes',JSON.stringify(this.model.attributes));

    // this.us.putDataApi('/admin/updateForm',input).subscribe(r=>{
    //   console.log(r);
    //   Swal.fire('Success','App updated successfully','success');
    // });
  }


  initReport(){
    this.report = true; 
    let input = {
      id:this.model._id
    }
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



  toggleValue(item){
    item.selected = !item.selected;
  }
  showData(){
    this.show=!this.show;
  }
  regexErr = [];
  submit(){
    this.regexErr = [];

    this.submitBtn =true;
    let valid = true;
    console.log("this.model.attributes",this.model.attributes);
    let validationArray = JSON.parse(JSON.stringify(this.model.attributes));
    validationArray.reverse().forEach((field,index) => {
     console.log(field.label+'=>'+field.required+"=>"+field.value);
      // if(field.required && !field.value && field.type != 'checkbox'){
      //   console.log("field.required ",field.required );
      //   console.log("!field.value",!field.value);
      //   console.log("field",field);
        
      //   Swal.fire('Error','Please enter '+field.label,'error');
      //   valid = false;
      //   return false;
      // }
console.log("field.regex",field.regex + "field.label",field.label+"index",index);

      if(field.required && field.regex){
        let regex = new RegExp(field.regex);
        if(regex.test(field.value) == false){
          // Swal.fire('Error',field.errorText,'error');
          // valid = false;
          // return false;
          this.regexErr[index]=true;
        }
      }else{
        this.regexErr[index]=false;

      }
      if(field.required && field.type == 'checkbox'){
        if(field.values.filter(r=>r.selected).length == 0){
          Swal.fire('Error','Please enterrr '+field.label,'error');
          valid = false;
          return false;
        }

      }
    });
    console.log(this.regexErr);
    
    if(!valid){
      return false;
    }
    console.log('Save',this.model);
    let input = new FormData;
    input.append('formId',this.model._id);
    input.append('attributes',JSON.stringify(this.model.attributes))
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
    let  index =0;

    for(let i=0;i<this.model.attributes.length;i++){
      
      if(this.model.attributes[i].type === 'signature'){
        indexOfSignature.set(i,index)
        index++;
      }
    }
    
    let j = indexOfSignature.get(k);
    
   this.SignaturePad.toArray()[j].clear()

  }
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
}
