import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRootCauseOfIncidentComponent } from './add-root-cause-of-incident.component';

describe('AddRootCauseOfIncidentComponent', () => {
  let component: AddRootCauseOfIncidentComponent;
  let fixture: ComponentFixture<AddRootCauseOfIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRootCauseOfIncidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRootCauseOfIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
