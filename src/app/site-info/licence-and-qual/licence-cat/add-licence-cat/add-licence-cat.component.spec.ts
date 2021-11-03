import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLicenceCatComponent } from './add-licence-cat.component';

describe('AddLicenceCatComponent', () => {
  let component: AddLicenceCatComponent;
  let fixture: ComponentFixture<AddLicenceCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLicenceCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLicenceCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
