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
import { HeaderComponent } from './header-info/header/header.component';
import { AddServiceInfoComponent } from './application-service-info/add-service-info/add-service-info.component';
import { AddClientInfoComponent } from './happy-client/add-client-info/add-client-info.component';
import { AddModulesInfoComponent } from './safety-modules/add-modules-info/add-modules-info.component';
import { EditFlexibleInfoComponent } from './flexible/edit-flexible-info/edit-flexible-info.component';
import { FlexibleComponent } from './flexible/flexible.component';
import { AddFlexibleInfoComponent } from './flexible/add-flexible-info/add-flexible-info.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CustomertestimonialsComponent } from './customertestimonials/customertestimonials.component';
import { AddCustomerTestimonailComponent } from './customertestimonials/add-customer-testimonail/add-customer-testimonail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ViewContactComponent } from './contact-us/view-contact/view-contact.component';
import { EditCustomerTestimonailComponent } from './customertestimonials/edit-customer-testimonail/edit-customer-testimonail.component';
import { AddContactComponent } from './contact-us/add-contact/add-contact.component';
@NgModule({
  declarations: [
    LandingPageInfoComponent,
    HeaderInfoComponent,
    ApplicationServiceInfoComponent,
    HappyClientComponent,
    AddApplicationServiceInfoComponent,
    AddHappyClientComponent,
    SafetyModulesComponent,
    AddSafetyModuleComponent,
    HeaderComponent,
    AddServiceInfoComponent,
    AddClientInfoComponent,
    AddModulesInfoComponent,
    EditFlexibleInfoComponent,
    AddFlexibleInfoComponent,
    AboutUsComponent,
    AddCustomerTestimonailComponent,
    EditCustomerTestimonailComponent,
    CustomertestimonialsComponent,
    FlexibleComponent,ContactUsComponent,ViewContactComponent,AddContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingPageInfoRoutingModule,
  ],
})
export class LandingPageInfoModule {}
