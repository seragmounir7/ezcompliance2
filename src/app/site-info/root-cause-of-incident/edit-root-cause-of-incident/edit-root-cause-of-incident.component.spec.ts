import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRootCauseOfIncidentComponent } from './edit-root-cause-of-incident.component';

describe('EditRootCauseOfIncidentComponent', () => {
  let component: EditRootCauseOfIncidentComponent;
  let fixture: ComponentFixture<EditRootCauseOfIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditRootCauseOfIncidentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRootCauseOfIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
