import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLicenceAndQualificationComponent } from './add-licence-and-qualification.component';

describe('AddLicenceAndQualificationComponent', () => {
  let component: AddLicenceAndQualificationComponent;
  let fixture: ComponentFixture<AddLicenceAndQualificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLicenceAndQualificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLicenceAndQualificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
