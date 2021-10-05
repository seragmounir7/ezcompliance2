import { ApplicationServiceInfoComponent } from './application-service-info/application-service-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderInfoComponent } from './header-info/header-info.component';

import { LandingPageInfoComponent } from './landing-page-info.component';

const routes: Routes = [
  { path: '', component: HeaderInfoComponent },
  { path: 'applicationSerInfo', component: ApplicationServiceInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingPageInfoRoutingModule { }
