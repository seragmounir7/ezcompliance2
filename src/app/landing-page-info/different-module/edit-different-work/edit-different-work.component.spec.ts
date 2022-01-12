import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDifferentWorkComponent } from './edit-different-work.component';

describe('EditDifferentWorkComponent', () => {
  let component: EditDifferentWorkComponent;
  let fixture: ComponentFixture<EditDifferentWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDifferentWorkComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDifferentWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
