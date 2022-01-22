import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantRegistionTableComponent } from './plant-registion-table.component';

describe('PlantRegistionTableComponent', () => {
  let component: PlantRegistionTableComponent;
  let fixture: ComponentFixture<PlantRegistionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantRegistionTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantRegistionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
