import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteInfoRoutingModule } from './site-info-routing.module';
import { SiteInfoComponent } from './site-info.component';
import { AddSiteInfoComponent } from './add-site-info/add-site-info.component';


@NgModule({
  declarations: [SiteInfoComponent, AddSiteInfoComponent],
  imports: [
    CommonModule,
    SiteInfoRoutingModule
  ]
})
export class SiteInfoModule { }
