import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { SavedformsService } from 'src/app/utils/services/savedforms.service';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-site-inspection',
  templateUrl: './site-inspection.component.html',
  styleUrls: ['./site-inspection.component.scss'],
})
export class SiteInspectionComponent implements OnInit, AfterViewInit,OnDestroy {
  sidePreview!: FormGroup;
  SiteControl!: FormArray;
  siteshow = true;
  siteAction = false;
  itemvalue: any;
  sub: any;
  isPrint: Observable<any>;
  @HostListener("window:afterprint",[]) 
  function(){
    console.log("Printing completed...");
    this.router.navigateByUrl("/admin/forms/siteinspectiontable")
    this.shared.printNext(false)
   
} 
  maxDate = new Date();
  minDate = new Date();
  item_values: any = ['In Progress', 'Completed', 'Closed'];
  jobTaskData: any;
  allJobNumbers = [];
  projectMang = [];
  keyArr = [
    'jobNumber',
    'siteName',
    'customerName',
    'streetNo',
    'streetAddr',
    'subUrb',
    'custConct',
    'custConctPh',
    'custEmail',
    'datetooboxtalk',
    'date',
    'projectManager',
  ];
  id: any;
  allcategory: any;
  allTopic: any;
  showDatas: any;
  staff: any;
  type:any;
  check: any;
  constructor(
    private fb: FormBuilder,
    private dynamicFormsService: DynamicFormsService,
    private setTitle: SetTitleService,
    private logicalFormInfo: LogicalFormInfoService,
    public router: Router,
    private activatedRoute: ActivatedRoute,
    private datePipe: DatePipe,
    public forms:SavedformsService,
    private shared:RoleManagementSharedServiceService,
  ) {
    this.check = localStorage.getItem('key');
    this.sidePreview = this.fb.group({
      jobNumber: ['', Validators.required],
      siteName: ['', Validators.required],
      customerName: ['', Validators.required],
      //streetNo: [''],
      streetAddr: ['', Validators.required],
      // subUrb: [''],
      custConct: ['', Validators.required],
      custConctPh: ['', Validators.required],
      custEmail: ['', Validators.required],
      date: ['', Validators.required],
      projectManager: ['', Validators.required],
      // datetooboxtalk: [''],
      // Hazard: ['', Validators.required],
      // documentation: ['', Validators.required],
      // workeronsite: ['', Validators.required],
      // SWMS: ['', Validators.required],
      // tooboxtalk: ['', Validators.required],
      // WHSManual: ['', Validators.required],
      // IncidentReport: ['', Validators.required],
      // HazardReport: ['', Validators.required],
      // emergrncyEvacuation: ['', Validators.required],
      // TrainingRecords: ['', Validators.required],
      // WHSPolicy: ['', Validators.required],
      // ReturnToWork: ['', Validators.required],
      // displayHazardReport: ['', Validators.required],
      // displayEmergrncyEvacuation: ['', Validators.required],
      // NoSmoking: ['', Validators.required],
      // PPESignage: ['', Validators.required],
      // ReportHazardsigns: ['', Validators.required],
      // ManualHandlingSigns: ['', Validators.required],
      // NoticeBoard: ['', Validators.required],
      // accessEgrassHazards: ['', Validators.required],
      // Walkways: ['', Validators.required],
      // Walkwaysfree: ['', Validators.required],
      // StairsConditionGood: ['', Validators.required],
      // HoardingsFenceGates: ['', Validators.required],
      // LosseMatrialSecure: ['', Validators.required],
      // binsSkipsLocated: ['', Validators.required],
      // binsSkipsOverflowing: ['', Validators.required],
      // electricalMainboardLock: ['', Validators.required],
      // PowerleadsTested: ['', Validators.required],
      // EquipmentGiards: ['', Validators.required],
      // EquipmentCondition: ['', Validators.required],
      // LeadsSafety: ['', Validators.required],
      // SDSavailable: ['', Validators.required],
      // chemicalsStoredSDS: ['', Validators.required],
      // SDSRegisterAvailables: ['', Validators.required],
      // correctPPHand: ['', Validators.required],
      // FirstAidavailable: ['', Validators.required],
      // FirstKitContentsList: ['', Validators.required],
      // KitAccessableWorkers: ['', Validators.required],
      // awarefirstKitLocation: ['', Validators.required],
      // Extinguishers: ['', Validators.required],
      // ExtinguishersClearlyMaked: ['', Validators.required],
      // ExtinguishersSevicedUpdate: ['', Validators.required],
      // ExitSingsCondition: ['', Validators.required],
      // ExitDoorsBlocked: ['', Validators.required],
      // ExitDoorsOpened: ['', Validators.required],
      // FireAlarmTested: ['', Validators.required],
      // EvacuationPlans: ['', Validators.required],
      // emergencyDrillConduct: ['', Validators.required],
      // RiskAssessmentSWMS: ['', Validators.required],
      // PlantValidService: ['', Validators.required],
      // OpertionProceduresSOPs: ['', Validators.required],
      // PPEAvailable: ['', Validators.required],
      // emergencyPlan: ['', Validators.required],
      // PlantGoodCondition: ['', Validators.required],
      // appropriateGuards: ['', Validators.required],
      siteAction: this.fb.array([]),
      siteCategorytTopic: this.fb.array([]),
    });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe()
    console.log("site destroy");
  }

  ngOnInit(): void {
    this.isPrint=(this.shared.printObs$ as Observable<any>)
    this.activatedRoute.queryParams.subscribe(params => {
      this.type=params['formType'];  
    });
    this.id = this.activatedRoute.snapshot.params.id;

    this.dynamicFormsService.homebarTitle.next('Site Inspection Form');
    this.setTitle.setTitle('WHS-Site Inspection Form');
   
    if (this.id != 'form') {
      this.logicalFormInfo.getSiteInspection(this.id).subscribe((res: any) => {
        console.log('res', res);

        this.showDatas = res.data;
        this.allTopic= this.showDatas.allTopic
        this.allcategory=this.showDatas.allcategory
        this.allJobNumbers =this.showDatas.allJobNumbersArr;
        this.projectMang =this.showDatas.projectMangArr;
        this.staff =this.showDatas.staffArr;
        this.maxDate = this.showDatas.date;
       this.minDate = this.showDatas.date;
        for (let index = 0; index < this.allTopic.length; index++) {
          //this.sidePreview.addControl( this.allcategory[index].category ,new FormArray([]))
  
          this.add2().push(this.newAction2(index));
          // console.log("index",index);
        }
        console.log(this.sidePreview.value);
        setTimeout(() => {
          let formatDate;
          if (this.showDatas.date) {
            var date = new Date(this.showDatas.date);
            formatDate = this.datePipe.transform(date, 'yyyy-MM-dd');
            this.sidePreview.patchValue({ date: formatDate });
          } else {
            formatDate = '';
          }
               
          this.sidePreview.patchValue({
            siteName: this.showDatas.siteName,
            customerName: this.showDatas.customerName,
            streetAddr: this.showDatas.streetAddr,
            custConct: this.showDatas.custConct,
            custConctPh: this.showDatas.custConctPh,
            custEmail: this.showDatas.custEmail,
            jobNumber: this.showDatas.jobNumber,
            projectManager: this.showDatas.projectManager,
          });

          if (this.add2().controls) {
            let key;
            for ( let i = 0;i < this.allTopic.length;i++) {
            
                for (let index = 0; index <this.showDatas.siteCategorytTopic.length; index++) {
                  key = Object.keys(
                    this.showDatas.siteCategorytTopic[index]
                  );
                  this.add2()
                .controls[i].get(key)
                ?.setValue(
                  this.showDatas.siteCategorytTopic[index][key]
                );
                }
              
            }
          }
        }, 500);
        if(this.check){
          this.showAction()
        }
      });
    }else{
      this.getAllCategory();
      this.getAllTopic();
      this.getAllJobNumber();
      this.getAllProjectMang();
      this.getAllStaff();
    }
    
  }
  
  ngAfterViewInit(): void {
    
    this.sub= this.shared.printObs$.subscribe(res=> {
      this.check=res
      console.log("check1...",this.check);
    if (this.check) {
      setTimeout( () => { 
        window.print();
        console.log("printing....");
      }, 3000);
      localStorage.setItem('key', ' ');
    }
      
    })
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
  }
  jobNoSel() {
    this.allJobNumbers.forEach((item) => {
      if (this.sidePreview.get('jobNumber').value === item._id) {
        console.log('Id found', item);
        this.sidePreview.patchValue({
          siteName: item.siteName,
          customerName: item.customerName,
          streetAddr: item.streetAddress,
          custConct: item.customerContact,
          custConctPh: item.customerContactPhone,
          custEmail: item.customerEmail,
          jobNumber: this.sidePreview.get('jobNumber').value,
        });
      }
    });
    this.sidePreview.get('jobNumber').updateValueAndValidity();
  }
  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.sidePreview.get('siteAction') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
      item: ['',Validators.required],
      action: ['',Validators.required],
      PersonResponsible: ['',Validators.required],
      complete: ['',Validators.required],
      topicId: ['',Validators.required],
    });
  }
  showsite() {
    this.siteshow = true;
    this.siteAction = false;
    console.log(this.sidePreview);
  }
  showAction() {
    this.siteAction = true;
    this.siteshow = false;
    this.add().clear();
    if (this.id != 'form') {
      for (
        let index = 0;
        index < this.showDatas.siteAction.length;
        index++
      ) {
        console.log(this.showDatas.siteAction[index].item);

        this.addAction();
        this.add()
          .controls[index].get('item')
          .setValue(this.showDatas.siteAction[index].item);
        this.add()
          .controls[index].get('action')
          .setValue(this.showDatas.siteAction[index].action);
        this.add()
          .controls[index].get('topicId')
          .setValue(this.showDatas.siteAction[index].topicId);
        this.add()
          .controls[index].get('PersonResponsible')
          .setValue(
            this.showDatas.siteAction[index].PersonResponsible
          );
        this.add()
          .controls[index].get('complete')
          .setValue(this.showDatas.siteAction[index].complete);
      }
    } else {
      let key = [];
      for (let y = 0; y < this.allTopic.length; y++) {
        key.push(Object.keys(this.add2().at(y).value));
      }

      console.log('this.keyArr.find((ele) => key.includes(ele))', key);
      for (let i = 0; i < key.length - 1; i++) {
        if (!this.keyArr.find((ele) => key[i].includes(ele))) {
          let tempValue = this.add2().at(i).get(key[i]).value;
          console.log('tempValue', tempValue);
          let data = this.allTopic.find((obj) => {
            if (obj._id == tempValue) {
              console.log('obj', obj);

              return obj;
            }
          });
          if (tempValue != '') {
            if (tempValue != 'yes') {
              let index = this.add().length;
              this.addAction();
              console.log('data', data);

              this.add().controls[index].get('item').setValue(data.item);
              this.add().controls[index].get('action').setValue(data.action);
              this.add().controls[index].get('topicId').setValue(data._id);
            }
          }
        }
      }
    }
  }
  removeAction() {
    let index = this.add().length;
    this.add().removeAt(index - 1);
  }
  addAcionTab(event) {
    let b = Object.keys(this.sidePreview.value);
    console.log('event', event);
    //   let index =this.add().length
    //   this.addAction()
    // this.add().controls[index].get("item").setValue(event.target.value)

    //  console.log(this.sidePreview.controls[b[0]].value);
  }

  getAllJobTask() {
    this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
      this.jobTaskData = res.data;
      console.log('jobTaskDetails=>', this.jobTaskData);
    });
  }
  getAllProjectMang() {
    this.logicalFormInfo.getAllProjectMang().subscribe((res: any) => {
      this.projectMang = res.data;
    });
  }
  getAllJobNumber() {
    this.logicalFormInfo.getAllJobNumber().subscribe((res: any) => {
      this.allJobNumbers = res.data;
    });
  }
  tabClick(eve) {
    console.log('tab changed', eve);
    if (eve.index == 0) {
      this.showsite();
    }
    if (eve.index == 1) {
      this.sidePreview.updateValueAndValidity();
      this.showAction();
    }
  }
  onSave() {
    
    console.log('form data', this.sidePreview.value);
    if (this.id != 'form') {
      const data = {
    
            ...this.sidePreview.value,
            allTopic:this.allTopic,
            allcategory:this.allcategory,
            allJobNumbersArr: this.allJobNumbers,
            projectMangArr: this.projectMang,
            staffArr: this.staff
       
      };
      this.logicalFormInfo
        .updateSiteInspection(this.id, data)
        .subscribe((res) => {
          console.log('res', res);
          this.router.navigate(['/admin/forms']);
          // this.router.navigate(["/admin/forms/tableData"]);
          Swal.fire({
            title: 'Update successfully',
            showConfirmButton: false,
            timer: 1200,
          });
          this.router.navigate(['/admin/forms/tableData']);
        });
    } else {
      const data = {
       
            ...this.sidePreview.value,
              allTopic:this.allTopic,
              allcategory:this.allcategory,
              allJobNumbersArr: this.allJobNumbers,
              projectMangArr: this.projectMang,
              staffArr: this.staff
      
      };
      this.logicalFormInfo.addSiteInspection(data).subscribe((res) => {
        console.log('res', res);
        Swal.fire({
          title: 'Submit successfully',
          showConfirmButton: false,
          timer: 1200,
        });
        // this.router.navigate(["/admin/forms/tableData"]);
        this.router.navigate(['/admin/forms/fillConfigForm/'+0]);
      });
      console.log('data', data);
    }
    this.sidePreview.reset();
  }
  getAllCategory() {
    this.logicalFormInfo
      .getAllSiteInspectionCategory()
      .subscribe((res: any) => {
        this.allcategory = res.data;
        console.log('Allcategory', res);
        // for (let index = 0; index < this.allcategory.length; index++) {
        //   //this.sidePreview.addControl( this.allcategory[index].category ,new FormArray([]))

        // }
        // for (let x = 0; x < this.allcategory.length; x++) {
        //   let y=this.allcategory[x].category

        //  this.add2().push(this.newAction2())
        // }
      });
  }
  add2(): FormArray {
    return this.sidePreview.get('siteCategorytTopic') as FormArray;
  }
  newAction2(index): FormGroup {
    return this.fb.group({
      [this.allTopic[index]._id]: ['',],
    });
  }
  getAllTopic() {
    this.logicalFormInfo.getAllSiteInspectionTopic().subscribe((res: any) => {
      this.allTopic = res.data;
      console.log('alltopic', this.allTopic);

      // this.add2().push(this.newAction2(index))

      for (let index = 0; index < this.allTopic.length; index++) {
        //this.sidePreview.addControl( this.allcategory[index].category ,new FormArray([]))

        this.add2().push(this.newAction2(index));
        // console.log("index",index);
      }
      console.log(this.sidePreview.value);
    });
  }
  categorychecked(index) {
    let value;
    value = this.allTopic?.find((ele) => {
      return ele?.categoryId == this.allcategory[index]?._id;
    });
    return value != null;
  }
  getAllStaff() {
    this.logicalFormInfo.getAllStaff().subscribe((res: any) => {
      this.staff = res.data;
      console.log('res', this.staff);
    });
  }
}
