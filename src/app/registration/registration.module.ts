import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AddEmployeeComponent } from './employee-registration/add-employee/add-employee.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { PlantRegistrationComponent } from './plant-registration/plant-registration.component';
import { SubcontractComponent } from './subcontract/subcontract.component';

@NgModule({
  declarations: [CompanyRegistrationComponent, EmployeeRegistrationComponent, AddEmployeeComponent, PlantRegistrationComponent, SubcontractComponent],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SignaturePadModule,
    MatTableModule,
    SharedModule,
  ]
})
export class RegistrationModule { }
