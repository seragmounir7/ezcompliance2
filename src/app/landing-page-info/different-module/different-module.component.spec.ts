import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentModuleComponent } from './different-module.component';

describe('DifferentModuleComponent', () => {
  let component: DifferentModuleComponent;
  let fixture: ComponentFixture<DifferentModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DifferentModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
