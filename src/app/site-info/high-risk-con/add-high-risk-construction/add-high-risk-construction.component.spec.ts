import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHighRiskConstructionComponent } from './add-high-risk-construction.component';

describe('AddHighRiskConstructionComponent', () => {
  let component: AddHighRiskConstructionComponent;
  let fixture: ComponentFixture<AddHighRiskConstructionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddHighRiskConstructionComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHighRiskConstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
