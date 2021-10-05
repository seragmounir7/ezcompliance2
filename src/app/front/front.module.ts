import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    SlickCarouselModule
  ]
})
export class FrontModule { }
