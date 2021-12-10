import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHazardRelationComponent } from './add-hazard-relation.component';

describe('AddHazardRelationComponent', () => {
  let component: AddHazardRelationComponent;
  let fixture: ComponentFixture<AddHazardRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHazardRelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHazardRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
