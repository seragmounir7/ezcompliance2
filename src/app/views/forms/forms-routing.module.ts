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
import { SiteInspectionTableComponent } from './site-inspection-table/site-inspection-table.component';
import { HazardFormTableDetailsComponent } from './hazard-form-table-details/hazard-form-table-details.component';
import { IncidentsTableComponent } from './incidents-table/incidents-table.component';
import { RiskAssesmentTableComponent } from './risk-assesment-table/risk-assesment-table.component';
import { VehicleInspectionComponent } from './vehicle-inspection/vehicle-inspection.component';
import { VehicleInspectionTableComponent } from './vehicle-inspection-table/vehicle-inspection-table.component';
import { MeetingMinutesComponent } from './meeting minutes/meeting-minutes.component';
const routes: Routes = [
	{ path: '', component: FormsComponent },
	{ path: 'forms', component: FormsComponent },
	{ path: 'siteInspect/:id', component: SiteInspectionComponent },
	{ path: 'vehicleInspect/:id', component: VehicleInspectionComponent },
	{ path: 'toolboxTalk/:id', component: ToolboxTalkComponent },
	{ path: 'meetingMinutes/:id', component: MeetingMinutesComponent },
	{ path: 'hazardRep/:id', component: HazardReportComponent },
	{ path: 'incidentRep/:id', component: IncidentReportComponent },
	{ path: 'riskAssessSWMS/:id', component: RiskAssessmentSWMSComponent },
	{ path: 'riskAssessTable', component: RiskAssesmentTableComponent },
	{ path: 'tableData', component: DisplayTableComponent },
	{ path: 'tableData/history/:id', component: DisplayTableComponent },

	{ path: 'tableData/history/:id', component: DisplayTableComponent },
	{
		path: 'riskAssessTable/history/:id',
		component: RiskAssesmentTableComponent
	},
	{
		path: 'siteinspectiontable/history/:id',
		component: SiteInspectionTableComponent
	},
	{
		path: 'vehicleinspectiontable/history/:id',
		component: VehicleInspectionTableComponent
	},
	{
		path: 'hazardTable/history/:id',
		component: HazardFormTableDetailsComponent
	},
	{ path: 'incidentsTable/history/:id', component: IncidentsTableComponent },

	{
		path: 'tableData/history/toolboxTalk/:id',
		component: ToolboxTalkComponent
	},
	{
		path: 'tableData/history/meetingMinutes/:id',
		component: MeetingMinutesComponent
	},
	{
		path: 'riskAssessTable/history/riskAssessSWMS/:id',
		component: RiskAssessmentSWMSComponent
	},
	{
		path: 'siteinspectiontable/history/siteInspect/:id',
		component: SiteInspectionComponent
	},
	{
		path: 'vehicleinspectiontable/history/vehicleInspect/:id',
		component: VehicleInspectionComponent
	},
	{
		path: 'hazardTable/history/hazardRep/:id',
		component: HazardReportComponent
	},
	{
		path: 'incidentsTable/history/incidentRep/:id',
		component: IncidentReportComponent
	},

	{ path: 'siteinspectiontable', component: SiteInspectionTableComponent },
	{
		path: 'vehicleinspectiontable',
		component: VehicleInspectionTableComponent
	},
	{ path: 'hazardTable', component: HazardFormTableDetailsComponent },
	{ path: 'incidentsTable', component: IncidentsTableComponent },
	{ path: 'fillConfigForm/:index', component: FillConfiguredFormComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FormsRoutingModule {}
