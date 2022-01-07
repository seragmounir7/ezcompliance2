import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillConfiguredFormComponent } from './fill-configured-form.component';

describe('FillConfiguredFormComponent', () => {
  let component: FillConfiguredFormComponent;
  let fixture: ComponentFixture<FillConfiguredFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FillConfiguredFormComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FillConfiguredFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
