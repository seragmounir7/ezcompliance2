import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxTalkComponent } from './toolbox-talk.component';

describe('ToolboxTalkComponent', () => {
  let component: ToolboxTalkComponent;
  let fixture: ComponentFixture<ToolboxTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolboxTalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
