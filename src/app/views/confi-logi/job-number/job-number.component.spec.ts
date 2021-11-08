import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobNumberComponent } from './job-number.component';

describe('JobNumberComponent', () => {
  let component: JobNumberComponent;
  let fixture: ComponentFixture<JobNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
