import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';


@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,IvyCarouselModule
  ]
})
export class FrontModule { }
