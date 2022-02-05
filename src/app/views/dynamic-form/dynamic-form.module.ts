import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormComponent } from './dynamic-form.component';
import { SavedDynamicFormDataComponent } from './saved-dynamic-form-data/saved-dynamic-form-data.component';
import { SavedDynamicFormTableComponent } from './saved-dynamic-form-data/saved-dynamic-form-table/saved-dynamic-form-table.component';
import { FormsComponent } from './forms/forms.component';
import { AddFormComponent } from './forms/add-form/add-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignaturePadModule } from 'angular2-signaturepad';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { DndModule } from 'ngx-drag-drop';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	declarations: [
		DynamicFormComponent,
		SavedDynamicFormDataComponent,
		SavedDynamicFormTableComponent,
		FormsComponent,
		AddFormComponent
	],
	imports: [
		CommonModule,
		DynamicFormRoutingModule,
		FormsModule,
		SignaturePadModule,
		ReactiveFormsModule,
		MatPaginatorModule,
		MatIconModule,
		AngularSvgIconModule,
		MatSlideToggleModule,
		MatTableModule,
		DndModule,
		MatButtonModule,
		MatTooltipModule
	],
	exports: [FormsComponent]
})
export class DynamicFormModule {}
