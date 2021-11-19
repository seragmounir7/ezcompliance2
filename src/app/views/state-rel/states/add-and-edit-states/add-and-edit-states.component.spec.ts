import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditStatesComponent } from './add-and-edit-states.component';

describe('AddAndEditStatesComponent', () => {
  let component: AddAndEditStatesComponent;
  let fixture: ComponentFixture<AddAndEditStatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndEditStatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndEditStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
