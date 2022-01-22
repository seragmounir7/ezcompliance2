import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  // registerComp : FormGroup;
  formData : FormGroup;
  submitted = false;
  dataPlant: boolean;
  plantDetails: any;
  id: any;
  StatesData:any=[];
  constructor(
    private fb:FormBuilder,
    private activatedRoute: ActivatedRoute,
    
    private licenceInfo: LogicalFormInfoService,
    ) { }

  ngOnInit(): void {
    this.formData = this.fb.group({
      companyName: ['', Validators.required],
      phoneNumber:['',Validators.required],
      fax:[],
      emailAddress:['',Validators.required],
      streetAddress:['',Validators.required],
      subUrb:['',Validators.required],
      sTate:['',Validators.required],
      postCode:['',Validators.required],
      mailingAddress:['',Validators.required],
      companyABN: ['',Validators.required],
      companyAddr: ['',Validators.required],
      licenceNumber:['',Validators.required],
      companyWeb: ['',Validators.required],
      companyLogo:['',Validators.required],
      plantArr: this.fb.array([]),
      plantName:[''],
      checkedOut: [''],
      hours: [''],
      kilometres: [''],
      date: [''],
      make:[''],
      modelNumber: [''],
      registrationNumber:[''],
      registrationRenewalDate: [''],
      plantType: [''],
      purchaseDate: [''],
      insurancePolicyNumber: [''],
      insuranceExpiry: [''],
      fuelCardNumber: [''],
      ETagNumber: [''],
      plantSignature: [''],
  })

  this.id = this.activatedRoute.snapshot.params.id;

  // if (this.id !== "form") {
  //   this.dataPlant = true;
  //   // this.patchData();
  // } else {
  //   this.dataPlant = false;
   
  //   this.addEquipFiled2();
  // }
  this.addEquipFiled2();
  this.getAllStates();
}
getAllStates() {
  this.licenceInfo.getAllStates().subscribe((res: any) => {
    console.log('setStatesDetails=>', res);
    this.StatesData = res.data;
  });
}
addEquip() {
  return this.formData.get('plantArr') as FormArray;
}

newEquipFiled2(): FormGroup {
  return this.fb.group({
    plantName:[''],
    checkedOut: [''],
    hours: [''],
    kilometres: [''],
    date: [''],
    make:[''],
    modelNumber: [''],
    registrationNumber:[''],
    registrationRenewalDate: [''],
    plantType: [''],
    purchaseDate: [''],
    insurancePolicyNumber: [''],
    insuranceExpiry: [''],
    fuelCardNumber: [''],
    ETagNumber: [''],
  });
}
addEquipFiled2() {
  this.addEquip().push(this.newEquipFiled2());
  console.log(this.formData.value);
}
removeEquipFiled1(i) {
  const item = <FormArray>this.formData.controls['plantArr'];
  if (item.length > 1) {
    item.removeAt(i);

  }
}
// public signaturePadOptions: Object = {
//   // passed through to szimek/signature_pad constructor
//   minWidth: 1,
//   canvasWidth: 500,
//   canvasHeight: 100,
// };

// drawStart() {
//   // will be notified of szimek/signature_pad's onBegin event
//   console.log('begin drawing');
//   }

  // get f() {
  //   return this.registerFormControl.controls;
  // }

  get registerFormControl() {
    return this.formData.controls;
  }

  browser2(event) {
    const files = event.target.files[0];
    const formdata = new FormData();
    formdata.append('', files);
    console.log(files);
  }

  submeet(){
    console.log("clicked");
    this.submitted = !this.submitted;
    console.log("FormValues = > ",this.formData.value);
    
  }

}
