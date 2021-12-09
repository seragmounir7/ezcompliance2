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
import { IncidentsTableComponent } from './incidents-table/incidents-table.component';
const routes: Routes = [
  { path: '', component: FormsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'siteInspect/:id', component: SiteInspectionComponent },
  { path: 'toolboxTalk/:id', component: ToolboxTalkComponent },
  { path: 'hazardRep', component: HazardReportComponent },
  { path: 'incidentRep/:id', component: IncidentReportComponent },
  { path: 'riskAssessSWMS', component: RiskAssessmentSWMSComponent },
  { path: 'tableData', component: DisplayTableComponent},
  { path:'siteinspectiontable', component:SiteInspectionTableComponent},
  { path: 'incidentsTable', component:IncidentsTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
