import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertestimonialsComponent } from './customertestimonials.component';

describe('CustomertestimonialsComponent', () => {
  let component: CustomertestimonialsComponent;
  let fixture: ComponentFixture<CustomertestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomertestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomertestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
