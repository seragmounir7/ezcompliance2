import { JobNumber } from './../../../../utils/services/logical-form-info.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-create-job-no',
  templateUrl: './create-job-no.component.html',
  styleUrls: ['./create-job-no.component.scss']
})
export class CreateJobNoComponent implements OnInit, AfterViewInit {
  allSites: any[] = []
  addJobNumberForm: FormGroup
  addCustomerForm: FormGroup;
  allCustomers: any[] = []
  constructor(
    private dialogRef: MatDialogRef<CreateJobNoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private logicalFormInfoService: LogicalFormInfoService,
    private fb: FormBuilder
  ) { }
  ngAfterViewInit(): void {
    this.addJobNumberForm.get('siteName').valueChanges.subscribe(res => {
      // console.log(JSON.parse(res))
      res = JSON.parse(res)
      this.addJobNumberForm.get('streetNumber').setValue(res.streetNumber)
      this.addJobNumberForm.get('streetAddress').setValue(res.streetAddress)
      this.addJobNumberForm.get('suburb').setValue(res.suburb)
      this.addJobNumberForm.get('state').setValue(res.state)
    })
    this.addJobNumberForm.get('customerName').valueChanges.subscribe(res => {
      // console.log(JSON.parse(res))
      res = JSON.parse(res)
      this.addJobNumberForm.get('customerContact').setValue(res.customerContact)
      this.addJobNumberForm.get('customerContactPhone').setValue(res.customerContactPhone)
      this.addJobNumberForm.get('customerEmail').setValue(res.customerEmail)
    })
  }

  ngOnInit(): void {
    this.addJobNumberForm = this.fb.group({
      siteName: [''],
      streetNumber: [{ value: '', disabled: true }],
      streetAddress: [{ value: '', disabled: true }],
      suburb: [{ value: '', disabled: true }],
      state: [{ value: '', disabled: true }],
      customerName: [''],
      customerContact: [{ value: '', disabled: true }],
      customerContactPhone: [{ value: '', disabled: true }],
      customerEmail: [{ value: '', disabled: true }],
    })
    this.logicalFormInfoService.getAllSite().subscribe((res: any) => {
      this.allSites = res.data;
      console.log(res.data);
      
    })
    this.logicalFormInfoService.getAllCustomer().subscribe((res: any) => {
      this.allCustomers = res.data
    })
  }
  get f(){
    return this.addJobNumberForm.controls
  }
  onSubmit() {
    console.log(this.addJobNumberForm.value)
    let data : JobNumber
    data = {
      arrObj:[{
        customerContact:this.f.customerContact.value,
        customerContactPhone:this.f.customerContactPhone.value,
        customerEmail:this.f.customerEmail.value,
        customerName:JSON.parse(this.f.customerName.value).customerName,
        siteName:JSON.parse(this.f.siteName.value).siteName,
        state:this.f.state.value,
        streetAddress:this.f.streetAddress.value,
        streetNumber:this.f.streetNumber.value,
        suburb:this.f.suburb.value,
      }]
    }
    console.log(data)
    this.logicalFormInfoService.addJobNumber(data).subscribe((res:any)=>{
      console.log(res)
      this.dialogRef.close('success')
    })
  }
  setSite(item) {
    console.log(item)
    this.addJobNumberForm.get('streetNumber').setValue(item.streetNumber)
    this.addJobNumberForm.get('streetAddress').setValue(item.streetAddress)
    this.addJobNumberForm.get('suburb').setValue(item.suburb)
    this.addJobNumberForm.get('state').setValue(item.state)
  }
  setCustomer(item) {
    this.addJobNumberForm.get('customerContact').setValue(item.customerContact)
    this.addJobNumberForm.get('customerContactPhone').setValue(item.customerContactPhone)
    this.addJobNumberForm.get('customerEmail').setValue(item.customerEmail)
  }
}
