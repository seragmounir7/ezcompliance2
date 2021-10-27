import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

=======
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 3c06510542a59b30745956d76ca8a8a86160d4cf
import { SiteInfoRoutingModule } from './site-info-routing.module';
import { SiteInfoComponent } from './site-info.component';
import { AddSiteInfoComponent } from './add-site-info/add-site-info.component';
import { JobTaskComponent } from './job-task/job-task.component';
import { HighRiskConComponent } from './high-risk-con/high-risk-con.component';
import { PpeSelectComponent } from './ppe-select/ppe-select.component';
import { LicenceAndQualComponent } from './licence-and-qual/licence-and-qual.component';
import { SharedModule } from './../shared/shared.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';


@NgModule({
  declarations: [SiteInfoComponent, AddSiteInfoComponent, JobTaskComponent, HighRiskConComponent, PpeSelectComponent, LicenceAndQualComponent, AddCustomerComponent],
  imports: [
    CommonModule,
    SiteInfoRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    FormsModule,
=======
    FormsModule,
    ReactiveFormsModule,
    SharedModule
>>>>>>> 3c06510542a59b30745956d76ca8a8a86160d4cf
  ]
})
export class SiteInfoModule { }
