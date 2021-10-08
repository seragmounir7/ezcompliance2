import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetyModulesComponent } from './safety-modules.component';

describe('SafetyModulesComponent', () => {
  let component: SafetyModulesComponent;
  let fixture: ComponentFixture<SafetyModulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SafetyModulesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetyModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
