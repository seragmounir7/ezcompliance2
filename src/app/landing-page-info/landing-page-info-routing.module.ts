import { NgModule } from '@angular/core';
import { ApplicationServiceInfoComponent } from './application-service-info/application-service-info.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderInfoComponent } from './header-info/header-info.component';

import { CustomertestimonialsComponent } from './customertestimonials/customertestimonials.component';
import { FlexibleComponent } from './flexible/flexible.component';
import { HappyClientComponent } from './happy-client/happy-client.component';
import { SafetyModulesComponent } from './safety-modules/safety-modules.component';
<<<<<<< HEAD
import { ContactUsComponent } from './contact-us/contact-us.component';
=======
import { AboutUsComponent } from './about-us/about-us.component';
>>>>>>> 2d591db9b8ecdcef194eba0ab2f8592a15eeb034

const routes: Routes = [
  { path: '', component: HeaderInfoComponent },
  // { path: 'applicationSerInfo', component: ApplicationServiceInfoComponent },
  { path: 'applicationSerInfo', component: ApplicationServiceInfoComponent },
  { path: 'safetyModule', component: SafetyModulesComponent },
  { path: 'happyClient', component: HappyClientComponent },
  { path: 'customer', component: CustomertestimonialsComponent },
  { path: 'flexible', component: FlexibleComponent },
  { path: 'header', component: HeaderInfoComponent },
<<<<<<< HEAD
  { path: 'contact-us', component: ContactUsComponent },
=======
  { path: 'aboutUs', component: AboutUsComponent },
>>>>>>> 2d591db9b8ecdcef194eba0ab2f8592a15eeb034
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageInfoRoutingModule {}
