import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChangesMadeComponent } from './add-changes-made.component';

describe('AddChangesMadeComponent', () => {
  let component: AddChangesMadeComponent;
  let fixture: ComponentFixture<AddChangesMadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddChangesMadeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChangesMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
