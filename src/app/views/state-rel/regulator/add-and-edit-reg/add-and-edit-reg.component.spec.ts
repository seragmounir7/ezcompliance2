import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditRegComponent } from './add-and-edit-reg.component';

describe('AddAndEditRegComponent', () => {
  let component: AddAndEditRegComponent;
  let fixture: ComponentFixture<AddAndEditRegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndEditRegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndEditRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
