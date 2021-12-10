import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWhsManagerComponent } from './add-whs-manager.component';

describe('AddWhsManagerComponent', () => {
  let component: AddWhsManagerComponent;
  let fixture: ComponentFixture<AddWhsManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWhsManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWhsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
