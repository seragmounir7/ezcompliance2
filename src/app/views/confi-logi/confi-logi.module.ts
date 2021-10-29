import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfiLogiRoutingModule } from './confi-logi-routing.module';
import { ConfiLogiComponent } from './confi-logi.component';
import { SetLogicComponent } from './set-logic/set-logic.component';


@NgModule({
  declarations: [ConfiLogiComponent, SetLogicComponent],
  imports: [
    CommonModule,
    ConfiLogiRoutingModule,SharedModule,FormsModule,
    ReactiveFormsModule
  ]
})
export class ConfiLogiModule { }
