import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteInspectionTopicComponent } from './site-inspection-topic.component';

describe('SiteInspectionTopicComponent', () => {
  let component: SiteInspectionTopicComponent;
  let fixture: ComponentFixture<SiteInspectionTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteInspectionTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteInspectionTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
