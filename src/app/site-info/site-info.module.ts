import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteInfoRoutingModule } from './site-info-routing.module';
import { SiteInfoComponent } from './site-info.component';
import { AddSiteInfoComponent } from './add-site-info/add-site-info.component';
import { JobTaskComponent } from './job-task/job-task.component';
import { HighRiskConComponent } from './high-risk-con/high-risk-con.component';
import { PpeSelectComponent } from './ppe-select/ppe-select.component';
import { LicenceAndQualComponent } from './licence-and-qual/licence-and-qual.component';


@NgModule({
  declarations: [SiteInfoComponent, AddSiteInfoComponent, JobTaskComponent, HighRiskConComponent, PpeSelectComponent, LicenceAndQualComponent],
  imports: [
    CommonModule,
    SiteInfoRoutingModule
  ]
})
export class SiteInfoModule { }
