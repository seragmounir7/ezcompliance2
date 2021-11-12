import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyLegislationComponent } from './safety-legislation.component';

describe('SafetyLegislationComponent', () => {
  let component: SafetyLegislationComponent;
  let fixture: ComponentFixture<SafetyLegislationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetyLegislationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyLegislationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
