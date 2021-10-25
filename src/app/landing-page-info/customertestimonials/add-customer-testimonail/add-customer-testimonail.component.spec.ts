import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerTestimonailComponent } from './add-customer-testimonail.component';

describe('AddCustomerTestimonailComponent', () => {
  let component: AddCustomerTestimonailComponent;
  let fixture: ComponentFixture<AddCustomerTestimonailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCustomerTestimonailComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCustomerTestimonailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
