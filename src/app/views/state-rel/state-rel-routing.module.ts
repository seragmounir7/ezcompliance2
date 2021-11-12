import { RegulatorComponent } from './regulator/regulator.component';
import { SafetyLegislationComponent } from './safety-legislation/safety-legislation.component';
import { JuridictionComponent } from './juridiction/juridiction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateRelComponent } from './state-rel.component';
import { CodeOfPractComponent } from './code-of-pract/code-of-pract.component';

const routes: Routes = [
  { path: '', component: StateRelComponent },
  { path: 'juridiction', component: JuridictionComponent },
  { path: 'safetyLegislation', component: SafetyLegislationComponent },
  { path: 'codeOfPract', component: CodeOfPractComponent },
  { path: 'regulator', component: RegulatorComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRelRoutingModule { }
