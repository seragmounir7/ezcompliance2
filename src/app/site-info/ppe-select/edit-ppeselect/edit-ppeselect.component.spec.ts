import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPPEselectComponent } from './edit-ppeselect.component';

describe('EditPPEselectComponent', () => {
  let component: EditPPEselectComponent;
  let fixture: ComponentFixture<EditPPEselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPPEselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPPEselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
