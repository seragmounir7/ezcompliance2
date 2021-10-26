import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateAndCouponComponent } from './rate-and-coupon.component';

describe('RateAndCouponComponent', () => {
  let component: RateAndCouponComponent;
  let fixture: ComponentFixture<RateAndCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateAndCouponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateAndCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
