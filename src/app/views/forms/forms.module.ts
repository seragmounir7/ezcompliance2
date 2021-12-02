import { TextareaAutoresizeDirective } from './../../Directives/textarea-autoresize.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { SiteInspectionComponent } from './site-inspection/site-inspection.component';
import { ToolboxTalkComponent } from './toolbox-talk/toolbox-talk.component';
import { HazardReportComponent } from './hazard-report/hazard-report.component';
import { IncidentReportComponent } from './incident-report/incident-report.component';
import { RiskAssessmentSWMSComponent } from './risk-assessment-swms/risk-assessment-swms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddItemComponent } from './risk-assessment-swms/add-item/add-item.component';
import { DisplayTableComponent } from './display-table/display-table.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
@NgModule({
  declarations: [
    FormsComponent,
    SiteInspectionComponent,
    ToolboxTalkComponent,
    HazardReportComponent,
    IncidentReportComponent,
    RiskAssessmentSWMSComponent,
    AddItemComponent,
    DisplayTableComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    SignaturePadModule,
    SharedModule,
    FormsModule,
    CKEditorModule
  ],
  providers:[TextareaAutoresizeDirective]
})
export class FormsModule1 {}
