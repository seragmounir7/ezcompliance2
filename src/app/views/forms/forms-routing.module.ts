import { FillConfiguredFormComponent } from './fill-configured-form/fill-configured-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayTableComponent } from './display-table/display-table.component';

import { FormsComponent } from './forms.component';
import { HazardReportComponent } from './hazard-report/hazard-report.component';
import { IncidentReportComponent } from './incident-report/incident-report.component';
import { RiskAssessmentSWMSComponent } from './risk-assessment-swms/risk-assessment-swms.component';
import { SiteInspectionComponent } from './site-inspection/site-inspection.component';
import { ToolboxTalkComponent } from './toolbox-talk/toolbox-talk.component';
import {SiteInspectionTableComponent} from './site-inspection-table/site-inspection-table.component'
import { HazardFormTableDetailsComponent } from './hazard-form-table-details/hazard-form-table-details.component';
import { IncidentsTableComponent } from './incidents-table/incidents-table.component';
import { RiskAssesmentTableComponent } from './risk-assesment-table/risk-assesment-table.component';
const routes: Routes = [
  { path: '', component: FormsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'siteInspect/:id', component: SiteInspectionComponent },
  { path: 'toolboxTalk/:id', component: ToolboxTalkComponent },
  { path: 'hazardRep/:id', component: HazardReportComponent },
  { path: 'incidentRep/:id', component: IncidentReportComponent },
  { path: 'riskAssessSWMS/:id', component: RiskAssessmentSWMSComponent },
  { path: 'riskAssessTable', component: RiskAssesmentTableComponent },
  { path: 'tableData', component: DisplayTableComponent},
  { path:'siteinspectiontable', component:SiteInspectionTableComponent},
  {path:'hazardTable',component:HazardFormTableDetailsComponent},
  { path: 'incidentsTable', component:IncidentsTableComponent},
  { path: 'fillConfigForm/:index', component:FillConfiguredFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
