import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormCategoriesComponent } from './dynamic-form-categories.component';

describe('DynamicFormCategoriesComponent', () => {
  let component: DynamicFormCategoriesComponent;
  let fixture: ComponentFixture<DynamicFormCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
