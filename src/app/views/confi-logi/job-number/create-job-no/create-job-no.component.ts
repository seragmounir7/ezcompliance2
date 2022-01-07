import { JobNumber } from './../../../../utils/services/logical-form-info.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-job-no',
  templateUrl: './create-job-no.component.html',
  styleUrls: ['./create-job-no.component.scss']
})
export class CreateJobNoComponent implements OnInit, AfterViewInit {
  jobHasError: boolean = false
  allSites: any[] = []
  addJobNumberForm: FormGroup
  addCustomerForm: FormGroup;
  allCustomers: any[] = [];
  allState: any = [];
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
      this.addJobNumberForm.get('state').setValue(res.stateId._id)
    })
    this.addJobNumberForm.get('customerName').valueChanges.subscribe(res => {
      // console.log(JSON.parse(res))
      res = JSON.parse(res)
      this.addJobNumberForm.get('customerContact').setValue(res.customerContact)
      this.addJobNumberForm.get('customerContactPhone').setValue(res.contacts[0]?.phone)
      this.addJobNumberForm.get('customerEmail').setValue(res.contacts[0]?.email)
      // this.addJobNumberForm.get('customerEmail').setValue(res.ABN)
    })
  }

  ngOnInit(): void {

    this.addJobNumberForm = this.fb.group({
      jobNumber: [''],
      siteName: ['', Validators.required],
      streetNumber: [{ value: '', disabled: true }, Validators.required],
      streetAddress: [{ value: '', disabled: true }, Validators.required],
      suburb: [{ value: '', disabled: true }, Validators.required],
      state: [{ value: '', disabled: true }, Validators.required],
      customerName: ['', Validators.required],
      customerContact: [{ value: '', disabled: true }, Validators.required],
      customerContactPhone: [{ value: '', disabled: true }, Validators.required],
      customerEmail: [{ value: '', disabled: true }, Validators.required],
    })
    this.addJobNumberForm.controls.jobNumber.valueChanges.subscribe(res => {
      console.log('this.addJobNumberForm.controls.jobNumber', this.addJobNumberForm.controls.jobNumber.errors, this.addJobNumberForm.invalid)
    })
    this.logicalFormInfoService.getAllSite().subscribe((res: any) => {
      this.jobHasError = false
      this.allSites = res.data;
      console.log(res.data);
    }, (err) => {
      if (err instanceof HttpErrorResponse && (err as HttpErrorResponse).status === 422) {
        this.jobHasError = true
      }
      console.error(err)
    })
    this.logicalFormInfoService.getAllCustomer().subscribe((res: any) => {
      this.allCustomers = res.data
    })
    this.getAllStates();
  }
  get f() {
    return this.addJobNumberForm.controls
  }
  onSubmit() {
    console.log(this.addJobNumberForm.value)
    const jobNumber = this.f.jobNumber.value ? { jobNumber: this.f.jobNumber.value } : ''
    let data: JobNumber
    data = {
      arrObj: [{
        customerContact: this.f.customerContact.value,
        customerContactPhone: this.f.customerContactPhone.value,
        customerEmail: this.f.customerEmail.value,
        customerName: JSON.parse(this.f.customerName.value).customerName,
        siteName: JSON.parse(this.f.siteName.value).siteName,
        stateId: this.f.state.value,
        streetAddress: this.f.streetAddress.value,
        streetNumber: this.f.streetNumber.value,
        suburb: this.f.suburb.value,
        ...jobNumber
      }]
    }
    console.log(data)
    this.logicalFormInfoService.addJobNumber(data).subscribe((res: any) => {
      console.log(res)
      this.dialogRef.close('success')
    })
  }
  setSite(item) {
    console.log(item)
    this.addJobNumberForm.get('streetNumber').setValue(item.streetNumber)
    this.addJobNumberForm.get('streetAddress').setValue(item.streetAddress)
    this.addJobNumberForm.get('suburb').setValue(item.suburb)
    this.addJobNumberForm.get('state').setValue(item.stateId._id)
  }
  setCustomer(item) {
    this.addJobNumberForm.get('customerContact').setValue(item.customerContact)
    this.addJobNumberForm.get('customerContactPhone').setValue(item.contacts[0]?.phone)
    this.addJobNumberForm.get('customerEmail').setValue(item.contacts[0]?.email)
    //   this.addJobNumberForm.get('customerEmail').setValue(item.ABN)
  }
  close() {
    this.dialogRef.close();
  }
  getAllStates() {
    this.logicalFormInfoService.getAllStates().subscribe((res) => {
      console.log('getAllStates=>', res);
      this.allState = res.data;
    });

  }
  jobNumberChecked(e: MatCheckboxChange) {
    console.log(e)
    if (e.checked) {
      this.addJobNumberForm.get('jobNumber').setErrors(Validators.required)
    } else {
      this.addJobNumberForm.get('jobNumber').setErrors(null)
    }

    console.log('this.addJobNumberForm.controls.jobNumber', this.addJobNumberForm.controls.jobNumber.errors, this.addJobNumberForm.invalid);
  }
}
