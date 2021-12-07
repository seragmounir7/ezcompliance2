import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTypeOfIncidentComponent } from './edit-type-of-incident.component';

describe('EditTypeOfIncidentComponent', () => {
  let component: EditTypeOfIncidentComponent;
  let fixture: ComponentFixture<EditTypeOfIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTypeOfIncidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTypeOfIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
