import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateRelComponent } from './state-rel.component';

describe('StateRelComponent', () => {
  let component: StateRelComponent;
  let fixture: ComponentFixture<StateRelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StateRelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StateRelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
