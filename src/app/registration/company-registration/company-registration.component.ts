import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.scss']
})
export class CompanyRegistrationComponent implements OnInit {
  companyInfo: FormGroup;
  constructor(private fb: FormBuilder) {
    this.companyInfo = fb.group({
      'companyName' : [null, Validators.required],
      'ABN' : [null, Validators.required],
      'ACN' : [null, Validators.required],
      'website' : [null, Validators.required],
      'email' : [null, Validators.required],
      'phone' : [null, Validators.required],
      'customerType' : [null, Validators.required],
      'businessLicense' : [null, Validators.required],
      'streetAddress' : [null, Validators.required],
      'suburb' : [null, Validators.required],
      'state' : [null, Validators.required],
      'postcode' : [null, Validators.required],
      'sameAsStreet' : [null, Validators.required],
      'PObox' : [null, Validators.required],
      'postalSuburb' : [null, Validators.required],
      'postalState' : [null, Validators.required],
      'postalPostcode' : [null, Validators.required],
    })
   }

  ngOnInit(): void {
  }
  onFormSubmit(){
    console.log("this.companyInfo.value",this.companyInfo.value)
  }
}
