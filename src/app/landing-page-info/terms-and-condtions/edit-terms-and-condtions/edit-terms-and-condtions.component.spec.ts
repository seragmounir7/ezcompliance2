import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTermsAndCondtionsComponent } from './edit-terms-and-condtions.component';

describe('EditTermsAndCondtionsComponent', () => {
  let component: EditTermsAndCondtionsComponent;
  let fixture: ComponentFixture<EditTermsAndCondtionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTermsAndCondtionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTermsAndCondtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
