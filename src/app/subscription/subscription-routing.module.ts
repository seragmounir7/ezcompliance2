import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RateAndCouponComponent } from './rate-and-coupon/rate-and-coupon.component';

import { SubscriptionComponent } from './subscription.component';

const routes: Routes = [
  // { path: '', component: SubscriptionComponent },
  { path: '', component: RateAndCouponComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
