import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobNoComponent } from './create-job-no.component';

describe('CreateJobNoComponent', () => {
  let component: CreateJobNoComponent;
  let fixture: ComponentFixture<CreateJobNoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJobNoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJobNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
