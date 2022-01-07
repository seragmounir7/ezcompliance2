import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WHSManagerComponent } from './whs-manager.component';

describe('WHSManagerComponent', () => {
  let component: WHSManagerComponent;
  let fixture: ComponentFixture<WHSManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WHSManagerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WHSManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
