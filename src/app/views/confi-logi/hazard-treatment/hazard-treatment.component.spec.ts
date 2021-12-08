import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardTreatmentComponent } from './hazard-treatment.component';

describe('HazardTreatmentComponent', () => {
  let component: HazardTreatmentComponent;
  let fixture: ComponentFixture<HazardTreatmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HazardTreatmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HazardTreatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
