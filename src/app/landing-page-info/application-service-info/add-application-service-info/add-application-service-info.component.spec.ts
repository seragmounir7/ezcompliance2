import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicationServiceInfoComponent } from './add-application-service-info.component';

describe('AddApplicationServiceInfoComponent', () => {
  let component: AddApplicationServiceInfoComponent;
  let fixture: ComponentFixture<AddApplicationServiceInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApplicationServiceInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddApplicationServiceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
