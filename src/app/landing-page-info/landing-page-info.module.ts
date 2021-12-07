import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {AutosizeModule} from 'ngx-autosize';
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
import { AddTeamInfoComponent } from './about-us/add-team-info/add-team-info.component';
import { EditTeamInfoComponent } from './about-us/edit-team-info/edit-team-info.component';
import { FAQComponent } from './faq/faq.component';
import { AddFaqComponent } from './faq/add-faq/add-faq.component';
import { EditFaqComponent } from './faq/edit-faq/edit-faq.component';
import { QuesAnsComponent } from './faq/ques-ans/ques-ans.component';
import { AddQuestionComponent } from './faq/ques-ans/add-question/add-question.component';
import { EditQuestionComponent } from './faq/ques-ans/edit-question/edit-question.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { AddAndEditSocialMediaComponent } from './social-media/add-and-edit-social-media/add-and-edit-social-media.component';
import { EditWorkComponent } from './our-work/edit-work/edit-work.component';
import { AddEditSubWorkComponent } from './our-work/add-edit-sub-work/add-edit-sub-work.component';
import { AddSubWorkComponent } from './our-work/add-sub-work/add-sub-work.component';
import { ScreenShotModuleComponent } from './screen-shot-module/screen-shot-module.component';
import { DifferentModuleComponent } from './different-module/different-module.component';
import { AddScreenShotComponent } from './screen-shot-module/add-screen-shot/add-screen-shot.component';
import { EditScreenShotComponent } from './screen-shot-module/edit-screen-shot/edit-screen-shot.component';
import { AddDifferentWorkComponent } from './different-module/add-different-work/add-different-work.component';
import { EditDifferentWorkComponent } from './different-module/edit-different-work/edit-different-work.component';
import { TermsAndCondtionsComponent } from './terms-and-condtions/terms-and-condtions.component';
import { AddTermsAndCondtionsComponent } from './terms-and-condtions/add-terms-and-condtions/add-terms-and-condtions.component';
import { EditTermsAndCondtionsComponent } from './terms-and-condtions/edit-terms-and-condtions/edit-terms-and-condtions.component';

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
    FlexibleComponent,ContactUsComponent,ViewContactComponent,AddContactComponent,
    EditTeamInfoComponent,AddTeamInfoComponent, FAQComponent, AddFaqComponent, EditFaqComponent, QuesAnsComponent, AddQuestionComponent, EditQuestionComponent, OurWorkComponent, EditWorkComponent, AddEditSubWorkComponent, AddSubWorkComponent, ScreenShotModuleComponent, DifferentModuleComponent, AddScreenShotComponent, EditScreenShotComponent, AddDifferentWorkComponent, EditDifferentWorkComponent,
    SocialMediaComponent,AddAndEditSocialMediaComponent, TermsAndCondtionsComponent, AddTermsAndCondtionsComponent, EditTermsAndCondtionsComponent


 

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LandingPageInfoRoutingModule,
    SharedModule,
    AutosizeModule
  ],
})
export class LandingPageInfoModule { }
