import { AfterViewInit, Component, HostListener, NgZone, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { ViewChild } from '@angular/core';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { Observable } from 'rxjs';
import { startWith, debounceTime, distinctUntilChanged, switchMap, map, filter, take, tap } from 'rxjs/operators';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { SavedformsService } from 'src/app/utils/services/savedforms.service';
import { EmployeeRegistrationService } from 'src/app/utils/services/employee-registration.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';

@Component({
  selector: 'app-hazard-report',
  templateUrl: './hazard-report.component.html',
  styleUrls: ['./hazard-report.component.scss'],
})
export class HazardReportComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'hazardReport';
  hazardReport: FormGroup;
  myControl = new FormControl();
  empControl = new FormControl();
  options: string[] = [''];
  filteredOptions: Observable<any>;
  filteredOptions2: Observable<any>;
  filteredOptions3: Observable<any>;
  filteredOptions4: Observable<any>;
  filteredManager: Observable<any>;
  id: any;
  hazard: any;
  singRequired: any;
  selectedImage: any;
  isHistory: boolean;
  hasError: false;

  pad: "inp_padding";
  allJobNumbers = [];
  whsData: any = [''];
  hazardData: any = ['']
  myControlEmail = new FormControl();
  myControlManagerEmail = new FormControl();
  myControlManager = new FormControl();
  signature: SignaturePad;
  @ViewChild('Signature1') signaturePad1: SignaturePad;
  dataUrl: any;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  sub: any;
  isPrint: Observable<any>;
  obj: Actionedby = {
    elliminateAction: null,
    substituteAction: null,
    isolatedAction: null,
    solutionAction: null,
    procedureRemoveAction: null,
    PPEAction: null
  };
  ActionedbyStrings: string[];
  uploadFile: any;
  returnTo: Observable<string>;
  @HostListener("window:afterprint", [])
  function() {
    console.log("Printing completed...");
    if (this.router.url.includes('/admin/savedForms')) {
      this.router.navigateByUrl("/admin/savedForms")
      return
    }
    this.router.navigateByUrl("/admin/forms/hazardTable")
    this.shared.printNext(false)
    // this.router.navigate(['/',{ outlets: {'print': ['print']}}])
  }
  maxDate = new Date();
  minDate = new Date();
  type: any;
  empData: any;
  check: any;

  constructor(
    private fb: FormBuilder,
    private employee: EmployeeRegistrationService,
    private dynamicFormsService: DynamicFormsService,
    private setTitle: SetTitleService,
    private url: LogicalFormInfoService,
    public router: Router,
    public upload: UploadFileServiceService,
    private activatedRoute: ActivatedRoute,
    private ngZone: NgZone,
    public forms: SavedformsService,
    private shared: RoleManagementSharedServiceService,
  ) {
    this.check = localStorage.getItem('key');


    this.hazardReport = this.fb.group({

      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      department: ['', Validators.required],
      position: ['', Validators.required],
      // projectName: ['', Validators.required],
      date: [new Date(), Validators.required],
      signaturePad1: ['', Validators.required],
      describeHazard: ['', Validators.required],
      dateHazardReport: [new Date(), Validators.required],
      locationHazard: ['', Validators.required],
      dateHazardIdentify: [new Date(), Validators.required],
      jobNumberId: ['', Validators.required],
      name: ['', Validators.required],
      compilePosition: ['', Validators.required],
      compileDepartment: ['', Validators.required],
      myControl: [''],
      myControlManager: [''],
      employeeParttime: [''],
      managerSupervisor: [''],
      managerSupervisorEmail: [''],
      whsManagerEmail: [''],
      action: [''],
      eliminateHazard: [''],
      eliminateCorrect: [''],
      elliminateAction: [''],
      eliminateWhen: [new Date()],
      substituteCorrect: [''],
      substituteAction: [''],
      substituteWhen: [new Date()],
      isolatedCorrect: [''],
      isolatedAction: [''],
      isolatedWhen: [new Date()],
      solutionCorrect: [''],
      solutionAction: [''],
      solutionWhen: [new Date()],
      procedureRemove: [new Date()],
      procedureRemoveCorrect: [''],
      procedureRemoveAction: [''],
      procedureRemoveWhen: [''],
      PPECorrect: [''],
      PPEAction: [''],
      PPEWhen: [new Date()],
      fileUpload: [''],
      complete: [''],
      consequence: [],
      riskRating: [''],
      actionRequired: [''],
      likelihood: [],
      reduceRisk: [''],
      procedures: [''],
      process: [''],
      isolatedHazard: [''],
      eliminateHazardAction: ['']


    });
  }
  async disableForm() {
    if (this.isHistory) {
      this.hazardReport.disable();

      let check1 = async () => { this.signaturePad1 != null }
      await check1()
      this.signaturePad1.off()
    }
  }

  ngOnInit() {
   
    this.isHistory = this.router.url.includes('/hazardTable\/history')
    if (this.isHistory) {
      this.disableForm()
      this.returnTo = this.activatedRoute.queryParamMap.pipe(
        map(param => param.get('returnTo'))
      )
      this.returnTo.subscribe(res => console.log(res))
    }

    this.employee.getAllEmployeeInfo().pipe(
      map((res) => {
        return res.data.map((item) => {
          item.fullName = `${item.firstName} ${item.lastName}`
          return item
        })
      })
    ).subscribe(empData => {
      this.empData = empData
      console.log('this.empData', this.empData)
      this.filteredOptions2 = this.hazardReport.controls.fullName.valueChanges.pipe(
        startWith(''),
        debounceTime(400),
        map(value => (typeof value === 'string' ? value : value.fullName)),
        map(fullName => (fullName ? this._filter(fullName) : this.empData.slice())),
      )
      this.filteredOptions3 = this.hazardReport.controls.name.valueChanges.pipe(
        startWith(''),
        debounceTime(400),
        tap(value => console.log('value', value)),
        map(value => (typeof value === 'string' ? value : value.fullName)),
        map(fullName => (fullName ? this._filter(fullName) : this.empData.slice())),
      )
      this.ActionedbyStrings = [
        "elliminateAction",
        "substituteAction",
        "isolatedAction",
        "solutionAction",
        "procedureRemoveAction",
        "PPEAction"
      ]
      // this.obj = new Object()
      this.ActionedbyStrings.forEach(ctrlName => {
        let filter = this.hazardReport.controls[ctrlName].valueChanges.pipe(
          startWith(''),
          debounceTime(400),
          tap(value => console.log('value', value)),
          map(value => (typeof value === 'string' ? value : value.fullName)),
          map(fullName => (fullName ? this._filter(fullName) : this.empData.slice())),
        )
        // let o = new Object(ctrlName,filter)
        // Object.assign(obj,{...o})
        this.obj[ctrlName] = filter
      })
      console.log(this.obj)
    })
    this.isPrint = (this.shared.printObs$ as Observable<any>)

    this.activatedRoute.queryParams.subscribe(params => {
      this.type = params['formType'];
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
        console.log("myControl", val)
        return this.filter(val || '')
      })
    )
    this.filteredManager = this.myControlManager.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
        console.log("myControlManager", val)
        return this.filter(val || '')
      })
    )
    this.getAllHazardTreatmentRelation();
    this.getAllJobNumber();
    this.getall();

    this.dynamicFormsService.homebarTitle.next('Hazard Report Form');
    this.setTitle.setTitle('WHS-Hazard Report Form');
    this.hazardReport.get('managerSupervisor').valueChanges.subscribe((res) => {
      if (res) {
        console.log(res);

        for (let i = 0; i < this.whsData.length; i++) {
          if (res === this.whsData[i]._id) {
            console.log("id found");

            this.hazardReport.get('managerSupervisorEmail').setValue(this.whsData[i].email);

            break;
          }
        }


      }
    });
    this.id = this.activatedRoute.snapshot.params.id;
    if (this.id != 'form') {

      console.log("id", this.id);
      this.getHazardByid(this.id);

    }
  }
  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.empData.filter(option => option.fullName.toLowerCase().includes(filterValue));
  }
  displayFn(user: any): string {
    return user && user.fullName ? user.fullName : '';
  }
  ngAfterViewInit() {
    console.log("check1...", this.check);
    this.sub = this.shared.printObs$.subscribe(res => {
      this.check = res
      if (this.check) {
        setTimeout(() => {
          window.print();
          console.log("printing....");
        }, 3000);
        localStorage.setItem('key', ' ');


      }
    })
    // this.signaturePad is now available
    console.log(this.signaturePad1, this.dataUrl)
    this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
    this.signaturePad1.clear();
    // this.signaturePad1.fromDataURL(this.dataUrl);
    // this.signaturePad1.set('minWidth', 1); // set szimek/signature_pad options at runtime
    // this.signaturePad1.set('dotSize', 1); // set szimek/signature_pad options at runtime
    // invoke functions from szimek/signature_pad API
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
    console.log("hazard destroy");
  }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }


  getHazardByid(id) {
    this.url.getHazardFormDataById(id).subscribe((res: any) => {
      console.log(res);

      this.hazardReport.patchValue({
        myControl: res.data.myControl,
        myControlManager: res.data.myControlManager,
        employeeParttime: res.data.employeeParttime,
        fullName: { fullName: res.data.fullName },
        email: res.data.email,
        phone: res.data.phone,
        department: res.data.department,
        position: res.data.position,
        projectName: res.data.projectName,
        managerSupervisor: res.data.managerSupervisor,
        managerSupervisorEmail: res.data.managerSupervisorEmail,
        whsManagerEmail: res.data.whsManagerEmail,
        describeHazard: res.data.describeHazard,
        dateHazardReport: res.data.dateHazardReport,
        jobNumberId: res.data.jobNumberId,
        action: res.data.action,
        eliminateHazard: res.data.eliminateHazard,
        eliminateCorrect: res.data.eliminateCorrect,
        elliminateAction: { fullName: res.data.elliminateAction },
        eliminateWhen: res.data.eliminateWhen,
        substituteCorrect: res.data.substituteCorrect,
        substituteAction: { fullName: res.data.substituteAction },
        substituteWhen: res.data.substituteWhen,
        isolatedCorrect: res.data.isolatedCorrect,
        isolatedAction: { fullName: res.data.isolatedAction },
        isolatedWhen: res.data.isolatedWhen,
        solutionCorrect: res.data.solutionCorrect,
        solutionAction: { fullName: res.data.solutionAction },
        customerName: res.data.customerName,
        solutionWhen: res.data.solutionWhen,
        procedureRemove: res.data.procedureRemove,
        procedureRemoveCorrect: res.data.procedureRemoveCorrect,
        procedureRemoveAction: { fullName: res.data.procedureRemoveAction },
        procedureRemoveWhen: res.data.procedureRemoveWhen,
        PPECorrect: res.data.PPECorrect,
        PPEAction: { fullName: res.data.PPEAction },
        PPEWhen: res.data.PPEWhen,
        name: { fullName: res.data.name },
        locationHazard: res.data.locationHazard,
        compilePosition: res.data.compilePosition,
        compileDepartment: res.data.compileDepartment,
        date: res.data.date,
        complete: res.data.complete,
        consequence: res.data.consequence,
        riskRating: res.data.riskRating,
        actionRequired: res.data.actionRequired,
        likelihood: res.data.likelihood,
        reduceRisk: res.data.reduceRisk,
        procedures: res.data.procedures,
        process: res.data.process,
        isolatedHazard: res.data.isolatedHazard,
        dateHazardIdentify: res.data.dateHazardIdentify,
        eliminateHazardAction: res.data.eliminateHazardAction,
        signaturePad1: res.data.signaturePad1,
      })
      this.minDate = res.data.date;
      this.selectedImage = res.data.fileUpload
      // this.uploadFile=this.selectedImage?.split(/-/)[1];
      this.uploadFile = this.selectedImage?.slice(this.selectedImage.indexOf('-') + 1)
      console.log(this.selectedImage, "selectedImage")
      this.dataUrl = res.data.signaturePad1;
      let check = async () => { this.signaturePad1 != null }
      check().then(() => {
        console.log("singpachet");

        this.signaturePad1.fromDataURL(res.data.signaturePad1)
      })

    })
  }

  public signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 500,
    canvasHeight: 100,
  };





  drawComplete() {
    console.log("signnn", this.signaturePad1);
    this.hazardReport.controls['signaturePad1'].setValue(this.signaturePad1.toDataURL());
    console.log("signaturePad1 control", this.hazardReport.controls['signaturePad1'].value);
    this.singRequired = this.hazardReport.controls['signaturePad1'].invalid
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad1.toDataURL());
  }
  clear() {
    this.signaturePad1.clear();
    this.hazardReport.controls['signaturePad1'].setValue("");
    this.singRequired = this.hazardReport.controls['signaturePad1'].untouched
  }
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
    //this.singRequired = this.hazardReport.controls['signaturePad1'].invalid
  }
  Consequences: Array<any> = [
    { name: '1-Insignificant', value: 1 },
    { name: '2-Minor', value: 2 },
    { name: '3-Moderate', value: 3 },
    { name: '4-Major', value: 4 },
    { name: '5-Catastrophic', value: 5 },
  ];


  Likelihood: Array<any> = [
    { name: '1-Rare', value: 1 },
    { name: '2-Unlikely', value: 2 },
    { name: '3-Moderate', value: 3 },
    { name: '4-Likely', value: 4 },
    { name: '5-Almost Certain', value: 5 }
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


  filter3(val: string): Observable<any> {
    return this.employee.getAllEmployeeInfo()
      .pipe(map((res) => {
        res.data = res.data.map((item) => {
          item.name = `${item.firstName} ${item.lastName}`
          return item
        })
        return res
      }),
        map((response: any) => {
          response.data = response.data.filter(option => {
            console.log("option>>", option);
            return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
          })
          console.log("response.data>>", response.data);

          return response.data;
        })
      )
  }


  // Action By
  filter4(val: string): Observable<any> {
    return this.employee.getAllEmployeeInfo()
      .pipe(map((res) => {
        res.data = res.data.map((item) => {
          item.name = `${item.firstName} ${item.lastName}`
          return item
        })
        return res
      }),
        map((response: any) => {
          response.data = response.data.filter(option => {
            console.log("option>>", option);
            return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
          })
          console.log("response.data>>", response.data);

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
    console.log("evebt", event)
    this.hazardReport.get('myControl').setValue(event.option.value.name || '')
    this.hazardReport.get('whsManagerEmail').setValue(event.option.value.email || '')



  }
  changeName() {
    console.log("changeName")

  }

  jobNoSel() {
    this.allJobNumbers.forEach((item) => {
      if (this.hazardReport.get('jobNumberId').value === item._id) {
        console.log('Id found', item);
        this.hazardReport.patchValue({
          jobNumberId: this.hazardReport.get('jobNumberId').value,
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
    this.hazardReport.get('jobNumberId').updateValueAndValidity();
  }
  getAllJobNumber() {
    this.url.getAllJobNumber().subscribe((res: any) => {
      this.allJobNumbers = res.data;
      console.log("this.allJobNumbers", this.allJobNumbers);

    });
  }

  getall() {
    this.url.getAllManager().subscribe((res: any) => {
      console.log(res)
      this.whsData = res.data;
    })
  }
  getHazardNo() {

    if (this.hazardReport.get('consequence').value && this.hazardReport.get('likelihood').value) {
      let addition = parseInt(this.hazardReport.get('consequence').value) + parseInt(this.hazardReport.get('likelihood').value)
      console.log(addition)
      this.hazardData.forEach((item) => {

        if (addition === item.title) {
          console.log('Id found', item.title);
          this.hazardReport.patchValue({
            riskRating: item.riskRating,
            actionRequired: item.actionRequired,


          });
        }
      });
    }


  }
  getAllHazardTreatmentRelation() {
    this.url.getAllHazardTreatmentRelation().subscribe((res: any) => {
      console.log('getAllHazardTreatmentRelation=>', res);
      this.hazardData = res.data;


    });
  }
  RiskRating: Array<any> = [

    { name: 'Low', value: 'low' },
    { name: 'Medium', value: 'medium' },
    { name: 'High', value: 'high' },


  ];
  ActionRequired: Array<any> = [

    { name: 'Immediately', value: 'immediately' },
    { name: 'Today', value: 'today' },
    { name: 'This week', value: 'thisWeek' },
    { name: 'This Month', value: 'thisMonth' },

  ];
  onFormSubmit() {

    this.hazardReport.get('fileUpload')?.setValue(
      this.selectedImage
    );

    console.log('form data', this.hazardReport.value);
    this.singRequired = this.hazardReport.controls['signaturePad1'].invalid
    console.log(this.id)

    const {
      fullName,
      name,
      elliminateAction,
      substituteAction,
      isolatedAction,
      solutionAction,
      procedureRemoveAction,
      PPEAction,
      ...rest
    } = this.hazardReport.value
    // this.hazardReport.removeControl('fullName')
    // this.hazardReport.removeControl('name')
    // this.ActionedbyStrings.forEach(string => this.hazardReport.removeControl(string) )
    console.log(this.hazardReport.value, fullName,
      name,
      elliminateAction,
      substituteAction,
      isolatedAction,
      solutionAction,
      procedureRemoveAction,
      PPEAction,
      rest
    );

    const data = {
      ...rest,
      fullName: fullName.fullName == '' ? '' : fullName.fullName || fullName,
      name: name.fullName == '' ? '' : name.fullName || name,
      elliminateAction: elliminateAction.fullName == '' ? '' : elliminateAction.fullName || elliminateAction,
      substituteAction: substituteAction.fullName == '' ? '' : substituteAction.fullName || substituteAction,
      isolatedAction: isolatedAction.fullName == '' ? '' : isolatedAction.fullName || isolatedAction,
      solutionAction: solutionAction.fullName == '' ? '' : solutionAction.fullName || solutionAction,
      procedureRemoveAction: procedureRemoveAction.fullName == '' ? '' : procedureRemoveAction.fullName || procedureRemoveAction,
      PPEAction: PPEAction.fullName == '' ? '' : PPEAction.fullName || PPEAction
    };
    if (this.id != 'form') {
      console.log(this.hazardReport.value, "mmmmmmm")
      this.url
        .updateHazardFormData(this.id, data)
        .subscribe((res) => {
          console.log('res', res);
          this.router.navigate(['/admin/forms']);
          this.hazardReport.reset();

          Swal.fire({
            title: 'Update successfully',
            showConfirmButton: false,
            timer: 1200,
          });
          this.router.navigate(['/admin/forms/hazardTable']);
        }, err => {
          console.error(err)
        });
    } else {
      this.url.addHazardFormData(data).subscribe((res) => {
        this.hazardReport.reset();
        console.log('res', res);
        Swal.fire({
          title: 'Submit successfully',
          showConfirmButton: false,
          timer: 1200,
        });
        // this.router.navigate(["/admin/forms/tableData"]);
        this.router.navigate(['/admin/forms/fillConfigForm/' + 0]);
      }, err => console.error(err));
      console.log('data', data);
    }

  }
  browser(event) {
    const files = event.target.files[0];
    const formdata = new FormData();
    formdata.append('', files);
    console.log(files);

    this.upload.upload(formdata).subscribe((res) => {
      console.log('AddProductComponent -> browser -> res', res);

      this.selectedImage = res.files[0];

      console.log(
        'AddProductComponent -> browse -> this.selectedImage',
        this.selectedImage
      );
    });
  }
  employeeData(e: MatAutocompleteSelectedEvent) {
    const data = e.option.value;
    this.hazardReport.patchValue({
      // fullName: data.fullName,
      department: data.department,
      email: data.email,
      position: data.position,
      phone: data.phone,
      // compilePosition:data.position,
      // compileDepartment:data.department,

    })
    console.log("e.option", e.option);
    console.log("data...");

  }

  // The form was compiled by:

  employeeData1(e: MatAutocompleteSelectedEvent) {
    const data = e.option.value;
    this.hazardReport.patchValue({
      // name: data.name,
      compileDepartment: data.department,
      compilePosition: data.position,
      // elliminateAction:data.name
    })
    console.log("e.option", e.option);
    console.log("data...");

  }
}

export interface Actionedby {
  elliminateAction: Observable<any>
  substituteAction: Observable<any>
  isolatedAction: Observable<any>
  solutionAction: Observable<any>
  procedureRemoveAction: Observable<any>
  PPEAction: Observable<any>
}