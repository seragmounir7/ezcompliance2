import { SetRelationComponent } from './set-logic/set-relation/set-relation.component';
import { JobNumberComponent } from './job-number/job-number.component';
import { SetLogicComponent } from './set-logic/set-logic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfiLogiComponent } from './confi-logi.component';
import { TestLogicComponent } from './set-logic/test-logic/test-logic.component';
import { AddJobTaskComponent } from './set-logic/add-job-task/add-job-task.component';
import { HazardReportComponent } from '../forms/hazard-report/hazard-report.component';
import { HazardTreatmentComponent } from './hazard-treatment/hazard-treatment.component';
import { AddHazardRelationComponent } from './hazard-treatment/add-hazard-relation/add-hazard-relation.component';

const routes: Routes = [
  { path: '', component: ConfiLogiComponent },
  { path: 'setLogic', component: SetLogicComponent },
  { path: 'setJobNumber', component: JobNumberComponent },
  // { path: 'setRelation', component: TestLogicComponent },
  { path: 'setRelation', component: SetRelationComponent },
  { path: 'addTask', component: AddJobTaskComponent },
  { path: 'setHazard', component: HazardTreatmentComponent },
  { path: 'setHazardRelation', component: AddHazardRelationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiLogiRoutingModule { }
