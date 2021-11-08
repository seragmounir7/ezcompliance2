import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentifyHazardsComponent } from './identify-hazards.component';

describe('IdentifyHazardsComponent', () => {
  let component: IdentifyHazardsComponent;
  let fixture: ComponentFixture<IdentifyHazardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentifyHazardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentifyHazardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
