import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditCodeComponent } from './add-and-edit-code.component';

describe('AddAndEditCodeComponent', () => {
  let component: AddAndEditCodeComponent;
  let fixture: ComponentFixture<AddAndEditCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAndEditCodeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndEditCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
