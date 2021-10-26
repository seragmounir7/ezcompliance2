import { AddSiteInfoComponent } from './add-site-info/add-site-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiteInfoComponent } from './site-info.component';

const routes: Routes = [
  { path: '', component: AddSiteInfoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteInfoRoutingModule { }
