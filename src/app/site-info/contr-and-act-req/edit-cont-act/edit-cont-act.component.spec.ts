import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContActComponent } from './edit-cont-act.component';

describe('EditContActComponent', () => {
  let component: EditContActComponent;
  let fixture: ComponentFixture<EditContActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditContActComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
