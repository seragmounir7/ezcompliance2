import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditJuriComponent } from './add-and-edit-juri.component';

describe('AddAndEditJuriComponent', () => {
  let component: AddAndEditJuriComponent;
  let fixture: ComponentFixture<AddAndEditJuriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAndEditJuriComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndEditJuriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
