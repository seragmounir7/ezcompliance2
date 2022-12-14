import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfiLogiRoutingModule } from './confi-logi-routing.module';
import { ConfiLogiComponent } from './confi-logi.component';
import { SetLogicComponent } from './set-logic/set-logic.component';
import { JobNumberComponent } from './job-number/job-number.component';
import { CreateJobNoComponent } from './job-number/create-job-no/create-job-no.component';
import { SetRelationComponent } from './set-logic/set-relation/set-relation.component';
import { AutosizeModule } from 'ngx-autosize';
import { MatStepperModule } from '@angular/material/stepper';
import { AddItemComponent } from './set-logic/set-relation/add-item/add-item.component';
import { TestLogicComponent } from './set-logic/test-logic/test-logic.component';
import { AddJobTaskComponent } from './set-logic/add-job-task/add-job-task.component';
import { HazardTreatmentComponent } from './hazard-treatment/hazard-treatment.component';
import { AddHazardRelationComponent } from './hazard-treatment/add-hazard-relation/add-hazard-relation.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

@NgModule({
	declarations: [
		ConfiLogiComponent,
		SetLogicComponent,
		JobNumberComponent,
		CreateJobNoComponent,
		SetRelationComponent,
		AddItemComponent,
		TestLogicComponent,
		AddJobTaskComponent,
		HazardTreatmentComponent,
		AddHazardRelationComponent
	],
	imports: [
		CommonModule,
		ConfiLogiRoutingModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		MatStepperModule,
		MatIconModule,
		MatButtonModule,
		AutosizeModule,
		CKEditorModule
	],
	exports: [
		ConfiLogiComponent,
		SetLogicComponent,
		JobNumberComponent,
		CreateJobNoComponent,
		SetRelationComponent,
		AddItemComponent,
		TestLogicComponent,
		AddJobTaskComponent,
		HazardTreatmentComponent,
		AddHazardRelationComponent,
		CommonModule,
		ConfiLogiRoutingModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule,
		MatStepperModule,
		MatIconModule,
		MatButtonModule,
		AutosizeModule,
		CKEditorModule
	]
})
export class ConfiLogiModule {}
