import { DirectivesModule } from './../../Directives/directives.module';
import { TextareaAutoresizeDirective } from './../../Directives/textarea-autoresize.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
//import { PdfViewerModule } from 'ng2-pdf-viewer';

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
import { SiteInspectionTableComponent } from './site-inspection-table/site-inspection-table.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from 'src/app/interceptor/spinner.interceptor';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { AutosizeModule } from 'ngx-autosize';
import { MatInputModule } from '@angular/material/input';
import { HazardFormTableDetailsComponent } from './hazard-form-table-details/hazard-form-table-details.component';
import { IncidentsTableComponent } from './incidents-table/incidents-table.component';
import { RiskAssesmentTableComponent } from './risk-assesment-table/risk-assesment-table.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FillConfiguredFormComponent } from './fill-configured-form/fill-configured-form.component';
import { DynamicFormModule } from '../dynamic-form/dynamic-form.module';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ScrollModule } from 'src/app/shared/scroll/scroll.module';
import { VehicleInspectionComponent } from './vehicle-inspection/vehicle-inspection.component';
import { VehicleInspectionTableComponent } from './vehicle-inspection-table/vehicle-inspection-table.component';
import { MeetingMinutesComponent } from './meeting minutes/meeting-minutes.component';
@NgModule({
	declarations: [
		FormsComponent,
		SiteInspectionComponent,
		VehicleInspectionComponent,
		ToolboxTalkComponent,
		HazardReportComponent,
		IncidentReportComponent,
		RiskAssessmentSWMSComponent,
		AddItemComponent,
		DisplayTableComponent,
		SiteInspectionTableComponent,
		VehicleInspectionTableComponent,
		HazardFormTableDetailsComponent,
		IncidentsTableComponent,
		RiskAssesmentTableComponent,
		FillConfiguredFormComponent,
		MeetingMinutesComponent
	],
	imports: [
		CommonModule,
		DirectivesModule,
		FormsRoutingModule,
		ReactiveFormsModule,
		SignaturePadModule,
		SharedModule,
		FormsModule,
		CKEditorModule,
		NgxMatTimepickerModule,
		AutosizeModule,
		MatAutocompleteModule,
		MatInputModule,
		MatDatepickerModule,
		DynamicFormModule,
		AngularSvgIconPreloaderModule,
		AngularSvgIconModule,
		MatTooltipModule,
		ScrollModule
	],
	providers: [
		TextareaAutoresizeDirective,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: SpinnerInterceptor,
			multi: true
		}
	]
})
export class FormsModule1 {}
