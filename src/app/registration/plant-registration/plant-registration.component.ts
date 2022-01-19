import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';
import { EmployeeRegistrationService } from 'src/app/utils/services/employee-registration.service';

@Component({
  selector: 'app-plant-registration',
  templateUrl: './plant-registration.component.html',
  styleUrls: ['./plant-registration.component.scss']
})
export class PlantRegistrationComponent implements OnInit {
  plantDetails!: FormGroup;
  PPERegister = false;
  EquipmentInfo = false;
  PPEValueChanges: Observable<any>[];
  filteredOptions1: Observable<any>;
  filteredOptions2: Observable<any>;
  PPEData: any[]=[];
  @ViewChild('signature2') signaturePad2: any;
  @ViewChild('signature1') signaturePad: any;
  id: any;
  
  dataPlant: boolean;
  dataUrl: any;
  empData: any[]=[];
  employeeData: any;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private employee: EmployeeRegistrationService,
  ) { 
    this.plantDetails = this.fb.group({
      PPESupplied: [''],
      BrandOrType: [''],
      IssueDate: [''],
      PPEArr: this.fb.array([]),
      ReplacementDate: [''],
      Sign: [''],
      managerName: [''],
      date: [''],
      plantArr: this.fb.array([]),
      plantSignature: [''],
     
      modelNumber: [''],
      serialNumber: [''],
      plantType: [''],
      serviceRenewDate: [''],
      plantManagerName: [''],
      plantDate: [''],
    });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.patchData();
    this.employee.getAllEmployeeInfo().pipe(
      map((res) => { 
        return res.data.map((item) => {
          item.fullName = `${item.firstName} ${item.lastName}`
          return item
        })
      })
    ).subscribe(empData => {
      this.empData = empData
    
    
    this.filteredOptions1 = this.plantDetails.controls.managerName.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      tap(value => (typeof value === 'object' ?"":typeof value === 'string' ? (this.plantDetails['controls'].managerName as AbstractControl).setErrors({'incorrect': true}) : '')),
      map(value => (typeof value === 'string' ? value : value?.fullName)),
      map(fullName => (fullName ? this._filter(fullName) : this.empData.slice())),
    )
    this.filteredOptions2 = this.plantDetails.controls.managerName.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      tap(value => (typeof value === 'object' ?"":typeof value === 'string' ? (this.plantDetails['controls'].managerName as AbstractControl).setErrors({'incorrect': true}) : '')),
      map(value => (typeof value === 'string' ? value : value?.fullName)),
      map(fullName => (fullName ? this._filter(fullName) : this.empData.slice())),
    )
  }) 
  }
  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.empData.filter(option => option.fullName.toLowerCase().includes(filterValue));
  }
  displayFn(user: any): string {
    return user && user.fullName ? user.fullName : '';
  }
  addEquip() {
    return this.plantDetails.get('plantArr') as FormArray;
  }
  
  newEquipFiled3(data): FormGroup {
    console.log("newData", data);

    return this.fb.group({
      plantType: [data.plantType],
      modelNumber: [data.modelNumber],
      serialNumber: [data.serialNumber],
      serviceRenewDate: [data.serviceRenewDate],
     
    });
  }
  addEquipFiled3(data) {
    console.log("data", data);
    this.addEquip().push(this.newEquipFiled3(data));
    console.log("addPPEFiled1", this.plantDetails.value);
  }
  public signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 500,
    canvasHeight: 100,
  };
  drawComplete2() {
    // will be notified of szimek/signature_pad's onEnd event
    this.plantDetails.controls["plantSignature"].setValue(this.signaturePad2.toDataURL())
    console.log(this.signaturePad2.toDataURL());
  }
  clear2() {
    this.signaturePad2.clear();
  }
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  addPPE() {
    return this.plantDetails.get('PPEArr') as FormArray;
  }

  newFiled3(data): FormGroup {
    console.log("newData", data);

    return this.fb.group({
      PPESupplied: [data.ppeSupplied],
      BrandOrType: [data.brand],
      IssueDate: [data.issueDate],
      ReplacementDate: [data.replacementDate],
      ppeCheck:[''],
    });
  }
  addFiled3(data) {
    console.log("data", data);
    this.addPPE().push(this.newFiled3(data));
    console.log("addPPEFiled1", this.plantDetails.value);
  }

  PPERegisteshow() {
    this.PPERegister = true;
    this.EquipmentInfo = false;
  }
  addPlantshow() {
    this.PPERegister = false;
    this.EquipmentInfo = true;
  }
  clear() {
    this.signaturePad.clear();
  }
 
  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    this.plantDetails.controls["Sign"].setValue(this.signaturePad.toDataURL())
    console.log(this.signaturePad.toDataURL());
  }
  patchData() {
    let id ='61dfd0151e1fff342f211925';
    this.employee.getEmployeeInfoById(id).subscribe((data) => {
      console.log('data=>', data);
      // this.signaturePad.toDataURL();
    this.employeeData= data.data
      data.data.ppe.PPEArr.forEach(ele => {
        this.addFiled3(ele);
      });
      data.data.plant.plantArr.forEach(ele => {
        this.addEquipFiled3(ele);
      });
      this.plantDetails.patchValue({
        PPESupplied: data.data.ppe.ppeSupplied,
        BrandOrType: data.data.ppe.brand,
        IssueDate: data.data.ppe.issueDate,
        ReplacementDate: data.data.ppe.replacementDate,
        plantType: data.data.plant.plantType,
        modelNumber: data.data.plant.modelNumber,
        serialNumber: data.data.plant.serialNumber,
        serviceRenewDate: data.data.plant.serviceRenewDate,
       
      });

      this.dataUrl = data.data.ppe.signature;
      this.dataUrl = data.data.plant.plantSignature;
      console.log("data.data.ppe.signature;", data.data.ppe.signature);

      // let check = async () => { this.signaturePad != null }
      // check().then((res) => {
      //   console.log("this.signaturePad", this.signaturePad, res);

      //   this.signaturePad.fromDataURL(data.data.ppe.signature)

      // })
      // let check2 = async () => { this.signaturePad2 != null }
      // check2().then((res) => {
      //   console.log("this.signaturePad", this.signaturePad2, res);

      //   this.signaturePad2.fromDataURL(data.data.plant.plantSignature)

      // })

    });
  }
  peeSubmit(){
    let submitPPEArr=[]
    let notSubPPEArr=[]
    let {
      ppe,
      ...rest
    }= this.employeeData
    // submitPPEArr.push(PPEArr.map((res)=>{ 
    //   if(res.ppeCheck){
    //   return {
    //   PPESupplied: res.PPESupplied,
    //   BrandOrType: res.BrandOrType,
    //   IssueDate: res.IssueDate,
    //   ReplacementDate: res.ReplacementDate,
    //   }
    // }else{

    // }
    // }))
    // console.log("submitPPEArr",submitPPEArr);
    
    for (let index = 0; index < this.addPPE().length; index++) {
    
      if(this.addPPE().at(index).get("ppeCheck").value){
        let arr={
          ppeSupplied: this.addPPE().at(index).get("PPESupplied").value,
          brand:this.addPPE().at(index).get("BrandOrType").value ,
          issueDate:this.addPPE().at(index).get("IssueDate").value ,
          replacementDate: this.addPPE().at(index).get("ReplacementDate").value ,
        }
        submitPPEArr.push(arr)
        console.log("submitPPEArr",submitPPEArr);
        
      }else{
        let arr={
          ppeSupplied: this.addPPE().at(index).get("PPESupplied").value,
          brand:this.addPPE().at(index).get("BrandOrType").value ,
          issueDate:this.addPPE().at(index).get("IssueDate").value ,
          replacementDate: this.addPPE().at(index).get("ReplacementDate").value ,
        }
        notSubPPEArr.push(arr)
        console.log("PPEArr",notSubPPEArr);
       }
    }
    let data={
      signature:this.plantDetails.controls['Sign'].value,
      date:this.plantDetails.controls['date'].value,
      managerName:this.plantDetails.controls['managerName'].value._id,
      submitPPEArr:submitPPEArr,
      employeeId: this.employeeData._id
      
    }
    console.log("ppe submit",data);
    let data2={
      ...rest,
      ppe:{
        PPEArr:notSubPPEArr,
        signature:ppe.signature
              }
    }
    console.log("this.",this.employeeData,data2);
    
  }
  plantSubmit(){
    let submitPlant=[]
    let notSubPlant=[]
    let {
      plant,
      ...rest
    }= this.employeeData
    
    for (let index = 0; index < this.addEquip().length; index++) {
    
      if(this.addEquip().at(index).get("ppeCheck").value){
        let arr={
          ppeSupplied: this.addEquip().at(index).get("PPESupplied").value,
          brand:this.addEquip().at(index).get("BrandOrType").value ,
          issueDate:this.addEquip().at(index).get("IssueDate").value ,
          replacementDate: this.addEquip().at(index).get("ReplacementDate").value ,
        }
        submitPlant.push(arr)
        console.log("submitPlant",submitPlant);
        
      }else{
        let arr={
          ppeSupplied: this.addEquip().at(index).get("PPESupplied").value,
          brand:this.addEquip().at(index).get("BrandOrType").value ,
          issueDate:this.addEquip().at(index).get("IssueDate").value ,
          replacementDate: this.addEquip().at(index).get("ReplacementDate").value ,
        }
        notSubPlant.push(arr)
        console.log("PPEArr",notSubPlant);
       }
    }
    let data={
      signature:this.plantDetails.controls['Sign'].value,
      date:this.plantDetails.controls['date'].value,
      managerName:this.plantDetails.controls['managerName'].value._id,
      submitPlant:submitPlant,
      employeeId: this.employeeData._id
      
    }
    console.log("plant submit",data);
    let data2={
      ...rest,
      plant:{
        plantArr:notSubPlant,
        signature:plant.plantSignature
              }
    }
    console.log("this.",this.employeeData,data2);
    
  }
}