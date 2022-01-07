import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScreenShotComponent } from './add-screen-shot.component';

describe('AddScreenShotComponent', () => {
  let component: AddScreenShotComponent;
  let fixture: ComponentFixture<AddScreenShotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddScreenShotComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScreenShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
