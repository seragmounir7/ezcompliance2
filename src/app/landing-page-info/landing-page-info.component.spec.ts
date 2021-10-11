import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageInfoComponent } from './landing-page-info.component';

describe('LandingPageInfoComponent', () => {
  let component: LandingPageInfoComponent;
  let fixture: ComponentFixture<LandingPageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingPageInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
