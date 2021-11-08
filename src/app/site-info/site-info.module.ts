import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SiteInfoRoutingModule } from './site-info-routing.module';
import { SiteInfoComponent } from './site-info.component';
import { AddSiteInfoComponent } from './add-site-info/add-site-info.component';
import { JobTaskComponent } from './job-task/job-task.component';
import { HighRiskConComponent } from './high-risk-con/high-risk-con.component';
import { PpeSelectComponent } from './ppe-select/ppe-select.component';
import { LicenceAndQualComponent } from './licence-and-qual/licence-and-qual.component';
import { SharedModule } from './../shared/shared.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
// import { AddLicenceAndQualificationComponent } from './licence-and-qual/add-licence-and-qualification/add-licence-and-qualification.component';
// import { AddPPEselectComponent } from './ppe-select/add-ppeselect/add-ppeselect.component';
import { AddHighRiskConstructionComponent } from './high-risk-con/add-high-risk-construction/add-high-risk-construction.component';
import { EditHighRiskConstructionComponent } from './high-risk-con/edit-high-risk-construction/edit-high-risk-construction.component';
import { AddJobTaskComponent } from './job-task/add-job-task/add-job-task.component';
import { AddPPEComponent } from './ppe-select/add-ppe/add-ppe.component';
import { EditTaskComponent } from './job-task/edit-task/edit-task.component';
import { EditPPEComponent } from './ppe-select/edit-ppe/edit-ppe.component';
import { EditLicenceComponent } from './licence-and-qual/edit-licence/edit-licence.component';
import { AddLicenceComponent } from './licence-and-qual/add-licence/add-licence.component';
import { LicenceCatComponent } from './licence-and-qual/licence-cat/licence-cat.component';
import { AddLicenceCatComponent } from './licence-and-qual/licence-cat/add-licence-cat/add-licence-cat.component';
import { EditLicenceCatComponent } from './licence-and-qual/licence-cat/edit-licence-cat/edit-licence-cat.component';
import { CodeOfPractComponent } from './code-of-pract/code-of-pract.component';
import { AddCOPComponent } from './code-of-pract/add-cop/add-cop.component';
import { EditCOPComponent } from './code-of-pract/edit-cop/edit-cop.component';
import { AddSiteComponent } from './add-site-info/add-site/add-site.component';
import { EditSiteComponent } from './add-site-info/edit-site/edit-site.component';
import { AddingCustComponent } from './add-customer/adding-cust/adding-cust.component';
import { EditCustComponent } from './add-customer/edit-cust/edit-cust.component';

@NgModule({
  declarations: [
    SiteInfoComponent,
    AddSiteInfoComponent,
    JobTaskComponent,
    HighRiskConComponent,
    PpeSelectComponent,
    LicenceAndQualComponent,
    AddCustomerComponent,
    AddHighRiskConstructionComponent,
    EditHighRiskConstructionComponent,AddJobTaskComponent, AddPPEComponent, EditTaskComponent, EditPPEComponent, EditLicenceComponent, AddLicenceComponent, LicenceCatComponent, AddLicenceCatComponent, EditLicenceCatComponent, CodeOfPractComponent, AddCOPComponent, EditCOPComponent, AddSiteComponent, EditSiteComponent, AddingCustComponent, EditCustComponent,
  ],

  imports: [
    CommonModule,
    SiteInfoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class SiteInfoModule {}

