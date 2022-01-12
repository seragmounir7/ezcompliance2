import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRateAndCouponComponent } from './edit-rate-and-coupon.component';

describe('EditRateAndCouponComponent', () => {
  let component: EditRateAndCouponComponent;
  let fixture: ComponentFixture<EditRateAndCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRateAndCouponComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRateAndCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
