import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriptionComponent } from './subscription.component';
import { RateAndCouponComponent } from './rate-and-coupon/rate-and-coupon.component';
import { EditRateAndCouponComponent } from './rate-and-coupon/edit-rate-and-coupon/edit-rate-and-coupon.component';
import { CouponComponent } from './coupon/coupon.component';
import { AddEditCouponComponent } from './coupon/add-edit-coupon/add-edit-coupon.component';

@NgModule({
	declarations: [
		SubscriptionComponent,
		RateAndCouponComponent,
		EditRateAndCouponComponent,
		CouponComponent,
		AddEditCouponComponent
	],
	imports: [
		CommonModule,
		SubscriptionRoutingModule,
		SharedModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class SubscriptionModule {}
