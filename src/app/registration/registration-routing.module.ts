import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';

const routes: Routes = [
{path: "", component: CompanyRegistrationComponent },
{path: "employeeRegistration", component: EmployeeRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
