import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenceAndQualComponent } from './licence-and-qual.component';

describe('LicenceAndQualComponent', () => {
  let component: LicenceAndQualComponent;
  let fixture: ComponentFixture<LicenceAndQualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenceAndQualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenceAndQualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
