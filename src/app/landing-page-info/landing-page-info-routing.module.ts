import { Component, NgModule } from '@angular/core';
import { ApplicationServiceInfoComponent } from './application-service-info/application-service-info.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderInfoComponent } from './header-info/header-info.component';

import { CustomertestimonialsComponent } from './customertestimonials/customertestimonials.component';
import { FlexibleComponent } from './flexible/flexible.component';
import { HappyClientComponent } from './happy-client/happy-client.component';
import { SafetyModulesComponent } from './safety-modules/safety-modules.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FAQComponent } from './faq/faq.component';
import { AddFaqComponent } from './faq/add-faq/add-faq.component';
import { EditFaqComponent } from './faq/edit-faq/edit-faq.component';
import { QuesAnsComponent } from './faq/ques-ans/ques-ans.component';
import { AddQuestionComponent } from './faq/ques-ans/add-question/add-question.component';
import { EditQuestionComponent } from './faq/ques-ans/edit-question/edit-question.component';

const routes: Routes = [
  { path: '', component: HeaderInfoComponent },
  // { path: 'applicationSerInfo', component: ApplicationServiceInfoComponent },
  { path: 'applicationSerInfo', component: ApplicationServiceInfoComponent },
  { path: 'safetyModule', component: SafetyModulesComponent },
  { path: 'happyClient', component: HappyClientComponent },
  { path: 'customer', component: CustomertestimonialsComponent },
  { path: 'flexible', component: FlexibleComponent },
  { path: 'header', component: HeaderInfoComponent },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'addFaq', component: AddFaqComponent },
  { path: 'editFaq', component: EditFaqComponent },
  { path: 'QA', component: QuesAnsComponent },
  { path: 'addQA', component: AddQuestionComponent },
  { path: 'editQA', component: EditQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageInfoRoutingModule { }
