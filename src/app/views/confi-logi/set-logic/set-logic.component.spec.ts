import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLogicComponent } from './set-logic.component';

describe('SetLogicComponent', () => {
  let component: SetLogicComponent;
  let fixture: ComponentFixture<SetLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetLogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
