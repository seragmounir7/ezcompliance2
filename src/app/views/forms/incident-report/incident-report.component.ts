import { Component, NgZone, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import Swal from 'sweetalert2';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { take } from 'rxjs/operators';
import moment from 'moment';


@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.component.html',
  styleUrls: ['./incident-report.component.scss'],
})
export class IncidentReportComponent implements OnInit {
  IncidentReport: FormGroup;
  fileData: any;
  data:any;
  staff:any;
  fileArr = [];
  imgArr = [];
  fileObj = [];
  PPEselection = [];
  ppeArr = [];
  changesArr = [];
  natureOfIncArr = [];
  incidentsArr = [];
  rootArr = [];
  allJobNumbers = [];
  @ViewChild('signature') signaturePad: SignaturePad;
  @ViewChild('signature1') signaturePad1: SignaturePad;
  maxDate = new Date();
  minDate = new Date();
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  projMan: any;
  projectMang: any;
  typeOfInc: [];
  root: any;
  PPE= [];
  changes = [];
  rootCauseIncident = [];
  natureOFIncidents= [];
  incidents = [];
  ppeSelectedArr=[];
  changesSelectedArr=[];
  natureOfIncSelectedArr=[];
  typeOfIncidentsSelectedArr=[];
  rootSelectedArr=[];
  id: string;
  dataUrl: any;
  selectedImage: string;
  singRequired: any;
  singRequired1: any;
  constructor(
    private fb: FormBuilder,
    private dynamicFormsService: DynamicFormsService,
    private logicalFormInfo: LogicalFormInfoService,
    private activatedRoute: ActivatedRoute,
    private setTitle:SetTitleService,
    public upload: UploadFileServiceService,
    private router: Router,
    private ngZone: NgZone,
  ) {
    this.IncidentReport = this.fb.group({
      incidents: this.fb.array([]),
      natureOFIncidents: this.fb.array([]),
      PPE: this.fb.array([]),
      rootCauseIncident: this.fb.array([]),
      changes: this.fb.array([]),
      arrObj: this.fb.array([]),
      //correctAction: ['', Validators.required],
     // complete: ['', Validators.required],
     // date: ['', Validators.required],
      jobNumber: ['', Validators.required],
      projectName: ['', Validators.required],
      siteName: ['', Validators.required],
      customerName: ['', Validators.required],
      streetAddress: ['', Validators.required],
      customerContact: ['', Validators.required],
      projectManager: ['', Validators.required],
      personCompletingForm: ['', Validators.required],
      customerContactPhone: ['', Validators.required],
      customerEmail: ['', Validators.required],
      dateOfFormCompletion: ['', Validators.required],
      name: ['', Validators.required],
      department: ['', Validators.required],
      position: ['', Validators.required],
      locationOfTheIncident: ['', Validators.required],
      dateOfTheIncident: ['', Validators.required],
      timeOfTheIncident: ['', Validators.required],
      whyDidtheUnsafeConditonExist: ['',],
      completedName: ['', Validators.required],
      completedPosition: ['', Validators.required],
      completedDepartment: ['', Validators.required],
      completedDate: ['', Validators.required],
      reviewedName: ['', Validators.required],
      reviewedPosition: ['', Validators.required],
      reviewedDepartment: ['', Validators.required],
      reviewedDate: ['', Validators.required],
     // typeofIncident: ['', Validators.required],
      priorIncident: [''],
      similarIncident:[''],
      witnessStatement:['', Validators.required],
      nameOfWitness:['', Validators.required],
      file: [''],
      similarIncidentText:[''],
      priorIncidentText:[''],
      instructions:['Complete this form as soon as possible after an incident that results in serious inquiry or illness or death. Use to investigate a minor injuryor near-miss that could have resulted in a serious injury or illness.'],
      signaturePad:['',Validators.required],
      signaturePad1:['',Validators.required],
      changesMadeOther: [false],
      changesMadeOtherText: [''],
    });
    // this.IncidentReport = this.data;
    // this.IncidentReport.patchValue({
    //   incidents:this.data.incidents,
    //   PPE:this.data.PPE,
    //   natureOFIncidents:this.data.natureOFIncidents,
    //   rootCauseIncident:this.data.rootCauseIncident,
    //   changes:this.data.changes,
    //   arrObj:this.data.arrObj,
    //   correctAction:this.data.correctAction,
    // })
  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params.id;
    console.log("IncidentReport",this.IncidentReport);
    
    this.dynamicFormsService.homebarTitle.next('Incident Report Form');
    this.setTitle.setTitle('WHS-Incident Report Form');
    this.getAllJobNumber();
    this.getAllProjectMang();
    this.getAllChanges();
    this.getAllPPE();
    this.getAllTypeOfInc();
    this.getAllRoot();
    this.getAllNatureOfInc();
    this.getAllStaff();
    if(this.id!=='Form')
    {
      console.log("id",this.id);
      this.getIncidentsByid(this.id);
    }
    else
    {
      this.addAction();
     
    }
  }

  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
 
  add(): FormArray {
    return this.IncidentReport.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
      correctAction: ["",Validators.required],
      personRes: ['', Validators.required],
      complete: ["",Validators.required],
      date: ["",Validators.required],
    });
  }
  removeIncident(i) {
    const item = <FormArray>this.IncidentReport.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
    
    }
  }
  changeAdd(): FormArray {
    return this.IncidentReport.get('changes') as FormArray;
  }
  changeAction(index): FormGroup {
    return this.fb.group({
      [this.changes[index]._id]: ['',],
    });
  }
  

  incidentsAdd(): FormArray {
    return this.IncidentReport.get('incidents') as FormArray;
  }
  incidentsAction(index): FormGroup {
    return this.fb.group({
      [this.incidents[index]._id]: ['',],
    });
  }
  natureAdd(): FormArray {
    return this.IncidentReport.get('natureOFIncidents') as FormArray;
  }
  natureAction(index): FormGroup {
    return this.fb.group({
      [this.natureOFIncidents[index]._id]: ['',],
    });
  }
  ppeAdd(): FormArray {
    return this.IncidentReport.get('PPE') as FormArray;
  }
  ppeAction(index): FormGroup {
    return this.fb.group({
      [this.PPE[index]._id]: ['',],
    });
  }
  rootCauseIncidentAdd(): FormArray {
    return this.IncidentReport.get('rootCauseIncident') as FormArray;
  }
  rootCauseIncidentAction(index): FormGroup {
    return this.fb.group({
      [this.rootCauseIncident[index]._id]: ['',],
    });
  }
  
 
  jobNoSel() {
    this.allJobNumbers.forEach((item) => {
      if (this.IncidentReport.get('jobNumber').value === item._id) {
        console.log('Id found', item);
        this.IncidentReport.patchValue({
          jobNumber: this.IncidentReport.get('jobNumber').value,
          projectName: item.projectName,
          siteName: item.siteName,
          customerName: item.customerName,
          streetAddress: item.streetAddress,
          projectManager: item.projectManager,
          customerContact: item.customerContact,
          personCompletingForm: item.personCompletingForm,
          customerContactPhone: item.customerContactPhone,
          customerEmail: item.customerEmail,
        });
      }
    });
    this.IncidentReport.get('jobNumber').updateValueAndValidity();
  }
  getAllJobNumber() {
    this.logicalFormInfo.getAllJobNumber().subscribe((res: any) => {
      this.allJobNumbers = res.data;
      console.log("this.allJobNumbers",this.allJobNumbers);
      
    });
  }
  getAllProjectMang() {
    this.logicalFormInfo.getAllProjectMang().subscribe((res: any) => {
      this.projectMang = res.data;
      console.log('this.projectMang=>', this.projectMang);

    });
  }
  getAllPPE() {
    this.logicalFormInfo.getAllPPE().subscribe((res: any) => {
      console.log('PPE=>', res);
      this.PPE = res.data;
      for (let i = 0; i < this.PPE.length; i++) {
        this.ppeArr[i] = 0;
        this.ppeAdd().push(this.ppeAction(i))
      }
    });
  }
  getAllTypeOfInc() {
    this.logicalFormInfo.getAllTypeOfIncident().subscribe((res:any) => {
      console.log('typeOfIncident=>', res);
      this.incidents = res.data;
      for (let i = 0; i < this.incidents.length; i++) {
        this.incidentsArr[i] = 0;
        this.incidentsAdd().push(this.incidentsAction(i))
      }
    });
  }
  getAllRoot() {
    this.logicalFormInfo.getAllRootCause().subscribe((res:any) => {
      console.log('root=>', res);
      this.rootCauseIncident = res.data;
      for (let i = 0; i < this.rootCauseIncident.length; i++) {
        this.rootArr[i] = 0;
        this.rootCauseIncidentAdd().push(this.rootCauseIncidentAction(i))
      }
     
    });
  }
  getAllNatureOfInc() {
    this.logicalFormInfo.getAllNatOfInc().subscribe((res:any) => {
      console.log('NatOfIncAll=>', res);
      this.natureOFIncidents = res.data;
      for (let i = 0; i < this.natureOFIncidents.length; i++) {
        this.natureOfIncArr[i] = 0;
        this.natureAdd().push(this.natureAction(i))
       
      }
    });
  }
  getAllChanges() {
    this.logicalFormInfo.getAllChangesMade().subscribe((res:any) => {
      console.log('Changes=>', res);
      this.changes = res.data;
      this.changesArr = [];
      for (let i = 0; i < this.changes.length; i++) {
        this.changesArr[i] = 0;
        this.changeAdd().push(this.changeAction(i))
      }

    });
  }
 
  selectFile(event: any) {
    this.fileData = event.target.files[0];

    if (
      this.fileData.type == 'image/jpeg' ||
      this.fileData.type == 'application/pdf'
    ) {
    } else {
      alert('file type should be image of pdf');
      return;
    }
  }

  submit() {
    console.log(this.IncidentReport.value);
  }

  public signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 480,
    canvasHeight: 100,
  };
  public signaturePadOptions1: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 480,
    canvasHeight: 100,
  };

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.set('dotSize', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
    this.signaturePad1.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
    console.log("signnn",this.signaturePad);
    
    this.IncidentReport.controls['signaturePad'].setValue(this.signaturePad.toDataURL());
    this.singRequired = this.IncidentReport.controls['signaturePad'].invalid
    

  }
  drawComplete1() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad1.toDataURL());
    console.log("signnn",this.signaturePad1);
    this.IncidentReport.controls['signaturePad1'].setValue(this.signaturePad1.toDataURL());
    console.log("signaturePad1 control",this.IncidentReport.controls['signaturePad1'].value);
    this.singRequired1 = this.IncidentReport.controls['signaturePad1'].invalid

  }
  clear() {
    this.signaturePad.clear();
    this.singRequired = this.IncidentReport.controls['signaturePad1'].untouched
  }
  clear1() {
    console.log('cl1');

    this.signaturePad1.clear();
    this.singRequired1 = this.IncidentReport.controls['signaturePad1'].untouched
    
  }
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
    console.log("signaturePad control",this.IncidentReport.controls['signaturePad'].touched);
    //this.singRequired = this.IncidentReport.controls['signaturePad'].invalid
  }
  drawStart1() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
    //this.singRequired1 = this.IncidentReport.controls['signaturePad1'].invalid
    console.log('begin drawing',this.singRequired1);
  }
 

  // onChangeIncident(e: any) {
  //   const checkArray: FormArray = this.IncidentReport.get(
  //     'incidents'
  //   ) as FormArray;
  //   let item = e.target.value;
  //   if (e.target.checked) {
  //     checkArray.push(new FormControl(item));
  //     console.log(item);
  //   } else {
  //     let i: number = 0;
  //     checkArray.controls.forEach((item) => {
  //       if (item.value == e.target.value) {
  //         checkArray.removeAt(i);
  //       }
  //     });
  //   }
  // }
 
  // onNatureOFIncidents(e: any) {
  //   const NatureArray: FormArray = this.IncidentReport.get(
  //     'natureOFIncidents'
  //   ) as FormArray;
  //   let item = e.target.value;
  //   if (e.target.checked) {
  //     NatureArray.push(new FormControl(item));
  //     console.log(item);
  //   } else {
  //     let i: number = 0;
  //     NatureArray.controls.forEach((item) => {
  //       if (item.value == e.target.value) {
  //         NatureArray.removeAt(i);
  //       }
  //     });
  //   }
  // }

  
  // onPPE(e: any) {
    
  //   let item = e.target.value;
  //   if (e.target.checked) {
  //     this.ppeArr.push(item);
  //     console.log(item);
  //   } else {
  //     this.ppeArr.forEach((item,i) => {
  //       if (item.value == e.target.value) {
  //         this.ppeArr.splice(i,1);
  //       }
  //     });
  //   }
  // }
 
  // onRootCauseIncident(e: any) {
  //   const IncidentArray: FormArray = this.IncidentReport.get(
  //     'rootCauseIncident'
  //   ) as FormArray;
  //   let item = e.target.value;
  //   if (e.target.checked) {
  //     IncidentArray.push(new FormControl(item));
  //     console.log(item);
  //   } else {
  //     let i: number = 0;
  //     IncidentArray.controls.forEach((item) => {
  //       if (item.value == e.target.value) {
  //         IncidentArray.removeAt(i);
  //       }
  //     });
  //   }
  // }

 
  // onChanges(e: any) {
  //   const ChangeArray: FormArray = this.IncidentReport.get(
  //     'changes'
  //   ) as FormArray;
  //   let item = e.target.value;
  //   if (e.target.checked) {
  //     ChangeArray.push(new FormControl(item));
  //     console.log(item);
  //   } else {
  //     let i: number = 0;
  //     ChangeArray.controls.forEach((item) => {
  //       if (item.value == e.target.value) {
  //         ChangeArray.removeAt(i);
  //       }
  //     });
  //   }
  // }
  ppeSelected(e){
    let item = e.target.value;
    if (e.target.checked) {
      this.ppeSelectedArr.push(item);
    } else {
      this.ppeSelectedArr.forEach((item, j) => {
        if (item == e.target.value) {
          this.ppeSelectedArr.splice(j, 1);
          return;
        }
      });
    }
    console.log("ppeSelectedArr",this.ppeSelectedArr);
    
  }
  changesSelected(e,i){
    let item = e.target.value;
    if (e.target.checked) {
      this.changesSelectedArr.push(item);
    } else {
      this.changesSelectedArr.forEach((item, j) => {
        if (item == e.target.value) {
          this.changesSelectedArr.splice(j, 1);
          return;
        }
      });
    }
    if(!this.IncidentReport.get("changesMadeOther").value){
      this.IncidentReport.get("changesMadeOtherText").setValue("")
    }
    console.log("changesSelected",this.changesSelectedArr);
 
    
    
  }

  natureOfIncSelected(e){
    let item = e.target.value;
    if (e.target.checked) {
      this.natureOfIncSelectedArr.push(item);
    } else {
      this.natureOfIncSelectedArr.forEach((item, j) => {
        if (item == e.target.value) {
          this.natureOfIncSelectedArr.splice(j, 1);
          return;
        }
      });
    }
    console.log("natureOfIncSelectedArr",this.natureOfIncSelectedArr);
    
  }

  typeOfIncidentsSelected(e){
    let item = e.target.value;
    if (e.target.checked) {
      this.typeOfIncidentsSelectedArr.push(item);
    } else {
      this.typeOfIncidentsSelectedArr.forEach((item, j) => {
        if (item == e.target.value) {
          this.typeOfIncidentsSelectedArr.splice(j, 1);
          return;
        }
      });
    }
    console.log("natureOfIncSelectedArr",this.typeOfIncidentsSelectedArr);
    
  }

  rootSelected(e){
    let item = e.target.value;
    if (e.target.checked) {
      this.rootSelectedArr.push(item);
    } else {
      this.rootSelectedArr.forEach((item, j) => {
        if (item == e.target.value) {
          this.rootSelectedArr.splice(j, 1);
          return;
        }
      });
    }
    console.log("natureOfIncSelectedArr",this.rootSelectedArr);
    
  }
  getAllStaff(){
    this.logicalFormInfo.getAllStaff().subscribe((res:any)=> {
      this.staff=res.data;
      console.log("res",this.staff);
   })
  }

  getIncidentsByid(id)
  {
    this.logicalFormInfo.getIncidentReportById(id).subscribe((res:any)=>{
      console.log("getById",res);
     
      this.IncidentReport.patchValue({
        projectName:res.data.projectName,
        siteName:res.data.siteName,
        customerName: res.data.customerName,
        streetAddress:res.data.streetAddress,
        customerContact: res.data.customerContact,
        projectManager: res.data.projectManager,
        personCompletingForm: res.data.personCompletingForm,
        customerContactPhone: res.data.customerContactPhone,
        customerEmail: res.data.customerEmail,
        jobNumber: res.data.jobNumber,
        dateOfFormCompletion:res.data.dateOfFormCompletion,
        name:res.data.name,
        department:res.data.department,
        position:res.data.position,
        locationOfTheIncident:res.data.locationOfTheIncident,
        dateOfTheIncident:res.data.dateOfTheIncident,
        timeOfTheIncident:res.data.timeOfTheIncident,
        nameOfWitness:res.data.nameOfWitness,
        witnessStatement:res.data.witnessStatement,
        //file:res.data.file,
        whyDidtheUnsafeConditonExist:res.data.whyDidtheUnsafeConditonExist,
        priorIncident:res.data.priorIncident,
        similarIncident:res.data.similarIncident,
        completedName:res.data.completedName,
        completedPosition:res.data.completedPosition,
        completedDepartment:res.data.completedDepartment,
        completedDate:res.data.completedDate,
        reviewedName:res.data.reviewedName,
        reviewedPosition:res.data.reviewedPosition,
        reviewedDepartment:res.data.reviewedDepartment,
        reviewedDate:res.data.reviewedDate,
        similarIncidentText:res.data.similarIncidentText,
        priorIncidentText:res.data.priorIncidentText,
        changesMadeOther:res.data.changesMadeOther,
      changesMadeOtherText:res.data.changesMadeOtherText

      })
     this.selectedImage=res.data.file
     for (let index = 0; index < res.data.arrObj.length; index++) {
console.log("res.data.arrObj.length",res.data.arrObj.length);

      let key
      key=Object.keys( res.data.arrObj[index]);
      
      let changeIndex = this.changeAdd().length
      this.addAction();
     this.add().controls[index].get("complete").setValue(res.data.arrObj[index].complete)
     this.add().controls[index].get("correctAction").setValue(res.data.arrObj[index].correctAction)
     this.add().controls[index].get("date").setValue(res.data.arrObj[index].date)
     this.add().controls[index].get("personRes").setValue(res.data.arrObj[index].personRes)
    }
      for (let index = 0; index < res.data.changes.length; index++) {

        let key
        key=Object.keys( res.data.changes[index]);
        
        let changeIndex = this.changeAdd().length

       this.changeAdd().controls[index].get(key).setValue(res.data.changes[index][key])
      }
      for (let index = 0; index < res.data.PPE.length; index++) {

        let key
        key=Object.keys( res.data.PPE[index]);
        
        let changeIndex = this.changeAdd().length

       this.ppeAdd().controls[index].get(key).setValue(res.data.PPE[index][key])
      }
      for (let index = 0; index < res.data.incidents.length; index++) {

        let key
        key=Object.keys( res.data.incidents[index]);
        
        let changeIndex = this.changeAdd().length
;
       this.incidentsAdd().controls[index].get(key).setValue(res.data.incidents[index][key])
      }
      
      for (let index = 0; index < res.data.natureOFIncidents.length; index++) {

        let key
        key=Object.keys( res.data.natureOFIncidents[index]);
        
        let changeIndex = this.changeAdd().length

       this.natureAdd().controls[index].get(key).setValue(res.data.natureOFIncidents[index][key])
      }
      for (let index = 0; index < res.data.rootCauseIncident.length; index++) {
      
        let key
        key=Object.keys( res.data.rootCauseIncident[index]);
        
        let changeIndex = this.changeAdd().length

       this.rootCauseIncidentAdd().controls[index].get(key).setValue(res.data.rootCauseIncident[index][key])
      }

      // for (let index = 0; index < this.typeOfIncidentsSelectedArr.length; index++) {
      //   console.log("this.typeOfIncidentsSelectedArr.length",this.typeOfIncidentsSelectedArr.length);
        
      //   let typeOfIncidentsIndex = this.incidentsAdd().length
      //   console.log("typeOfIncidentsIndex",typeOfIncidentsIndex);
        
      //   this.incidentsAdd().push(this.incidentsAction());
      //   this.incidentsAdd().at(typeOfIncidentsIndex).get("id").setValue(this.typeOfIncidentsSelectedArr[index])
      // }
      // for (let index = 0; index < this.natureOfIncSelectedArr.length; index++) {
      //   console.log("this.natureOfIncSelectedArr.length",this.natureOfIncSelectedArr.length);
        
      //   let natureOfIncIndex = this.natureAdd().length
      //   console.log("typeOfIncidentsIndex",natureOfIncIndex);
        
      //   this.natureAdd().push(this.incidentsAction());
      //   this.natureAdd().at(natureOfIncIndex).get("id").setValue(this.natureOfIncSelectedArr[index])
      // }
      // for (let index = 0; index < this.ppeSelectedArr.length; index++) {
      //   console.log("this.ppeSelectedArr.length",this.ppeSelectedArr.length);
        
      //   let ppeIndex = this.ppeAdd().length
      //   console.log("ppeIndex",ppeIndex);
        
      //   this.ppeAdd().push(this.ppeAction());
      //   this.ppeAdd().at(ppeIndex).get("id").setValue(this.ppeSelectedArr[index])
      // }
      // for (let index = 0; index < this.rootSelectedArr.length; index++) {
      //   console.log("this.rootSelectedArr.length",this.rootSelectedArr.length);
        
      //   let rootIndex = this.rootCauseIncidentAdd().length
      //   console.log("rootIndex",rootIndex);
        
      //   this.rootCauseIncidentAdd().push(this.rootCauseIncidentAction());
      //   this.rootCauseIncidentAdd().at(rootIndex).get("id").setValue(this.rootSelectedArr[index])
      // }
      // this.add(res.data.arrObj);
      // this.changeAdd(res.data.changes);
      // this.incidentsAdd(res.data.attendees);
      // this.natureAdd(res.data.attendees);
      // this.ppeAdd(res.data.attendees);
      // this.rootCauseIncidentAdd(res.data.attendees);
      this.dataUrl = res.data.signaturePad1;
      let check =async () => { this.signaturePad1 != null }
      check().then(() => {

        this.signaturePad1.fromDataURL(res.data.signaturePad1)
      })
      let check2 =async () => { this.signaturePad != null }
      check2().then(() => {
        console.log( this.signaturePad);
        this.signaturePad.fromDataURL(res.data.signaturePad)
        // setTimeout(() => {
        //   let signaturePadArr=this.signaturePad2.toArray()
        //   res.data.attendees.forEach((x,i) => {
        //     signaturePadArr[i].fromDataURL(x.signature)
        //   });
        // }, 2000); 
      })
      this.IncidentReport.patchValue({
        signaturePad:res.data.signaturePad,
        signaturePad1:res.data.signaturePad1

      })
    })
  }
  onSubmit() {
    console.log(this.IncidentReport.value);
    this.IncidentReport.get("file")?.patchValue(this.selectedImage)
    console.log(this.IncidentReport.value);
    if(this.id!=='Form')
    {
      console.log("update");
      
      const data={
        ...this.IncidentReport.value
      }
       console.log("data",data);
       
       this.logicalFormInfo.updateIncidentReport(this.id,data).subscribe((res)=>
       {
         console.log("res",res);
          Swal.fire({
            title: 'Update successfully',
            showConfirmButton: false,
            timer: 1200,
          });
         this.router.navigate(["/admin/forms/incidentsTable"]);
       },(err) => {
        console.error(err);
      });
    }
    else
    {
      const data={
        ...this.IncidentReport.value
      }
      console.log("data",data);
      
      this.logicalFormInfo.addIncidentReport(data).subscribe(res => {
        console.log("addCustomerForm=>", res)
       // this.IncidentReport.reset();
        Swal.fire({
          title: 'Submit successfully',
          showConfirmButton: false,
          timer: 1200,
        });
        this.router.navigate(["/admin/forms"]);
      }, (err) => {
        console.error(err);
      });
       
    }
  
    // // for (let index = 0; index < this.changesSelectedArr.length; index++) {
    // //   console.log("this.changesSelectedArr.length",this.changesSelectedArr.length);
      
    // //   let changeIndex = this.changeAdd().length
    // //   console.log("changeIndex",changeIndex);
      
    // //  // this.changeAdd().push(this.changeAction(index));
    // //  this.changeAdd().get("61a9ba8bdee47f7c86631bf5").setValue("ssssssss")
    // // }
    
    // for (let index = 0; index < this.typeOfIncidentsSelectedArr.length; index++) {
    //   console.log("this.typeOfIncidentsSelectedArr.length",this.typeOfIncidentsSelectedArr.length);
      
    //   let typeOfIncidentsIndex = this.incidentsAdd().length
    //   console.log("typeOfIncidentsIndex",typeOfIncidentsIndex);
      
    //   this.incidentsAdd().push(this.incidentsAction());
    //   this.incidentsAdd().at(typeOfIncidentsIndex).get("id").setValue(this.typeOfIncidentsSelectedArr[index])
    // }
    // for (let index = 0; index < this.natureOfIncSelectedArr.length; index++) {
    //   console.log("this.natureOfIncSelectedArr.length",this.natureOfIncSelectedArr.length);
      
    //   let natureOfIncIndex = this.natureAdd().length
    //   console.log("typeOfIncidentsIndex",natureOfIncIndex);
      
    //   this.natureAdd().push(this.incidentsAction());
    //   this.natureAdd().at(natureOfIncIndex).get("id").setValue(this.natureOfIncSelectedArr[index])
    // }
    // for (let index = 0; index < this.ppeSelectedArr.length; index++) {
    //   console.log("this.ppeSelectedArr.length",this.ppeSelectedArr.length);
      
    //   let ppeIndex = this.ppeAdd().length
    //   console.log("ppeIndex",ppeIndex);
      
    //   this.ppeAdd().push(this.ppeAction());
    //   this.ppeAdd().at(ppeIndex).get("id").setValue(this.ppeSelectedArr[index])
    // }
    // for (let index = 0; index < this.rootSelectedArr.length; index++) {
    //   console.log("this.rootSelectedArr.length",this.rootSelectedArr.length);
      
    //   let rootIndex = this.rootCauseIncidentAdd().length
    //   console.log("rootIndex",rootIndex);
      
    //   this.rootCauseIncidentAdd().push(this.rootCauseIncidentAction());
    //   this.rootCauseIncidentAdd().at(rootIndex).get("id").setValue(this.rootSelectedArr[index])
    // }

   
   
  }
  // upload(e) {
  //   const fileListAsArray = Array.from(e);
  //   fileListAsArray.forEach((item, i) => {
  //     const file = (e as HTMLInputElement);
  //     const url = URL.createObjectURL(file[i]);
  //     this.imgArr.push(url);
  //     this.fileArr.push({ item, url: url });
  //   })

  //   this.fileArr.forEach((item) => {
  //     this.fileObj.push(item.item)
  //   })

  //   // Set files form control
  //   this.IncidentReport.patchValue({
  //     avatar: this.fileObj
  //   })

  //   this.IncidentReport.get('avatar').updateValueAndValidity()
  // }
  
  browser(event) {
    const files = event.target.files[0];
    const formdata = new FormData();
    formdata.append('', files);
    console.log(files);

    this.upload.upload(formdata).subscribe((res) => {
      console.log('AddProductComponent -> browser -> res', res);
    
     this.selectedImage=res.files[0];

      console.log(
        'AddProductComponent -> browse -> this.selectedImage',
         this.selectedImage
      );
    });
  }

}
