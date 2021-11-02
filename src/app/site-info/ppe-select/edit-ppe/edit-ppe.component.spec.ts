import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPPEComponent } from './edit-ppe.component';

describe('EditPPEComponent', () => {
  let component: EditPPEComponent;
  let fixture: ComponentFixture<EditPPEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPPEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPPEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
