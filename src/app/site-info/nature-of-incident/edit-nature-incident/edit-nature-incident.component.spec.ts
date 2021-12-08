import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNatureIncidentComponent } from './edit-nature-incident.component';

describe('EditNatureIncidentComponent', () => {
  let component: EditNatureIncidentComponent;
  let fixture: ComponentFixture<EditNatureIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditNatureIncidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNatureIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
