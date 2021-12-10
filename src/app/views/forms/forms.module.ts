import { TextareaAutoresizeDirective } from './../../Directives/textarea-autoresize.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


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
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';
import {AutosizeModule} from 'ngx-autosize';
import { MatInputModule } from '@angular/material/input';
import { HazardFormTableDetailsComponent } from './hazard-form-table-details/hazard-form-table-details.component';
import { IncidentsTableComponent } from './incidents-table/incidents-table.component';
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
    SiteInspectionTableComponent,
    HazardFormTableDetailsComponent,
    IncidentsTableComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    SignaturePadModule,
    SharedModule,
    FormsModule,
    CKEditorModule,
    NgxMatTimepickerModule,
    AutosizeModule,
    MatAutocompleteModule ,
    MatInputModule
    
  ],
  providers:[
    TextareaAutoresizeDirective,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:SpinnerInterceptor,
      multi:true
    }
  ]
})
export class FormsModule1 {}
