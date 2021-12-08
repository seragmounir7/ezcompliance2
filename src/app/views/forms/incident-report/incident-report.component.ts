import { Component, OnInit } from '@angular/core';
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


@Component({
  selector: 'app-incident-report',
  templateUrl: './incident-report.component.html',
  styleUrls: ['./incident-report.component.scss'],
})
export class IncidentReportComponent implements OnInit {
  SiteIncident: FormGroup;
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
  @ViewChild('signature1') signaturePad: SignaturePad;
  @ViewChild('signature2') signaturePad1: SignaturePad;
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
  constructor(
    private fb: FormBuilder,
    private dynamicFormsService: DynamicFormsService,
    private logicalFormInfo: LogicalFormInfoService,
    private setTitle:SetTitleService
  ) {
    this.SiteIncident = this.fb.group({
      incidents: this.fb.array([]),
      natureOFIncidents: this.fb.array([]),
      PPE: this.fb.array([]),
      rootCauseIncident: this.fb.array([]),
      changes: this.fb.array([]),
      arrObj: this.fb.array([]),
      correctAction: ['', Validators.required],
      complete: ['', Validators.required],
      date: ['', Validators.required],
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
      whyDidtheUnsafeConditonExist: ['', Validators.required],
      completedName: ['', Validators.required],
      completedPosition: ['', Validators.required],
      completedDepartment: ['', Validators.required],
      completedDate: ['', Validators.required],
      reviewedName: ['', Validators.required],
      reviewedPosition: ['', Validators.required],
      reviewedDepartment: ['', Validators.required],
      reviewedDate: ['', Validators.required],
      typeofIncident: ['', Validators.required],
      priorIncident: ['', Validators.required],
      similarIncident:['', Validators.required],
      witnessStatement:['', Validators.required],
      nameOfWitness:['', Validators.required],
      file: ['', Validators.required],
    });
    // this.SiteIncident.patchValue({
    //   incidents:this.data.incidents,
    //   PPE:this.data.PPE,
    //   natureOFIncidents:this.data.natureOFIncidents,
    //   rootCauseIncident:this.data.rootCauseIncident,
    //   changes:this.data.changes,
    //   arrObj:this.data.arrObj,
    //   correctAction:this.data.correctAction,
    // })
  }

  ngOnInit(): void {
    console.log("SiteIncident",this.SiteIncident);
    
    this.dynamicFormsService.homebarTitle.next('Incident Report Form');
    this.setTitle.setTitle('WHS-Incident Report Form');
    this.addAction();
    this.getAllJobNumber();
    this.getAllProjectMang();
    this.getAllChanges();
    this.getAllPPE();
    this.getAllTypeOfInc();
    this.getAllRoot();
    this. getAllNatureOfInc();
    this.getAllStaff();
  }

  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
 
  add(): FormArray {
    return this.SiteIncident.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
      correctAction: [],
      personRes: ['', Validators.required],
      complete: [],
      date: [],
    });
  }
  removeIncident(i) {
    const item = <FormArray>this.SiteIncident.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
    
    }
  }
  changeAdd(): FormArray {
    return this.SiteIncident.get('changes') as FormArray;
  }
  changeAction(): FormGroup {
    return this.fb.group({
      id:[],
    });
  }
  incidentsAdd(): FormArray {
    return this.SiteIncident.get('incidents') as FormArray;
  }
  incidentsAction(): FormGroup {
    return this.fb.group({
      id:[],
    });
  }
  natureAdd(): FormArray {
    return this.SiteIncident.get('natureOFIncidents') as FormArray;
  }
  natureAction(): FormGroup {
    return this.fb.group({
      id:[],
    });
  }
  ppeAdd(): FormArray {
    return this.SiteIncident.get('PPE') as FormArray;
  }
  ppeAction(): FormGroup {
    return this.fb.group({
      id:[],
    });
  }
  rootCauseIncidentAdd(): FormArray {
    return this.SiteIncident.get('rootCauseIncident') as FormArray;
  }
  rootCauseIncidentAction(): FormGroup {
    return this.fb.group({
      id:[],
    });
  }
  
 
  jobNoSel() {
    this.allJobNumbers.forEach((item) => {
      if (this.SiteIncident.get('jobNumber').value === item._id) {
        console.log('Id found', item);
        this.SiteIncident.patchValue({
          jobNumber: this.SiteIncident.get('jobNumber').value,
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
    this.SiteIncident.get('jobNumber').updateValueAndValidity();
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
      }
    });
  }
  getAllTypeOfInc() {
    this.logicalFormInfo.getAllTypeOfIncident().subscribe((res:any) => {
      console.log('typeOfIncident=>', res);
      this.incidents = res.data;
      for (let i = 0; i < this.incidents.length; i++) {
        this.incidentsArr[i] = 0;
      }
    });
  }
  getAllRoot() {
    this.logicalFormInfo.getAllRootCause().subscribe((res:any) => {
      console.log('root=>', res);
      this.rootCauseIncident = res.data;
      for (let i = 0; i < this.rootCauseIncident.length; i++) {
        this.rootArr[i] = 0;
      }
     
    });
  }
  getAllNatureOfInc() {
    this.logicalFormInfo.getAllNatOfInc().subscribe((res:any) => {
      console.log('NatOfIncAll=>', res);
      this.natureOFIncidents = res.data;
      for (let i = 0; i < this.natureOFIncidents.length; i++) {
        this.natureOfIncArr[i] = 0;
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
    console.log(this.SiteIncident.value);
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
  }
  drawComplete1() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad1.toDataURL());
  }
  clear() {
    this.signaturePad.clear();
  }
  clear1() {
    console.log('cl1');

    this.signaturePad1.clear();
  }
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
  drawStart1() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
 

  // onChangeIncident(e: any) {
  //   const checkArray: FormArray = this.SiteIncident.get(
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
  //   const NatureArray: FormArray = this.SiteIncident.get(
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
  //   const IncidentArray: FormArray = this.SiteIncident.get(
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
  //   const ChangeArray: FormArray = this.SiteIncident.get(
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
  changesSelected(e){
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

  onSubmit() {
   
    console.log("this.ppeSelectedArr",this.ppeSelectedArr);
    for (let index = 0; index < this.changesSelectedArr.length; index++) {
      console.log("this.changesSelectedArr.length",this.changesSelectedArr.length);
      
      let changeIndex = this.changeAdd().length
      console.log("changeIndex",changeIndex);
      
      this.changeAdd().push(this.changeAction());
      this.changeAdd().at(changeIndex).get("id").setValue(this.changesSelectedArr[index])
    }
    
    for (let index = 0; index < this.typeOfIncidentsSelectedArr.length; index++) {
      console.log("this.typeOfIncidentsSelectedArr.length",this.typeOfIncidentsSelectedArr.length);
      
      let typeOfIncidentsIndex = this.incidentsAdd().length
      console.log("typeOfIncidentsIndex",typeOfIncidentsIndex);
      
      this.incidentsAdd().push(this.incidentsAction());
      this.incidentsAdd().at(typeOfIncidentsIndex).get("id").setValue(this.typeOfIncidentsSelectedArr[index])
    }
    for (let index = 0; index < this.natureOfIncSelectedArr.length; index++) {
      console.log("this.natureOfIncSelectedArr.length",this.natureOfIncSelectedArr.length);
      
      let natureOfIncIndex = this.natureAdd().length
      console.log("typeOfIncidentsIndex",natureOfIncIndex);
      
      this.natureAdd().push(this.incidentsAction());
      this.natureAdd().at(natureOfIncIndex).get("id").setValue(this.natureOfIncSelectedArr[index])
    }
    for (let index = 0; index < this.ppeSelectedArr.length; index++) {
      console.log("this.ppeSelectedArr.length",this.ppeSelectedArr.length);
      
      let ppeIndex = this.ppeAdd().length
      console.log("ppeIndex",ppeIndex);
      
      this.ppeAdd().push(this.ppeAction());
      this.ppeAdd().at(ppeIndex).get("id").setValue(this.ppeSelectedArr[index])
    }
    for (let index = 0; index < this.rootSelectedArr.length; index++) {
      console.log("this.rootSelectedArr.length",this.rootSelectedArr.length);
      
      let rootIndex = this.rootCauseIncidentAdd().length
      console.log("rootIndex",rootIndex);
      
      this.rootCauseIncidentAdd().push(this.rootCauseIncidentAction());
      this.rootCauseIncidentAdd().at(rootIndex).get("id").setValue(this.rootSelectedArr[index])
    }
    console.log(this.SiteIncident.value);
    this.logicalFormInfo.addIncidentReport(this.SiteIncident.value).subscribe(res => {
      console.log("addCustomerForm=>", res)
      
    }, (err) => {
      console.error(err);
    });
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
  //   this.SiteIncident.patchValue({
  //     avatar: this.fileObj
  //   })

  //   this.SiteIncident.get('avatar').updateValueAndValidity()
  // }

}
