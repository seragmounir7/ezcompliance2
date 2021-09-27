import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAssessmentSWMSComponent } from './risk-assessment-swms.component';

describe('RiskAssessmentSWMSComponent', () => {
  let component: RiskAssessmentSWMSComponent;
  let fixture: ComponentFixture<RiskAssessmentSWMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskAssessmentSWMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskAssessmentSWMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
