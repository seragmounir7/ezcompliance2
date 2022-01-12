import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteInspectionCategoryComponent } from './site-inspection-category.component';

describe('SiteInspectionCategoryComponent', () => {
  let component: SiteInspectionCategoryComponent;
  let fixture: ComponentFixture<SiteInspectionCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteInspectionCategoryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteInspectionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
