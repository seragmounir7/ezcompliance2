import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LandingPageInfoRoutingModule } from './landing-page-info-routing.module';
import { LandingPageInfoComponent } from './landing-page-info.component';
import { HeaderInfoComponent } from './header-info/header-info.component';
import { ApplicationServiceInfoComponent } from './application-service-info/application-service-info.component';
import { AddApplicationServiceInfoComponent } from './application-service-info/add-application-service-info/add-application-service-info.component';
import { AddHappyClientComponent } from './happy-client/add-happy-client/add-happy-client.component';
import { HappyClientComponent } from './happy-client/happy-client.component';
import { SafetyModulesComponent } from './safety-modules/safety-modules.component';
import { AddSafetyModuleComponent } from './safety-modules/add-safety-module/add-safety-module.component';
@NgModule({
  declarations: [
    LandingPageInfoComponent,
    HeaderInfoComponent,
    ApplicationServiceInfoComponent,
    HappyClientComponent,
    AddApplicationServiceInfoComponent,
    AddHappyClientComponent,SafetyModulesComponent,AddSafetyModuleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingPageInfoRoutingModule,
  ],
})
export class LandingPageInfoModule {}
