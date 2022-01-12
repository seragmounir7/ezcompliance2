import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResidualRiskLevelComponent } from './edit-residual-risk-level.component';

describe('EditResidualRiskLevelComponent', () => {
  let component: EditResidualRiskLevelComponent;
  let fixture: ComponentFixture<EditResidualRiskLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditResidualRiskLevelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResidualRiskLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
