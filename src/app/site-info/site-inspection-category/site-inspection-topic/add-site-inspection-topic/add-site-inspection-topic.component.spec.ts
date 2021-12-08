import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteInspectionTopicComponent } from './add-site-inspection-topic.component';

describe('AddSiteInspectionTopicComponent', () => {
  let component: AddSiteInspectionTopicComponent;
  let fixture: ComponentFixture<AddSiteInspectionTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSiteInspectionTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSiteInspectionTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
