import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiLogiRoutingModule } from './confi-logi-routing.module';
import { ConfiLogiComponent } from './confi-logi.component';


@NgModule({
  declarations: [ConfiLogiComponent],
  imports: [
    CommonModule,
    ConfiLogiRoutingModule
  ]
})
export class ConfiLogiModule { }
