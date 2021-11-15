import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRelRoutingModule } from './state-rel-routing.module';
import { StateRelComponent } from './state-rel.component';
import { JuridictionComponent } from './juridiction/juridiction.component';
import { SafetyLegislationComponent } from './safety-legislation/safety-legislation.component';
import { RegulatorComponent } from './regulator/regulator.component';
import { CodeOfPractComponent } from './code-of-pract/code-of-pract.component';
import { AddAndEditRegComponent } from './regulator/add-and-edit-reg/add-and-edit-reg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddAndEditJuriComponent } from './juridiction/add-and-edit-juri/add-and-edit-juri.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddAndEditCodeComponent } from './code-of-pract/add-and-edit-code/add-and-edit-code.component';
import { AddAndEditSafetyComponent } from './safety-legislation/add-and-edit-safety/add-and-edit-safety.component';


@NgModule({
  declarations: [StateRelComponent, JuridictionComponent, SafetyLegislationComponent, RegulatorComponent, CodeOfPractComponent, AddAndEditRegComponent, AddAndEditJuriComponent, AddAndEditCodeComponent, AddAndEditSafetyComponent],
  imports: [
    CommonModule,
    StateRelRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    SharedModule
  ]
})
export class StateRelModule { }
