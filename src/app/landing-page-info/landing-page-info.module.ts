import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageInfoRoutingModule } from './landing-page-info-routing.module';
import { LandingPageInfoComponent } from './landing-page-info.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { ApplicationServiceInfoComponent } from './application-service-info/application-service-info.component';

@NgModule({
  declarations: [
    LandingPageInfoComponent,
    HeaderInfoComponent,
    ApplicationServiceInfoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingPageInfoRoutingModule,
  ],
})
export class LandingPageInfoModule {}
