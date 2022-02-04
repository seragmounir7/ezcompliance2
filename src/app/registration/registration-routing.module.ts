import { PlantRegistionTableComponent } from './plant-registration/plant-registion-table/plant-registion-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { AddEmployeeComponent } from './employee-registration/add-employee/add-employee.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { PlantRegistrationComponent } from './plant-registration/plant-registration.component';
import { AddAndEditSubcontractComponent } from './subcontract/add-and-edit-subcontract/add-and-edit-subcontract.component';
import { SubcontractComponent } from './subcontract/subcontract.component';
import { AddAndEditCompanyInfoComponent } from './company-details/add-and-edit-company-info/add-and-edit-company-info.component';

const routes: Routes = [
	{ path: '', component: CompanyRegistrationComponent },
	{ path: 'employeeRegistration', component: EmployeeRegistrationComponent },
	{ path: 'addEmployee/:id', component: AddEmployeeComponent },
	{ path: 'plantRegistration/:id', component: PlantRegistrationComponent },
	{
		path: 'plantRegistrationTable/:id',
		component: PlantRegistionTableComponent
	},
	{ path: 'subcontract', component: SubcontractComponent },
	{ path: 'addSubcontract/:id', component: AddAndEditSubcontractComponent },
	{ path: 'compdetails', component: CompanyDetailsComponent },
	{
		path: 'plantRegistration/history/:id',
		component: PlantRegistrationComponent
	},
	{ path: 'addCompanyInfo/:id', component: AddAndEditCompanyInfoComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class RegistrationRoutingModule {}
