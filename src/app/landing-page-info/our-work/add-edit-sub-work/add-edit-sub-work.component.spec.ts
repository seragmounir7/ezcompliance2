import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditSubWorkComponent } from './add-edit-sub-work.component';

describe('AddEditSubWorkComponent', () => {
  let component: AddEditSubWorkComponent;
  let fixture: ComponentFixture<AddEditSubWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddEditSubWorkComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditSubWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
