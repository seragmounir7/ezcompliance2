import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSiteInspectionCategoryComponent } from './edit-site-inspection-category.component';

describe('EditSiteInspectionCategoryComponent', () => {
  let component: EditSiteInspectionCategoryComponent;
  let fixture: ComponentFixture<EditSiteInspectionCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSiteInspectionCategoryComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSiteInspectionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
