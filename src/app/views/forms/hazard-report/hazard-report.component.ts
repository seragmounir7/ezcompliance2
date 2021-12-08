import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { ViewChild } from '@angular/core';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { Observable } from 'rxjs';
import { startWith, debounceTime, distinctUntilChanged, switchMap, map, filter } from 'rxjs/operators';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';


@Component({
  selector: 'app-hazard-report',
  templateUrl: './hazard-report.component.html',
  styleUrls: ['./hazard-report.component.scss'],
})
export class HazardReportComponent implements OnInit {
  title = 'hazardReport';
  hazardReport: FormGroup;
  myControl = new FormControl();
  options: string[] = [''];
  filteredOptions: Observable<any>;
  filteredManager: Observable<any>;
  filteredName: Observable<any>;
  filteredEmail: Observable<any>;
  whsData: any = ['']
  myControlEmail = new FormControl();
  myControlManagerEmail = new FormControl();
  myControlManager = new FormControl();
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  constructor(
    private fb: FormBuilder,
    private dynamicFormsService: DynamicFormsService,
    private setTitle: SetTitleService,
    private url: LogicalFormInfoService
  ) {



    this.hazardReport = this.fb.group({
      siteAction: this.fb.array([]),
      myControl : [''],
      myControlManager:[''],
    
      employeeFulltime: ['', Validators.required],
      employeeParttime: ['', Validators.required],
      employeeCasual: ['', Validators.required],
      employeeContractor: ['', Validators.required],
      fullName: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      position: ['', Validators.required],
      projectName: ['', Validators.required],
      managerSupervisor: ['', Validators.required],
      managerSupervisorEmail: ['', Validators.required],
      whsManager: ['', Validators.required],
      whsManagerEmail: ['', Validators.required],
      describeHazard: ['', Validators.required],
      dateHazardReport: ['', Validators.required],
      locationHazard: ['', Validators.required],
      dateHazardIdentify: ['', Validators.required],
      jobNumber: ['', Validators.required],
      action: ['', Validators.required],
      // actionimmediate: ['', Validators.required],
      // actionToday: ['', Validators.required],
      // actionweek: ['', Validators.required],
      // actionMonth: ['', Validators.required],
      eliminateHazard: ['', Validators.required],
      eliminateCorrect: ['', Validators.required],
      elliminateAction: ['', Validators.required],
      eliminateWhen: ['', Validators.required],
      substitute: ['', Validators.required],
      substituteCorrect: ['', Validators.required],
      substituteAction: ['', Validators.required],
      substituteWhen: ['', Validators.required],
      isolated: ['', Validators.required],
      isolatedCorrect: ['', Validators.required],
      isolatedAction: ['', Validators.required],
      isolatedWhen: ['', Validators.required],
      solution: ['', Validators.required],
      solutionCorrect: ['', Validators.required],
      solutionAction: ['', Validators.required],
      solutionWhen: ['', Validators.required],
      procedureRemove: ['', Validators.required],
      procedureRemoveCorrect: ['', Validators.required],
      procedureRemoveAction: ['', Validators.required],
      procedureRemoveWhen: ['', Validators.required],
      PPE: ['', Validators.required],
      PPEcorrect: ['', Validators.required],
      PPEaction: ['', Validators.required],
      PPEwhen: ['', Validators.required],
      name: ['', Validators.required],
      compilePosition: ['', Validators.required],
      compileDepartment: ['', Validators.required],
      fileUpload: ['', Validators.required],
      date: ['', Validators.required],
      signature: ['', Validators.required],
      complete: ['', Validators.required],
      Consequence: [''],
      riskRating: [''],
      likelihood: [''],
      managerName: [''],
      reduceRisk:[''],
      procedures:[''],
      process:[''],
      isolatedHazard:[''],
      eliminateHazardAction:['']
      
    });
  }
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {

        return this.filter(val || '')
      })
     )
    //  this.filteredManager= this.myControlManager.valueChanges.pipe(
    //   startWith(''),
    //   debounceTime(400),
    //   distinctUntilChanged(),
    //   switchMap(val => {

    //     return this.filter(val || '')
    //   })
    //  )
  
   this.getall();
    this.dynamicFormsService.homebarTitle.next('Hazard Report Form');
    this.setTitle.setTitle('WHS-Hazard Report Form');
    this.hazardReport.get('Consequence').valueChanges.subscribe((res) => {
      if (res) {
        console.log(res);

        if (res == '1-Insignificant') {
          this.hazardReport.get('riskRating').setValue('Low');
          this.hazardReport.get('action').setValue('option4');
        }
        if (res == '2-Moderate') {
          this.hazardReport.get('riskRating').setValue('Medium');
          this.hazardReport.get('action').setValue('option3');
        }
        if (res == '4-Minor') {
          this.hazardReport.get('riskRating').setValue('Low');
          this.hazardReport.get('action').setValue('option4');
        }
        if (res == '3-Major') {
          this.hazardReport.get('riskRating').setValue('High');
          this.hazardReport.get('action').setValue('option1');
        }
        if (res == '5-Catastrophic') {
          this.hazardReport.get('riskRating').setValue('High');
          this.hazardReport.get('action').setValue('option1');
        }
      }
    });
    this.hazardReport.get('likelihood').valueChanges.subscribe((res) => {
      if (res) {
        console.log(res);
        if (res == '1-Insignificant') {
          this.hazardReport.get('riskRating').setValue('Low');

        }
        if (res == '3-Moderate') {
          this.hazardReport.get('riskRating').setValue('Medium');

        }
        if (res == '2-Minor') {
          this.hazardReport.get('riskRating').setValue('Low');

        }
        if (res == '4-Major') {
          this.hazardReport.get('riskRating').setValue('High');

        }
        if (res == '5-Catastrophic') {
          this.hazardReport.get('riskRating').setValue('High');

        }
      }
    });

  }



  public signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 500,
    canvasHeight: 100,
  };

  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.set('dotSize', 1); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }



  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }
  clear() {
    this.signaturePad.clear();
  }
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }
  Consequences: Array<any> = [
    { name: '1-Insignificant',value:1 },
    { name: '2-Moderate',value:2 },
    { name: '4-Minor',value:4},
    { name: '3-Major',value:3 },
    { name: '5-Catastrophic',value:5 },
  ];


  Likelihood: Array<any> = [
    { name: '1-Insignificant',value:1 },
    { name: '3-Moderate',value:3},
    { name: '2-Minor',value:2 },
    { name: '4-Major',value:4 },
    { name: '5-Catastrophic',value:5 }
  ];
  RiskRating: Array<any> = [

    { name: 'Low' },
    { name: 'Medium' },
    { name: 'High' },
  

  ];


  filter(val: string): Observable<any> {
     return this.url.getAllWHSManager()
      .pipe(
        map((response: any) => {
          response.data = response.data.filter(option => {
            return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
           })
          return response.data;
        })
      )
      }
  
  
      filterEvent(val: string): Observable<any> {
        return this.url.getAllManager()
         .pipe(
           map((response: any) => {
             response.data = response.data.filter(manager => {
               return manager.name.toLowerCase().indexOf(val.toLowerCase()) === 0
              })
             return response.data;
           })
         )
         }
    
  change(event) {
    console.log("evebt",event)
   this.hazardReport.get('myControl').setValue(event.option.value.name || '')
    this.hazardReport.get('whsManagerEmail').setValue(event.option.value.email || '')



  }
  changeName(event) {
    console.log("changeName",event)
   this.hazardReport.get('myControlManager').setValue(event.option.value.name || '')
    this.hazardReport.get('managerSupervisorEmail').setValue(event.option.value.email || '')



  }

 
  onFormSubmit(){
    console.log(this.hazardReport.value)
  }
  getall(){
    this.url.getAllManager().subscribe((res:any)=> {
      console.log(res)
      this.whsData=res.data;
    })
  }
}