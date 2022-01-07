import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRiskLevelComponent } from './edit-risk-level.component';

describe('EditRiskLevelComponent', () => {
  let component: EditRiskLevelComponent;
  let fixture: ComponentFixture<EditRiskLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRiskLevelComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRiskLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
