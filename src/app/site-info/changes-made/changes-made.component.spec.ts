import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesMadeComponent } from './changes-made.component';

describe('ChangesMadeComponent', () => {
  let component: ChangesMadeComponent;
  let fixture: ComponentFixture<ChangesMadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangesMadeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
