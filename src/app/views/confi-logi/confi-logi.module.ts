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

import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [ConfiLogiComponent, SetLogicComponent, JobNumberComponent, CreateJobNoComponent, SetRelationComponent],
  imports: [
    CommonModule,
    ConfiLogiRoutingModule,SharedModule,FormsModule,
    ReactiveFormsModule,MatStepperModule
  ]
})
export class ConfiLogiModule { }
