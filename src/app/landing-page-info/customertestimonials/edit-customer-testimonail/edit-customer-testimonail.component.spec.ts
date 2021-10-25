import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerTestimonailComponent } from './edit-customer-testimonail.component';

describe('EditCustomerTestimonailComponent', () => {
  let component: EditCustomerTestimonailComponent;
  let fixture: ComponentFixture<EditCustomerTestimonailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustomerTestimonailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCustomerTestimonailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
