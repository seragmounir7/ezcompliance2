import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamInfoComponent } from './add-team-info.component';

describe('AddTeamInfoComponent', () => {
  let component: AddTeamInfoComponent;
  let fixture: ComponentFixture<AddTeamInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddTeamInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
