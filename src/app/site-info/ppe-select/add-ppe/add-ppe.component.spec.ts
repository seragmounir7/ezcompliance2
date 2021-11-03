import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPPEComponent } from './add-ppe.component';

describe('AddPPEComponent', () => {
  let component: AddPPEComponent;
  let fixture: ComponentFixture<AddPPEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPPEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPPEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
