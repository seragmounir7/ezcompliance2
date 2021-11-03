import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicenceCatComponent } from './licence-cat.component';

describe('LicenceCatComponent', () => {
  let component: LicenceCatComponent;
  let fixture: ComponentFixture<LicenceCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicenceCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicenceCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
