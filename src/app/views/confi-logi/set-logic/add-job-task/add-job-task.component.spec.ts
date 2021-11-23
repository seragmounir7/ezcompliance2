import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobTaskComponent } from './add-job-task.component';

describe('AddJobTaskComponent', () => {
  let component: AddJobTaskComponent;
  let fixture: ComponentFixture<AddJobTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJobTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
