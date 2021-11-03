import { EditCOPComponent } from './code-of-pract/edit-cop/edit-cop.component';
import { AddCOPComponent } from './code-of-pract/add-cop/add-cop.component';
import { CodeOfPractComponent } from './code-of-pract/code-of-pract.component';
import { EditLicenceCatComponent } from './licence-and-qual/licence-cat/edit-licence-cat/edit-licence-cat.component';
import { LicenceCatComponent } from './licence-and-qual/licence-cat/licence-cat.component';
import { EditLicenceComponent } from './licence-and-qual/edit-licence/edit-licence.component';
import { AddLicenceComponent } from './licence-and-qual/add-licence/add-licence.component';
import { AddPPEComponent } from './ppe-select/add-ppe/add-ppe.component';
import { AddHighRiskConstructionComponent } from './high-risk-con/add-high-risk-construction/add-high-risk-construction.component';
import { AddJobTaskComponent } from './job-task/add-job-task/add-job-task.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { PpeSelectComponent } from './ppe-select/ppe-select.component';
import { LicenceAndQualComponent } from './licence-and-qual/licence-and-qual.component';
import { HighRiskConComponent } from './high-risk-con/high-risk-con.component';
import { JobTaskComponent } from './job-task/job-task.component';
import { AddSiteInfoComponent } from './add-site-info/add-site-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteInfoComponent } from './site-info.component';
import { AddLicenceCatComponent } from './licence-and-qual/licence-cat/add-licence-cat/add-licence-cat.component';

const routes: Routes = [
  { path: 'addSite', component: AddSiteInfoComponent },
  { path: 'addCustomer', component: AddCustomerComponent },
  { path: 'jobTask', component: JobTaskComponent},
  {path:'addJobTask',component:AddJobTaskComponent},
  {path:'addHighRisk',component:AddHighRiskConstructionComponent},
  {path:'addPPE',component:AddPPEComponent},

  { path: 'highRisk', component: HighRiskConComponent },
  { path: 'licenceAndQual', component: LicenceAndQualComponent },
  { path: 'addLicence', component: AddLicenceComponent },
  { path: 'editLicence', component: EditLicenceComponent },
  { path: 'licenceCat', component: LicenceCatComponent },
  { path: 'addLicenceCat', component: AddLicenceCatComponent },
  { path: 'editLicenceCat', component: EditLicenceCatComponent },
  { path: 'ppeSel', component: PpeSelectComponent },
  { path: 'codeOfpract', component: CodeOfPractComponent },
  { path: 'addCOP', component: AddCOPComponent },
  { path: 'editCOP', component: EditCOPComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteInfoRoutingModule { }
