import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPPEselectComponent } from './add-ppeselect.component';

describe('AddPPEselectComponent', () => {
  let component: AddPPEselectComponent;
  let fixture: ComponentFixture<AddPPEselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPPEselectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPPEselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
