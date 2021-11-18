import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CouponComponent } from './coupon/coupon.component';
import { EditRateAndCouponComponent } from './rate-and-coupon/edit-rate-and-coupon/edit-rate-and-coupon.component';
import { RateAndCouponComponent } from './rate-and-coupon/rate-and-coupon.component';

import { SubscriptionComponent } from './subscription.component';

const routes: Routes = [
  // { path: '', component: SubscriptionComponent },
  { path: '', component: RateAndCouponComponent },
  { path: 'editRate', component: EditRateAndCouponComponent },
  { path: 'coupon', component: CouponComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionRoutingModule { }
