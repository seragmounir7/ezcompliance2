import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { RateAndCouponComponent } from './rate-and-coupon/rate-and-coupon.component';


@NgModule({
  declarations: [SubscriptionComponent, RateAndCouponComponent],
  imports: [
    CommonModule,
    SubscriptionRoutingModule
  ]
})
export class SubscriptionModule { }
