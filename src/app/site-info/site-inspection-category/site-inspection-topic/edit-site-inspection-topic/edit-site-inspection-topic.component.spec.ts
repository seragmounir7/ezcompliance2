import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSiteInspectionTopicComponent } from './edit-site-inspection-topic.component';

describe('EditSiteInspectionTopicComponent', () => {
  let component: EditSiteInspectionTopicComponent;
  let fixture: ComponentFixture<EditSiteInspectionTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditSiteInspectionTopicComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSiteInspectionTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
