import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  PPEData: any[]=[];
  @ViewChild('signature2') signaturePad2: any;
  @ViewChild('signature1') signaturePad: any;
  id: any;
  
  dataPlant: boolean;
  dataUrl: any;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private employee: EmployeeRegistrationService,
  ) { 
    this.plantDetails = this.fb.group({
      // plantName: ['', Validators.required],
      // make: ['', Validators.required],
      // hours: ['', Validators.required],
      // kilometres: ['', Validators.required],
      // date: ['', Validators.required],
      // registrationNumber: ['', Validators.required],
      // registrationRenewalDate: ['', Validators.required],
      // purchaseDate: ['', Validators.required],
      // insurancePolicyNumber: ['', Validators.required],
      // insuranceExpiry: ['', Validators.required],
      // fuelCardNumber: ['', Validators.required],
      // ETagNumber: ['', Validators.required],
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
    // if (this.id !== "form") {
    //   this.dataPlant = true;
    //   this.patchData();
    // } else {
    //   this.dataPlant = false;
    //   this. addFiled2();
    //   this.addEquipFiled2();
    // }
    // this.addEquipFiled2();
    // this. addFiled2();
  }
  addEquip() {
    return this.plantDetails.get('plantArr') as FormArray;
  }
  newEquipFiled2(): FormGroup {
    return this.fb.group({
      modelNumber: [''],
      serialNumber: [''],
      plantType: [''],
      serviceRenewDate: [''],
    });
  }
  addEquipFiled2() {
    this.addEquip().push(this.newEquipFiled2());
    console.log(this.plantDetails.value);
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
  removeEquipFiled1(i) {
    const item = <FormArray>this.plantDetails.controls['plantArr'];
    if (item.length > 1) {
      item.removeAt(i);

    }
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
  newFiled2(): FormGroup {
    return this.fb.group({
      PPESupplied: [''],
      BrandOrType: [''],
      IssueDate: [''],
      ReplacementDate: [''],
    });
  }
  addFiled2() {
    this.addPPE().push(this.newFiled2());
    console.log(this.plantDetails.value);
    this.PPEValueChanges =new Array<Observable<any>>()
    for (let index = 0; index < this.addPPE().length; index++) {
      let element = this.addPPE().at(index)
     this.PPEValueChanges.push( (element['controls'].PPESupplied.valueChanges as Observable<any>).pipe(
      startWith(''),
      debounceTime(400),
      tap(value => console.log('value', value)),
      map(value => (typeof value === 'string' ? value : value.fullName)),
      map(fullName => (fullName ? this._filterPPE(fullName) : this.PPEData.slice())),
    ))
      console.log(element.valueChanges)
    }
  }
  private _filterPPE(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.PPEData.filter(option => option.fullName.toLowerCase().includes(filterValue));
  }
  newFiled3(data): FormGroup {
    console.log("newData", data);

    return this.fb.group({
      PPESupplied: [data.ppeSupplied],
      BrandOrType: [data.brand],
      IssueDate: [data.issueDate],
      ReplacementDate: [data.replacementDate],
    });
  }
  addFiled3(data) {
    console.log("data", data);
    this.addPPE().push(this.newFiled3(data));
    console.log("addPPEFiled1", this.plantDetails.value);
    this.PPEValueChanges =new Array<Observable<any>>()
    for (let index = 0; index < this.addPPE().length; index++) {
      let element = this.addPPE().at(index)
     this.PPEValueChanges.push( (element['controls'].PPESupplied.valueChanges as Observable<any>).pipe(
      startWith(''),
      debounceTime(400),
      tap(value => console.log('value', value)),
      map(value => (typeof value === 'string' ? value : value.fullName)),
      map(fullName => (fullName ? this._filterPPE(fullName) : this.PPEData.slice())),
    ))
      console.log(element.valueChanges)
    }
  }
  removeFiled1(i) {
    const item = <FormArray>this.plantDetails.controls['PPEArr'];
    if (item.length > 1) {
      item.removeAt(i);

    }
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
    
      data.data.ppe.PPEArr.forEach(ele => {
        this.addFiled3(ele);
      });
      data.data.plant.plantArr.forEach(ele => {
        this.addEquipFiled3(ele);
      });
      this.plantDetails.patchValue({
        // profTitie: data.data.title,
        // profFirst: data.data.firstName,
        // porfListName: data.data.lastName,
        // porfEmail: data.data.email,
        // porfPosition: data.data.position,
        // porfDepartment: data.data.department,
        // porfPhone: data.data.phone,
        // porfMobile: data.data.mobile,

        // roleId: data.data.roleId,
        // porfStreetAddress: data.data.location.address,
        // porfCityTown: data.data.location.city,
        // porfState: data.data.location.state,
        // porfPostalCode: data.data.location.pincode,
        // porfUploadImage: data.data.uploadImage,
        // EmpFirst: data.data.emergencyContact.firstName,
        // empLastName: data.data.emergencyContact.lastName,
        // empRelationship: data.data.emergencyContact.relationship,
        // empEmail: data.data.emergencyContact.email,
        // empPhone: data.data.emergencyContact.phone,
        // empMobile: data.data.emergencyContact.mobile,

        PPESupplied: data.data.ppe.ppeSupplied,
        BrandOrType: data.data.ppe.brand,
        IssueDate: data.data.ppe.issueDate,
        ReplacementDate: data.data.ppe.replacementDate,
        // Sign: data.data.ppe.signature,
        // managerName: data.data.managerName,
        // date: data.data.date,

        plantType: data.data.plant.plantType,
        modelNumber: data.data.plant.modelNumber,
        serialNumber: data.data.plant.serialNumber,
        serviceRenewDate: data.data.plant.serviceRenewDate,
       
      });

      this.dataUrl = data.data.ppe.signature;
      this.dataUrl = data.data.plant.plantSignature;
      console.log("data.data.ppe.signature;", data.data.ppe.signature);

      let check = async () => { this.signaturePad != null }
      check().then((res) => {
        console.log("this.signaturePad", this.signaturePad, res);

        this.signaturePad.fromDataURL(data.data.ppe.signature)

      })
      let check2 = async () => { this.signaturePad2 != null }
      check2().then((res) => {
        console.log("this.signaturePad", this.signaturePad2, res);

        this.signaturePad2.fromDataURL(data.data.plant.plantSignature)

      })

    });
  }
}
