import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteInspectionTableComponent } from './site-inspection-table.component';

describe('SiteInspectionTableComponent', () => {
  let component: SiteInspectionTableComponent;
  let fixture: ComponentFixture<SiteInspectionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteInspectionTableComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteInspectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
