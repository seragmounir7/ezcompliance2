import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';


@NgModule({
  declarations: [LandingPageComponent, ContactUsComponent, FaqComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    SlickCarouselModule
  ]
})
export class FrontModule { }
