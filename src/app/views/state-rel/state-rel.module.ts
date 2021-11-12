import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRelRoutingModule } from './state-rel-routing.module';
import { StateRelComponent } from './state-rel.component';
import { JuridictionComponent } from './juridiction/juridiction.component';
import { SafetyLegislationComponent } from './safety-legislation/safety-legislation.component';
import { RegulatorComponent } from './regulator/regulator.component';
import { CodeOfPractComponent } from './code-of-pract/code-of-pract.component';


@NgModule({
  declarations: [StateRelComponent, JuridictionComponent, SafetyLegislationComponent, RegulatorComponent, CodeOfPractComponent],
  imports: [
    CommonModule,
    StateRelRoutingModule
  ]
})
export class StateRelModule { }
