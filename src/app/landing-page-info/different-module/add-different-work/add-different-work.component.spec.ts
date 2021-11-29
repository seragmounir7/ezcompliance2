import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDifferentWorkComponent } from './add-different-work.component';

describe('AddDifferentWorkComponent', () => {
  let component: AddDifferentWorkComponent;
  let fixture: ComponentFixture<AddDifferentWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDifferentWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDifferentWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
