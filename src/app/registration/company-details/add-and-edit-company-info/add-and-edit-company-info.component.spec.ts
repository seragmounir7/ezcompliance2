import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditCompanyInfoComponent } from './add-and-edit-company-info.component';

describe('AddAndEditCompanyInfoComponent', () => {
  let component: AddAndEditCompanyInfoComponent;
  let fixture: ComponentFixture<AddAndEditCompanyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAndEditCompanyInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndEditCompanyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
