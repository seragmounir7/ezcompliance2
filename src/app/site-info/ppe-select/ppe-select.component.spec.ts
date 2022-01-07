import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpeSelectComponent } from './ppe-select.component';

describe('PpeSelectComponent', () => {
  let component: PpeSelectComponent;
  let fixture: ComponentFixture<PpeSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PpeSelectComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpeSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
