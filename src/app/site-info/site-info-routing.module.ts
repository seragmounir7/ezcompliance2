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

const routes: Routes = [
  { path: 'addSite', component: AddSiteInfoComponent },
  { path: 'addCustomer', component: AddCustomerComponent },
  { path: 'jobTask', component: JobTaskComponent},
  {path:'addJobTask',component:AddJobTaskComponent},
  {path:'addHighRisk',component:AddHighRiskConstructionComponent},

  { path: 'highRisk', component: HighRiskConComponent },
  { path: 'licenceAndQual', component: LicenceAndQualComponent },
  { path: 'ppeSel', component: PpeSelectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteInfoRoutingModule { }
