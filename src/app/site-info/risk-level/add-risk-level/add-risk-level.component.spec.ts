import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiskLevelComponent } from './add-risk-level.component';

describe('AddRiskLevelComponent', () => {
  let component: AddRiskLevelComponent;
  let fixture: ComponentFixture<AddRiskLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRiskLevelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRiskLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
