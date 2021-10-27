import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceInfoComponent } from './add-service-info.component';

describe('AddServiceInfoComponent', () => {
  let component: AddServiceInfoComponent;
  let fixture: ComponentFixture<AddServiceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddServiceInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
