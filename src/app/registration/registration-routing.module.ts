import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { AddEmployeeComponent } from './employee-registration/add-employee/add-employee.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { PlantRegistrationComponent } from './plant-registration/plant-registration.component';
import { SubcontractComponent } from './subcontract/subcontract.component';

const routes: Routes = [
  { path: "", component: CompanyRegistrationComponent },
  { path: "employeeRegistration", component: EmployeeRegistrationComponent },
  { path: "addEmployee/:id", component: AddEmployeeComponent },
  { path: "plantRegistration", component: PlantRegistrationComponent},
  { path: "subcontract", component: SubcontractComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
