import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adding-cust',
  templateUrl: './adding-cust.component.html',
  styleUrls: ['./adding-cust.component.scss']
})
export class AddingCustComponent implements OnInit {

  addCustomerForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private logicalFormInfoService: LogicalFormInfoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.addCustomerForm = this.fb.group({
      customerName: [''],
      customerContact: [''],
      customerStreetAddress: [''],
      customerState: [''],
      customerPostCode: [''],
      businessName: [''],
      arrObj: this.fb.array([]),
      // customerContactPhone:[''],
      // customerEmail:[''],
    })
    this.addCustomerDetails();
  }
  addCustomerDetails() {
    this.customerArr().push(this.customerForm());

  }
  customerArr(): FormArray {
    return this.addCustomerForm.get('arrObj') as FormArray;
  }
  customerForm(): FormGroup {
    return this.fb.group({
      email: [],
      phone: [],
      position: []

    });
  }
  removeCustomerDetails(i) {
    const item = <FormArray>this.addCustomerForm.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);

    }
  }
  onSubmit() {
    console.log(this.addCustomerForm.value);

    this.logicalFormInfoService.addCustomer(this.addCustomerForm.value).subscribe(res => {
      console.log("addCustomerForm=>", res)
      // this.dialogRef.close('ok')
      this.router.navigate(['/admin/siteInfo/addCustomer']);
    }, (err) => {
      console.error(err);
    });
  }
  states = [
    {
      value: "NSW", name: "NSW"
    },
    { value: "ACT", name: "ACT" },
    { value: "QLD", name: "QLD" },
    { value: "NT", name: "NT" },
    { value: "SA", name: "SA" },
    { value: "NZ", name: "NZ" },
    { value: "TAS", name: "TAS" },
    { value: "VIC", name: "VIC" },
    { value: "WA", name: "WA" },

  ]
  
}
