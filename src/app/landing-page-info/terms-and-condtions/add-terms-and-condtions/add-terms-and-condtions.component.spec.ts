import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTermsAndCondtionsComponent } from './add-terms-and-condtions.component';

describe('AddTermsAndCondtionsComponent', () => {
  let component: AddTermsAndCondtionsComponent;
  let fixture: ComponentFixture<AddTermsAndCondtionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTermsAndCondtionsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTermsAndCondtionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
