import { RegulatorComponent } from './regulator/regulator.component';
import { SafetyLegislationComponent } from './safety-legislation/safety-legislation.component';
import { JuridictionComponent } from './juridiction/juridiction.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StateRelComponent } from './state-rel.component';
import { CodeOfPractComponent } from './code-of-pract/code-of-pract.component';
import { StatesComponent } from './states/states.component';
import { SetStateRelationComponent } from './set-state-relation/set-state-relation.component';
import { AddStateRelationComponent } from './set-state-relation/add-state-relation/add-state-relation.component';

const routes: Routes = [
	{ path: '', component: StateRelComponent },
	{ path: 'juridiction', component: JuridictionComponent },
	{ path: 'safetyLegislation', component: SafetyLegislationComponent },
	{ path: 'codeOfPract', component: CodeOfPractComponent },
	{ path: 'regulator', component: RegulatorComponent },
	{ path: 'states', component: StatesComponent },
	{ path: 'setState', component: SetStateRelationComponent },
	{ path: 'addState', component: AddStateRelationComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class StateRelRoutingModule {}
