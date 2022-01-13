import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plant-registration',
  templateUrl: './plant-registration.component.html',
  styleUrls: ['./plant-registration.component.scss']
})
export class PlantRegistrationComponent implements OnInit {
  plantDetails!: FormGroup;

  @ViewChild('signature2') signaturePad2: any;
  id: any;
  
  dataPlant: boolean;
  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
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
     
     
      plantArr: this.fb.array([]),
      plantSignature: [''],
     
      modelNumber: [''],
      serialNumber: [''],
      plantType: [''],
      serviceRenewDate: [''],
    });
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;

    // if (this.id !== "form") {
    //   this.dataPlant = true;
    //   // this.patchData();
    // } else {
    //   this.dataPlant = false;
     
    //   this.addEquipFiled2();
    // }
    this.addEquipFiled2();
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
}
