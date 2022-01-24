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
import { AddAndEditSubcontractComponent } from './subcontract/add-and-edit-subcontract/add-and-edit-subcontract.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { PlantRegistionTableComponent } from './plant-registration/plant-registion-table/plant-registion-table.component';
@NgModule({
	declarations: [
		CompanyRegistrationComponent,
		EmployeeRegistrationComponent,
		AddEmployeeComponent,
		PlantRegistrationComponent,
		SubcontractComponent,
		AddAndEditSubcontractComponent,
		CompanyDetailsComponent,
		PlantRegistionTableComponent
	],
	imports: [
		CommonModule,
		RegistrationRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		SignaturePadModule,
		MatTableModule,
		SharedModule,
		AngularSvgIconPreloaderModule,
		AngularSvgIconModule
	],
	exports: [
		CompanyRegistrationComponent,
		EmployeeRegistrationComponent,
		AddEmployeeComponent,
		PlantRegistrationComponent,
		SubcontractComponent,
		AddAndEditSubcontractComponent,
		CompanyDetailsComponent,
		PlantRegistionTableComponent,
		CommonModule,
		RegistrationRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		SignaturePadModule,
		MatTableModule,
		SharedModule,
		AngularSvgIconPreloaderModule,
		AngularSvgIconModule
	]
})
export class RegistrationModule {}
