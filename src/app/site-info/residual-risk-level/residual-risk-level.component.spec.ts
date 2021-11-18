import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidualRiskLevelComponent } from './residual-risk-level.component';

describe('ResidualRiskLevelComponent', () => {
  let component: ResidualRiskLevelComponent;
  let fixture: ComponentFixture<ResidualRiskLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidualRiskLevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidualRiskLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
