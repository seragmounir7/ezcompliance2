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
import { SocialMediaComponent } from './social-media/social-media.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { EditWorkComponent } from './our-work/edit-work/edit-work.component';
import { AddEditSubWorkComponent } from './our-work/add-edit-sub-work/add-edit-sub-work.component';
import { AddSubWorkComponent } from './our-work/add-sub-work/add-sub-work.component';
import { ScreenShotModuleComponent } from './screen-shot-module/screen-shot-module.component';
import { AddScreenShotComponent } from './screen-shot-module/add-screen-shot/add-screen-shot.component';
import { EditScreenShotComponent } from './screen-shot-module/edit-screen-shot/edit-screen-shot.component';
import { DifferentModuleComponent } from './different-module/different-module.component';
import { AddDifferentWorkComponent } from './different-module/add-different-work/add-different-work.component';
import { EditDifferentWorkComponent } from './different-module/edit-different-work/edit-different-work.component';
import { TermsAndCondtionsComponent } from './terms-and-condtions/terms-and-condtions.component';
import { AddTermsAndCondtionsComponent } from './terms-and-condtions/add-terms-and-condtions/add-terms-and-condtions.component';
import { EditTermsAndCondtionsComponent } from './terms-and-condtions/edit-terms-and-condtions/edit-terms-and-condtions.component';

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
	{ path: 'editQA', component: EditQuestionComponent },
	{ path: 'socialMedia', component: SocialMediaComponent },
	{ path: 'ourWork', component: OurWorkComponent },
	{ path: 'editWork', component: EditWorkComponent },
	{ path: 'editSubWork', component: AddEditSubWorkComponent },
	{ path: 'addSubWork', component: AddSubWorkComponent },
	{ path: 'screenShot', component: ScreenShotModuleComponent },
	{ path: 'add-ScreenShot', component: AddScreenShotComponent },
	{ path: 'edit-ScreenShot', component: EditScreenShotComponent },
	{ path: 'different', component: DifferentModuleComponent },
	{ path: 'add-Different', component: AddDifferentWorkComponent },
	{ path: 'edit-Different', component: EditDifferentWorkComponent },
	{ path: 'term', component: TermsAndCondtionsComponent },
	{ path: 'addTerm', component: AddTermsAndCondtionsComponent },
	{ path: 'editTerm', component: EditTermsAndCondtionsComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LandingPageInfoRoutingModule {}
