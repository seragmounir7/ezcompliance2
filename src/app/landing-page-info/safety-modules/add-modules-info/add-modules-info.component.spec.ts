import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModulesInfoComponent } from './add-modules-info.component';

describe('AddModulesInfoComponent', () => {
  let component: AddModulesInfoComponent;
  let fixture: ComponentFixture<AddModulesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddModulesInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModulesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
